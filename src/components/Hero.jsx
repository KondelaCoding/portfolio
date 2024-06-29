import "./Hero.css";

export default function Hero() {
  return (
    <div className="hero">
      <div className="header">
        <div className="header-box">
          <h1 className="about">ABOUT</h1>
          <div className="name">
            <h1 className="mikolaj">MIKOŁAJ</h1>
            <h1 className="kondela">KONDELA</h1>
          </div>
          <button>contact</button>
        </div>
      </div>
      <div className="swiper">
        <h1 className="swiper-up">
          <span className="shadow-effect">&nbsp;FRONTEND</span> <span className="shadow-effect">&nbsp;DEVELOPER</span>
          <span className="shadow-effect">&nbsp;FRONTEND</span> <span className="shadow-effect">&nbsp;DEVELOPER</span>
          <span className="shadow-effect">&nbsp;FRONTEND</span> <span className="shadow-effect">&nbsp;DEVELOPER</span>
          <span className="shadow-effect">&nbsp;FRONTEND</span> <span className="shadow-effect">&nbsp;DEVELOPER</span>
        </h1>
        <h1 className="swiper-down">
          <span className="shadow-effect">&nbsp;FRONTEND</span> <span className="shadow-effect">&nbsp;DEVELOPER</span>
          <span className="shadow-effect">&nbsp;FRONTEND</span> <span className="shadow-effect">&nbsp;DEVELOPER</span>
          <span className="shadow-effect">&nbsp;FRONTEND</span> <span className="shadow-effect">&nbsp;DEVELOPER</span>
          <span className="shadow-effect">&nbsp;FRONTEND</span> <span className="shadow-effect">&nbsp;DEVELOPER</span>
        </h1>
      </div>
    </div>
  );
}
