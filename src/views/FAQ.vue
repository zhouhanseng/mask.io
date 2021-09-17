<!--
 * @Descripttion:
 * @version:
 * @Author: jimmy
 * @Date: 2021-09-12 14:50:19
 * @LastEditors: jimmy
 * @LastEditTime: 2021-09-14 14:08:01
-->
<template>
  <div class="faq">
    <Menu />
    <div class="header">
      <div class="header_text">
        <h1>How can we help you?</h1>
      </div>
      <img class="about_img"  src="../assets/faq_img.png">
    </div>
    <div class="content">
      <div class="questions">

      </div>

      <a-anchor :target-offset="targetOffset">
        <a-anchor-link href="#getting-started" title="Getting Started" />
        <a-anchor-link href="#trade-and-swaps" title="Trade and Swaps" />
        <a-anchor-link href="#file-service" title="File Service" />
        <a-anchor-link href="#about-ito" title="About ITO" />
        <a-anchor-link href="#compose-encrypted-posts" title="Compose Encrypted Posts" />
        <a-anchor-link href="#red-packet-and-wallet" title="Red Packet and Wallet" />
      </a-anchor>
    </div>
    <Footer />
  </div>
</template>
<script>
import Menu from "../components/Menu";
import Footer from "../components/Footer";
import 'ant-design-vue/dist/antd.css';

export default {
  name: "About",
  components: {
    Menu,
    Footer,
  },
  data: () => {
    return {
      isPc: true,
      targetOffset: 0,
    };
  },
  mounted() {
    this.isPc = !this._isMobile();
    this.targetOffset = window.innerHeight / 2;
  },
};
</script>
<style scoped>
.header {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background: #e6e8ec;
}

.header_text {
  display: flex;
  width: 600px;
  align-items: center;
  justify-content: center;
}

.about_img {
  height: 651px;
}

.content {
  display: flex;
  width: 100%;
  flex-direction: row;
}

@media screen and (max-width: 768px) {
  .header {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 120px 84px;
  }
  .about_img {
    margin-top: 45px;
  }
}

@media screen and (max-width: 375px) {
  .header {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 50px 15px;
    padding-bottom: 150px;
  }

  .header_text {
    width: auto;
  }

}
</style>
