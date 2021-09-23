<template>
  <div class="tutorial">
    <Menu/>

    <div class="header">
      <div class="text-box title">
        <span class="font-title">Send an Encrypted Text</span>
      </div>
      <div class="text-box">
        <span class="font-subtitle">1.Click the Mask Icon.</span>
      </div>
      <div class="text-box line">
        <span>todo。。。。。。。</span>
      </div>
      <img src="../assets/tutorial_1.webp"/><div class="header" />

      <div class="text-box">
        <span class="font-subtitle">2.Type in the message you would like to encrypt, then click "Finish" in the bottom right cornor.</span>
      </div>
      <div class="text-box line">
        <span>todo。。。。。。。</span>
      </div>
      <img src="../assets/tutorial_2.webp"/>
      <div class="header" />
      <div style="width: 100%">
        <a href="javascript:history.back()"><img src="../assets/arrow_left.svg"></a>
      </div>
      <div class="header" />

    </div>

    <Footer/>
  </div>
</template>

<script>
import Menu from "../components/Menu"
import Footer from "@/components/Footer"

export default {
  name: "Tutorial",
  components: {Footer, Menu}
}
</script>

<style scoped>
.header {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 120px 33%;
}
.text-box {
  width: 100%;
}

img {
  margin-top: 40px;
}

.line {
  margin-top: 20px;
}

.title {
  margin-bottom: 100px;
}

.font-title {
  font-style: normal;
  font-weight: bold;
  font-size: 64px;
  line-height: 64px;
  display: flex;
  align-items: center;
  letter-spacing: -0.02em;
}

.font-subtitle {
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 26px;
}
@media screen and (max-width: 768px) {
  .header {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 120px 16px;
  }
}
</style>
