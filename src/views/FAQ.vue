<!--
 * @Descripttion:
 * @version:
 * @Author: jimmy
 * @Date: 2021-09-12 14:50:19
 * @LastEditors: jimmy
 * @LastEditTime: 2021-09-27 14:34:07
-->
<template>
  <div class="faq">
    <Menu />
    <div class="header">
      <div class="header_text about_img" v-if="isPc">
        <div><span style="font-weight: bold;">How can we help you?</span></div>
      </div>
      <div v-if="!isPc" class="about_img">
        <span class="text-on-image">How can we help you?</span>
        <div class="about_blur"></div>
        <div style="text-align:center;"></div>
      </div>
    </div>
    <div class="content">
      <div class="questions">
        <div @click="switchFAQ = !switchFAQ" style="margin-bottom: 60px;"><span class="bigTitle" :class="{'on':switchFAQ}">FAQ\</span><span class="bigTitle" :class="{'on':!switchFAQ}">Tutorial</span></div>

        <div v-if="switchFAQ">
          <div class="faqTitleLine" id="getting-started"><img src="../assets/faq_arrow.png" /><p>Getting Started</p></div>
          <a-collapse default-active-key="1" :bordered="false">
            <template #expandIcon="props">
              <a-icon class="icon-space" v-if="props.isActive" type="minus" />
              <a-icon class="icon-space" v-else type="plus" />
            </template>
            <a-collapse-panel key="1" header="Where can I use Mask Network" class="collapseTitle">
              <p class="collapseSubTitle">Mask Network is now available on Twitter, Facebook, and Minds.com. We will support more platforms in the future.</p>
            </a-collapse-panel>

            <a-collapse-panel key="2" header="How to install Mask Network" class="collapseTitle">
              <p class="collapseSubTitle">Go to https://mask.io/install to install Mask Network directly. You can also install through the Chrome Webstore, Google Play Store(beta), or the Apple App Store(beta).</p>
            </a-collapse-panel>

            <a-collapse-panel key="3" header="How to create a persona" class="collapseTitle">
              <p class="collapseSubTitle">Mask Network will automatically remind your own peronas since you use for the first time.Just follow the steps! Click “Enter the Dashboard” -> “Personas” -> “Create persona” -> Enter Name -> Click “ Create” -> Choose to connect Twitter or Facebook account -> Mask Network will automatically find your username, confirm and click “Connect” -> Done, remember to “Say Hello to everyone”</p>
            </a-collapse-panel>

            <a-collapse-panel key="4" header="Explain like I am a nerd" class="collapseTitle">
              <p class="collapseSubTitle">Alice encrypts cleartext (M) with a random AES key (K) to get ciphertext (CT) and then securely shares K via ECIES over SECP256K1 with Bob using Bob's public key (K.Bob). Alice publishes CT on Facebook and synchronizees K.Bob over GUN. Bob can then retrieve K to decrypt M.</p>
            </a-collapse-panel>
          </a-collapse>

          <div class="faqTitleLine faqMt" id="trade-and-swaps"><img src="../assets/faq_swap.png" /><h2>Trade and Swaps</h2></div>
          <a-collapse default-active-key="1" :bordered="false">
            <template #expandIcon="props">
              <a-icon class="icon-space" v-if="props.isActive" type="minus" />
              <a-icon class="icon-space" v-else type="plus" />
            </template>
            <a-collapse-panel key="1" header="Where does the crypto price info come from?" class="collapseTitle">
              <p class="collapseSubTitle">Mask Network support price chart by both CoinMarketCap and CoinGecko. You can change the data source on “Settings.”</p>
            </a-collapse-panel>

            <a-collapse-panel key="2" header="What is swap and where can I find it?" class="collapseTitle">
              <p class="collapseSubTitle">Mask Network will auto-detect trading pairs, and the “Swap🔥” will be lit. Click “Swap🔥” and you will be able to purchase the token.</p>
              <p class="collapseSubTitle">The Mask extension now supports:</p>
              <ul>
                <li class="collapseSubTitle">Ethereum: Uniswap, SushiSwap, 0x, Balancer, DODO</li>
                <li class="collapseSubTitle">Binance Smart Chain: PancakeSwap, SushiSwap, DODO</li>
                <li class="collapseSubTitle">Polygon: QuickSwap, SushiSwap, DODO</li>
              </ul>
            </a-collapse-panel>

            <a-collapse-panel key="3" header="Does Mask Network charge a fee on Swap?" class="collapseTitle">
              <p class="collapseSubTitle">No, the swap on Mask Network is provided by DEXs, we don’t charge any fee.</p>
            </a-collapse-panel>
          </a-collapse>

          <div class="faqTitleLine faqMt" id="file-service"><img src="../assets/faq_folder.png" /><h2>File Service</h2></div>
          <a-collapse default-active-key="1" :bordered="false">
            <template #expandIcon="props">
              <a-icon class="icon-space" v-if="props.isActive" type="minus" />
              <a-icon class="icon-space" v-else type="plus" />
            </template>
            <a-collapse-panel key="1" header="How to use file service" class="collapseTitle">
              <p class="collapseSubTitle">Click the little blue face icon to“ Compose encrypted post” -> Choose the “File Service” -> Add the files you want, we support various file types -> Click “ Use the file” -> Also you can add the encrypted text -> Finish</p>
            </a-collapse-panel>

            <a-collapse-panel key="2" header="Who will be able to see the uploaded file?" class="collapseTitle">
              <p class="collapseSubTitle">You can set & make amend to the recipients of the designated file.</p>
            </a-collapse-panel>

            <a-collapse-panel key="3" header="Can my friends see the uploaded file?" class="collapseTitle">
              <p class="collapseSubTitle">Only our users with the proper permission can see this file. </p>
            </a-collapse-panel>
          </a-collapse>

          <div class="faqTitleLine faqMt" id="about-ito"><img src="../assets/faq_chart.png" /><h2>About ITO</h2></div>
          <a-collapse default-active-key="1" :bordered="false">
            <template #expandIcon="props">
              <a-icon class="icon-space" v-if="props.isActive" type="minus" />
              <a-icon class="icon-space" v-else type="plus" />
            </template>
            <a-collapse-panel key="1" header="What is ITO (Initial Twitter Offering)" class="collapseTitle">
              <p class="collapseSubTitle">ITO (Initial Twitter Offering) is a decentralized asset offering feature, available on the decentralized blockchain network infrastructure Ethereum, Binance Smart Chain, and Polygon. Users could participate in a token launch directly on Twitter; projects could also reward users or build awareness through ITO by offering their existing tokens with a discount, or simply launch a new token.</p>
              <p class="collapseSubTitle">Please follow our Blog (http://masknetwork.medium.com/) or Telegram Channel for more information. After the event starts, find the relevant tweets of ITO and click "Enter" to participate in ITO.</p>
            </a-collapse-panel>

            <a-collapse-panel key="2" header="How do I prepare for participating in an ITO?" class="collapseTitle">
              <p class="collapseSubTitle">First of all, please make sure that you have installed the Mask extension.</p>
              <p class="collapseSubTitle">Second, please create a Mask account and bind the Twitter account. Remember to back up the Mask account~</p>
              <p class="collapseSubTitle">Third, import or bind a wallet, Mask will automatically generate an Ethereum wallet address for you, and we also support binding MetaMask and WalletConnect.</p>
              <p class="collapseSubTitle">Fourth, prepare enough token for purchasing, and a sufficient gas fee. We encrypt the ITO page in Tweet, and the entrance can only be seen when ITO starts.</p>
            </a-collapse-panel>

            <a-collapse-panel key="3" header="How much can I purchase a single ITO address?" class="collapseTitle">
              <p class="collapseSubTitle">According to the different rules of each ITO, the purchase limit of a single address is different. Mask Network also plans to support various forms of auctions and joint curves to serve various ITO needs.</p>
            </a-collapse-panel>

            <a-collapse-panel key="4" header="What should I do if gas is very high?" class="collapseTitle">
              <p class="collapseSubTitle">The fluctuating gas fee is annoying, we get that. Mask Network provides a multi-chain solution. You may have more options by switching to Binance Smart Chain (BSC), or Polygon (Matic), a Layer 2 solution.</p>
            </a-collapse-panel>

            <a-collapse-panel key="5" header="If an ITO is on BSC/Polygon, but my $MASK is on Ethereum, will I be able to meet the snapshot requirement?" class="collapseTitle">
              <p class="collapseSubTitle">Don’t worry about it, it doesn’t matter which chain your asset is on.</p>
            </a-collapse-panel>
          </a-collapse>

          <div class="faqTitleLine faqMt" id="wallet"><img src="../assets/faq_wallet.png" /><h2>Wallet</h2></div>
          <a-collapse default-active-key="1" :bordered="false">
            <template #expandIcon="props">
              <a-icon class="icon-space" v-if="props.isActive" type="minus" />
              <a-icon class="icon-space" v-else type="plus" />
            </template>
            <a-collapse-panel key="1" header="How to create a wallet?" class="collapseTitle">
              <p class="collapseSubTitle">Mask Network will automatically create an Ethereum wallet for you since you create a persona. Or you can create a wallet on the dashboard. Click “Enter the Dashboard” -> “Wallets” -> “Create Wallet” -> Enter Wallet Name -> Choose “ I confirm that i need to create a wallet” -> Click “Import” -> Done!</p>
            </a-collapse-panel>

            <a-collapse-panel key="2" header="I already have a wallet…?" class="collapseTitle">
              <p class="collapseSubTitle">You can connect wallets from Mask Network, MetaMask, and Wallet Connect.</p>
              <p class="collapseSubTitle">The Mask Network extension currently supports Ethereum, Binance Smart Chain (BSC), and Polygon (Matic).</p>
            </a-collapse-panel>

          </a-collapse>

          <div class="faqTitleLine faqMt" id="red-packet"><img src="../assets/faq_redpacket.png" /><h2>Red Packet</h2></div>
          <a-collapse default-active-key="1" :bordered="false">
            <template #expandIcon="props">
              <a-icon class="icon-space" v-if="props.isActive" type="minus" />
              <a-icon class="icon-space" v-else type="plus" />
            </template>
            <a-collapse-panel key="1" header="How to view the history and detail information of the received Red Packet?" class="collapseTitle">
              <p class="collapseSubTitle">Click the blue smiley face on the top right corner. ->Click “Enter the Dashboard” - > “Wallets” -> Choose "Activity" -> InBound, You can see an OutBound list, Select the record you need to view.</p>
            </a-collapse-panel>

            <a-collapse-panel key="2" header="How long is the Red Packet validity period? What happens when the red packet is expired?" class="collapseTitle">
              <p class="collapseSubTitle">The current Red Packet is valid for 24 hours. After 24 hours, if the Red Packet has a remaining quantity, the remaining cryptocurrency will be refunded. You can find that record in “Dashboard” -> “Wallets” -> Choose "Activity" -> OutBound and click the record to refund.</p>
            </a-collapse-panel>

            <a-collapse-panel key="3" header="Will Mask Network be banned (by Twitter)?" class="collapseTitle">
              <p class="collapseSubTitle">Mask Network is part of the BlueSky ecosystem. Bluesky is funded by Jack Dorsey, who proposed the creation of a decentralized social media standard/protocol in December 2019. Mask joined this chat and talked about the issues regarding the centralized social media protocols. We talked to many big names, including Tim Berners Lee, and we will post more progress in the future.</p>
              <p class="collapseSubTitle">Check this article for the technical details about Mask Network.</p>
            </a-collapse-panel>

            <a-collapse-panel key="4" header="My Twitter account is banned :( What happens to my assets now?" class="collapseTitle">
              <p class="collapseSubTitle">Don’t worry, the assets are still in your wallet. Your wallet address is separate from the Twitter account, therefore as long as you have access to your wallet, your assets will be fine.</p>
            </a-collapse-panel>

            <a-collapse-panel key="5" header="Where can I trade $MASK?" class="collapseTitle">
              <p class="collapseSubTitle">You can trade $MASK in Uniswap, SushiSwap, Quickswap, Coinbase, Binance, and other exchanges.</p>
            </a-collapse-panel>

          </a-collapse>
        </div>
        <div v-else>
          <div class="faqTitleLine" id="getting-started"><p>An (In)Complete Guide to Mask Network</p></div>
          <p class="collapseSubTitle" style="margin-left: 0">Mask Network is the portal to the new internet that connects mainstream Web 2.0 social media with the open, decentralized Web 3.0. Through our browser extension, users could get a glimpse of the decentralized application world. You can easily make borderless cryptocurrency transfers, decentralized file storage and sharing, display and trade NFTs, participate in various DeFi projects, and vote on governance proposals. Do everything in a Web 3.0 way, but on top of Web 2.0.</p>

          <div class="faqTitleLine faqMt" id="red-packet"><img src="../assets/faq_setup.png" /><h2>Setup</h2></div>
          <div class="tutLine"><a href="../tutorial?a=install.md">Installation & set up</a></div>
          <div class="tutLine"><a href="../tutorial?a=setup.md">Setting up your wallet (Support MetaMask and WalletConnect)</a></div>
          <div class="tutLine"><a href="../tutorial?a=update.md">Manually update the Mask Network plugin</a></div>
          <div class="tutLine"><a href="../tutorial?a=backup.md">Back up your private key</a></div>

          <div class="faqTitleLine faqMt">
            <img src="../assets/faq_switch.png" />
            <h2>Features</h2>
          </div>
          <div class="tutLine"><a href="../tutorial?a=sendtext.md">Send an Encrypted Text</a></div>
          <div class="tutLine"><a href="../tutorial?a=purchase.md">Purchase NFTs or place a bid for NFTs via OpenSea or Rarible on Twitter</a></div>
          <div class="tutLine"><a href="../tutorial?a=fileservice.md">Use File Service via Arweave (IPFS, SIA, Swarm soon)</a></div>
          <div class="tutLine"><a href="../tutorial?a=snapshot.md">Cast a Snapshot vote</a></div>
          <div class="tutLine"><a href="../tutorial?a=sendpacket.md">Send a Red Packet (Support ETH, BSC and Polygon)</a></div>
          <div class="tutLine"><a href="../tutorial?a=ito.md">Launch an ITO (Initial Twitter Offering) (Support ETH, BSC and Polygon)</a></div>
          <div class="tutLine"><a href="../tutorial?a=partic.md">Participate in ITO (Initial Twitter Offering) (Support ETH, BSC and Polygon)</a></div>
          <div class="tutLine"><a href="../tutorial?a=claim.md">Claim tokens (from ITO/Airdrop) (Support ETH only, Polygon soon)</a></div>
          <div class="tutLine"><a href="../tutorial?a=checkinfo.md">Check cryptocurrency info on social media (CoinGecko, CoinMarketCap, Uniswap Info)</a></div>
          <div class="tutLine"><a href="../tutorial?a=display.md">Display the NFTs you own on your Twitter profile</a></div>

          <div class="faqTitleLine faqMt" id="red-packet">
            <img src="../assets/faq_add.png" />
            <h2>Switch Network & Cross Chain</h2>
          </div>
          <div class="tutLine"><a href="../tutorial?a=switch.md">Switch network between ETH, BSC, and Polygon</a></div>
          <div class="tutLine"><a href="../tutorial?a=bridge.md">Use the Polygon Bridge to convert from Ethereum Mainnet and Polygon</a></div>
          <div class="tutLine"><a href="../tutorial?a=convert.md">Convert $MASK from ERC20 to BEP20</a></div>

          <div class="faqTitleLine faqMt" id="red-packet">
            <img src="../assets/faq_dollar.png" />
            <h2>$Mask Token Related</h2>
          </div>
          <div class="tutLine"><a href="../tutorial?a=add.md">How to add $MASK liquidity to PancakeSwap</a></div>

          <div class="faqTitleLine faqMt" id="red-packet">
            <img src="../assets/faq_plugin.png" />
            <h2>Third-party Plugins</h2>
          </div>
          <div class="tutLine"><a href="../tutorial?a=see.md">See the latest offer of a Tweet NFT by Valuables Plugin</a></div>
          <div class="tutLine"><a href="../tutorial?a=donation.md">Make a quick Gitcoin Grant donation using the Mask extension</a></div>
          <div class="tutLine"><a href="../tutorial?a=trade.md">Trade tokens via Uniswap, Sushi, 0x, etc. on Twitter (Support ETH, BSC and Polygon)</a></div>
          <div class="tutLine"><a href="../tutorial?a=cultivate.md">Cultivate a weekly saving habit via GoodGhosting on Twitter (Polygon only)</a></div>
          <div class="tutLine"><a href="../tutorial?a=copy.md">Copy your favourite manager's portfolio via dHEDGE on Twitter (ETH and Polygon)</a></div>
          <div class="tutLine"><a href="../tutorial?a=pool.md">Participate in lossless lottery via PoolTogether on Twitter (ETH and Polygon)</a></div>

        </div>
      </div>

      <a-anchor class="anchor" v-if="switchFAQ" :wrapperClass="'anchorTitle'" :target-offset="targetOffset">
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
			switchFAQ: false,
		};
	},
	mounted() {
		this.isPc = !this._isMobile();
		this.targetOffset = window.innerHeight / 2;
	},
};
</script>
<style scoped>
.faq {
	background: white;
}
.icon-space {
	margin-right: 25px;
}
.anchor {
	width: 200px;
}
.header {
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: space-between;
	background: #e6e8ec;
}

.header_text {
	display: flex;
	flex: 1;
	width: 600px;
	font-size: 64px;
	align-items: center;
	justify-content: center;
	text-align: center;
  color: #e6e8ec;
}

.about_img {
	height: 651px;
	width: 50%;
	background-image: url("../assets/faq_img.png");
	background-repeat: no-repeat;
	background-position: center center;
	background-size: cover;
	display: flex;
	align-items: center;
	justify-content: center;
	position: relative;
}
.about_blur {
	position: absolute;
	top: 0;
	right: 0;
	bottom: 0;
	left: 0;
	background: rgba(0, 0, 0, 0.4);
	backdrop-filter: blur(6px);
}

.content {
	display: flex;
	flex-direction: row;
	padding-bottom: 120px;
	margin: 240px 20% 0 20%;
}

.questions {
	width: auto;
}

.bigTitle {
	font-weight: bold;
	font-size: 48px;
	color: #777e90;
}

.bigTitle.on {
	font-size: 64px;
	color: #07080a;
}

.faqTitleLine {
	display: flex;
	align-items: center;
	font-size: 48px;
	color: #07080a;
	margin-bottom: 56px;
}

.faqTitleLine > h2,
p {
	font-weight: bold;
	font-size: 48px;
}

.collapseTitle {
	font-size: 24px;
	font-weight: bold;
	color: #07080a;
}

.collapseTitle + .collapseTitle {
	margin-top: 42px;
}

.collapseSubTitle {
	font-size: 20px;
	font-weight: normal;
	color: #777e90;
	margin-left: 50px;
	margin-top: 15px;
}

.faqMt {
	margin-top: 136px;
}
.ant-anchor-link-title {
	color: #777e90 !important;
	font-size: 14px !important;
	font-weight: 400 !important;
}

.ant-anchor-link-title-active {
	color: #07080a !important;
	font-weight: 700 !important;
}

.tutLine {
	font-size: 20px;
	color: #07080a;
}

.tutLine + .tutLine {
	margin-top: 40px;
}

@media screen and (max-width: 844px) {
	.anchor {
		display: none;
	}
}

@media screen and (max-width: 768px) {
	.header {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		padding: 0 0;
	}

	.content {
		display: flex;
		flex-direction: row;
		padding-bottom: 120px;
		margin: 20px;
	}

	.about_img {
		width: 100%;
	}

	.text-on-image {
		font-weight: bold;
		font-size: 64px;
		color: #e6e8ec;
		text-align: center;
		text-shadow: 0px 4px 10px rgba(0, 0, 0, 0.3);
    z-index: 10;
	}
}

@media screen and (max-width: 428px) {
	.header {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		padding: 0 0;
	}

	.header_text {
		width: auto;
	}
	.text-on-image {
		font-size: 48px;
		font-weight: 700;
	}
}
</style>
