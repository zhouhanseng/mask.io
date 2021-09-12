<!--
 * @Descripttion: 
 * @version: 
 * @Author: jimmy
 * @Date: 2021-09-12 14:48:18
 * @LastEditors: jimmy
 * @LastEditTime: 2021-09-12 17:03:42
-->
<template>
  <div class="home">
    <!-- 顶部菜单组件，是否通用随意。 -->
    <!-- 注意在移动端下菜单收到右侧菜单里，建议考虑采用 vue3-material 的 appbar -->
    <!-- 弹出的 cookie 应该是 snackbar -->
    <Menu />
    <!-- 这里应有一吨 Flex 布局 -->
    <div>
      <div>
        <img src="../assets/index_head.jpeg" alt="" srcset="">
      </div>
      <div>
          <div class="mainBox">
            <div>
              <p class="mainTitle black">What is Mask?</p>
              <p class="subTitle black">The bridge between the Web 2.0 and Web 3.0.</p>
              <p class="subTitle black">The defenders to data autonomy.</p>
            </div>
            <div>
              <img src="../assets/test.jpg" alt="" srcset="" style="width: 800px;height: 590px">
            </div>
          </div>
          <div class="secView">
            <div class="secBox">
              <div>
                <p class="mainTitle white">Discover</p>
              </div>
              <div class="white">
                <p>INTERACT WITH FRIENDS ON SOCIAL MEDIA</p>
                <p>IN A FREE, DECENTRALIZED,</p>
                <p>WEB 3.0 WAY</p>
              </div>
              <div></div>
            </div>
            <div>
              <img src="../assets/test.jpg" alt="" srcset="" style="width: 700px;height: 900px">
            </div>
          </div>
          <div class="iconList">
            <div class="iconBox">
              <div class="iconBoxIcon">icon</div>
              <div class="iconTitle">
                <p>Send encrypted messages</p>
                <p>to designated receivers</p>
              </div>
            </div>
            <div class="iconBox">
              <div class="iconBoxIcon">icon</div>
              <div class="iconTitle">Protect your privacy</div>
            </div>
            <div class="iconBox">
              <div class="iconBoxIcon">icon</div>
              <div class="iconTitle">
                <p>Defend your data</p>
                <p>autonomy</p>
              </div>
            </div>
            <div class="iconBox">
              <div class="iconBoxIcon">icon</div>
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
      </div>
    </div>
    <Footer />
    <!-- 底部深蓝色通用页脚 -->
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import Footer from "../components/Footer";
import Menu from "../components/Menu";
export default {
	name: "Home",
	components: {
		Menu,
		Footer,
	},
	mounted() {},
	methods: {},
};
</script>
<style scoped>
.centerView {
  text-align: center;
}
.mainBox {
	background: linear-gradient(180deg, #e3f0ff 0%, #ffffff 100%);
	display: flex;
	flex-wrap: wrap;
	align-items: center;
	justify-content: center;
	padding: 120px 0;
}
.secView {
	display: flex;
	flex-wrap: wrap;
	align-items: center;
	justify-content: center;
}
.secBox {
	background: linear-gradient(180deg, #c1190f 0%, #dd615a 100%);
	padding: 60px;
	width: 740px;
	height: 900px;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
}
.iconList {
	display: flex;
	justify-content: space-between;
	/* align-items: center; */
	flex-wrap: wrap;
	margin: 0 240px;
}
.iconBox {
	display: flex;
	flex: 1;
	flex-direction: column;
	align-items: center;
	justify-content: space-between;
}
.iconBoxIcon {
	width: 96px;
	height: 96px;
	border-radius: 20px;
	background: #f8f7ff;
	display: flex;
	justify-content: center;
	align-items: center;
}
.iconTitle {
	text-align: center;
	font-weight: 700;
	font-size: 20px;
	color: #1b1b1b;
}
.mainTitle {
	font-size: 64px;
	line-height: 50px;
	font-weight: 700;
}
.subTitle {
	font: 32px;
	font-weight: 700;
}
.centerTitle {
  color: #0B0034;
  font-size: 42px;
  font-weight: 600;
}
.centerSubTitle {
  color: #777E90;
  font-size: 24px;
  line-height: 17px;
  margin: 0;
  margin-bottom: 10px;
}
.black {
	color: #07080a;
}
.white {
	color: white;
}
@media screen and (max-width: 768px) {
	.mainBox {
		padding: 40px 0;
	}
	.mainTitle {
		font-size: 40px;
		text-align: center;
	}
	.subTitle {
		text-align: center;
	}
	.iconBox {
		margin: 50px;
	}
	.iconTitle {
		font-size: 14px;
	}
	.iconList {
		margin: 0 100px;
	}
}

@media screen and (max-width: 375px) {
	.mainBox {
		padding: 40px 0;
	}
	.mainTitle {
		font-size: 40px;
		text-align: center;
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
}
</style>
