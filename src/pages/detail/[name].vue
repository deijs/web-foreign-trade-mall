<script setup>
import {
  ChevronRight,
  Headphones,
  Heart,
  Minus,
  Plus,
  RotateCcw,
  Share2,
  Shield,
  ShoppingCart,
  Star,
  Truck,
} from 'lucide-vue-next'
import { ref } from 'vue'

const _route = useRoute('/detail/[name]')
// Product data (在实际应用中会从API获取)
const product = ref({
  id: 1,
  name: 'iPhone 15 Pro Max 256GB 深空黑色',
  brand: '苹果',
  category: '电子产品',
  subcategory: '智能手机',
  sku: 'APL-IP15PM-256-BLK',
  description: '搭载A17 Pro芯片，钛金属设计，专业级摄像系统，支持5G网络',
  detailedDescription: 'iPhone 15 Pro Max 采用航空级钛金属设计，搭载业界领先的A17 Pro芯片，配备专业级三摄系统，支持5倍光学变焦。6.7英寸Super Retina XDR显示屏，支持ProMotion技术，刷新率高达120Hz。配备4422mAh大容量电池，支持MagSafe无线充电和15W Qi无线充电。',
  price: 9999,
  originalPrice: 10999,
  discount: 9,
  rating: 4.8,
  reviewCount: 1234,
  soldCount: 5678,
  stock: 50,
  images: [
    'https://kzml2gyhtsfzfc357woi.lite.vusercontent.net/placeholder.svg?height=500&width=500',
    'https://kzml2gyhtsfzfc357woi.lite.vusercontent.net/placeholder.svg?height=500&width=500',
    'https://kzml2gyhtsfzfc357woi.lite.vusercontent.net/placeholder.svg?height=500&width=500',
    'https://kzml2gyhtsfzfc357woi.lite.vusercontent.net/placeholder.svg?height=500&width=500',
    'https://kzml2gyhtsfzfc357woi.lite.vusercontent.net/placeholder.svg?height=500&width=500',
  ],
  colors: [
    { name: '深空黑色', code: '#1a1a1a' },
    { name: '自然钛金色', code: '#8b7355' },
    { name: '白色钛金色', code: '#f5f5f0' },
    { name: '蓝色钛金色', code: '#4a5568' },
  ],
  storage: [
    { size: '128GB', price: 8999 },
    { size: '256GB', price: 9999 },
    { size: '512GB', price: 11999 },
    { size: '1TB', price: 13999 },
  ],
  features: [
    'A17 Pro 芯片，6核CPU',
    '6.7英寸Super Retina XDR显示屏',
    '专业级三摄系统，5倍光学变焦',
    '钛金属设计，更轻更坚固',
    '支持5G网络',
    'Face ID面容识别',
    'MagSafe无线充电',
    'IP68级防水',
  ],
  specifications: {
    屏幕尺寸: '6.7英寸',
    分辨率: '2796 x 1290像素',
    处理器: 'A17 Pro芯片',
    存储容量: '256GB',
    后置摄像头: '4800万像素主摄 + 1200万像素超广角 + 1200万像素长焦',
    前置摄像头: '1200万像素',
    电池容量: '4422mAh',
    操作系统: 'iOS 17',
    网络制式: '5G/4G/3G/2G',
    机身重量: '221g',
  },
  ratingDistribution: {
    5: 856,
    4: 234,
    3: 89,
    2: 34,
    1: 21,
  },
  reviews: [
    {
      id: 1,
      user: '张**',
      rating: 5,
      date: '2024-01-15',
      comment: '手机很棒，拍照效果非常好，A17 Pro芯片性能强劲，游戏体验很流畅。钛金属材质手感很好，比之前的不锈钢轻了不少。',
      images: ['https://kzml2gyhtsfzfc357woi.lite.vusercontent.net/placeholder.svg?height=100&width=100', 'https://kzml2gyhtsfzfc357woi.lite.vusercontent.net/placeholder.svg?height=100&width=100'],
    },
    {
      id: 2,
      user: '李**',
      rating: 4,
      date: '2024-01-10',
      comment: '整体很满意，就是价格有点贵。不过苹果的品质还是值得信赖的，系统流畅，做工精细。',
      images: [],
    },
    {
      id: 3,
      user: '王**',
      rating: 5,
      date: '2024-01-08',
      comment: '从iPhone 12升级过来的，提升很明显。特别是摄像头，夜拍效果比之前好太多了。电池续航也有改善。',
      images: ['https://kzml2gyhtsfzfc357woi.lite.vusercontent.net/placeholder.svg?height=100&width=100'],
    },
  ],
})

// Component state
const selectedImage = ref(product.value.images[0])
const selectedColor = ref(product.value.colors[0])
const selectedStorage = ref(product.value.storage[1]) // 256GB
const quantity = ref(1)
const isInWishlist = ref(false)
const activeTab = ref('details')

const tabs = ref([
  { id: 'details', name: '商品详情' },
  { id: 'specs', name: '规格参数' },
])

// Methods
function toggleWishlist() {
  isInWishlist.value = !isInWishlist.value
}

function increaseQuantity() {
  if (quantity.value < product.value.stock) {
    quantity.value++
  }
}

function decreaseQuantity() {
  if (quantity.value > 1) {
    quantity.value--
  }
}

function addToCart() {
  // 添加到购物车逻辑
  // alert(`已添加 ${quantity.value} 件商品到购物车`)
  console.warn('已添加到购物车', quantity.value)
}

function buyNow() {
  // 立即购买逻辑
  // alert('跳转到结算页面')
  console.warn('跳转到结算页面')
}

// // Computed
// const currentPrice = computed(() => {
//   return selectedStorage.value ? selectedStorage.value.price : product.value.price
// })
</script>

<template>
  <div class="min-h-screen bg-gray-50">
    <!-- Breadcrumb -->
    <div class="border-b bg-white">
      <div class="mx-auto px-4 py-4 container">
        <nav class="flex items-center text-sm text-gray-600 space-x-2">
          <a href="/" class="hover:text-blue-600">首页</a>
          <ChevronRight class="h-4 w-4" />
          <a href="/category" class="hover:text-blue-600">{{ product.category }}</a>
          <ChevronRight class="h-4 w-4" />
          <a href="/category/subcategory" class="hover:text-blue-600">{{ product.subcategory }}</a>
          <ChevronRight class="h-4 w-4" />
          <span class="text-gray-900 font-medium">{{ product.name }}</span>
        </nav>
      </div>
    </div>

    <div class="mx-auto px-4 py-8 container">
      <div class="grid mb-12 gap-12 lg:grid-cols-2">
        <!-- Product Images -->
        <div class="space-y-4">
          <!-- Main Image -->
          <div class="relative overflow-hidden rounded-lg bg-white shadow-sm">
            <img
              :src="selectedImage"
              :alt="product.name"
              class="h-96 w-full object-cover lg:h-[500px]"
            >
            <div class="absolute right-4 top-4 space-y-2">
              <button
                class="m-2 rounded-full p-3 shadow-lg transition-colors" :class="[
                  isInWishlist ? 'bg-red-500 text-white' : 'bg-white text-gray-600 hover:bg-gray-50',
                ]"
                @click="toggleWishlist"
              >
                <Heart class="h-5 w-5" :class="[isInWishlist ? 'fill-current' : '']" />
              </button>
              <button class="rounded-full bg-white p-3 text-gray-600 shadow-lg transition-colors hover:bg-gray-50">
                <Share2 class="h-5 w-5" />
              </button>
            </div>
            <div v-if="product.discount" class="absolute left-4 top-4">
              <span class="rounded-full bg-red-500 px-3 py-1 text-sm text-white font-medium">
                -{{ product.discount }}%
              </span>
            </div>
          </div>

          <!-- Thumbnail Images -->
          <div class="flex overflow-x-auto space-x-2">
            <button
              v-for="(image, index) in product.images"
              :key="index"
              class="h-20 w-20 flex-shrink-0 overflow-hidden border-2 rounded-lg transition-colors" :class="[
                selectedImage === image ? 'border-blue-500' : 'border-gray-200 hover:border-gray-300',
              ]"
              @click="selectedImage = image"
            >
              <img :src="image" :alt="`${product.name} ${index + 1}`" class="h-full w-full object-cover">
            </button>
          </div>
        </div>

        <!-- Product Info -->
        <div class="space-y-6">
          <div>
            <div class="mb-2 flex items-center space-x-2">
              <span class="text-sm text-blue-600 font-medium">{{ product.brand }}</span>
              <span class="text-sm text-gray-400">|</span>
              <span class="text-sm text-gray-600">商品编号: {{ product.sku }}</span>
            </div>
            <h1 class="mb-4 text-3xl text-gray-900 font-bold">
              {{ product.name }}
            </h1>
            <p class="text-lg text-gray-600 leading-relaxed">
              {{ product.description }}
            </p>
          </div>

          <!-- Rating and Reviews -->
          <div class="flex items-center space-x-4">
            <div class="flex items-center">
              <div class="flex">
                <Star
                  v-for="i in 5"
                  :key="i"
                  class="h-5 w-5" :class="[
                    i <= product.rating ? 'text-yellow-400 fill-current' : 'text-gray-300',
                  ]"
                />
              </div>
              <span class="ml-2 text-lg font-medium">{{ product.rating }}</span>
            </div>
            <span class="text-gray-400">|</span>
            <!-- <a href="#reviews" class="text-blue-600 hover:text-blue-800">{{ product.reviewCount }} 条评价</a> -->
            <!-- <span class="text-gray-400">|</span> -->
            <span class="text-gray-600">已售 {{ product.soldCount }}</span>
          </div>

          <!-- Price -->
          <div class="rounded-lg bg-gray-50 p-6">
            <div class="mb-4 flex items-baseline space-x-4">
              <span class="text-4xl text-red-600 font-bold">¥{{ product.price }}</span>
              <span v-if="product.originalPrice" class="text-xl text-gray-500 line-through">
                ¥{{ product.originalPrice }}
              </span>
              <span v-if="product.discount" class="rounded bg-red-100 px-2 py-1 text-sm text-red-600">
                省¥{{ product.originalPrice - product.price }}
              </span>
            </div>
            <div class="text-sm text-gray-600 space-y-1">
              <div class="flex justify-between">
                <span>运费：</span>
                <span class="text-green-600">满99元免运费</span>
              </div>
              <div class="flex justify-between">
                <span>发货：</span>
                <span>现货，24小时内发货</span>
              </div>
              <div class="flex justify-between">
                <span>服务：</span>
                <span>7天无理由退换</span>
              </div>
            </div>
          </div>

          <!-- Specifications -->
          <div class="space-y-4">
            <div v-if="product.colors && product.colors.length > 0">
              <h3 class="mb-2 text-gray-900 font-medium">
                颜色
              </h3>
              <div class="flex space-x-2">
                <button
                  v-for="color in product.colors"
                  :key="color.name"
                  class="border rounded-lg px-4 py-2 text-sm transition-colors" :class="[
                    selectedColor?.name === color.name
                      ? 'border-blue-500 bg-blue-50 text-blue-600'
                      : 'border-gray-300 hover:border-gray-400',
                  ]"
                  @click="selectedColor = color"
                >
                  {{ color.name }}
                </button>
              </div>
            </div>

            <div v-if="product.storage && product.storage.length > 0">
              <h3 class="mb-2 text-gray-900 font-medium">
                存储容量
              </h3>
              <div class="flex space-x-2">
                <button
                  v-for="storage in product.storage"
                  :key="storage.size"
                  class="border rounded-lg px-4 py-2 text-sm transition-colors" :class="[
                    selectedStorage?.size === storage.size
                      ? 'border-blue-500 bg-blue-50 text-blue-600'
                      : 'border-gray-300 hover:border-gray-400',
                  ]"
                  @click="selectedStorage = storage"
                >
                  {{ storage.size }}
                  <span v-if="storage.price !== product.price" class="block text-xs text-gray-500">
                    +¥{{ storage.price - product.price }}
                  </span>
                </button>
              </div>
            </div>
          </div>

          <!-- Quantity and Actions -->
          <div class="space-y-4">
            <div class="flex items-center space-x-4">
              <span class="text-gray-900 font-medium">数量：</span>
              <div class="flex items-center border border-gray-300 rounded-lg">
                <button
                  :disabled="quantity <= 1"
                  class="p-2 disabled:cursor-not-allowed hover:bg-gray-50 disabled:opacity-50"
                  @click="decreaseQuantity"
                >
                  <Minus class="h-4 w-4" />
                </button>
                <input
                  v-model.number="quantity"
                  type="number"
                  min="1"
                  :max="product.stock"
                  class="w-16 border-0 text-center focus:outline-none"
                >
                <button
                  :disabled="quantity >= product.stock"
                  class="p-2 disabled:cursor-not-allowed hover:bg-gray-50 disabled:opacity-50"
                  @click="increaseQuantity"
                >
                  <Plus class="h-4 w-4" />
                </button>
              </div>
              <span class="text-sm text-gray-600">库存 {{ product.stock }} 件</span>
            </div>

            <div class="flex space-x-4">
              <button
                class="flex flex-1 items-center justify-center rounded-lg bg-orange-500 px-6 py-3 text-white font-medium transition-colors hover:bg-orange-600"
                @click="addToCart"
              >
                <ShoppingCart class="mr-2 h-5 w-5" />
                加入购物车
              </button>
              <button
                class="flex-1 rounded-lg bg-blue-600 px-6 py-3 text-white font-medium transition-colors hover:bg-blue-700"
                @click="buyNow"
              >
                立即购买
              </button>
            </div>
          </div>

          <!-- Additional Info -->
          <div class="border-t pt-6">
            <div class="grid grid-cols-2 gap-4 text-sm">
              <div class="flex items-center space-x-2">
                <Shield class="h-4 w-4 text-green-600" />
                <span>正品保证</span>
              </div>
              <div class="flex items-center space-x-2">
                <Truck class="h-4 w-4 text-blue-600" />
                <span>快速配送</span>
              </div>
              <div class="flex items-center space-x-2">
                <RotateCcw class="h-4 w-4 text-purple-600" />
                <span>7天退换</span>
              </div>
              <div class="flex items-center space-x-2">
                <Headphones class="h-4 w-4 text-orange-600" />
                <span>24小时客服</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Product Details Tabs -->
      <div class="rounded-lg bg-white shadow-sm">
        <div class="border-b">
          <nav class="flex px-6 space-x-8">
            <button
              v-for="tab in tabs"
              :key="tab.id"
              class="border-b-2 px-2 py-4 text-sm font-medium transition-colors" :class="[
                activeTab === tab.id
                  ? 'border-blue-500 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700',
              ]"
              @click="activeTab = tab.id"
            >
              {{ tab.name }}
            </button>
          </nav>
        </div>

        <div class="p-6">
          <!-- Product Details -->
          <div v-if="activeTab === 'details'" class="space-y-8">
            <!-- 产品图文详情 -->
            <div class="space-y-6">
              <div class="border-b pb-4">
                <h3 class="mb-4 text-xl text-gray-900 font-semibold">
                  产品介绍
                </h3>
                <p class="text-justify text-gray-600 leading-relaxed">
                  {{ product.detailedDescription }}
                </p>
              </div>

              <!-- 产品特性展示 -->
              <div class="pt-4">
                <h3 class="mb-6 text-xl text-gray-900 font-semibold">
                  产品特性
                </h3>
                <div class="grid grid-cols-1 gap-6 md:grid-cols-2">
                  <div
                    v-for="(feature, index) in product.features"
                    :key="index"
                    class="flex items-center rounded-lg bg-gray-50 p-4 space-x-3"
                  >
                    <div class="flex-shrink-0">
                      <div class="h-8 w-8 flex items-center justify-center rounded-full bg-blue-100 text-blue-600">
                        <span class="text-lg font-semibold">{{ index + 1 }}</span>
                      </div>
                    </div>
                    <div class="flex-1">
                      <p class="text-justify text-gray-800 leading-6">
                        {{ feature }}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Specifications -->
          <div v-if="activeTab === 'specs'" class="space-y-6">
            <div class="border-b pb-4">
              <div class="grid grid-cols-1 gap-4">
                <div
                  v-for="(value, key) in product.specifications"
                  :key="key"
                  class="flex items-center border-b border-gray-100 py-3 last:border-b-0"
                >
                  <span class="w-1/5 text-left text-gray-600">{{ key }}</span>
                  <span class="w-4/5 text-left text-gray-900 font-medium">{{ value }}</span>
                </div>
              </div>
            </div>
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

.prose {
  color: #374151;
}

.prose h4 {
  font-weight: 600;
  color: #111827;
}

.prose ul {
  list-style-type: none;
  padding-left: 0;
}

.prose li {
  margin: 0.25rem 0;
}
</style>
