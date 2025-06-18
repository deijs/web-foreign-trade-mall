<script setup>
import { ArrowRight, ChevronDown, ChevronUp } from 'lucide-vue-next'
import { computed, ref } from 'vue'
import { useRouter } from 'vue-router'

const props = defineProps({
  categories: {
    type: Array,
    required: true,
    default: () => [], // 添加默认空数组
    validator: (value) => {
      // 验证必须是数组且每个元素都有必要字段
      return Array.isArray(value) && value.every(item =>
        item?.id
        && item?.name
        && Array.isArray(item.subcategories),
      )
    },
  },
  initialDisplayCount: {
    type: Number,
    default: 6,
    validator: value => Number.isInteger(value) && value > 0,
  },
})

const router = useRouter()
const showAll = ref(false)
const expandedCards = ref(new Set())

// 显示的分类
const displayedCategories = computed(() => {
  const safeCategories = Array.isArray(props.categories) ? props.categories : []
  const count = Math.max(0, Number(props.initialDisplayCount)) || 6
  return showAll.value ? safeCategories : safeCategories.slice(0, count)
})

// 显示的子分类
function getVisibleSubcategories(category) {
  if (!category || typeof category !== 'object')
    return []
  const subcategories = Array.isArray(category.subcategories) ? category.subcategories : []
  const isExpanded = expandedCards.value.has(category.id)
  return isExpanded ? subcategories : subcategories.slice(0, 2)
}

// 产品数量
function getProductCount(category) {
  if (!category || !Array.isArray(category.subcategories))
    return 0
  return category.subcategories.reduce((sum, sub) => sum + (sub.count || 0), 0)
}

// 展开/收起
function toggleShowAll() {
  showAll.value = !showAll.value
}

function toggleCardExpansion(categoryId) {
  const newExpanded = new Set(expandedCards.value)
  newExpanded.has(categoryId) ? newExpanded.delete(categoryId) : newExpanded.add(categoryId)
  expandedCards.value = newExpanded
}

// 跳转至产品列表
function navigateToProductList(categoryId, subcategory) {
  if (!categoryId || !subcategory?.name)
    return
  router.push({
    path: '/category',
    query: {
      categoryId,
      subcategoryName: subcategory.name,
    },
  })
}
</script>

<template>
  <div class="space-y-8">
    <div class="grid gap-6 lg:grid-cols-3 md:grid-cols-2 xl:grid-cols-4">
      <div
        v-for="category in displayedCategories"
        :key="category.id"
        class="group flex flex-col overflow-hidden border-0 rounded-lg bg-white shadow-lg transition-all duration-300 hover:shadow-xl"
      >
        <!-- Header -->
        <div class="flex-shrink-0 p-4">
          <div class="mb-3 flex items-center justify-between">
            <div v-if="category.icon" class="rounded-lg bg-blue-100 p-2 transition-colors group-hover:bg-blue-200">
              <component :is="category.icon" class="h-5 w-5 text-blue-600" />
            </div>
            <span class="rounded-full bg-gray-100 px-2 py-1 text-xs text-gray-600">
              {{ getProductCount(category) }} 产品
            </span>
          </div>
          <img
            v-if="category.image"
            :src="category.image"
            :alt="category.name || '分类图片'"
            class="mb-3 h-32 w-full rounded-lg object-cover"
          >
          <h3 v-if="category.name" class="text-lg font-semibold transition-colors group-hover:text-blue-600">
            {{ category.name }}
          </h3>
          <p v-if="category.description" class="line-clamp-2 text-sm text-gray-600">
            {{ category.description }}
          </p>
        </div>

        <!-- Content -->
        <div class="flex flex-grow flex-col p-4 pt-0">
          <div class="mb-4 flex-grow space-y-2">
            <div class="flex items-center justify-between">
              <h4 class="text-xs text-gray-700 font-semibold">
                子分类：
              </h4>
              <button
                v-if="category.subcategories && category.subcategories.length > 2"
                class="flex items-center text-xs text-blue-600 hover:text-blue-800"
                @click="toggleCardExpansion(category.id)"
              >
                {{ expandedCards.has(category.id) ? '收起' : '更多' }}
                <ChevronUp v-if="expandedCards.has(category.id)" class="ml-1 h-3 w-3" />
                <ChevronDown v-else class="ml-1 h-3 w-3" />
              </button>
            </div>

            <a
              v-for="(sub, index) in getVisibleSubcategories(category)"
              :key="index"
              class="group/sub flex cursor-pointer items-center justify-between rounded-md bg-gray-50 p-2 transition-colors hover:bg-gray-100"
              @click="navigateToProductList(category.id, sub)"
            >
              <div class="flex items-center space-x-2">
                <component :is="sub.icon" v-if="sub.icon" class="h-3 w-3 text-gray-500" />
                <span class="text-xs text-gray-700 font-medium group-hover/sub:text-blue-600">
                  {{ sub.name || '未命名子分类' }}
                </span>
              </div>
              <div class="flex items-center space-x-1">
                <span class="rounded bg-gray-200 px-1 py-0 text-xs text-gray-600">
                  {{ sub.count || 0 }}
                </span>
                <ArrowRight class="h-2 w-2 text-gray-400 group-hover/sub:text-blue-600" />
              </div>
            </a>
          </div>

          <a
            v-if="category.id"
            :href="`/category/${category.id}`"
            class="mt-auto w-full flex items-center justify-center border border-gray-300 rounded-lg px-4 py-2 text-center text-sm font-medium transition-colors hover:border-blue-200 hover:bg-blue-50"
          >
            查看全部
            <ArrowRight class="ml-2 h-3 w-3" />
          </a>
        </div>
      </div>
    </div>

    <div v-if="Array.isArray(categories) && categories.length > (initialDisplayCount || 6)" class="text-center">
      <button
        class="mx-auto flex items-center border border-gray-300 rounded-lg px-8 py-3 text-gray-700 font-medium transition-colors hover:bg-gray-50"
        @click="toggleShowAll"
      >
        {{ showAll ? '收起分类' : `查看更多分类 (${categories.length - (initialDisplayCount || 6)}+)` }}
        <ChevronUp v-if="showAll" class="ml-2 h-4 w-4" />
        <ChevronDown v-else class="ml-2 h-4 w-4" />
      </button>
    </div>
  </div>
</template>

<style scoped>
.line-clamp-2 {
  display: -webkit-box;
  line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>
