<script setup>
import {
  ArrowRight,
  BookOpen,
  Camera,
  Car,
  Dumbbell,
  Gamepad2,
  Headphones,
  Home,
  Laptop,
  Smartphone,
  Sparkles,
  Watch,
} from 'lucide-vue-next'
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import HeroCarousel from './components/HeroCarousel.vue'

const router = useRouter()
// 所有分类数据
const allCategories = ref([
  {
    id: 1,
    name: '电子产品',
    description: '最新的科技产品和电子设备，引领数字生活新潮流',
    icon: Smartphone,
    subcategories: [
      {
        name: '智能手机',
        count: 156,
        icon: Smartphone,
        description: '最新款智能手机，性能强劲，拍照出色',
        image: 'https://kzml2gyhtsfzfc357woi.lite.vusercontent.net/placeholder.svg?height=200&width=300',
      },
      {
        name: '笔记本电脑',
        count: 89,
        icon: Laptop,
        description: '轻薄便携，高性能办公娱乐笔记本',
        image: 'https://kzml2gyhtsfzfc357woi.lite.vusercontent.net/placeholder.svg?height=200&width=300',
      },
      {
        name: '耳机音响',
        count: 234,
        icon: Headphones,
        description: '高品质音频设备，享受纯净音质',
        image: 'https://kzml2gyhtsfzfc357woi.lite.vusercontent.net/placeholder.svg?height=200&width=300',
      },
      {
        name: '智能手表',
        count: 67,
        icon: Watch,
        description: '健康监测，智能提醒，时尚配饰',
        image: 'https://kzml2gyhtsfzfc357woi.lite.vusercontent.net/placeholder.svg?height=200&width=300',
      },
    ],
  },
  {
    id: 2,
    name: '数码影像',
    description: '专业摄影和影像设备，记录美好瞬间',
    icon: Camera,
    subcategories: [
      {
        name: '数码相机',
        count: 78,
        icon: Camera,
        description: '专业级数码相机，捕捉精彩瞬间',
        image: 'https://kzml2gyhtsfzfc357woi.lite.vusercontent.net/placeholder.svg?height=200&width=300',
      },
      {
        name: '镜头配件',
        count: 145,
        icon: Camera,
        description: '各类镜头和摄影配件，提升拍摄体验',
        image: 'https://kzml2gyhtsfzfc357woi.lite.vusercontent.net/placeholder.svg?height=200&width=300',
      },
      {
        name: '摄影器材',
        count: 92,
        icon: Camera,
        description: '三脚架、闪光灯等专业摄影设备',
        image: 'https://kzml2gyhtsfzfc357woi.lite.vusercontent.net/placeholder.svg?height=200&width=300',
      },
      {
        name: '影像处理',
        count: 34,
        icon: Camera,
        description: '后期处理软件和硬件设备',
        image: 'https://kzml2gyhtsfzfc357woi.lite.vusercontent.net/placeholder.svg?height=200&width=300',
      },
    ],
  },
  {
    id: 3,
    name: '游戏娱乐',
    description: '游戏设备和娱乐产品，畅享游戏乐趣',
    icon: Gamepad2,
    subcategories: [
      {
        name: '游戏主机',
        count: 45,
        icon: Gamepad2,
        description: '最新游戏主机，体验顶级游戏画质',
        image: 'https://kzml2gyhtsfzfc357woi.lite.vusercontent.net/placeholder.svg?height=200&width=300',
      },
      {
        name: '游戏手柄',
        count: 123,
        icon: Gamepad2,
        description: '专业游戏手柄，精准操控体验',
        image: 'https://kzml2gyhtsfzfc357woi.lite.vusercontent.net/placeholder.svg?height=200&width=300',
      },
      {
        name: '游戏软件',
        count: 267,
        icon: Gamepad2,
        description: '热门游戏大作，精彩内容不断',
        image: 'https://kzml2gyhtsfzfc357woi.lite.vusercontent.net/placeholder.svg?height=200&width=300',
      },
      {
        name: 'VR设备',
        count: 28,
        icon: Gamepad2,
        description: '虚拟现实设备，沉浸式游戏体验',
        image: 'https://kzml2gyhtsfzfc357woi.lite.vusercontent.net/placeholder.svg?height=200&width=300',
      },
    ],
  },
  {
    id: 4,
    name: '家居生活',
    description: '智能家居和生活用品，打造舒适家庭环境',
    icon: Home,
    subcategories: [
      {
        name: '智能家电',
        count: 89,
        icon: Home,
        description: '智能化家用电器，让生活更便捷',
        image: 'https://kzml2gyhtsfzfc357woi.lite.vusercontent.net/placeholder.svg?height=200&width=300',
      },
      {
        name: '家具装饰',
        count: 156,
        icon: Home,
        description: '时尚家具和装饰用品，美化家居环境',
        image: 'https://kzml2gyhtsfzfc357woi.lite.vusercontent.net/placeholder.svg?height=200&width=300',
      },
      {
        name: '厨房用品',
        count: 234,
        icon: Home,
        description: '实用厨房工具，享受烹饪乐趣',
        image: 'https://kzml2gyhtsfzfc357woi.lite.vusercontent.net/placeholder.svg?height=200&width=300',
      },
      {
        name: '清洁用品',
        count: 67,
        icon: Home,
        description: '高效清洁产品，保持家居整洁',
        image: 'https://kzml2gyhtsfzfc357woi.lite.vusercontent.net/placeholder.svg?height=200&width=300',
      },
    ],
  },
  {
    id: 5,
    name: '运动健身',
    description: '运动器材和健身产品，保持健康活力',
    icon: Dumbbell,
    subcategories: [
      {
        name: '健身器材',
        count: 78,
        icon: Dumbbell,
        description: '专业健身设备，在家也能锻炼',
        image: 'https://kzml2gyhtsfzfc357woi.lite.vusercontent.net/placeholder.svg?height=200&width=300',
      },
      {
        name: '运动服装',
        count: 145,
        icon: Dumbbell,
        description: '舒适运动装备，提升运动表现',
        image: 'https://kzml2gyhtsfzfc357woi.lite.vusercontent.net/placeholder.svg?height=200&width=300',
      },
      {
        name: '户外装备',
        count: 92,
        icon: Dumbbell,
        description: '户外运动必备装备，探索自然',
        image: 'https://kzml2gyhtsfzfc357woi.lite.vusercontent.net/placeholder.svg?height=200&width=300',
      },
      {
        name: '营养补剂',
        count: 34,
        icon: Dumbbell,
        description: '运动营养品，科学补充能量',
        image: 'https://kzml2gyhtsfzfc357woi.lite.vusercontent.net/placeholder.svg?height=200&width=300',
      },
    ],
  },
  {
    id: 6,
    name: '美妆护肤',
    description: '美容护肤和个人护理产品，展现自信美丽',
    icon: Sparkles,
    subcategories: [
      {
        name: '护肤产品',
        count: 189,
        icon: Sparkles,
        description: '专业护肤品，呵护肌肤健康',
        image: 'https://kzml2gyhtsfzfc357woi.lite.vusercontent.net/placeholder.svg?height=200&width=300',
      },
      {
        name: '彩妆用品',
        count: 156,
        icon: Sparkles,
        description: '时尚彩妆，打造完美妆容',
        image: 'https://kzml2gyhtsfzfc357woi.lite.vusercontent.net/placeholder.svg?height=200&width=300',
      },
      {
        name: '个人护理',
        count: 123,
        icon: Sparkles,
        description: '日常护理用品，关爱每一天',
        image: 'https://kzml2gyhtsfzfc357woi.lite.vusercontent.net/placeholder.svg?height=200&width=300',
      },
      {
        name: '香水香氛',
        count: 67,
        icon: Sparkles,
        description: '迷人香氛，展现个人魅力',
        image: 'https://kzml2gyhtsfzfc357woi.lite.vusercontent.net/placeholder.svg?height=200&width=300',
      },
    ],
  },
  {
    id: 7,
    name: '汽车用品',
    description: '汽车配件和用品，提升驾驶体验',
    icon: Car,
    subcategories: [
      {
        name: '汽车电子',
        count: 78,
        icon: Car,
        description: '车载电子设备，智能驾驶体验',
        image: 'https://kzml2gyhtsfzfc357woi.lite.vusercontent.net/placeholder.svg?height=200&width=300',
      },
      {
        name: '汽车装饰',
        count: 145,
        icon: Car,
        description: '个性化汽车装饰，彰显品味',
        image: 'https://kzml2gyhtsfzfc357woi.lite.vusercontent.net/placeholder.svg?height=200&width=300',
      },
      {
        name: '维修保养',
        count: 92,
        icon: Car,
        description: '汽车保养用品，延长使用寿命',
        image: 'https://kzml2gyhtsfzfc357woi.lite.vusercontent.net/placeholder.svg?height=200&width=300',
      },
      {
        name: '轮胎配件',
        count: 34,
        icon: Car,
        description: '优质轮胎和配件，安全出行',
        image: 'https://kzml2gyhtsfzfc357woi.lite.vusercontent.net/placeholder.svg?height=200&width=300',
      },
    ],
  },
  {
    id: 8,
    name: '图书文具',
    description: '图书教育和办公文具，丰富知识生活',
    icon: BookOpen,
    subcategories: [
      {
        name: '图书杂志',
        count: 289,
        icon: BookOpen,
        description: '各类图书杂志，拓展知识视野',
        image: 'https://kzml2gyhtsfzfc357woi.lite.vusercontent.net/placeholder.svg?height=200&width=300',
      },
      {
        name: '办公文具',
        count: 156,
        icon: BookOpen,
        description: '高品质办公用品，提升工作效率',
        image: 'https://kzml2gyhtsfzfc357woi.lite.vusercontent.net/placeholder.svg?height=200&width=300',
      },
      {
        name: '学习用品',
        count: 123,
        icon: BookOpen,
        description: '学生学习必备用品，助力成长',
        image: 'https://kzml2gyhtsfzfc357woi.lite.vusercontent.net/placeholder.svg?height=200&width=300',
      },
      {
        name: '艺术用品',
        count: 67,
        icon: BookOpen,
        description: '绘画艺术材料，释放创意灵感',
        image: 'https://kzml2gyhtsfzfc357woi.lite.vusercontent.net/placeholder.svg?height=200&width=300',
      },
    ],
  },
])

// 当前选中的分类
const selectedCategory = ref(allCategories.value[0])

// 处理分类切换
function handleCategoryChange(category) {
  selectedCategory.value = allCategories.value.find(cat => cat.id === category.id)
}

function handleSubcategoryClick(subcategory) {
  router.push(`/category/${subcategory.name}`)
}
</script>

<template>
  <div class="min-h-screen bg-white">
    <!-- Header -->
    <CategoriesNav
      :selected-category-id="selectedCategory.id"
      @category-change="handleCategoryChange"
    />

    <!-- Hero Carousel -->
    <HeroCarousel />

    <!-- Primary Categories Section -->
    <section class="mx-auto px-4 py-16 container">
      <div class="mb-12 text-center">
        <h2 class="mb-4 text-3xl text-gray-900 font-bold">
          {{ selectedCategory.name }}
        </h2>
        <p class="mx-auto max-w-2xl text-gray-600">
          {{ selectedCategory.description }}
        </p>
      </div>

      <!-- Secondary Categories Grid -->
      <div class="grid gap-6 lg:grid-cols-3 md:grid-cols-2 xl:grid-cols-4">
        <div
          v-for="subcategory in selectedCategory.subcategories"
          :key="subcategory.name"
          class="group cursor-pointer overflow-hidden rounded-lg bg-white shadow-sm transition-shadow hover:shadow-lg"
        >
          <div class="relative">
            <img
              :src="subcategory.image || 'https://kzml2gyhtsfzfc357woi.lite.vusercontent.net/placeholder.svg?height=200&width=300'"
              :alt="subcategory.name"
              class="h-40 w-full object-cover transition-transform duration-300 group-hover:scale-105"
            >
            <div class="absolute right-3 top-3">
              <span class="rounded-full bg-blue-100 px-2 py-1 text-xs text-blue-600">
                {{ subcategory.count }} 产品
              </span>
            </div>
          </div>

          <div class="p-4">
            <div class="mb-3 flex items-center">
              <component :is="subcategory.icon" class="mr-2 h-5 w-5 text-blue-600" />
              <h3 class="text-gray-900 font-semibold transition-colors group-hover:text-blue-600">
                {{ subcategory.name }}
              </h3>
            </div>
            <p class="mb-4 text-sm text-gray-600">
              {{ subcategory.description }}
            </p>
            <a
              href="javascript:void(0)"
              class="mt-auto w-full flex items-center justify-center border border-gray-300 rounded-lg px-4 py-2 text-center text-sm font-medium transition-colors hover:border-blue-200 hover:bg-blue-50"
              @click="handleSubcategoryClick(subcategory)"
            >
              查看商品
              <ArrowRight class="ml-1 h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- Stats Section -->
    <section class="bg-gray-900 py-16 text-white">
      <div class="mx-auto px-4 container">
        <div class="grid gap-8 text-center md:grid-cols-4">
          <div>
            <div class="mb-2 text-3xl font-bold">
              1000+
            </div>
            <div class="text-gray-400">
              优质产品
            </div>
          </div>
          <div>
            <div class="mb-2 text-3xl font-bold">
              50+
            </div>
            <div class="text-gray-400">
              产品分类
            </div>
          </div>
          <div>
            <div class="mb-2 text-3xl font-bold">
              10000+
            </div>
            <div class="text-gray-400">
              满意客户
            </div>
          </div>
          <div>
            <div class="mb-2 text-3xl font-bold">
              24/7
            </div>
            <div class="text-gray-400">
              客户服务
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="mx-auto px-4 py-16 text-center container">
      <h2 class="mb-4 text-3xl text-gray-900 font-bold">
        准备开始购物了吗？
      </h2>
      <p class="mx-auto mb-8 max-w-xl text-gray-600">
        加入我们的会员计划，享受专属优惠和优先服务
      </p>
      <div class="flex flex-col justify-center gap-4 sm:flex-row">
        <button class="rounded-lg bg-blue-600 px-8 py-3 text-white font-semibold transition-colors hover:bg-blue-700">
          立即注册
        </button>
        <button class="border border-gray-300 rounded-lg px-8 py-3 text-gray-700 font-semibold transition-colors hover:bg-gray-50">
          了解更多
        </button>
      </div>
    </section>
  </div>
</template>

<style scoped>
.container {
  max-width: 1200px;
}
</style>
