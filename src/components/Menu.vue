<!--
 * @Descripttion: 
 * @version: 
 * @Author: jimmy
 * @Date: 2021-09-12 14:49:27
 * @LastEditors: jimmy
 * @LastEditTime: 2021-09-14 14:08:46
-->
<template>
    <div class="menuContent">
        <link href="https://fonts.googleapis.com/css2?family=Material+Icons" rel="stylesheet">
        <div style="padding-left: 30px;">Mask</div>
        <md-tabs v-if="isPc" md-alignment="centered" style="flex: 1">
            <md-tab id="tab-home" md-label="Home"></md-tab>
            <md-tab id="tab-news" md-label="News"></md-tab>
            <md-tab id="tab-community" md-label="Community"></md-tab>
            <md-tab id="tab-help" md-label="Help"></md-tab>
            <md-tab id="tab-docs" md-label="Docs"></md-tab>
            <md-tab id="tab-about" md-label="About"></md-tab>
        </md-tabs>
        <div v-else style="flex: 1"></div>
        <div style="margin: 22.5px 0;padding-right: 30px;">
            <div v-if="isPc" class="useMask blue">Use Mask</div>
            <md-button v-else class="md-icon-button" @click="menuVisible = !menuVisible">
                <md-icon>menu</md-icon>
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
	background: white;
}
.useMask {
	padding: 11px 20px;
	border-radius: 25px;
}
.useMask.blue {
	background: #1c68f3;
	color: white;
}
</style>