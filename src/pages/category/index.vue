<script setup>
import { ChevronRight, Grid, Heart, List, Star } from 'lucide-vue-next'
import { computed, ref } from 'vue'
import { useRouter } from 'vue-router'

const _route = useRoute('/category/[name]')
const router = useRouter()
// Props (在实际应用中会从路由参数获取)
const categoryName = ref('电子产品')
const subcategoryName = ref('智能手机')

// View and sorting
const viewMode = ref('grid')
const sortBy = ref('default')

// Filters
const selectedPriceRange = ref('')
const selectedBrands = ref([])
const selectedRating = ref('')

// Pagination
const currentPage = ref(1)
const itemsPerPage = 12

// Filter options
const priceRanges = ref([
  { value: '0-500', label: '¥0 - ¥500' },
  { value: '500-1000', label: '¥500 - ¥1000' },
  { value: '1000-2000', label: '¥1000 - ¥2000' },
  { value: '2000-5000', label: '¥2000 - ¥5000' },
  { value: '5000+', label: '¥5000以上' },
])

const brands = ref(['苹果', '华为', '小米', '三星', 'OPPO', 'vivo', '一加'])

// Mock products data
const products = ref([
  {
    id: 1,
    name: 'iPhone 15 Pro Max 256GB 深空黑色',
    description: '搭载A17 Pro芯片，钛金属设计，专业级摄像系统',
    price: 9999,
    originalPrice: 10999,
    discount: 9,
    rating: 5,
    reviews: 1234,
    image: 'https://kzml2gyhtsfzfc357woi.lite.vusercontent.net/placeholder.svg?height=300&width=300',
    brand: '苹果',
    category: 'smartphone',
  },
  {
    id: 2,
    name: '华为Mate 60 Pro 512GB 雅川青',
    description: '麒麟9000S芯片，卫星通话，专业摄影',
    price: 6999,
    originalPrice: 7999,
    discount: 13,
    rating: 5,
    reviews: 856,
    image: 'https://kzml2gyhtsfzfc357woi.lite.vusercontent.net/placeholder.svg?height=300&width=300',
    brand: '华为',
    category: 'smartphone',
  },
  {
    id: 3,
    name: '小米14 Ultra 16GB+1TB 黑色',
    description: '徕卡专业摄影，骁龙8 Gen3，2K屏幕',
    price: 6499,
    originalPrice: null,
    discount: null,
    rating: 4,
    reviews: 567,
    image: 'https://kzml2gyhtsfzfc357woi.lite.vusercontent.net/placeholder.svg?height=300&width=300',
    brand: '小米',
    category: 'smartphone',
  },
  {
    id: 4,
    name: '三星Galaxy S24 Ultra 256GB 钛灰色',
    description: 'S Pen手写笔，200MP摄像头，AI功能',
    price: 8999,
    originalPrice: 9999,
    discount: 10,
    rating: 4,
    reviews: 432,
    image: 'https://kzml2gyhtsfzfc357woi.lite.vusercontent.net/placeholder.svg?height=300&width=300',
    brand: '三星',
    category: 'smartphone',
  },
  {
    id: 5,
    name: 'OPPO Find X7 Ultra 16GB+512GB 海阔天空',
    description: '哈苏专业摄影，骁龙8 Gen3，潜望式长焦',
    price: 5999,
    originalPrice: 6999,
    discount: 14,
    rating: 4,
    reviews: 298,
    image: 'https://kzml2gyhtsfzfc357woi.lite.vusercontent.net/placeholder.svg?height=300&width=300',
    brand: 'OPPO',
    category: 'smartphone',
  },
  {
    id: 6,
    name: 'vivo X100 Pro+ 16GB+1TB 钛色',
    description: '蔡司光学镜头，天玑9300，5400mAh电池',
    price: 5499,
    originalPrice: null,
    discount: null,
    rating: 4,
    reviews: 189,
    image: 'https://kzml2gyhtsfzfc357woi.lite.vusercontent.net/placeholder.svg?height=300&width=300',
    brand: 'vivo',
    category: 'smartphone',
  },
  {
    id: 7,
    name: '一加12 16GB+512GB 岩黑',
    description: '骁龙8 Gen3，哈苏影像，100W快充',
    price: 4299,
    originalPrice: 4799,
    discount: 10,
    rating: 4,
    reviews: 156,
    image: 'https://kzml2gyhtsfzfc357woi.lite.vusercontent.net/placeholder.svg?height=300&width=300',
    brand: '一加',
    category: 'smartphone',
  },
  {
    id: 8,
    name: 'iPhone 14 Pro 128GB 深紫色',
    description: 'A16仿生芯片，4800万像素主摄，灵动岛',
    price: 7999,
    originalPrice: 8999,
    discount: 11,
    rating: 5,
    reviews: 2341,
    image: 'https://kzml2gyhtsfzfc357woi.lite.vusercontent.net/placeholder.svg?height=300&width=300',
    brand: '苹果',
    category: 'smartphone',
  },
])

// Computed properties
const totalProducts = computed(() => products.value.length)

const filteredProducts = computed(() => {
  let filtered = [...products.value]

  // Price filter
  if (selectedPriceRange.value) {
    const [min, max] = selectedPriceRange.value.split('-').map(p => p.replace('+', ''))
    filtered = filtered.filter((product) => {
      if (max) {
        return product.price >= Number.parseInt(min) && product.price <= Number.parseInt(max)
      }
      else {
        return product.price >= Number.parseInt(min)
      }
    })
  }

  // Brand filter
  if (selectedBrands.value.length > 0) {
    filtered = filtered.filter(product => selectedBrands.value.includes(product.brand))
  }

  // Rating filter
  if (selectedRating.value) {
    filtered = filtered.filter(product => product.rating >= selectedRating.value)
  }

  // Sort
  switch (sortBy.value) {
    case 'price-low':
      filtered.sort((a, b) => a.price - b.price)
      break
    case 'price-high':
      filtered.sort((a, b) => b.price - a.price)
      break
    case 'rating':
      filtered.sort((a, b) => b.rating - a.rating)
      break
    case 'newest':
      filtered.sort((a, b) => b.id - a.id)
      break
  }

  // Pagination
  const start = (currentPage.value - 1) * itemsPerPage
  const end = start + itemsPerPage
  return filtered.slice(start, end)
})

const totalPages = computed(() => {
  return Math.ceil(products.value.length / itemsPerPage)
})

// Methods
function clearFilters() {
  selectedPriceRange.value = ''
  selectedBrands.value = []
  selectedRating.value = ''
  currentPage.value = 1
}

function gotoDetail(product) {
  router.push({
    path: '/detail',
    query: {
      name: product.name,
    },
  })
}
</script>

<template>
  <div class="min-h-screen bg-gray-50">
    <!-- Breadcrumb -->
    <div class="border-b bg-white">
      <div class="mx-auto px-4 py-4 container">
        <nav class="flex items-center text-sm text-gray-600 space-x-2">
          <a href="/" class="hover:text-blue-600">首页</a>
          <ChevronRight class="h-4 w-4" />
          <a href="/category" class="hover:text-blue-600">{{ categoryName }}</a>
          <ChevronRight class="h-4 w-4" />
          <span class="text-gray-900 font-medium">{{ subcategoryName }}</span>
        </nav>
      </div>
    </div>

    <!-- Page Header -->
    <div class="bg-white">
      <div class="mx-auto px-4 py-8 container">
        <div class="flex items-center justify-between">
          <div>
            <h1 class="mb-2 text-3xl text-gray-900 font-bold">
              {{ subcategoryName }}
            </h1>
            <p class="text-gray-600">
              共找到 {{ totalProducts }} 件商品
            </p>
          </div>
          <div class="flex items-center space-x-4">
            <!-- View Toggle -->
            <div class="flex items-center border rounded-lg">
              <button
                class="rounded-l-lg p-2 transition-colors"
                :class="[
                  viewMode === 'grid' ? 'bg-blue-600 text-white' : 'text-gray-600 hover:bg-gray-100',
                ]"
                @click="viewMode = 'grid'"
              >
                <Grid class="h-4 w-4" />
              </button>
              <button
                class="rounded-r-lg p-2 transition-colors"
                :class="[
                  viewMode === 'list' ? 'bg-blue-600 text-white' : 'text-gray-600 hover:bg-gray-100',
                ]"
                @click="viewMode = 'list'"
              >
                <List class="h-4 w-4" />
              </button>
            </div>

            <!-- Sort -->
            <select
              v-model="sortBy"
              class="border border-gray-300 rounded-lg px-3 py-2 focus:border-blue-500 focus:outline-none"
            >
              <option value="default">
                默认排序
              </option>
              <option value="price-low">
                价格从低到高
              </option>
              <option value="price-high">
                价格从高到低
              </option>
              <option value="rating">
                评分最高
              </option>
              <option value="newest">
                最新上架
              </option>
            </select>
          </div>
        </div>
      </div>
    </div>

    <div class="mx-auto px-4 py-8 container">
      <div class="flex gap-8">
        <!-- Sidebar Filters -->
        <div class="w-64 flex-shrink-0">
          <div class="rounded-lg bg-white p-6 shadow-sm space-y-6">
            <!-- Price Filter -->
            <div>
              <h3 class="mb-3 text-gray-900 font-semibold">
                价格区间
              </h3>
              <div class="space-y-2">
                <label v-for="range in priceRanges" :key="range.value" class="flex items-center">
                  <input
                    v-model="selectedPriceRange"
                    type="radio"
                    :value="range.value"
                    class="mr-2"
                  >
                  <span class="text-sm text-gray-700">{{ range.label }}</span>
                </label>
              </div>
            </div>

            <!-- Brand Filter -->
            <div>
              <h3 class="mb-3 text-gray-900 font-semibold">
                品牌
              </h3>
              <div class="space-y-2">
                <label v-for="brand in brands" :key="brand" class="flex items-center">
                  <input
                    v-model="selectedBrands"
                    type="checkbox"
                    :value="brand"
                    class="mr-2"
                  >
                  <span class="text-sm text-gray-700">{{ brand }}</span>
                </label>
              </div>
            </div>

            <!-- Rating Filter -->
            <div>
              <h3 class="mb-3 text-gray-900 font-semibold">
                评分
              </h3>
              <div class="space-y-2">
                <label v-for="rating in [5, 4, 3, 2, 1]" :key="rating" class="flex items-center">
                  <input
                    v-model="selectedRating"
                    type="radio"
                    :value="rating"
                    class="mr-2"
                  >
                  <div class="flex items-center">
                    <div class="flex">
                      <Star
                        v-for="i in 5"
                        :key="i"
                        class="h-4 w-4" :class="[
                          i <= rating ? 'text-yellow-400 fill-current' : 'text-gray-300',
                        ]"
                      />
                    </div>
                    <span class="ml-1 text-sm text-gray-700">{{ rating }}星以上</span>
                  </div>
                </label>
              </div>
            </div>

            <!-- Clear Filters -->
            <button
              class="w-full rounded-lg bg-gray-100 px-4 py-2 text-gray-700 transition-colors hover:bg-gray-200"
              @click="clearFilters"
            >
              清除筛选
            </button>
          </div>
        </div>

        <!-- Product Grid/List -->
        <div class="flex-1">
          <!-- Grid View -->
          <div v-if="viewMode === 'grid'" class="grid gap-6 lg:grid-cols-3 md:grid-cols-2 xl:grid-cols-4">
            <div
              v-for="product in filteredProducts"
              :key="product.id"
              class="group flex flex-col cursor-pointer overflow-hidden rounded-lg bg-white shadow-sm transition-shadow hover:shadow-lg"
            >
              <div class="relative" @click="gotoDetail(product)">
                <img
                  :src="product.image"
                  :alt="product.name"
                  class="h-48 w-full object-cover transition-transform duration-300 group-hover:scale-105"
                >
                <div class="absolute right-3 top-3" @click.stop>
                  <button class="rounded-full bg-white/90 p-2 shadow-sm transition-colors hover:bg-white">
                    <Heart class="h-4 w-4 text-gray-600 hover:text-red-500" />
                  </button>
                </div>
                <div v-if="product.discount" class="absolute left-3 top-3">
                  <span class="rounded bg-red-500 px-2 py-1 text-xs text-white font-medium">
                    -{{ product.discount }}%
                  </span>
                </div>
              </div>

              <div class="flex flex-grow flex-col p-4">
                <div @click="gotoDetail(product)">
                  <h3 class="line-clamp-2 mb-3 text-left text-gray-900 font-medium leading-5">
                    {{ product.name }}
                  </h3>

                  <!-- Rating -->
                  <div class="mb-3 flex items-center">
                    <div class="flex">
                      <Star
                        v-for="i in 5"
                        :key="i"
                        class="h-4 w-4" :class="[
                          i <= product.rating ? 'text-yellow-400 fill-current' : 'text-gray-300',
                        ]"
                      />
                    </div>
                    <span class="ml-2 text-sm text-gray-600">({{ product.reviews }})</span>
                  </div>

                  <!-- Price -->
                  <div class="mb-4">
                    <div class="flex items-baseline space-x-2">
                      <span class="text-xl text-red-600 font-bold">¥{{ product.price }}</span>
                      <span v-if="product.originalPrice" class="text-sm text-gray-500 line-through">
                        ¥{{ product.originalPrice }}
                      </span>
                    </div>
                  </div>
                </div>

                <div class="mt-auto">
                  <!-- Add to Cart Button -->
                  <button
                    class="w-full rounded-lg bg-blue-600 px-4 py-2 text-sm text-white font-medium transition-colors hover:bg-blue-700"
                    @click.stop
                  >
                    加入购物车
                  </button>
                </div>
              </div>
            </div>
          </div>

          <!-- List View -->
          <div v-else class="space-y-4">
            <div
              v-for="product in filteredProducts"
              :key="product.id"
              class="flex gap-6 rounded-lg bg-white p-6 shadow-sm transition-shadow hover:shadow-lg"
            >
              <div class="relative flex-shrink-0" @click="router.push(`/detail/${product.name}`)">
                <img
                  :src="product.image"
                  :alt="product.name"
                  class="h-32 w-32 rounded-lg object-cover"
                >
                <div v-if="product.discount" class="absolute left-2 top-2">
                  <span class="rounded bg-red-500 px-2 py-1 text-xs text-white font-medium">
                    -{{ product.discount }}%
                  </span>
                </div>
              </div>

              <div class="flex flex-1 flex-col">
                <div @click="router.push(`/detail/${product.name}`)">
                  <h3 class="mb-2 cursor-pointer text-left text-lg text-gray-900 font-medium">
                    {{ product.name }}
                  </h3>
                  <p class="line-clamp-2 mb-3 text-left text-sm text-gray-600">
                    {{ product.description }}
                  </p>
                </div>

                <div class="mt-auto flex items-center justify-between">
                  <div class="space-y-2">
                    <div class="flex items-center">
                      <div class="flex">
                        <Star
                          v-for="i in 5"
                          :key="i"
                          class="h-4 w-4" :class="[
                            i <= product.rating ? 'text-yellow-400 fill-current' : 'text-gray-300',
                          ]"
                        />
                      </div>
                      <span class="ml-2 text-sm text-gray-600">({{ product.reviews }} 评价)</span>
                    </div>
                    <div class="flex items-baseline space-x-2">
                      <span class="text-2xl text-red-600 font-bold">¥{{ product.price }}</span>
                      <span v-if="product.originalPrice" class="text-sm text-gray-500 line-through">
                        ¥{{ product.originalPrice }}
                      </span>
                    </div>
                  </div>

                  <div class="flex items-center space-x-3">
                    <button class="border border-gray-300 rounded-lg p-2 transition-colors hover:bg-gray-50" @click.stop>
                      <Heart class="h-4 w-4 text-gray-600 hover:text-red-500" />
                    </button>
                    <button class="rounded-lg bg-blue-600 px-6 py-2 text-white font-medium transition-colors hover:bg-blue-700" @click.stop>
                      加入购物车
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Pagination -->
          <div class="mt-12 flex items-center justify-center space-x-2">
            <button
              :disabled="currentPage === 1"
              class="border border-gray-300 rounded-lg px-4 py-2 transition-colors disabled:cursor-not-allowed hover:bg-gray-50 disabled:opacity-50"
              @click="currentPage--"
            >
              上一页
            </button>
            <button
              v-for="page in totalPages"
              :key="page"
              class="border rounded-lg px-4 py-2 transition-colors" :class="[
                page === currentPage
                  ? 'bg-blue-600 text-white border-blue-600'
                  : 'border-gray-300 hover:bg-gray-50',
              ]"
              @click="currentPage = page"
            >
              {{ page }}
            </button>
            <button
              :disabled="currentPage === totalPages"
              class="border border-gray-300 rounded-lg px-4 py-2 transition-colors disabled:cursor-not-allowed hover:bg-gray-50 disabled:opacity-50"
              @click="currentPage++"
            >
              下一页
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.container {
  max-width: 1200px;
}

.line-clamp-2 {
  display: -webkit-box;
  line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>
