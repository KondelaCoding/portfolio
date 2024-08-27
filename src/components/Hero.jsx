import "./Hero.css";

export default function Hero() {
  return (
    <div className="hero">
      <div className="header">
        <img
          src="https://hips.hearstapps.com/hmg-prod/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg?crop=0.752xw:1.00xh;0.175xw,0&resize=1200:*"
          alt="photo-of-mikolaj"
          className="photo"
        />
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
          <span className="shadow-effect">&nbsp;VISUAL</span> <span className="shadow-effect">&nbsp;DESIGNER</span>
          <span className="shadow-effect">&nbsp;VISUAL</span> <span className="shadow-effect">&nbsp;DESIGNER</span>
          <span className="shadow-effect">&nbsp;VISUAL</span> <span className="shadow-effect">&nbsp;DESIGNER</span>
          <span className="shadow-effect">&nbsp;VISUAL</span> <span className="shadow-effect">&nbsp;DESIGNER</span>
        </h1>
      </div>
    </div>
  );
}
