<!--
 * @Descripttion:
 * @version:
 * @Author: jimmy
 * @Date: 2021-09-12 14:49:45
 * @LastEditors: jimmy
 * @LastEditTime: 2021-09-17 17:15:06
-->
<template>
    <div class="contentFooter">
      <div style="width: 1px; height: 160px;" v-if="hasSubscript" />
        <div class="body">
            <div class="leftBox">
                <div class="logoView"><img src="../assets/logo.webp" alt="" srcset="" style="width: 140px;height: 40px"></div>
                <div class="subtitle">Mask Network is developed and Maintained by Dimension. </div>
                <div class="subtitle mt10">Mask network is a free and open source software.</div>
                <div class="subtitle mt20 white">© 2018-2021 Mask.io</div>
            </div>
            <div class="rightBox">
                <div>
                    <div class="title">About</div>
                    <div class="list">
                        <div><a href="https://dimensiondev.github.io/Maskbook-VI/" target="_blank">Brand Guide</a></div>
                        <div><a href="mailto:info@dimension.im" target="_blank">Contact Us</a></div>
                        <div><a href="https://legal.mask.io/maskbook/" target="_blank">Privacy Policy</a></div>
                    </div>
                </div>
                <div class="bottomNavi">
                    <div class="title">Navigate</div>
                    <div class="naviBox">
                        <div class="list">
                            <div><a href="/news" target="_blank">News</a></div>
                            <div><a href="/faq" target="_blank">Help</a></div>
                            <div>Join Us</div>
                        </div>
                        <div class="list">
                            <div><a href="https://github.com/DimensionDev" target="_blank">Source Code</a></div>
                            <div>Hackathon</div>
                            <div>Bounty Program</div>
                        </div>
                        <div class="list">
                            <div><a href="/faq" target="_blank">FAQs</a></div>
                            <div><a href="https://realmaskbook.notion.site/realmaskbook/An-In-Complete-Guide-to-Mask-Network-3ce8000d37a74f9fb449e1d97ea4eddb" target="_blank">Tutorials</a></div>
                        </div>
                    </div>
                </div>
                <div class="Community">
                    <div class="title title2">Community</div>
                    <div class="commun">
                        <div class="navBox"><a href="https://www.facebook.com/masknetwork" target="_blank"><img src="../assets/nav-1.webp" style="width: 12px;"></a></div>
                        <div class="navBox"><a href="https://twitter.com/realMaskNetwork" target="_blank"><img src="../assets/nav-2.webp" style="width: 21px;"></a></div>
                        <div class="navBox"><a href="https://discord.gg/4SVXvj7" target="_blank"><img src="../assets/nav-3.webp" style="width: 21px;"></a></div>
                        <div class="navBox"><a href="https://t.me/maskbook_group#telegram" target="_blank"><img src="../assets/nav-4.webp" style="width: 19px;"></a></div>
                        <div class="navBox"><a href="https://github.com/DimensionDev" target="_blank"><img src="../assets/nav-5.webp" style="width: 18px;"></a></div>
                    </div>
                </div>

            </div>
        </div>
        <div class="footerSubtext">I thought what I'd do was, I'd pretend I was one of those deaf-mutes.</div>
        <div class="submitView" v-if="hasSubscript">
            <div class="news-letter-text">
              <p class="submitTitle">MASK NETWORK Newsletter</p>
              <p class="submitSubTitle">Follow us for more information about MASK</p>
            </div>
            <form
							class="submitClickView"
							name="subscription" 
							method="post"
							target="_blank"
							novalidate
							action="https://dimension.us20.list-manage.com/subscribe/post?u=bd44f8df98ab3d8daf8bbe020&amp;id=d23c8870f6">
              <input name="EMAIL" class="submitInput" type="email" placeholder="Please input your email address" />
              <md-button class="md-raised md-primary submitButton" type="submit">submit</md-button>
            </form>
          </div>
    </div>
</template>

<script>
export default {
	name: "Footer",
  props: {
    hasSubscript: {
      type: Boolean,
      default: false
    }
  }
};
</script>

<style scoped>
.contentFooter {
	background-color: #041b49;
	color: rgba(255, 255, 255, 0.8);
	position: relative;
}
.white {
	color: white;
}
.body {
	padding-top: 130px;
	padding-bottom: 90px;
	display: flex;
	justify-content: center;
}
.subtitle {
	font-size: 16px;
	font-weight: 400;
	width: 250px;
}
.mt10 {
	margin-top: 10px;
}
.mt20 {
	margin-top: 20px;
}
.leftBox {
	margin-right: 88px;
	padding-right: 88px;
	border-right: 1px solid rgba(255, 255, 255, 0.2);
}
.rightBox {
	display: flex;
}
.rightBox > div + div {
	margin-left: 100px;
}
.naviBox {
	display: flex;
}
.naviBox > div + div {
	margin-left: 100px;
}
.title {
	color: white;
	font-weight: 500;
	font-size: 24px;
	margin-bottom: 70px;
}
.list {
	font-size: 16px;
}
.list > div + div {
	margin-top: 40px;
}
.list > div a {
	color: rgba(255, 255, 255, 0.8);
	text-decoration: none !important;
}
.list > div a:hover {
	color: rgba(255, 255, 255, 0.8);
	text-decoration: none !important;
}
.footerSubtext {
	text-align: center;
	font-weight: 500;
	font-size: 20px;
	padding: 30px 0;
	border-top: 1px solid rgba(255, 255, 255, 0.25);
}
.submitView {
	background: linear-gradient(
		270.17deg,
		#e3f0ff 0.01%,
		#e3efff 99.16%
	);
	box-shadow: 0px 50px 16px rgba(10, 1, 40, 0.1);
	display: flex;
	flex-wrap: wrap;
	align-items: center;
	justify-content: space-between;
	padding: 40px;
	position: absolute;
	width: calc(100% - 300px);
	left: 0;
	right: 0;
	top: -80px;
	margin: auto;
}

.submitTitle {
	color: #0b0034;
	font-size: 30px;
	font-weight: 600;
	margin-bottom: 15px;
}

.submitClickView {
	display: flex;
	align-items: center;
}

.submitSubTitle {
	color: #3c4c76;
	font-size: 18px;
	font-weight: 400;
}
.submitInput {
	background: #ffffff;
	color: #0b0034;
  outline: none;	
	box-shadow: 0px 8px 8px rgba(27, 104, 242, 0.1);
	padding: 24px 0 24px 20px;
	border: none;
	width: 450px;
}
.submitButton {
	/* padding: 20px 0; */
	height: 65px;
	width: 107px;
	border-top-left-radius: 0px;
	border-bottom-left-radius: 0px;	
	margin: 0;
  background: #1C68F3;
}
.logoView {
	margin-bottom: 70px;
}
.commun {
	display: flex;
	flex-wrap: wrap;
	width: 220px;
	margin-top: -30px;
}
.commun > div {
	margin-left: 20px;
	margin-top: 20px;
}

.navBox {
	display: flex;
	align-items: center;
	justify-content: center;
	width: 48px;
	height: 48px;
	background-color: #1c2c4e;
	border-radius: 50%;
	cursor: pointer;
}

@media screen and (max-width: 844px) {
  .submitView {
    width: auto;
    padding-left: 0px;
    padding-right: 0px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .submitInput {
    width: 240px;
  }

  .news-letter-text {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
}

  @media screen and (max-width: 768px) {
	.body {
		flex-wrap: wrap;
    justify-content: left;
	}
	.leftBox {
		padding: 0;
    border-right: none;
		padding-bottom: 88px;
    margin: 0 0 78px 40px;
    border-bottom: 1px solid rgba(255, 255, 255, 0.2);
	}
	.subtitle {
		width: auto;
	}
	.rightBox {
		flex-wrap: wrap;
		justify-content: flex-start;
		padding: 0 40px;
	}
	.rightBox > div + div {
		margin-left: 0;
	}
	.Community {
		margin-top: 88px;
	}
	.commun {
		width: auto;
	}
	.footerSubtext {
		padding: 30px 0 70px 0;
	}
	.submitView {
		width: calc(100% - 130px);
	}
	.submitClickView {
		margin-top: 45px;
	}
}

@media screen and (max-width: 428px) {
	.body {
		padding-bottom: 20px;
		padding-top: 0px;
	}
	.leftBox {
		margin: 24px;
	}
	.rightBox {
		margin: 24px;
		padding: 0;
	}
	.bottomNavi {
		margin-top: 40px;
	}
	.naviBox > div + div {
		margin-left: 40px;
	}
	.Community, .commun {
		width: 100%;
	}
	.commun {
		justify-content: space-between;
	}
	.commun > div {
		margin: 0px;
	}
	.submitView {
		width: calc(100%);
	}
	.submitTitle {
		font-size: 20px;
	}
	.submitSubTitle {
		font-size: 16px;
	}
	.submitInput {
		width: 240px;
		padding: 19px 21px;
	}
	.submitButton {
		height: 53px;
	}
	.footerSubtext {
		color: #fff;
		margin: 0 24px;
		font-size: 14px;
		font-weight: 700;
		line-height: 1.5;
		text-align: start;
	}
	.title {
		margin-bottom: 40px;
	}
	.title2 {
		margin-bottom: 70px;
	}	
	.logoView {
		margin-bottom: 40px;
	}	
}
</style>
