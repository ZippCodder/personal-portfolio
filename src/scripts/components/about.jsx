import "../../styles/about.css";
import Header from "./header.jsx";

export default function About() {
 
const [open, setOpen] = React.useState(false); 
 
 return (
<>
 <Header openEmail={setOpen} page={0} />
 <EmailBox open={open} setOpen={setOpen} />
 <main className="about source-code-pro-regular">
  <div className="content">
   <article className="article outfit-regular">
    <h3 className="article__heading outfit-regular">Deon Rich <img className="profile-photo" src="/public/images/profile.jpg"/></h3>
    <p className="article__paragraph">Full-stack developer with 5+ years of study and experience building software from the ground up. I excel with discipline, problem-solving and adapting to business needs. <br/><br/>Looking for a long-term role where I can make a real impact. If you value ownership and relentless improvement, let's talk!
    </p>
   </article>
   <article className="article outfit-regular">
    <h3 className="article__heading--small">Proficiency <small>HTML, CSS, React, Node.js, MongoDB</small></h3>
    <div className="article__stats">
     <Competency name="Front-end Development" percent="90" />
     <Competency name="Back-end Development" percent="60" />
    </div>
   </article>
   <a className="article__heading--small resume-button outfit-regular" href="https://docs.google.com/document/d/15Ahq06kuk_JcYS-UgaYH4zJlPyL8dTWSDNj_o1141tc/" target="_blank">See Resume <i className="fa-solid fa-file"></i></a>
  </div> 
 </main>
</>
 ); 
}

function Competency(props) {
  return (
   <div className="article__bar problem-solving">
    <p className="bar-label">{props.name}</p>
    <div style={{width: `${props.percent}%`}}></div>
   </div>
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

export function EmailBox(props) {

 const subject = React.useRef(null);
 const body = React.useRef(null);
 const [sent, setSent] = React.useState(false);

 function send() {
  if (body.current.value !== "") {
   emailjs.init({publicKey: "cM1C_9QUhxtpr6HO3"}); 
   emailjs.send("service_vdflixu", "template_g8h5soh", {subject: subject.current.value, message: body.current.value}).then(
    (response) => {
      console.log("email sent.");
    },
    (error) => {
        console.log('email failed to send.', error);
     },
   );
   setSent(true);
   subject.current.value = ""; 
   body.current.value = ""; 
  }
 }

 function close() {
  props.setOpen(false); 
  window.location.hash = "";
 }

 return (
 <>
  <div id="email" className="emailBox outfit-regular" style={{display: (props.open) ? "block":"none"}}>
   <h1 className="emailBox__heading">Email Me</h1>
   <p className="emailBox__email">deon.edward.rich@gmail.com</p>
   <input className="emailBox__subject" ref={subject} onFocus={function(){setSent(false)}}></input>
   <textarea className="emailBox__body" ref={body} resize="false" onFocus={function(){setSent(false)}}></textarea>
   <p className="emailBox__sent-message" style={{display: (sent) ? "block":"none"}}>Email was successfully sent!</p>
   <button className="emailBox__send outfit-regular" onClick={send}>Send</button>
   <button className="emailBox__close outfit-regular" onClick={function(){
    close(); 
    setSent(false);
   }}>Close</button> 
  </div>
 </>
 );
}
