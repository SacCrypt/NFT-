import style from "../static/css/wwo.module.css";

const Wwo = () => {
  return (
    <div className={style.container}>
      <h1> Products </h1>
      <h3> Everything to make sure your NFT collection is a hit</h3>
      <div className={style.contract}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
          <path d="M64 0C28.7 0 0 28.7 0 64V448c0 35.3 28.7 64 64 64H320c35.3 0 64-28.7 64-64V428.7c-2.7 1.1-5.4 2-8.2 2.7l-60.1 15c-3 .7-6 1.2-9 1.4c-.9 .1-1.8 .2-2.7 .2H240c-6.1 0-11.6-3.4-14.3-8.8l-8.8-17.7c-1.7-3.4-5.1-5.5-8.8-5.5s-7.2 2.1-8.8 5.5l-8.8 17.7c-2.9 5.9-9.2 9.4-15.7 8.8s-12.1-5.1-13.9-11.3L144 381l-9.8 32.8c-6.1 20.3-24.8 34.2-46 34.2H80c-8.8 0-16-7.2-16-16s7.2-16 16-16h8.2c7.1 0 13.3-4.6 15.3-11.4l14.9-49.5c3.4-11.3 13.8-19.1 25.6-19.1s22.2 7.8 25.6 19.1l11.6 38.6c7.4-6.2 16.8-9.7 26.8-9.7c15.9 0 30.4 9 37.5 23.2l4.4 8.8h8.9c-3.1-8.8-3.7-18.4-1.4-27.8l15-60.1c2.8-11.3 8.6-21.5 16.8-29.7L384 203.6V160H256c-17.7 0-32-14.3-32-32V0H64zM256 0V128H384L256 0zM549.8 139.7c-15.6-15.6-40.9-15.6-56.6 0l-29.4 29.4 71 71 29.4-29.4c15.6-15.6 15.6-40.9 0-56.6l-14.4-14.4zM311.9 321c-4.1 4.1-7 9.2-8.4 14.9l-15 60.1c-1.4 5.5 .2 11.2 4.2 15.2s9.7 5.6 15.2 4.2l60.1-15c5.6-1.4 10.8-4.3 14.9-8.4L512.1 262.7l-71-71L311.9 321z" />
        </svg>
      </div>
      <div className={style.blackLine}></div>
      <div className={style.secondBlackLine}></div>
      <div className={style.flexContainer}>
        <div className={style.innerContainer}>
          <h2> Access List Control </h2>
          <p>
            Start building your access list and share it with your community
            with a simple link. No more copy/paste hundreds of wallet addresses.
          </p>
          <ul>
            <li>Require login with Twitter or Discord</li>
            <li>Require a minimum ETH or SOL balance</li>
            <li>And a lot more...</li>
          </ul>
        </div>
        {/*<div className={style.wrap}> </div> */}
        <div className={`${style.innerContainer} ${style.special}`}>
          <h2> NFT Artwork Generator </h2>
          <p>
            Generate your NFT art with our NFT Generator. No more coding
            required. Create your layers, import your assets, click Generate and
            you are done!
          </p>
          <ul>
            <li>Free to get started</li>
            <li>All features you will need</li>
            <li>Metadata automatically generated</li>
          </ul>
        </div>

        <div className={style.innerContainer}>
          <h2> Smart Contract Deployment </h2>
          <p>
            Use our optimized and cheap smart contract for your NFT collection
            in just a few clicks. Trusted by thousands already.
          </p>
          <ul>
            <li>No upfront</li>
            <li>Define rules with the advanced</li>
            <li>Ethereum, Solana and other blockchains supported</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Wwo;
