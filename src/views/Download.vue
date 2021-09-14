<template>
<div class="download">
  <Menu/>
  <div class="content">
    <div>
      <h1>Mask welcome your use!</h1>
      <span>Enjoy the web3.0 world at your fingertips</span>
    </div>
    <div class="img-box">
      <img class="header" src="../assets/download_header.png" />
    </div>
    <div class="store-content">
      <div class="store-item">
        <h1>Chrome / Edge</h1>
        <span>Status: stable</span>
        <img src="../assets/icon_chrome.png"/>
        <div class="store-button">
          <span>Chrome Web Store</span>
        </div>
      </div>
      <div class="store-item">
        <h1>FireFox</h1>
        <span>Status: stable</span>
        <img src="../assets/icon_firefox.png"/>
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

      <img src="../assets/app_preview.png">
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
.content {
  display: flex;
  justify-content: center;
  flex-direction: row;
  flex-wrap: wrap;
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

.store-button {
  width: 180px;
  height: 56px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #1B1B1B;
  border-radius: 8px;
}

.store-button>span {
  color: white;
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
  background: url("../assets/mask_logo.png") space;
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


</style>
