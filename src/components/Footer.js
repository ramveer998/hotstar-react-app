import "../css/Footer.css";
import Playstore from '../images/play-store.png'
import Appstore from '../images/app-store.png'


function Footer() {
  return (
    <div className="footer">
      <div>
        <ul>
          <li>
            <a href="">About Disney+ Hotstar</a>
          </li>
          <li>
            <a href="">Terms Of Use</a>
          </li>
          <li>
            <a href="">Privacy Policy</a>
          </li>
          <li>
            <a href="">FAQ</a>
          </li>
          <li>
            <a href="">FAQFeedback</a>
          </li>
          <li>
            <a href="">Careers</a>
          </li>
        </ul>
        <span>
          © 2022 STAR. All Rights Reserved. HBO, Home Box Office and all related
          channel and programming logos are service marks of, and all related
          programming visuals and elements are the property of, Home Box Office,
          Inc. All rights reserved.
        </span>
      </div>
      <div className="col-2">
        <div>
          <p>Connect with us</p><br />
          <div className="brand-logo">
            <a><i className="fa-brands fa-square-facebook"></i>
            </a>
            <a><i className="fa-brands fa-square-twitter"></i>
            </a>
          </div>
        </div>
        <div className="store-app">
          <p>Disney+ Hotstar App</p><br />
          <div className="logo-app-store">
            <a><img src={Playstore} alt="" /></a>
            <a><img src={Appstore} alt="" /></a>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Footer;
