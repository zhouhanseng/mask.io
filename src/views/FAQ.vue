<!--
 * @Descripttion:
 * @version:
 * @Author: jimmy
 * @Date: 2021-09-12 14:50:19
 * @LastEditors: jimmy
 * @LastEditTime: 2021-09-14 14:08:01
-->
<template>
  <div class="faq">
    <Menu />
    <div class="header">
      <div class="header_text">
        <h1>How can we help you?</h1>
      </div>
      <img class="about_img"  src="../assets/faq_img.png">
    </div>
    <div class="content">
      <div class="questions">
        <span>FAQ\</span><span>tutorial</span>

        <div>
          <div><img src="../assets/faq_arrow.png" /><h2>Getting Started</h2></div>
          <a-collapse default-active-key="1" :bordered="false">

            <a-collapse-panel key="1" header="Where can I use Mask Network">
              <p>Mask Network is now available on Twitter, Facebook, and Minds.com. We will support more platforms in the future.</p>
            </a-collapse-panel>

            <a-collapse-panel key="2" header="How to install Mask Network">
              <p>Go to https://mask.io/install to install Mask Network directly. You can also install through the Chrome Webstore, Google Play Store(beta), or the Apple App Store(beta).</p>
            </a-collapse-panel>

            <a-collapse-panel key="3" header="How to create a persona">
              <p>Mask Network will automatically remind your own peronas since you use for the first time.Just follow the steps! Click “Enter the Dashboard” -> “Personas” -> “Create persona” -> Enter Name -> Click “ Create” -> Choose to connect Twitter or Facebook account -> Mask Network will automatically find your username, confirm and click “Connect” -> Done, remember to “Say Hello to everyone”</p>
            </a-collapse-panel>

            <a-collapse-panel key="4" header="Explain like I am a nerd">
              <p>Alice encrypts cleartext (M) with a random AES key (K) to get ciphertext (CT) and then securely shares K via ECIES over SECP256K1 with Bob using Bob's public key (K.Bob). Alice publishes CT on Facebook and synchronizees K.Bob over GUN. Bob can then retrieve K to decrypt M.</p>
            </a-collapse-panel>
          </a-collapse>

          <div><img src="../assets/faq_swap.png" /><h2>Trade and Swaps</h2></div>
          <a-collapse default-active-key="1" :bordered="false">

            <a-collapse-panel key="1" header="Where does the crypto price info come from?">
              <p>Mask Network support price chart by both CoinMarketCap and CoinGecko. You can change the data source on “Settings.”</p>
            </a-collapse-panel>

            <a-collapse-panel key="2" header="What is swap and where can I find it?">
              <p>Mask Network will auto-detect trading pairs, and the “Swap🔥” will be lit. Click “Swap🔥” and you will be able to purchase the token.</p>
              <p>The Mask extension now supports:</p>
              <ul>
                <li>Ethereum: Uniswap, SushiSwap, 0x, Balancer, DODO</li>
                <li>Binance Smart Chain: PancakeSwap, SushiSwap, DODO</li>
                <li>Polygon: QuickSwap, SushiSwap, DODO</li>
              </ul>
            </a-collapse-panel>

            <a-collapse-panel key="3" header="Does Mask Network charge a fee on Swap?">
              <p>No, the swap on Mask Network is provided by DEXs, we don’t charge any fee.</p>
            </a-collapse-panel>
          </a-collapse>

          <div><img src="../assets/faq_folder.png" /><h2>File Service</h2></div>
          <a-collapse default-active-key="1" :bordered="false">

            <a-collapse-panel key="1" header="How to use file service">
              <p>Click the little blue face icon to“ Compose encrypted post” -> Choose the “File Service” -> Add the files you want, we support various file types -> Click “ Use the file” -> Also you can add the encrypted text -> Finish</p>
            </a-collapse-panel>

            <a-collapse-panel key="2" header="Who will be able to see the uploaded file?">
              <p>You can set & make amend to the recipients of the designated file.</p>
            </a-collapse-panel>

            <a-collapse-panel key="3" header="Can my friends see the uploaded file?">
              <p>Only our users with the proper permission can see this file. </p>
            </a-collapse-panel>
          </a-collapse>

          <div><img src="../assets/faq_chart.png" /><h2>About ITO</h2></div>
          <a-collapse default-active-key="1" :bordered="false">

            <a-collapse-panel key="1" header="What is ITO (Initial Twitter Offering)">
              <p>ITO (Initial Twitter Offering) is a decentralized asset offering feature, available on the decentralized blockchain network infrastructure Ethereum, Binance Smart Chain, and Polygon. Users could participate in a token launch directly on Twitter; projects could also reward users or build awareness through ITO by offering their existing tokens with a discount, or simply launch a new token.</p>
              <p>Please follow our Blog (http://masknetwork.medium.com/) or Telegram Channel for more information. After the event starts, find the relevant tweets of ITO and click "Enter" to participate in ITO.</p>
            </a-collapse-panel>

            <a-collapse-panel key="2" header="How do I prepare for participating in an ITO?">
              <p>First of all, please make sure that you have installed the Mask extension.</p>
              <p>Second, please create a Mask account and bind the Twitter account. Remember to back up the Mask account~</p>
              <p>Third, import or bind a wallet, Mask will automatically generate an Ethereum wallet address for you, and we also support binding MetaMask and WalletConnect.</p>
              <p>Fourth, prepare enough token for purchasing, and a sufficient gas fee. We encrypt the ITO page in Tweet, and the entrance can only be seen when ITO starts.</p>
            </a-collapse-panel>

            <a-collapse-panel key="3" header="How much can I purchase a single ITO address?">
              <p>According to the different rules of each ITO, the purchase limit of a single address is different. Mask Network also plans to support various forms of auctions and joint curves to serve various ITO needs.</p>
            </a-collapse-panel>

            <a-collapse-panel key="4" header="What should I do if gas is very high?">
              <p>The fluctuating gas fee is annoying, we get that. Mask Network provides a multi-chain solution. You may have more options by switching to Binance Smart Chain (BSC), or Polygon (Matic), a Layer 2 solution.</p>
            </a-collapse-panel>

            <a-collapse-panel key="5" header="If an ITO is on BSC/Polygon, but my $MASK is on Ethereum, will I be able to meet the snapshot requirement?">
              <p>Don’t worry about it, it doesn’t matter which chain your asset is on.</p>
            </a-collapse-panel>
          </a-collapse>

          <div><img src="../assets/faq_wallet.png" /><h2>Wallet</h2></div>
          <a-collapse default-active-key="1" :bordered="false">

            <a-collapse-panel key="1" header="How to create a wallet?">
              <p>Mask Network will automatically create an Ethereum wallet for you since you create a persona. Or you can create a wallet on the dashboard. Click “Enter the Dashboard” -> “Wallets” -> “Create Wallet” -> Enter Wallet Name -> Choose “ I confirm that i need to create a wallet” -> Click “Import” -> Done!</p>
            </a-collapse-panel>

            <a-collapse-panel key="2" header="I already have a wallet…?">
              <p>You can connect wallets from Mask Network, MetaMask, and Wallet Connect.</p>
              <p>The Mask Network extension currently supports Ethereum, Binance Smart Chain (BSC), and Polygon (Matic).</p>
            </a-collapse-panel>

          </a-collapse>

          <div><img src="../assets/faq_redpacket.png" /><h2>Red Packet</h2></div>
          <a-collapse default-active-key="1" :bordered="false">

            <a-collapse-panel key="1" header="How to view the history and detail information of the received Red Packet?">
              <p>Click the blue smiley face on the top right corner. ->Click “Enter the Dashboard” - > “Wallets” -> Choose "Activity" -> InBound, You can see an OutBound list, Select the record you need to view.</p>
            </a-collapse-panel>

            <a-collapse-panel key="2" header="How long is the Red Packet validity period? What happens when the red packet is expired?">
              <p>The current Red Packet is valid for 24 hours. After 24 hours, if the Red Packet has a remaining quantity, the remaining cryptocurrency will be refunded. You can find that record in “Dashboard” -> “Wallets” -> Choose "Activity" -> OutBound and click the record to refund.</p>
            </a-collapse-panel>

            <a-collapse-panel key="3" header="Will Mask Network be banned (by Twitter)?">
              <p>Mask Network is part of the BlueSky ecosystem. Bluesky is funded by Jack Dorsey, who proposed the creation of a decentralized social media standard/protocol in December 2019. Mask joined this chat and talked about the issues regarding the centralized social media protocols. We talked to many big names, including Tim Berners Lee, and we will post more progress in the future.</p>
              <p>Check this article for the technical details about Mask Network.</p>
            </a-collapse-panel>

            <a-collapse-panel key="4" header="My Twitter account is banned :( What happens to my assets now?">
              <p>Don’t worry, the assets are still in your wallet. Your wallet address is separate from the Twitter account, therefore as long as you have access to your wallet, your assets will be fine.</p>
            </a-collapse-panel>

            <a-collapse-panel key="5" header="Where can I trade $MASK?">
              <p>You can trade $MASK in Uniswap, SushiSwap, Quickswap, Coinbase, Binance, and other exchanges.</p>
            </a-collapse-panel>

          </a-collapse>
        </div>
      </div>

      <a-anchor :target-offset="targetOffset">
        <a-anchor-link href="#getting-started" title="Getting Started" />
        <a-anchor-link href="#trade-and-swaps" title="Trade and Swaps" />
        <a-anchor-link href="#file-service" title="File Service" />
        <a-anchor-link href="#about-ito" title="About ITO" />
        <a-anchor-link href="#wallet" title="Wallet" />
        <a-anchor-link href="#red-packet" title="Red Packet" />
      </a-anchor>
    </div>
    <Footer />
  </div>
</template>
<script>
import Menu from "../components/Menu";
import Footer from "../components/Footer";

export default {
  name: "About",
  components: {
    Menu,
    Footer,
  },
  data: () => {
    return {
      isPc: true,
      targetOffset: 0,
    };
  },
  mounted() {
    this.isPc = !this._isMobile();
    this.targetOffset = window.innerHeight / 2;
  },
};
</script>
<style scoped>
.header {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background: #e6e8ec;
}

.header_text {
  display: flex;
  width: 600px;
  align-items: center;
  justify-content: center;
}

.about_img {
  height: 651px;
}

.content {
  display: flex;
  width: 100%;
  flex-direction: row;
  padding-bottom: 120px;
}

@media screen and (max-width: 768px) {
  .header {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 120px 84px;
  }
  .about_img {
    margin-top: 45px;
  }
}

@media screen and (max-width: 375px) {
  .header {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 50px 15px;
    padding-bottom: 150px;
  }

  .header_text {
    width: auto;
  }

}
</style>
