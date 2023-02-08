import style from "../static/css/pricing.module.css";

const Pricing = () => {
  return (
    <div className={style.container}>
      <div className={style.upperFlex}>
        <h1> Ready to Get Started? </h1>
        <h3> Choose a plan tailored to your needs </h3>
        <span className={style.firstSpan}>
          <input className={style.toggle} type="checkbox" id="check" />
          <label htmlFor="check"></label>
        </span>
        <div className={style.percent}> 20% off </div>
      </div>
      <div className={style.blocks}>
        <div className={style.innerFlex}>
          <h1> Lite </h1>
          <h3> perfect to get started </h3>
          <div> 0 </div>
          <p> 100 NFT Artwork </p>
          <button> Get Started </button>
        </div>
        <div className={style.innerFlex}>
          <h1> Basic </h1>
          <h3> perfect to get started </h3>
          <div> 99 </div>
          <p> 1000 NFT Artwork </p>
          <button> Get Started </button>
        </div>
        <div className={`${style.innerFlex} ${style.middle}`}>
          <h1> Intermediate </h1>
          <h3> perfect to get started </h3>
          <div> 150 </div>
          <p> 5000 NFT Artwork </p>
          <button> Get Started </button>
        </div>
        <div className={style.innerFlex}>
          <h1> Professional </h1>
          <h3> perfect to get started </h3>
          <div> 0 </div>
          <p> 10000 NFT Artwork </p>
          <button> Get Started </button>
        </div>
        <div className={style.innerFlex}>
          <h1> Enterprise </h1>
          <h3> perfect to get started </h3>
          <div> 350 </div>
          <p> 20000 NFT Artwork </p>
          <button> Get Started </button>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
