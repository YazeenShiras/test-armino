import "./App.css";
import contact from "../src/assets/contact-title.svg";
import arrow from "../src/assets/arrow-small.svg";
import smile from "../src/assets/smile 02.svg";

import "aos/dist/aos.css";

function App() {
  return (
    <div className="app">
      <div className="main">
        <div className="header"> </div>
        <div className="section_one">
          <img className="smile" src={smile} alt="" />
          <img className="contact_text" src={contact} alt="" />
          <img
            className="section_one_image"
            src="https://images.ctfassets.net/8b1jz4cf6kyy/DFViCTj7kZvz7vKa9MXPi/05563fe4ae894a10925311a6e6bc2a81/Swimming.svg?w=640&fl=progressive&q=92"
            alt=""
          />
          <p className="para1">
            With passionate creatives striving to create uniqueness.
          </p>
          <img className="arrow" src={arrow} alt="" />
        </div>
        <div className="section_two">
          <h3>If you like mails</h3>
          <div className="section_two_mail">
            <p>YOO.CHINGYUN@GOOGLEMAIL.COM</p>
          </div>
          <h4>
            IF YOU WANT TO TALK <br /> SHOOT ME A MESSAGE FOR DETAILS.
          </h4>
        </div>
      </div>
    </div>
  );
}

export default App;
