<script setup>
import { ChevronLeft, ChevronRight } from 'lucide-vue-next'
import { onMounted, onUnmounted, ref } from 'vue'

const currentSlide = ref(0)
const isAutoPlaying = ref(true)
let autoPlayInterval = null

const slides = ref([
  {
    id: 1,
    title: '全新iPhone 15系列',
    subtitle: '创新科技，精彩无限',
    description: '搭载A17 Pro芯片，拍照更清晰，性能更强劲',
    image: 'https://kzml2gyhtsfzfc357woi.lite.vusercontent.net/placeholder.svg?height=600&width=800',
    buttonText: '立即购买',
    buttonLink: '/products/iphone-15',
    backgroundColor: 'bg-gradient-to-r from-blue-600 to-purple-600',
  },
  {
    id: 2,
    title: '智能家居节',
    subtitle: '让生活更智能',
    description: '全场智能家电5折起，打造未来家居体验',
    image: 'https://kzml2gyhtsfzfc357woi.lite.vusercontent.net/placeholder.svg?height=600&width=800',
    buttonText: '查看优惠',
    buttonLink: '/deals/smart-home',
    backgroundColor: 'bg-gradient-to-r from-green-500 to-teal-600',
  },
  {
    id: 3,
    title: '游戏装备大促销',
    subtitle: '装备升级，战力飙升',
    description: '顶级游戏设备，专业电竞装备，助你称霸战场',
    image: 'https://kzml2gyhtsfzfc357woi.lite.vusercontent.net/placeholder.svg?height=600&width=800',
    buttonText: '选购装备',
    buttonLink: '/category/gaming',
    backgroundColor: 'bg-gradient-to-r from-red-500 to-pink-600',
  },
  {
    id: 4,
    title: '春季新品发布',
    subtitle: '焕新季节，焕新体验',
    description: '春季限定新品上市，为您带来全新的生活方式',
    image: 'https://kzml2gyhtsfzfc357woi.lite.vusercontent.net/placeholder.svg?height=600&width=800',
    buttonText: '探索新品',
    buttonLink: '/new-arrivals',
    backgroundColor: 'bg-gradient-to-r from-orange-500 to-yellow-500',
  },
])

function startAutoPlay() {
  if (isAutoPlaying.value) {
    autoPlayInterval = setInterval(() => {
      currentSlide.value = (currentSlide.value + 1) % slides.value.length
    }, 5000)
  }
}

function stopAutoPlay() {
  if (autoPlayInterval) {
    clearInterval(autoPlayInterval)
    autoPlayInterval = null
  }
}

function pauseAutoPlay() {
  isAutoPlaying.value = false
  stopAutoPlay()
}

function resumeAutoPlay() {
  isAutoPlaying.value = true
  startAutoPlay()
}

function goToSlide(index) {
  currentSlide.value = index
}

function goToPrevious() {
  currentSlide.value = (currentSlide.value - 1 + slides.value.length) % slides.value.length
}

function goToNext() {
  currentSlide.value = (currentSlide.value + 1) % slides.value.length
}

onMounted(() => {
  startAutoPlay()
})

onUnmounted(() => {
  stopAutoPlay()
})
</script>

<template>
  <div
    class="relative h-[500px] overflow-hidden md:h-[500px]"
    @mouseenter="pauseAutoPlay"
    @mouseleave="resumeAutoPlay"
  >
    <!-- Slides -->
    <div class="relative h-full">
      <div
        v-for="(slide, index) in slides"
        :key="slide.id"
        class="absolute inset-0 transition-opacity duration-1000" :class="[
          index === currentSlide ? 'opacity-100' : 'opacity-0',
        ]"
      >
        <div class="relative h-full overflow-hidden" :class="[slide.backgroundColor]">
          <!-- Background Image -->
          <div class="absolute inset-0">
            <img
              :src="slide.image"
              :alt="slide.title"
              class="h-full w-full object-cover opacity-20"
            >
          </div>

          <!-- Content - 修复对齐问题 -->
          <div class="relative h-full flex items-center justify-center">
            <div class="mx-auto px-4 container">
              <div class="mx-auto max-w-4xl text-center text-white">
                <div class="space-y-6">
                  <div>
                    <p class="mb-2 text-lg font-medium opacity-90 md:text-xl">
                      {{ slide.subtitle }}
                    </p>
                    <h1 class="mb-4 text-4xl font-bold leading-tight md:text-6xl">
                      {{ slide.title }}
                    </h1>
                  </div>
                  <p class="mx-auto max-w-2xl text-lg opacity-90 md:text-xl">
                    {{ slide.description }}
                  </p>
                  <div class="flex flex-col items-center justify-center gap-4 sm:flex-row">
                    <a
                      :href="slide.buttonLink"
                      class="inline-block rounded-lg bg-white px-8 py-3 text-lg text-gray-900 font-semibold transition-colors hover:bg-gray-100"
                    >
                      {{ slide.buttonText }}
                    </a>
                    <button class="border-2 border-white rounded-lg px-8 py-3 text-lg text-white transition-colors hover:bg-white hover:text-gray-900">
                      了解更多
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Navigation Arrows -->
    <button
      class="absolute left-4 top-1/2 h-12 w-12 flex items-center justify-center rounded-full bg-black/20 text-white transition-colors -translate-y-1/2 hover:bg-black/40"
      @click="goToPrevious"
    >
      <ChevronLeft class="h-6 w-6" />
    </button>
    <button
      class="absolute right-4 top-1/2 h-12 w-12 flex items-center justify-center rounded-full bg-black/20 text-white transition-colors -translate-y-1/2 hover:bg-black/40"
      @click="goToNext"
    >
      <ChevronRight class="h-6 w-6" />
    </button>

    <!-- Dots Indicator -->
    <div class="absolute bottom-6 left-1/2 flex -translate-x-1/2 space-x-2">
      <button
        v-for="(_, index) in slides"
        :key="index"
        class="h-3 w-3 rounded-full transition-all duration-300" :class="[
          index === currentSlide ? 'bg-white scale-125' : 'bg-white/50 hover:bg-white/75',
        ]"
        @click="goToSlide(index)"
      />
    </div>

    <!-- Progress Bar -->
    <div class="absolute bottom-0 left-0 h-1 w-full bg-black/20">
      <div
        class="h-full bg-white transition-all duration-300 ease-linear"
        :style="{ width: `${((currentSlide + 1) / slides.length) * 100}%` }"
      />
    </div>
  </div>
</template>

<style scoped>
.container {
  max-width: 1200px;
}
</style>
