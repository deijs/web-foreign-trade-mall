<script setup>
import { ArrowRight, ChevronDown, ChevronUp } from 'lucide-vue-next'
import { computed, ref } from 'vue'
import { useRouter } from 'vue-router'

const props = defineProps({
  categories: {
    type: Array,
    required: true,
  },
  initialDisplayCount: {
    type: Number,
    default: 6,
  },
})

const router = useRouter()

const showAll = ref(false)
const expandedCards = ref(new Set())

const displayedCategories = computed(() => {
  return showAll.value ? props.categories : props.categories.slice(0, props.initialDisplayCount)
})

function toggleShowAll() {
  showAll.value = !showAll.value
}

function toggleCardExpansion(categoryId) {
  const newExpanded = new Set(expandedCards.value)
  if (newExpanded.has(categoryId)) {
    newExpanded.delete(categoryId)
  }
  else {
    newExpanded.add(categoryId)
  }
  expandedCards.value = newExpanded
}

function getVisibleSubcategories(category) {
  const isExpanded = expandedCards.value.has(category.id)
  return isExpanded ? category.subcategories : category.subcategories.slice(0, 2)
}

function navigateToProductList(categoryId, _subcategoryName) {
  // router.push(`/category/${categoryId}/${subcategoryName}`)
  router.push(`/category/${categoryId}`)
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
            <div class="rounded-lg bg-blue-100 p-2 transition-colors group-hover:bg-blue-200">
              <component :is="category.icon" class="h-5 w-5 text-blue-600" />
            </div>
            <span class="rounded-full bg-gray-100 px-2 py-1 text-xs text-gray-600">
              {{ category.subcategories.reduce((sum, sub) => sum + sub.count, 0) }} 产品
            </span>
          </div>
          <img
            :src="category.image"
            :alt="category.name"
            class="mb-3 h-32 w-full rounded-lg object-cover"
          >
          <h3 class="text-lg font-semibold transition-colors group-hover:text-blue-600">
            {{ category.name }}
          </h3>
          <p class="line-clamp-2 text-sm text-gray-600">
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
                v-if="category.subcategories.length > 2"
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
              @click="navigateToProductList(category.id, sub.name)"
            >
              <div class="flex items-center space-x-2">
                <component :is="sub.icon" class="h-3 w-3 text-gray-500" />
                <span class="text-xs text-gray-700 font-medium group-hover/sub:text-blue-600">
                  {{ sub.name }}
                </span>
              </div>
              <div class="flex items-center space-x-1">
                <span class="rounded bg-gray-200 px-1 py-0 text-xs text-gray-600">
                  {{ sub.count }}
                </span>
                <ArrowRight class="h-2 w-2 text-gray-400 group-hover/sub:text-blue-600" />
              </div>
            </a>
          </div>

          <a
            :href="`/category/${category.id}`"
            class="mt-auto w-full flex items-center justify-center border border-gray-300 rounded-lg px-4 py-2 text-center text-sm font-medium transition-colors hover:border-blue-200 hover:bg-blue-50"
          >
            查看全部
            <ArrowRight class="ml-2 h-3 w-3" />
          </a>
        </div>
      </div>
    </div>

    <div v-if="categories.length > initialDisplayCount" class="text-center">
      <button
        class="mx-auto flex items-center border border-gray-300 rounded-lg px-8 py-3 text-gray-700 font-medium transition-colors hover:bg-gray-50"
        @click="toggleShowAll"
      >
        {{ showAll ? '收起分类' : `查看更多分类 (${categories.length - initialDisplayCount}+)` }}
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
