<!--
 * @Descripttion:
 * @version:
 * @Author: jimmy
 * @Date: 2021-09-12 14:49:27
 * @LastEditors: jimmy
 * @LastEditTime: 2021-09-14 16:02:25
-->
<template>
    <div class="menuContent" :style="{background: transparent?'transparent':'white'}">
        <link href="https://fonts.googleapis.com/css2?family=Material+Icons" rel="stylesheet">
        <div style="padding-left: 30px;">
            <img src="../assets/logo.webp" alt="" style="width: 137px;">
        </div>
        <md-tabs md-sync-route v-if="isPc" md-alignment="centered" style="flex: 1;" :class="{'md-transparent': transparent, 'md-accent': transparent}">
            <md-tab id="tab-home" md-label="Home" to="/">
              <router-view></router-view>
            </md-tab>
            <md-tab id="tab-news" md-label="News"></md-tab>
            <md-tab id="tab-community" md-label="Community"></md-tab>
            <md-tab id="tab-help" md-label="Help" to="/faq">
              <router-view></router-view>
            </md-tab>
            <md-tab id="tab-docs" md-label="Docs"></md-tab>
            <md-tab id="tab-about" md-label="About" to="about">
              <router-view></router-view>
            </md-tab>
        </md-tabs>
        <div v-else style="flex: 1"></div>
        <div style="margin: 22.5px 0;padding-right: 30px;">
            <div v-if="isPc" class="useMask" :class="{blue:!transparent,transparent}">Use Mask</div>
            <md-button v-else class="md-icon-button" @click="menuVisible = !menuVisible">
                <md-icon :style="{color:transparent?'white':''}">menu</md-icon>
            </md-button>
        </div>
        <md-drawer v-if="!isPc" :md-active.sync="menuVisible" :md-right="true" :md-fixed="true">
            <md-toolbar class="md-transparent" md-elevation="0">Mask</md-toolbar>
            <md-list>
                <md-list-item>
                    <!-- <md-icon>Home</md-icon> -->
                    <span class="md-list-item-text">Home</span>
                </md-list-item>

                <md-list-item>
                    <!-- <md-icon>send</md-icon> -->
                    <span class="md-list-item-text">News</span>
                </md-list-item>

                <md-list-item>
                    <!-- <md-icon>delete</md-icon> -->
                    <span class="md-list-item-text">Community</span>
                </md-list-item>

                <md-list-item>
                    <!-- <md-icon>error</md-icon> -->
                    <span class="md-list-item-text">Help</span>
                </md-list-item>
                <md-list-item>
                    <!-- <md-icon>error</md-icon> -->
                    <span class="md-list-item-text">Docs</span>
                </md-list-item>
                <md-list-item>
                    <!-- <md-icon>error</md-icon> -->
                    <span class="md-list-item-text">About</span>
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
    z-index: 2;
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
</style>
