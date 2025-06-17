<script setup>
import {
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
import CategoryGrid from './components/CategoryGrid.vue'
import HeroCarousel from './components/HeroCarousel.vue'

const primaryCategories = ref([
  {
    id: 1,
    name: '电子产品',
    description: '最新的科技产品和电子设备',
    icon: Smartphone,
    image: 'https://kzml2gyhtsfzfc357woi.lite.vusercontent.net/placeholder.svg?height=300&width=400',
    subcategories: [
      { name: '智能手机', count: 156, icon: Smartphone },
      { name: '笔记本电脑', count: 89, icon: Laptop },
      { name: '耳机音响', count: 234, icon: Headphones },
      { name: '智能手表', count: 67, icon: Watch },
    ],
  },
  {
    id: 2,
    name: '数码影像',
    description: '专业摄影和影像设备',
    icon: Camera,
    image: 'https://kzml2gyhtsfzfc357woi.lite.vusercontent.net/placeholder.svg?height=300&width=400',
    subcategories: [
      { name: '数码相机', count: 78, icon: Camera },
      { name: '镜头配件', count: 145, icon: Camera },
      { name: '摄影器材', count: 92, icon: Camera },
      { name: '影像处理', count: 34, icon: Camera },
    ],
  },
  {
    id: 3,
    name: '游戏娱乐',
    description: '游戏设备和娱乐产品',
    icon: Gamepad2,
    image: 'https://kzml2gyhtsfzfc357woi.lite.vusercontent.net/placeholder.svg?height=300&width=400',
    subcategories: [
      { name: '游戏主机', count: 45, icon: Gamepad2 },
      { name: '游戏手柄', count: 123, icon: Gamepad2 },
      { name: '游戏软件', count: 267, icon: Gamepad2 },
      { name: 'VR设备', count: 28, icon: Gamepad2 },
    ],
  },
  {
    id: 4,
    name: '家居生活',
    description: '智能家居和生活用品',
    icon: Home,
    image: 'https://kzml2gyhtsfzfc357woi.lite.vusercontent.net/placeholder.svg?height=300&width=400',
    subcategories: [
      { name: '智能家电', count: 89, icon: Home },
      { name: '家具装饰', count: 156, icon: Home },
      { name: '厨房用品', count: 234, icon: Home },
      { name: '清洁用品', count: 67, icon: Home },
    ],
  },
  {
    id: 5,
    name: '运动健身',
    description: '运动器材和健身产品',
    icon: Dumbbell,
    image: 'https://kzml2gyhtsfzfc357woi.lite.vusercontent.net/placeholder.svg?height=300&width=400',
    subcategories: [
      { name: '健身器材', count: 78, icon: Dumbbell },
      { name: '运动服装', count: 145, icon: Dumbbell },
      { name: '户外装备', count: 92, icon: Dumbbell },
      { name: '营养补剂', count: 34, icon: Dumbbell },
    ],
  },
  {
    id: 6,
    name: '美妆护肤',
    description: '美容护肤和个人护理',
    icon: Sparkles,
    image: 'https://kzml2gyhtsfzfc357woi.lite.vusercontent.net/placeholder.svg?height=300&width=400',
    subcategories: [
      { name: '护肤产品', count: 189, icon: Sparkles },
      { name: '彩妆用品', count: 156, icon: Sparkles },
      { name: '个人护理', count: 123, icon: Sparkles },
      { name: '香水香氛', count: 67, icon: Sparkles },
    ],
  },
  {
    id: 7,
    name: '汽车用品',
    description: '汽车配件和用品',
    icon: Car,
    image: 'https://kzml2gyhtsfzfc357woi.lite.vusercontent.net/placeholder.svg?height=300&width=400',
    subcategories: [
      { name: '汽车电子', count: 78, icon: Car },
      { name: '汽车装饰', count: 145, icon: Car },
      { name: '维修保养', count: 92, icon: Car },
      { name: '轮胎配件', count: 34, icon: Car },
    ],
  },
  {
    id: 8,
    name: '图书文具',
    description: '图书教育和办公文具',
    icon: BookOpen,
    image: 'https://kzml2gyhtsfzfc357woi.lite.vusercontent.net/placeholder.svg?height=300&width=400',
    subcategories: [
      { name: '图书杂志', count: 289, icon: BookOpen },
      { name: '办公文具', count: 156, icon: BookOpen },
      { name: '学习用品', count: 123, icon: BookOpen },
      { name: '艺术用品', count: 67, icon: BookOpen },
    ],
  },
])
</script>

<template>
  <div class="min-h-screen bg-white">
    <!-- Hero Carousel -->
    <HeroCarousel />

    <!-- Primary Categories -->
    <section class="mx-auto px-4 py-16 container">
      <div class="mb-12 text-center">
        <h2 class="mb-4 text-3xl text-gray-900 font-bold">
          产品分类
        </h2>
        <p class="mx-auto max-w-2xl text-gray-600">
          浏览我们的主要产品类别，每个类别都包含精选的子分类产品
        </p>
      </div>

      <CategoryGrid :categories="primaryCategories" :initial-display-count="6" />
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
