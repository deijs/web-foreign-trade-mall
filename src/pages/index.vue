<!--
 * @Author: Loong wentloop@gmail.com
 * @Date: 2025-06-17 23:14:33
 * @LastEditors: Loong wentloop@gmail.com
 * @LastEditTime: 2025-06-17 23:21:59
 * @FilePath: \web-foreign-trade-mall\src\pages\index.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<script setup lang="ts">
import ProductHomepage from './home/ProductHomepage.vue'

defineOptions({
  name: 'IndexPage',
})

// const user = useUserStore()
// const _name = ref(user.savedName)

// const _router = useRouter()

const { t } = useI18n()
useHead({
  title: () => t('button.home'),
})
</script>

<template>
  <div>
    <ProductHomepage />
  </div>
</template>

<route lang="yaml">
meta:
  layout: home
</route>
