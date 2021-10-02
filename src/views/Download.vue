<template>
<div class="download">
  <Menu v-bind:show-download="false" />
  <div class="header">
    <div class="title">
      <h1>Mask welcome your use!</h1>
      <span>Enjoy the web3.0 world at your fingertips</span>
    </div>
    <div class="img-box">
      <img class="header_text" src="../assets/download_header.webp" />
    </div>
    <div class="store-content">
      <div class="store-item store-space">
        <h1>Chrome / Edge</h1>
        <span>Status: stable</span>
        <img src="../assets/icon_chrome.webp"/>
        <div class="store-button">
          <span>Chrome Web Store</span>
        </div>
      </div>
      <div class="store-item store-space">
        <h1>FireFox</h1>
        <span>Status: stable</span>
        <img src="../assets/icon_firefox.webp"/>
        <div class="store-button">
          <span>ADD-Ons Store</span>
        </div>
      </div>
    </div>
    <div class="app-content">
      <div>
        <div class="text-box">
          <span class="font-large-white">Mobile App</span>
          <br/>
          <span class="font-white">Enjoy the web3.0 world at your fingertips</span>
        </div>

        <div style="margin-top: 40px">
          <img class="btn-white" style="margin-right: 40px" src="../assets/btn_apple.svg"/>
          <img class="btn-white" src="../assets/btn_play.svg"/>
        </div>

      </div>

      <img src="../assets/app_preview.webp">
    </div>
    <div class="apk-content">
      <div class="apk">
        <h2>APK</h2>
        <span>Status: Public Beta Test</span>
      </div>

      <div class="apk-button">
        <span>Github Release</span>
      </div>
    </div>
  </div>
  <Footer/>
</div>
</template>

<script>
import Menu from "@/components/Menu"
import Footer from "@/components/Footer"

export default {
  name: "Download",
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
.header {
  display: flex;
  justify-content: center;
  flex-direction: row;
  flex-wrap: wrap;
}
.title {
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin-top: 120px;
  margin-bottom: 120px;
}
.title > h1 {
  font-size: 64px;
}
.title > span {
  margin-top: 30px;
  text-align: center;
  font-size: 24px;
}
.img-box {
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 16px;
}
.store-content {
  width: 50%;
  display: flex;
  justify-content: space-around;
}

.store-item {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.store-space {

}

.store-button {
  width: 180px;
  height: 56px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #1B1B1B;
  border-radius: 8px;
}

.store-button > span {
  color: white;
}

.apk-button:hover,
.store-button:hover {
  -webkit-transition: all 0.2s linear;
  -moz-transition: all 0.2s linear;
  -o-transition: all 0.2s linear;
  transition: all 0.2s linear;
  background: #ffffffcf;
}
.btn-white:hover {
  border-radius: 8px;
  -webkit-transition: all 0.2s linear;
  -moz-transition: all 0.2s linear;
  -o-transition: all 0.2s linear;
  transition: all 0.2s linear;
  background: white;
}

.apk-button:hover > span,
.store-button:hover > span {
  color: #1B1B1B;
}

.app-content {
  margin-top: 120px;
  flex-direction: row;
  display: flex;
  height: 640px;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  background: #1C68F3;
}

.text-box {
  width: 300px;
}

.font-large-white {
  font-style: normal;
  font-weight: bold;
  font-size: 40px;
  line-height: 49px;
  color: #FFFFFF;
}

.font-white {
  font-style: normal;
  font-weight: normal;
  font-size: 24px;
  line-height: 29px;
  color: #FFFFFF;
  margin-top: 32px;
}

.btn-white {

}

.apk-content {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 508px;
  align-items: center;
  justify-content: center;
}

.apk {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 200px;
  width: 200px;
  background: url("../assets/mask_logo.webp") space;
}

.apk-button {
  background: #07080A;
  border-radius: 8px;
  width: 220px;
  height: 56px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 12px;
}

.apk-button > span {
  color: white;
}

@media screen and (max-width: 428px) {
  .store-content {
    width: 100%;
    display: flex;
    justify-content: space-around;
    flex-direction: column;
  }

  .store-space {
    margin-top: 36px;
    margin-bottom: 36px;
  }

  .app-content {
    width: 100%;
    height: 100%;
    background: #1C68F3;
    display: flex;
    flex-direction: column-reverse;
    padding-top: 220px;
  }

  .text-box {
    margin-left: 16px;
    margin-right: 16px;
    margin-top: 120px;
  }

  .btn-white {
    width: 140px;
    margin-bottom: 220px;
  }
}

</style>
