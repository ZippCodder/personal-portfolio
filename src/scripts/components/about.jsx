import { Link } from "react-router-dom";
import "../../styles/about.css";

export default function About() {
 
const [open, setOpen] = React.useState(false); 
 
 return (
<>
 <EmailBox open={open} setOpen={setOpen} />
 <main className="about">
  <div className="about__about-tab">
    <p className="tab__title">About Me</p>
  </div>
  <div className="about__projects-tab">
    <Link to="/projects"><p className="tab__title">My Projects</p></Link>
  </div>
  <div className="about__content">
      <div className="about__socials">
        <a href="https://www.linkedin.com/in/deon-edward-rich-283564300/" target="_blank"><i className="fab fa-linkedin"></i></a>
        <a href="https://github.com/ZippCodder" target="_blank"><i className="fab fa-github-square"></i></a>
        <a href="https://dev.to/zippcodder" target="_blank"><i className="fab fa-dev"></i></a> 
        <a href="https://codepen.io/ZippCodder/" target="_blank"><i className="fab fa-codepen"></i></a>
      </div>
    <section className="content__personal-info">
     <div className="personal-info__intro">
      <h1 className="intro__heading"><mark className="heading3">Hi</mark><mark className="heading2">Im</mark><mark className="heading1">Deon</mark></h1><p className="intro__roles">Frontend Developer | Backend Developer | UX/UI Designer</p>
      <p className="intro__paragraph">
I'm a web developer from the United States with native fluency in English and Spanish alike. My aptitude lays with my excelent communication skills and my ability to quickly adapt and apply new knowledge to comply with what is required. With over 5 years of experience buiding fullstack applications with a range of Back-end and Front-end technologies, I'm eagerly searching for opportunities with which I can grow and provide my best work.</p>
      <button className="intro__email-button" onClick={function(){
        setOpen(true);  
        window.location.hash = "email";
       }}>Email Me</button>
      <button className="intro__resume-button" onClick={function(){window.open("https://docs.google.com/document/d/12I5aUzHxtR3imxBhnZyrwhuYnGUlQE-ldYc88sW40KA/edit","_blank")}}>View Resume</button>
     </div>
    </section>
    <p className="phones__interact-message">Hover over phones to interact.</p>
    <section className="content__phones">
      <Phone color="black" name="black-phone" action={function() {
         window.open(["https://dev.to/zippcodder/complete-guide-to-building-games-in-the-browser-kp6","https://dev.to/zippcodder/understanding-speech-recognition-and-building-a-voice-controlled-to-do-list-3e5","https://dev.to/zippcodder/a-quick-guide-to-custom-html-elements-5f3b"][window.getComputedStyle(document.querySelector("#carousel")).getPropertyValue("--current-slide") - 1], "_blank");}} content={(
      <>
       <div className="phone__blog">
        <h1 className="blog__title"><i className="fab fa-dev"></i> Blog Posts</h1>
        <div className="blog__thumbnail">
         <Carousel srcs={["/public/images/article1.png", "/public/images/article2.png", "/public/images/article3.png"]}/>
        </div> 
        <h1 className="blog__description"></h1>
        <small className="blog__button-message">Press Button to View Post</small>
       </div>
      </>
      )}/>
      <Phone color="white" name="white-phone" content={(
       <>
        <div className="phone__skills">
          <h1 className="skills__heading">Key Skills</h1>
          <div className="skills__item skills__item-left"><i className="fab fa-html5"></i><p>HTML</p></div>
          <div className="skills__item skills__item-right"><i className="fab fa-css3-alt"></i><p>CSS</p></div>
          <div className="skills__item skills__item-left"><i className="fab fa-js"></i><p>Javascript</p></div>
          <div className="skills__item skills__item-right"><i className="fab fa-react"></i><p>React</p></div>
          <div className="skills__item skills__item-left"><i className="fab fa-node-js"></i><p>NodeJS</p></div>
          <div className="skills__item skills__item-right"><i className="fas fa-database"></i><p>MongoDB/NoSQL</p></div>
          <div className="skills__item skills__item-left"><i className="fab fa-git-alt"></i><p>Git/Version Control</p></div>
        <small className="skills__button-message">Press Button to View Resume</small>
        </div> 
       </>
      )} action={function(){window.open("https://docs.google.com/document/d/12I5aUzHxtR3imxBhnZyrwhuYnGUlQE-ldYc88sW40KA/edit","_blank")}}/>
    </section>
  </div> 
 </main>
</>
 ); 
}

function Carousel(props) {
  const container = React.useRef(null); 
  const [phase, setPhase] = React.useState(0);
  const [transition, setTransition] = React.useState("transform 0.5s ease");
  const [transform, setTransform] = React.useState("translateY(0%)");

 return (
   <div id="carousel" ref={container} style={{transform: transform, transition: transition}}> 
    <img id={1} className="carousel__image" src={props.srcs[0]} />
    <img className="carousel__image" src={props.srcs[1]} />
    <img className="carousel__image" src={props.srcs[2]} />
    <img id={2} className="carousel__image" src={props.srcs[0]} />
   </div>
 );
}

function aIsXPercentOfB(a, b) {
  return (a * 100) / b;
}

function xPercentOfY(x, y) {
  return (y / 100) * x;
}

function Phone(props) {
 
const box = React.useRef(null);
const leftSide = React.useRef(null);
const rightSide = React.useRef(null);
const [tiltSmoothness] = React.useState(8);
const [maxRotation] = React.useState(30);

React.useEffect(function() {
 box.current.dimensions = box.current.getBoundingClientRect();
 box.current.dimensions.centerX = box.current.dimensions.x + box.current.dimensions.width / 2;
 box.current.dimensions.centerY = box.current.dimensions.y + box.current.dimensions.height / 2;
 box.current.dimensions.windowDims = {width: window.innerWidth, height: window.innerHeight};
},[]);

function hover(e) {
 if (box.current.dimensions.windowDims.width !== window.innerWidth || box.current.dimensions.windowDims.height !== window.innerHeight) {
 box.current.dimensions = box.current.getBoundingClientRect();
 box.current.dimensions.centerX = box.current.dimensions.x + box.current.dimensions.width / 2;
 box.current.dimensions.centerY = box.current.dimensions.y + box.current.dimensions.height / 2;
 box.current.dimensions.windowDims = {width: window.innerWidth, height: window.innerHeight};
}

 let rotation = (box.current.dimensions.centerX - e.pageX);

 if ((rotation / tiltSmoothness) < maxRotation) {
  box.current.style.transform = `perspective(300px) rotateX(0deg) rotateY(${
    rotation / tiltSmoothness
  }deg)`;
  leftSide.current.style.transform = `perspective(300px) rotateX(0deg) rotateY(${
    rotation / tiltSmoothness + 90
  }deg) translateX(50%)`;
  rightSide.current.style.transform = `perspective(300px) rotateX(0deg) rotateY(${
    rotation / tiltSmoothness + 90
  }deg) translateX(50%)`;
 }
}

function nohover() {
  box.current.style.transform = `perspective(300px) rotateX(0deg) rotateY(0deg)`;
  leftSide.current.style.transform = `perspective(300px) rotateX(0deg) rotateY(90deg)`;
  rightSide.current.style.transform = `perspective(300px) rotateX(0deg) rotateY(-90deg) translateX(50%)`;
}

return (
<div ref={box} onMouseMove={hover} onMouseOut={nohover} className={`phone phone--${props.color} ${props.name}`}>
  <div ref={leftSide} className="left-side"></div>
  <div ref={rightSide} className="right-side"></div>

  <div className="front">
    <div className="front__speaker"></div>
    <div className="front__screen">
    {props.content}
    </div>
    <div className="front__button" onClick={props.action}>
      <div></div>
    </div>
    <div className="power-button"></div>
    <div className="volume-button"></div>
  </div>
</div>
);
}

function EmailBox(props) {

 const subject = React.useRef(null);
 const body = React.useRef(null);
 const [sent, setSent] = React.useState(false);

 function send() {
  if (body.current.value !== "") {
   emailjs.init({publicKey: "cM1C_9QUhxtpr6HO3"}); 
   emailjs.send("service_vdflixu", "template_g8h5soh", {subject: subject.current.value, message: body.current.value}).then(
     (response) => {
       console.log('email sent.', response.status, response.text);
    },
    (error) => {
        console.log('email failed to send.', error);
     },
   );
  }
 }

 function close() {
  props.setOpen(false); 
  window.location.hash = "";
 }

 return (
 <>
  <div id="email" className="emailBox" style={{display: (props.open) ? "block":"none"}}>
   <h1 className="emailBox__heading">Email Me</h1>
   <p className="emailBox__email">deon.edward.rich@gmail.com</p>
   <input className="emailBox__subject" ref={subject} placeholder="..." onFocus={function(){setSent(false)}}></input>
   <textarea className="emailBox__body" ref={body} resize="false" placeholder="..." onFocus={function(){setSent(false)}}></textarea>
   <p className="emailBox__sent-message" style={{display: (sent) ? "block":"none"}}>Email was successfully sent!</p>
   <button className="emailBox__send" onClick={send}>Send</button>
   <button className="emailBox__close" onClick={function(){
    close(); 
    setSent(false);
   }}>Close</button> 
  </div>
 </>
 );
}
