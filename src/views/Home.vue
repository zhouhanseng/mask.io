<!--
 * @Descripttion:
 * @version:
 * @Author: jimmy
 * @Date: 2021-09-12 14:48:18
 * @LastEditors: jimmy
 * @LastEditTime: 2021-09-22 13:54:25
-->
<template>
  <div class="home">
    <!-- 顶部菜单组件，是否通用随意。 -->
    <!-- 注意在移动端下菜单收到右侧菜单里，建议考虑采用 vue3-material 的 appbar -->
    <!-- 弹出的 cookie 应该是 snackbar -->
    <Menu blue-logo="false" transparent />
    <!-- 这里应有一吨 Flex 布局 -->
    <div>
      <div v-if="isPc">
        <img src="../assets/index_head.webp" alt="" style="width: 100%;margin-top: -81px;z-index:-1;">
      </div>
      <div v-else :style="{height: `${headImageViewHeight}px`}" class="bgImgView" style="margin-top: -81px;z-index:-1;">
        <img ref="bgImg" src="../assets/index_head.webp" :style="{transform:`scale(${imgSize})`}" alt="">
      </div>
      <div>
          <div class="mainBox">
            <div>
              <p class="mainTitle black" style="margin-bottom: 50px;">What is Mask?</p>
              <p class="subTitle black">The bridge between the Web 2.0 and Web 3.0.</p>
              <p class="subTitle black">The defenders to data autonomy.</p>
            </div>
            <div>
              <img class="mainBoxImg" src="../assets/img_1.png" alt="" srcset="" style="mix-blend-mode: multiply">
            </div>
          </div>
          <div class="secView">
            <div class="secBox">
              <div>
                <p class="mainTitle white" style="text-align: left;">Discover</p>
              </div>
              <div class="secBoxBody white">
                <p>INTERACT WITH FRIENDS ON SOCIAL MEDIA</p>
                <p>IN A FREE, DECENTRALIZED,</p>
                <p>WEB 3.0 WAY</p>
              </div>
            </div>
            <div style="width: 100%">
              <img style="width: 100%" src="../assets/discover.webp" alt="" srcset="" class="mainImg">
            </div>
          </div>
          <div class="iconList">
            <div class="iconBox">
              <div class="iconBoxIcon"><img src="../assets/Menu.webp" alt="" srcset="" style="width: 48px;height: 48px"></div>
              <div class="iconTitle">
                <p>Send encrypted messages to designated receivers</p>
              </div>
            </div>
            <div class="iconBox">
              <div class="iconBoxIcon"><img src="../assets/Shield.webp" alt="" srcset="" style="width: 48px;height: 48px"></div>
              <div class="iconTitle">Protect your privacy</div>
            </div>
            <div class="iconBox">
              <div class="iconBoxIcon"><img src="../assets/Document.webp" alt="" srcset="" style="width: 48px;height: 48px"></div>
              <div class="iconTitle">
                <p>Defend your data</p>
                <p>autonomy</p>
              </div>
            </div>
            <div class="iconBox">
              <div class="iconBoxIcon"><img src="../assets/Wallet.webp" alt="" srcset="" style="width: 48px;height: 48px"></div>
              <div class="iconTitle">
                <p>Discover ownership</p>
                <p>economy</p>
              </div>
            </div>
          </div>
          <div class="centerView">
            <p class="centerTitle">Browser Extension</p>
            <p class="centerSubTitle">A SEAMLESS WEB 3.0 EXPERIENCE</p>
            <p class="centerSubTitle">LOG IN WITH MASK ID TO ENJOY THE DECENTRALIZED WORLD</p>
          </div>
          <div class="textImgView reverse">
            <div class="textWidth">
              <p class="textTitle">ITO (Initial Twitter Offering)</p>
              <p class="textSubTitle">Launch decentralized asset freely and participate in token launch directly  on Twitter</p>
            </div>
            <div>
              <img class="mainImg" src="../assets/ito.webp" alt="" srcset="">
            </div>
          </div>
          <div class="textImgView">
            <div>
              <img src="../assets/redpack.webp" alt="" srcset="" class="mainImg">
            </div>
            <div class="textWidth">
              <p class="textTitle">Red Packet</p>
              <p class="textSubTitle">Interact with your friends with crypto assets on social media.Borderless payment Claim and hand out crypto assets on ETH, BSC, and Polygon.</p>
            </div>
          </div>
          <div class="textImgView reverse">
            <div class="textWidth">
              <p class="textTitle">File Service</p>
              <p class="textSubTitle">Decentralized file storage, permanently.Upload and share files to your Mask friends on top of Arweave Network</p>
            </div>
            <div>
              <img src="../assets/fileservice.webp" alt="" srcset="" class="mainImg">
            </div>
          </div>
          <div class="textImgView">
            <div>
              <img src="../assets/transak.webp" alt="" srcset="" class="mainImg">
            </div>
            <div class="textWidth">
              <p class="textTitle">Transak</p>
              <p class="textSubTitle">Fiat On-Ramp Aggregator on Twitter.Buy crypto in 60+ countries with transak support.</p>
            </div>
          </div>
          <div class="textImgView reverse">
            <div class="textWidth">
              <p class="textTitle">Markets</p>
              <p class="textSubTitle">Display token information, price charts and exchange information directly on social media. </p>
            </div>
            <div>
              <img src="../assets/markets.webp" alt="" srcset="" class="mainImg">
            </div>
          </div>
          <div class="textImgView">
            <div>
              <img src="../assets/nft.webp" alt="" srcset="" class="mainImg">
            </div>
            <div class="textWidth">
              <p class="textTitle">NFT</p>
              <p class="textSubTitle">Display specific information of collectibles in Opensea and Rarible, make an offer directly on social media.</p>
            </div>
          </div>
          <div class="textImgView reverse">
            <div class="textWidth">
              <p class="textTitle">Swap</p>
              <p class="textSubTitle">Purchase tokens through DEX without additional fees and restrictions.</p>
            </div>
            <div>
              <img src="../assets/swap.webp" alt="" srcset="" class="mainImg">
            </div>
          </div>
          <div class="centerView">
            <p class="centerTitle bottomTitle">Join the Mask Network Community</p>
            <p class="centerSubTitle bottomSubTitle">Mask Network is trusted and supported by an active community of users and contributors. Join us!</p>
          </div>
          <div class="iconList iconlist3">
            <div class="iconBox ic3">
              <div class="iconBoxIcon"><img src="../assets/github.webp" alt="" srcset="" style="width: 48px;height: 48px"></div>
              <div class="iconTitle">
                <p>GitHub</p>
              </div>
            </div>
            <div class="iconBox ic3">
              <div class="iconBoxIcon"><img src="../assets/Tick.webp" alt="" srcset="" style="width: 48px;height: 48px"></div>
              <div class="iconTitle">MaskDao</div>
            </div>
            <div class="iconBox ic3">
              <div class="iconBoxIcon"><img src="../assets/Menu.webp" alt="" srcset="" style="width: 48px;height: 48px"></div>
              <div class="iconTitle">
                <p>Mask Snapshot</p>
              </div>
            </div>
          </div>
          <div class="partnerView">
            <div class="title">Partner&Supporter</div>
            <div class="list">
              <div>
                  <img class="partImg" src="../assets/p1.webp" alt="" srcset="">
              </div>
              <div>
                  <img class="partImg" src="../assets/p2.webp" alt="" srcset="">
              </div>
              <div>
                  <img class="partImg" src="../assets/p3.webp" alt="" srcset="">
              </div>
              <div>
                  <img class="partImg" src="../assets/p4.webp" alt="" srcset="">
              </div>
              <div>
                  <img class="partImg" src="../assets/p5.webp" alt="" srcset="">
              </div>
            <!-- </div>
            <div class="list"> -->
              <div>
                  <img class="partImg" src="../assets/p6.webp" alt="" srcset="">
              </div>
              <div>
                  <img class="partImg" src="../assets/p7.webp" alt="" srcset="">
              </div>
              <div>
                  <img class="partImg" src="../assets/p8.webp" alt="" srcset="">
              </div>
              <div>
                  <img class="partImg" src="../assets/p9.webp" alt="" srcset="">
              </div>
              <div>
                  <img class="partImg" src="../assets/p10.webp" alt="" srcset="">
              </div>
            </div>
          </div>
          <md-snackbar :md-position="'center'" :md-duration="Infinity" :md-active.sync="showSnackbar" md-persistent>
            <p style="line-height: 24px">We use cookies to enhance your experience, analyze our traffic, and for security and marketing. By visiting our website you agree to our use of cookies.<span style="color: #0F5DE9;">*Read more about cookies*</span></p>
            <md-button class="md-raised md-primary cookieSubmitButton" @click="showSnackbar = false">I Accept</md-button>
          </md-snackbar>
      </div>
    </div>
    <Footer has-subscript="true" />
    <!-- 底部深蓝色通用页脚 -->
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import Footer from "../components/Footer";
import Menu from "../components/Menu";
// let lastScroll = 0;
export default {
	name: "Home",
	components: {
		Menu,
		Footer,
	},
	data: () => {
		return {
			showSnackbar: true,
			headImageViewHeight: 812,
			imgSize: 4.25, // 3.8,
			imgWidth: 500,
			isPc: true,
		};
	},
	mounted() {
		window.addEventListener("scroll", this.getScroll);
		this.isPc = !this._isMobile();
	},
	destroyed() {
		window.removeEventListener("scroll", this.getScroll);
	},
	methods: {
		getScroll() {
			if (this.isPc) {
				return;
			}
			const scroll = document.documentElement.scrollTop;
			const ratio = 598 / scroll;
			// let isdown = scroll > lastScroll;
			// lastScroll = scroll;
			// console.log("this.imgWidth", this.imgWidth);
			// if (isdown) {
			// 	if (this.imgWidth <= 100) {
			// 		this.imgWidth = 100;
			// 		return;
			// 	}
			// 	this.imgWidth = this.imgWidth - 10;
			// } else {
			// 	if (this.imgWidth >= 500) {
			// 		this.imgWidth = 500;
			// 		return;
			// 	}
			// 	this.imgWidth = this.imgWidth + 10;
			// }

			this.imgSize = ratio <= 1 ? 1 : ratio > 4.25 ? 4.25 : ratio;
			this.headImageViewHeight = this.$refs.bgImg.getBoundingClientRect().height;
		},
	},
};
</script>
<style scoped>
.centerView {
	text-align: center;
	margin-top: 130px;
	margin-bottom: 80px;
}
.mainBox {
	background: linear-gradient(180deg, #e3f0ff 0%, #ffffff 100%);
	display: flex;
	flex-wrap: wrap;
	align-items: center;
	justify-content: center;
	padding: 120px 0;
}
.mainBoxImg {
	width: 800px;
	height: auto;
	mix-blend-mode: multiply;
}
.secView {
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
}
.secBox {
	background: linear-gradient(180deg, #c1190f 0%, #dd615a 100%);
	padding: 60px;
	width: 740px;
	display: flex;
	flex-direction: column;
}
.secBoxBody {
	margin-top: 200px;
}
.secBoxBody > p {
  font-size: 24px;
}
.iconList {
	display: flex;
	justify-content: space-between;
	/* align-items: center; */
	flex-wrap: wrap;
	margin: 0 240px;
	margin-top: 80px;
}
.mainImg {
	width: 700px;
	/* height: 900px; */
}
.iconBox {
	display: flex;
	flex: 1;
	flex-direction: column;
	align-items: center;
}
.iconBoxIcon {
	width: 96px;
	height: 96px;
	border-radius: 20px;
	background: #f8f7ff;
	display: flex;
	justify-content: center;
	align-items: center;
	margin-bottom: 30px;
}
.iconTitle {
	text-align: center;
	font-weight: 700;
	font-size: 20px;
  line-height: 24px;
	color: #1b1b1b;
}
.mainTitle {
	font-size: 64px;
	line-height: 50px;
	font-weight: 700;
}
.subTitle {
	font-size: 32px;
	font-weight: 700;
}
.subTitle + .subTitle {
	margin-top: 40px;
  line-height: 24px;
}
.centerTitle {
	color: #0b0034;
	font-size: 42px;
	font-weight: 600;
	margin-bottom: 60px;
}
.centerSubTitle {
	color: #777e90;
	font-size: 24px;
	line-height: 20px;
	margin: 0;
	margin-bottom: 10px;
}
.textImgView {
	display: flex;
	justify-content: space-evenly;
	flex-wrap: wrap;
}
.textImgView.reverse {
	flex-wrap: wrap-reverse;
}
.textImgView + .textImgView {
	margin-top: 80px;
}
.textWidth {
	width: 620px;
	margin-top: 30px;
}
.textTitle {
	font-weight: 700;
	font-size: 40px;
  color: #07080A;
}
.textSubTitle {
	font-weight: 600;
	font-size: 24px;
	margin-top: 350px;
  color: #07080A;
  line-height: 32px;
}
.black {
	color: #07080a;
}
.white {
	color: white;
}
.partnerView {
	background-color: #f8fbff;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	padding: 80px 330px;
	margin-top: 140px;
}
.partnerView .title {
	color: #0b0034;
	font-size: 42px;
	font-weight: 600;
	margin-bottom: 80px;
}
.partnerView .list {
	display: flex;
	align-items: center;
	justify-content: space-evenly;
	flex-wrap: wrap;
}
.partnerView .list > div {
	margin: 45px 60px;
	width: 200px;
	height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.partImg {
  width: 200px;
	filter: grayscale(100%);
	-webkit-transition: -webkit-filter 200ms linear;
}
.partImg:hover {
	filter: none;
}

.cookieSubmitButton {
	border-radius: 8px;
	height: 55px;
	width: 105px;
	font-size: 14px;
}
@media screen and (max-width: 1440px) {
	.mainBoxImg {
		width: 423px;
		height: auto;
		margin-top: 50px;
	}
	.mainTitle {
		font-size: 44px;
		line-height: 50px;
		font-weight: 700;
	}
	.subTitle {
		font-size: 28px;
		font-weight: 700;
	}
	.secBox {
		background: linear-gradient(180deg, #c1190f 0%, #dd615a 100%);
		padding: 60px;
		width: 640px;
		display: flex;
		flex-direction: column;
	}
	.partnerView {
		padding: 80px 150px;
	}
}

@media screen and (max-width: 844px){
  .textWidth {
    width: 350px;
  }
  .secBoxBody {
    margin-top: 100px;
  }
}

@media screen and (max-width: 768px) {
	.bgImgView {
		display: flex;
		align-items: center;
		overflow: hidden;
	}
	.mainBox {
		padding: 40px 0;
	}
	.mainBoxImg {
		width: 483px;
		height: auto;
		margin-top: 50px;
	}
	.mainTitle {
		font-size: 40px;
		text-align: center;
	}
	.subTitle {
		text-align: center;
	}
	.secView {
		margin: 0 34px;
	}
	.textWidth {
		margin-top: 60px;
	}
	.secBox {
		margin-bottom: 20px;
	}
	.bottomTitle {
		margin: 30px 100px;
		line-height: 60px;
	}
	.bottomSubTitle {
		margin: 30px 100px;
		line-height: 40px;
	}
	.iconBox {
		margin: 40px;
	}
	.iconTitle {
		font-size: 14px;
	}
	.iconList {
		margin: 0 100px;
	}
  .iconBox {
    min-width: 200px;
    max-width: 204px;
  }
	.partnerView {
		padding: 80px 0px;
	}
	.partnerView .title {
		margin-bottom: 60px;
	}
	.partnerView .list > div {
		margin: 15px 0;
    max-width: 30%;
    display: flex;
    justify-content: center;
    align-items: center;
	}
}

@media screen and (max-width: 428px) {
	.headImgView {
		height: 812px;
	}
	.headImgView .headImg {
		background-image: url("../assets/index_head.webp");
		width: 100%;
		height: 812px;
		background-position: center;
		background-size: 500%;
		background-repeat: no-repeat;
	}
	.mainBox {
		padding: 40px 0;
	}
	.mainTitle {
		font-size: 40px;
		text-align: center;
	}
	.secView {
		margin: 0 12px;
	}
	.secBox {
		margin-bottom: 0px;
	}
	.centerTitle {
		font-size: 32px;
	}
	.centerSubTitle {
		font-size: 16px;
	}
	.textImgView {
		margin: 0 12px;
	}
	.textTitle {
		font-size: 32px;
	}
	.textSubTitle {
		margin-top: 50px;
		font-size: 16px;
	}
	.textImgView + .textImgView {
		margin-top: 60px;
	}
	.bottomTitle {
		font-size: 24px;
		margin: 30px 50px;
	}
	.bottomSubTitle {
		font-size: 16px;
		margin: 30px 30px;
	}
	.mainImg {
		width: 350px;
		/* height: 450px; */
	}
	.subTitle {
		text-align: center;
	}
	.iconTitle {
		font-size: 14px;
	}
	.iconList {
		margin: 0 60px;
	}
  .iconBox {
    min-width: 120px;
    max-width: 120px;
    margin-left: 0;
    margin-right: 0;
  }

  .ic3 {
    min-width: 84px;
    max-width: 84px;
  }

  .iconlist3 {
    margin-left: 30px;
    margin-right: 30px;
  }

  .partImg {
    margin: 20px;
    width: 100px;
    /* ↑ */
    /*调研后决定 partner img 尺寸不动*/
    /*稿子上单个图片宽度为 100*/
    /*iPhone 12 Pro 的 viewport 宽度为 390*/
    /*再缩得出事*/
    height: auto;
  }
}
</style>
