import React from 'react';
import './index.css';
import Accordion from 'react-bootstrap/Accordion';
import Discord from '../../assets/discord.png';


function FAQ() {
  return (
    <div className="FAQ" id="FAQ">
        <div className='TitleFaq'>
        <h3>FAQs</h3>
        <h1>Frequently Asked Questions</h1>
        </div>
      <Accordion defaultActiveKey="0" flush className="Accordion">
        <Accordion.Item eventKey="0" bsPrefix="AccItem">
          <Accordion.Header style={{color:"white"}} bsPrefix="AccHeader" >Can I mint on mobile?</Accordion.Header>
          <Accordion.Body>
            Absolutely! You can mint on mobile with your Phantom App.
            <ol>
              <li>Open your Phantom Wallet App</li>
              <li>
                Click on the right bottom icon then type Kitsunefoxes.io in the
                search bar
              </li>
            </ol>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1" bsPrefix="AccItem">
          <Accordion.Header bsPrefix="AccHeader">How many Kitsune are there?</Accordion.Header>
          <Accordion.Body>
            Right now there are 1,111 supplies of Kitsune foxes Squad for the
            Gen 1
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2" bsPrefix="AccItem">
          <Accordion.Header bsPrefix="AccHeader">Which Solana wallets can I use?</Accordion.Header>
          <Accordion.Body>
            We recommend using Phantom wallet. Phantom, one of the most popular
            Solana wallet is reliable and secure. Of course, you can use other
            Solana wallets such as Solflare, Sollet and Slope.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="3" bsPrefix="AccItem">
          <Accordion.Header bsPrefix="AccHeader">How do I get a Kitsune Foxes Nft</Accordion.Header>
          <Accordion.Body>
            To purchase Kitsune Foxex NFTs, you need to have a wallet to store
            your NTFs (See FAQ Which Solana wallets can I use?)
            <ol>
              <li>
                Create a Phantom wallet, and add Phantom extension to your
                browser, then transfer Solana (SOL) to your Phantom wallet.
              </li>
              <li>
                Connect your wallet by clicking on "Connect wallet". The Phantom
                wallet will pop up. Enter your password then click on "Connect".
              </li>
              <li>
                Click on "Mint" to get a Kitsune Foxes NFT. The button "Mint"
                will be activated only on Pre-sales and Minting dates.
              </li>
              <li>
                You will need to approve the transaction by clicking on
                "Approve".
              </li>
              <li>Confirm the transaction.</li>
            </ol>
            Once your transaction is confirmed, you will see your NFT inside
            your Phantom wallet under Collections tab.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="4" bsPrefix="AccItem">
          <Accordion.Header bsPrefix="AccHeader">How to buy Solana?</Accordion.Header>
          <Accordion.Body>
            Solana is a public blockchain platform. Its native cryptocurrency is
            SOL. Kitsune foxes squad are on the Solana Blockchain. You can
            purchase Solana cryptocurrency from Crypto Exchanges such as
            Binance, FTX, KuCoin, Coinbase or OKX. You will need to buy Solana
            using your local currency (USD, HKD, GBP, EUR, etc)
            <p>Here are some tutorials:</p>
            <ul>
              <li>
                <a
                  href="https://www.binance.com/en/support/faq/400c38f5e0cd4b46a1d0805c296b5582"
                  target="_blank"
                  rel="noreferrer"
                >
                  Binance Tutorial
                </a>
              </li>
              <li>
                <a
                  href="https://www.coinbase.com/how-to-buy/solana"
                  target="_blank"
                  rel="noreferrer"
                >
                  Coinbase Tutorial
                </a>
              </li>
              <li>
                <a
                  href="https://support.kucoin.plus/hc/en-us/articles/360015207073-How-to-Make-a-Trade-on-KuCoin"
                  target="_blank"
                  rel="noreferrer"
                >
                  KuCoin Tutorial
                </a>
              </li>
              <li>
                <a
                  href="https://www.okx.com/academy/en/tutorial-spot-trading-on-okex/"
                  target="_blank"
                  rel="noreferrer"
                >
                  OKX Tutorial
                </a>
              </li>
            </ul>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>

      <div className="MoreQ">
      <span>Didn’t find the question you are hoping to get an answer to? Join our community and ask away...</span>
      <div><a
              href="https://discord.com/invite/foxysquad"
              target="_blank"
              rel="noopener noreferrer"
            ><img style={{filter:"invert(100%)", marginTop:20}} src={Discord} alt="discord" height={32} width={32}></img>
      </a></div>
      </div>
    </div>
  );
}

export default FAQ;
