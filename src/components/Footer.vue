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
                        <div>Brand Guide</div>
                        <div>Contact Us</div>
                        <div>Privacy Policy</div>
                    </div>
                </div>
                <div class="bottomNavi">
                    <div class="title">Navigate</div>
                    <div class="naviBox">
                        <div class="list">
                            <div>News</div>
                            <div>Help</div>
                            <div>Join Us</div>
                        </div>
                        <div class="list">
                            <div>Source Code</div>
                            <div>Hackathon</div>
                            <div>Bounty Program</div>
                        </div>
                        <div class="list">
                            <div>FAQs</div>
                            <div>Tutorials</div>
                        </div>
                    </div>
                </div>
                <div class="Community">
                    <div class="title">Community</div>
                    <div class="commun">
                        <div class="navBox"><img src="../assets/nav-1.webp" style="width: 12px;"></div>
                        <div class="navBox"><img src="../assets/nav-2.webp" style="width: 21px;"></div>
                        <div class="navBox"><img src="../assets/nav-3.webp" style="width: 21px;"></div>
                        <div class="navBox"><img src="../assets/nav-4.webp" style="width: 19px;"></div>
                        <div class="navBox"><img src="../assets/nav-5.webp" style="width: 18px;"></div>
                    </div>
                </div>

            </div>
        </div>
        <div class="footerSubtext">I thought what I'd do was, I'd pretend I was one of those deaf-mutes.</div>
        <div class="submitView" v-if="hasSubscript">
            <div>
              <p class="submitTitle">MASK NETWORK Newsletter</p>
              <p class="submitSubTitle">Follow us for more information about MASK</p>
            </div>
            <div class="submitClickView">
              <input class="submitInput" type="text" placeholder="Please input your email address" />
              <md-button class="md-raised md-primary submitButton">submit</md-button>
            </div>
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
.list > div + div {
	margin-top: 40px;
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
	box-shadow: 0px 8px 8px rgba(27, 104, 242, 0.1);
	padding: 24px 0 24px 20px;
	border: none;
	width: 450px;
}
.submitButton {
	/* padding: 20px 0; */
	height: 64px;
	width: 107px;
	margin: 0;
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
}

.navBox:hover {
	-webkit-transition: all 0.2s linear;
	-moz-transition: all 0.2s linear;
	-o-transition: all 0.2s linear;
	transition: all 0.2s linear;
	background-color: rgba(255, 255, 255, 0.4);
}

@media screen and (max-width: 768px) {
	.body {
		flex-wrap: wrap;
	}
	.leftBox {
		padding: 0;
		margin: 0;
		border-right: none;
		padding-bottom: 88px;
		margin-bottom: 78px;
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
		padding-bottom: 40px;
		padding-top: 30px;
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
	.commun > div {
		margin-left: 10px;
		margin-top: 20px;
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
		width: 204px;
		padding: 19px 21px;
	}
	.submitButton {
		height: 53px;
	}
	.footerSubtext {
		margin: 0 24px;
		font-size: 14px;
		font-weight: 700;
		text-align: start;
	}
}
</style>
