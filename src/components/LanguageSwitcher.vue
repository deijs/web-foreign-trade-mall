<script setup>
import { computed, onMounted, onUnmounted, ref } from 'vue'

const props = defineProps({
  // 支持的语言ID列表（可选，不传则显示所有语言）
  supportedLanguages: {
    type: Array,
    default: () => ['english', 'chinese_simplified', 'chinese_traditional', 'japanese', 'korean'],
  },
  // 默认选中语言
  defaultLanguage: {
    type: String,
    default: 'english',
  },
})

// 完整的语言数据
const allLanguages = [
  { id: 'english', name: 'English', serviceId: 'en' },
  { id: 'chinese_simplified', name: '简体中文', serviceId: 'zh-CN' },
  { id: 'chinese_traditional', name: '繁體中文', serviceId: 'zh-TW' },
  { id: 'japanese', name: '日本語', serviceId: 'ja' },
  { id: 'korean', name: '한국어', serviceId: 'ko' },
  { id: 'french', name: 'Français', serviceId: 'fr' },
  { id: 'german', name: 'Deutsch', serviceId: 'de' },
  { id: 'spanish', name: 'Español', serviceId: 'es' },
  { id: 'russian', name: 'Русский язык', serviceId: 'ru' },
  { id: 'arabic', name: 'بالعربية', serviceId: 'ar' },
  // 其他语言...
  { id: 'corsican', name: 'Corsican', serviceId: 'co' },
  { id: 'guarani', name: 'Guarani', serviceId: 'gn' },
  { id: 'kinyarwanda', name: 'Kinyarwanda', serviceId: 'rw' },
  { id: 'hausa', name: 'Hausa', serviceId: 'ha' },
  // 可以继续添加更多语言
]

const isMenuOpen = ref(false)
const currentLanguage = ref(props.defaultLanguage)
const container = ref(null)
let closeTimer = null

// 计算属性：过滤出支持的语言
const filteredLanguages = computed(() => {
  if (!props.supportedLanguages || props.supportedLanguages.length === 0) {
    return allLanguages
  }
  return allLanguages.filter(lang => props.supportedLanguages.includes(lang.id))
})

// 当前显示的语言名称
const currentLanguageName = computed(() => {
  const lang = allLanguages.find(l => l.id === currentLanguage.value)
  return lang ? lang.name : 'English'
})

function changeLanguage(langId) {
  currentLanguage.value = langId
  localStorage.setItem('preferredLanguage', langId)

  // 触发语言变更事件
  window.translate.changeLanguage(langId)

  closeMenu()
}

function toggleMenu() {
  isMenuOpen.value ? closeMenu() : openMenu()
}

function openMenu() {
  clearTimeout(closeTimer)
  isMenuOpen.value = true
  document.addEventListener('click', handleClickOutside)
}

function closeMenu() {
  clearTimeout(closeTimer)
  isMenuOpen.value = false
  document.removeEventListener('click', handleClickOutside)
}

function keepMenuOpen() {
  clearTimeout(closeTimer)
}

function scheduleMenuClose() {
  closeTimer = setTimeout(() => {
    closeMenu()
  }, 200)
}

function handleClickOutside(event) {
  if (container.value && !container.value.contains(event.target)) {
    closeMenu()
  }
}

// 初始化时从localStorage读取语言偏好
onMounted(() => {
  const savedLang = localStorage.getItem('preferredLanguage')
  if (savedLang && allLanguages.some(lang => lang.id === savedLang)) {
    currentLanguage.value = savedLang
  }
})

onUnmounted(() => {
  clearTimeout(closeTimer)
  document.removeEventListener('click', handleClickOutside)
})
</script>

<template>
  <div id="translate" ref="container" class="relative">
    <!-- 当前语言显示 -->
    <button
      class="flex items-center border border-gray-200 rounded-md bg-white px-3 py-2 text-sm text-gray-700 font-medium transition-colors dark:border-gray-700 dark:bg-gray-800 hover:bg-gray-50 dark:text-gray-200 dark:hover:bg-gray-700"
      aria-haspopup="true"
      :aria-expanded="isMenuOpen"
      @click="toggleMenu"
      @keydown.space.prevent="toggleMenu"
      @keydown.enter.prevent="toggleMenu"
    >
      <svg xmlns="http://www.w3.org/2000/svg" class="mr-2 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
      </svg>
      <span>{{ currentLanguageName }}</span>
      <svg xmlns="http://www.w3.org/2000/svg" class="ml-1 h-5 w-5 transition-transform duration-200" :class="{ 'rotate-180': isMenuOpen }" viewBox="0 0 20 20" fill="currentColor">
        <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
      </svg>
    </button>

    <!-- 语言下拉菜单 -->
    <transition
      enter-active-class="transition ease-out duration-100"
      enter-from-class="transform opacity-0 scale-95"
      enter-to-class="transform opacity-100 scale-100"
      leave-active-class="transition ease-in duration-75"
      leave-from-class="transform opacity-100 scale-100"
      leave-to-class="transform opacity-0 scale-95"
    >
      <div
        v-show="isMenuOpen"
        class="absolute right-0 z-50 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 dark:bg-gray-800 focus:outline-none"
        role="menu"
        @mouseenter="keepMenuOpen"
        @mouseleave="scheduleMenuClose"
      >
        <div class="max-h-60 overflow-y-auto py-1" role="none">
          <a
            v-for="lang in filteredLanguages"
            :key="lang.id"
            href="#"
            class="block px-4 py-2 text-sm text-gray-700 transition-colors hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-700"
            :class="{ 'bg-gray-100 dark:bg-gray-700': currentLanguage === lang.id }"
            role="menuitem"
            @mousedown.prevent
            @click.prevent="changeLanguage(lang.id)"
          >
            {{ lang.name }}
          </a>
        </div>
      </div>
    </transition>
  </div>
</template>
