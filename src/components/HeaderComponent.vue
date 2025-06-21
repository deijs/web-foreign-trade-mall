<script setup>
import {
  Bell,
  Heart,
  Search,
  ShoppingCart,
  User,
} from 'lucide-vue-next'
import { ref } from 'vue'
import { useRouter } from 'vue-router'

import { getPKApi } from '~/api'

onMounted(async () => {
  const { pkkey } = await getPKApi()
  console.warn('pkkey:', pkkey)
})

const router = useRouter()
const searchQuery = ref('')
const showUserMenu = ref(false)

function toggleUserMenu() {
  showUserMenu.value = !showUserMenu.value
}

function handleLogoClick() {
  router.push('/')
}
</script>

<template>
  <header class="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur">
    <!-- Main Header -->
    <div class="mx-auto px-4 container">
      <div class="h-16 flex items-center justify-between">
        <!-- Logo -->
        <a href="javascript:void(0)" class="flex items-center space-x-2" @click="handleLogoClick">
          <div class="h-8 w-8 flex items-center justify-center rounded-lg bg-blue-600">
            <span class="text-lg text-white font-bold">P</span>
          </div>
          <span class="text-xl text-gray-900 font-bold">ProductHub</span>
        </a>

        <!-- Search Bar -->
        <div class="mx-8 hidden max-w-xl flex-1 md:flex">
          <div class="relative w-full">
            <input
              v-model="searchQuery"
              type="search"
              placeholder="搜索产品、品牌、分类..."
              class="h-10 w-full border-2 border-gray-200 rounded-lg pl-4 pr-12 focus:border-blue-500 focus:outline-none"
            >
            <button class="absolute right-1 top-1 h-8 rounded-md bg-blue-600 px-3 text-white transition-colors hover:bg-blue-700">
              <Search class="h-4 w-4" />
            </button>
          </div>
        </div>

        <!-- Right Actions -->
        <div class="flex items-center space-x-4">
          <!-- Mobile Search -->
          <button class="rounded-lg p-2 md:hidden hover:bg-gray-100">
            <Search class="h-5 w-5" />
          </button>

          <!-- Wishlist -->
          <button class="relative hidden rounded-lg p-2 sm:flex hover:bg-gray-100">
            <Heart class="h-5 w-5" />
            <span class="absolute h-5 w-5 flex items-center justify-center rounded-full bg-blue-600 text-xs text-white -right-1 -top-1">3</span>
          </button>

          <!-- Notifications -->
          <button class="relative hidden rounded-lg p-2 sm:flex hover:bg-gray-100">
            <Bell class="h-5 w-5" />
            <span class="absolute h-5 w-5 flex items-center justify-center rounded-full bg-red-500 text-xs text-white -right-1 -top-1">2</span>
          </button>

          <!-- Shopping Cart -->
          <button class="relative rounded-lg p-2 hover:bg-gray-100">
            <ShoppingCart class="h-5 w-5" />
            <span class="absolute h-5 w-5 flex items-center justify-center rounded-full bg-blue-600 text-xs text-white -right-1 -top-1">5</span>
          </button>
          <!-- User Menu -->
          <div class="relative">
            <button
              class="flex items-center rounded-lg p-2 hover:bg-gray-100"
              @click="toggleUserMenu"
            >
              <User class="h-5 w-5" />
              <span class="hidden sm:ml-2 sm:inline">账户</span>
            </button>

            <div v-if="showUserMenu" class="absolute right-0 z-50 mt-2 w-48 border rounded-lg bg-white py-2 shadow-lg">
              <a href="/login" class="block px-4 py-2 hover:bg-gray-100">登录</a>
              <a href="/register" class="block px-4 py-2 hover:bg-gray-100">注册</a>
              <a href="/profile" class="block px-4 py-2 hover:bg-gray-100">个人中心</a>
              <a href="/orders" class="block px-4 py-2 hover:bg-gray-100">我的订单</a>
            </div>
          </div>
          <LanguageSwitcher class="relative z-1000" />

          <!-- Mobile Menu -->
          <!-- <button
            class="rounded-lg p-2 md:hidden hover:bg-gray-100"
            @click="toggleMobileMenu"
          >
            <X v-if="showMobileMenu" class="h-5 w-5" />
            <Menu v-else class="h-5 w-5" />
          </button> -->
        </div>
      </div>
    </div>
  </header>
</template>

<style scoped>
.container {
  max-width: 1200px;
}
</style>
