<!--
 * @Descripttion:
 * @version:
 * @Author: jimmy
 * @Date: 2021-09-12 14:49:27
 * @LastEditors: jimmy
 * @LastEditTime: 2021-09-27 14:01:00
-->
<template>
    <div class="menuContent" :style="{background: transparent?'transparent':'white'}">
        <link href="https://fonts.googleapis.com/css2?family=Material+Icons" rel="stylesheet">
        <div style="padding-left: 30px;">
          <img v-if="blueLogo === true" src="../assets/logo_blue.png" alt="" style="width: 137px;">
          <img v-else src="../assets/logo.webp" alt="" style="width: 137px;">
        </div>
        <md-tabs md-sync-route v-if="isPc" md-alignment="centered" style="flex: 1;" :class="{'md-transparent': transparent, 'md-accent': transparent}">
            <md-tab id="tab-home" md-label="Home" to="/">
              <router-view></router-view>
            </md-tab>
            <md-tab id="tab-news" md-label="News" to="/news"></md-tab>
            <md-tab id="tab-community" md-label="Community" href="https://we.mask.io/"></md-tab>
            <md-tab id="tab-help" md-label="Help" to="/faq">
              <router-view></router-view>
            </md-tab>
            <md-tab id="tab-docs" md-label="Docs" to="https://app.gitbook.com/@kan-1/s/mask-network/"></md-tab>
            <md-tab id="tab-about" md-label="About" to="/about">
              <router-view></router-view>
            </md-tab>
        </md-tabs>
        <div v-else style="flex: 1"></div>
        <div style="margin: 15px 0;padding-right: 30px;">
            <template v-if="showDownload">
                <md-button v-if="isPc" class="useMask" :class="{blue:!transparent,transparent}" href="/download">Use Mask</md-button>
                <md-button v-else class="md-icon-button" @click="menuVisible = !menuVisible">
                    <md-icon :style="{color:transparent?'white':''}">menu</md-icon>
                </md-button>
            </template>
            <template v-else><div class="emptyDiv"></div></template>
        </div>
        <md-drawer v-if="!isPc" :md-active.sync="menuVisible" :md-left="true" :md-fixed="true">  
            <md-list>
                <md-list-item>
                    <!-- <md-icon>Home</md-icon> -->
                    <a class="md-list-item-text" href="/">Home</a>
                </md-list-item>

                <md-list-item>
                    <!-- <md-icon>send</md-icon> -->
                    <a class="md-list-item-text" href="/news">News</a>
                </md-list-item>

                <md-list-item>
                    <!-- <md-icon>delete</md-icon> -->
                    <a class="md-list-item-text" href="https://we.mask.io/">Community</a>
                </md-list-item>

                <md-list-item>
                    <!-- <md-icon>error</md-icon> -->
                    <a class="md-list-item-text" href="/faq">Help</a>
                </md-list-item>
                <md-list-item>
                    <!-- <md-icon>error</md-icon> -->
                    <a class="md-list-item-text" href="https://app.gitbook.com/@kan-1/s/mask-network/">Docs</a>
                </md-list-item>
                <md-list-item>
                    <!-- <md-icon>error</md-icon> -->
                    <a class="md-list-item-text" href="/about">About</a>
                </md-list-item>
                <md-list-item>
                    <template v-if="showDownload">
                        <a class="md-list-item-text" href="/download">Use Mask</a>
                    </template>
                </md-list-item> 
            </md-list>
      </md-drawer>
    </div>
</template>

<script>
export default {
	name: "Menu",
	props: {
		transparent: {
			type: Boolean,
			default: false,
		},
        blueLogo: {
            type: Boolean,
            default: true,
        },
        showDownload: {
            type: Boolean,
            default: true,
        },
	},
	data: () => {
		return {
			isPc: true,
			menuVisible: false,
		};
	},
	mounted() {
		this.isPc = !this._isMobile();
	},
	methods: {},
};
</script>

<style scoped>
.menuContent {
	display: flex;
	align-items: center;
    position: relative;
}
.useMask {
	padding: 11px 20px;
	border-radius: 25px;
}
.useMask.blue {
	background: #1c68f3;
	color: white;
}
.useMask.transparent {
	background: transparent;
    border: 1px solid white;
	color: white;
}
.emptyDiv{ 
    height: 48px;
}
.md-list-item-text {
    color: rgba(0, 0, 0, 0.87) !important
}
</style>
