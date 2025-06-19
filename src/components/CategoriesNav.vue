<script setup lang="ts">
import {
  BookOpen,
  Camera,
  Car,
  Dumbbell,
  Gamepad2,
  Home,
  Smartphone,
  Sparkles,
} from 'lucide-vue-next'

defineProps({
  selectedCategoryId: {
    type: Number,
    default: 1,
  },
})

defineEmits(['categoryChange'])

// const showMobileMenu = ref(false)

const primaryCategories = ref([
  { id: 1, name: '电子产品', icon: Smartphone },
  { id: 2, name: '数码影像', icon: Camera },
  { id: 3, name: '游戏娱乐', icon: Gamepad2 },
  { id: 4, name: '家居生活', icon: Home },
  { id: 5, name: '运动健身', icon: Dumbbell },
  { id: 6, name: '美妆护肤', icon: Sparkles },
  { id: 7, name: '汽车用品', icon: Car },
  { id: 8, name: '图书文具', icon: BookOpen },
])

// function toggleMobileMenu() {
//   showMobileMenu.value = !showMobileMenu.value
// }
</script>

<template>
  <div class="sticky top-16 z-40 w-full border-b bg-white/95 backdrop-blur">
    <div class="mx-auto flex items-center justify-center px-4">
      <!-- Primary Category Navigation -->
      <nav class="flex items-center overflow-x-auto border-t py-4">
        <div class="flex space-x-8">
          <button
            v-for="category in primaryCategories"
            :key="category.id"
            class="flex items-center whitespace-nowrap rounded-lg px-3 py-2 font-medium transition-colors" :class="[
              selectedCategoryId === category.id
                ? 'text-blue-600 bg-blue-50'
                : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50',
            ]"
            @click="$emit('categoryChange', category)"
          >
            <component :is="category.icon" class="mr-2 h-4 w-4" />
            {{ category.name }}
          </button>
        </div>
      </nav>

      <!-- Mobile Menu -->
      <!-- <div v-if="showMobileMenu" class="border-t py-4 md:hidden">
        <div class="space-y-4">
          <div class="px-4">
            <input
              v-model="searchQuery"
              type="search"
              placeholder="搜索产品..."
              class="w-full border border-gray-300 rounded-lg px-4 py-2 focus:border-blue-500 focus:outline-none"
            >
          </div>
          <div class="space-y-2">
            <button
              v-for="category in primaryCategories"
              :key="category.id"
              class="w-full flex items-center px-4 py-2 text-left transition-colors" :class="[
                selectedCategoryId === category.id
                  ? 'text-blue-600 bg-blue-50'
                  : 'text-gray-700 hover:bg-gray-100',
              ]"
              @click="$emit('categoryChange', category)"
            >
              <component :is="category.icon" class="mr-2 h-4 w-4" />
              {{ category.name }}
            </button>
          </div>
        </div>
      </div> -->
    </div>
  </div>
</template>

<style scoped>

</style>
