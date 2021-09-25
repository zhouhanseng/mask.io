<template>
  <div class="tutorial">
    <Menu/>

    <div class="header">

      <VueShowdown
          :markdown="this.fileContent"
          flavor="github"
          :options="{ emoji: true }"
      />

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
import Footer from "../components/Footer"
import VueShowdown from 'vue-showdown'

export default {
  name: "Tutorial",
  components: {Footer, Menu, VueShowdown: VueShowdown.VueShowdown},
  data: function() {
    return {
      fileContent: null,
      fileToRender: null,
      rawContent: null
    };
  },
  created() {
    this.fileContent = "loading"
  },
  mounted: function() {
    //  const fileToRender = `./assets/documentation/general/welcome.md`;
    //const rawContent = ""; // Read the file content using fileToRender
    // this.fileContent = "### marked(rawContent) should get executed";
    this.getContent();
  },
  methods: {
    getContent() {
      this.fileToRender = this.$route.query.a
      this.fileContent = "loading";
      // var self;
      this.$http.get(window.location.origin + "/" + this.fileToRender).then(
          response => {
            // get body data

            this.fileContent = response.body;
          },
          () => {
            // error callback
            this.fileContent = "An error ocurred";
          }
      );
    }
  }
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
