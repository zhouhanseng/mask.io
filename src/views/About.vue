<!--
 * @Descripttion:
 * @version:
 * @Author: jimmy
 * @Date: 2021-09-12 14:50:19
 * @LastEditors: jimmy
 * @LastEditTime: 2021-09-12 14:50:19
-->
<template>
  <div class="about">
    <Menu />
    <div class="content">
      <div class="about_text">
        <h1>About us</h1>
        <h3>Mask Network aims to bridge the Web 2.0 users to Web 3.0.</h3>
        <span>By bringing the amazing decentralized application ecosystem onto traditional social networks, the Mask extension provides a decentralized option for features Web 2.0 users are familiar with. Users could enjoy secure, decentralized social messaging, payment networks, file storage, and file sharing without leaving the mainstream social media networks. Users could get a glimpse of the magic of the Web 3.0 world in an easy and effortless way.We at Mask Network are strong believers in the ownership economy. People should own what they produce, their data, their attention, and the virtual space they choose to contribute to. And we hereby invite everyone who sees this message to join us in the course of regaining control of our personal data.</span>
      </div>
      <img class="about_img"  src="../assets/about.png">
    </div>
    <Footer />
  </div>
</template>
<script>
import Menu from '../components/Menu'
import Footer from '../components/Footer'

export default {
  name: "About",
  components: {
    Menu,
    Footer,
  },
  data: () => {
    return {
      isPc: true
    }
  },
  mounted() {
    this.isPc = !this._isMobile();
  },
}
</script>
<style scoped>
.content {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 0px;
}

.about_text {
  width: 600px;
}

.about_img {
  width: 635px;
  height: 776px;
}

@media screen and (max-width: 375px) {
  .content {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 0px 15px;
  }

  .about_text {
    width: auto;
  }
}
</style>
