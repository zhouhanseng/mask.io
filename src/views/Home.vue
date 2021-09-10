<template>
  <div class="home">
<!--    <img alt="Vue logo" src="../assets/logo.png">-->
<!--    <HelloWorld msg="Welcome to Your Vue.js App"/>-->
    <!-- 顶部菜单组件，是否通用随意。 -->
    <!-- 注意在移动端下菜单收到右侧菜单里，建议考虑采用 vue3-material 的 appbar -->
    <!-- 弹出的 cookie 应该是 snackbar -->
    <Menu />
    <!-- 这里应有一吨 Flex 布局 -->
    <Footer />
    <!-- 底部深蓝色通用页脚 -->
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

import Footer from "../components/Footer"
import Menu from "../components/Menu"
export default {
  name: 'Home',
  components: {
    Menu,
    Footer
    // HelloWorld
  }
}
</script>
