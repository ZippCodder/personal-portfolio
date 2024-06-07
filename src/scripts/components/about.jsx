import { Link } from "react-router-dom";
import "../../styles/about.css";

export default function About() {
 return (
 <main className="about">
  <div className="about__about-tab">
    <p className="tab__title">About Me</p>
  </div>
  <div className="about__projects-tab">
    <Link to="/projects"><p className="tab__title">My Projects</p></Link>
  </div>
  <div className="about__content">
      <div className="about__socials">
        <i className="fab fa-github-square"></i>
        <i className="fab fa-dev"></i> 
        <i className="fab fa-codepen"></i>
      </div>
    <section className="content__personal-info">
      <img className="personal-info__profile" src="/public/images/profile.jpg"/>
       <h1 className="personal-info__greeting">Hi, Im Deon!</h1>
       <p className="personal-info__roles"><b>Frontend Developer | Backend Developer | UX/UI Designer</b></p>
      <p className="personal-info__summary">
       I'm a reliable and hardworking software developer from the United States with native fluency in English and Spanish. I have extensive experience in areas such as professional written and verbal communication, carrying out complex assignments in a timely manner and advanced problem solving. In my free time I enjoy reading, playing piano and working on personal programming projects. I’m looking to provide as much value as possible, and am eager to take every opportunity available to take in new knowledge and advance my skills through results-driven work as I pursue a career in web development.
      </p>
      <div className="personal-info__details">
       <button className="details__number">+506 7063-8994</button>
       <button onClick={() => {window.open("https://docs.google.com/document/d/12I5aUzHxtR3imxBhnZyrwhuYnGUlQE-ldYc88sW40KA/edit?usp=sharing", "_blank")}} className="details__resume">View Resume</button>
      </div>
    </section>
    <section className="about__skills">
     <div className="skills__skill">
      <h1>Skills</h1>
      <small className="skill__hover-message">Hover to interact with phone</small>
      <Phone color="black" name="skills-phone" action={() => {window.open("https://docs.google.com/document/d/12I5aUzHxtR3imxBhnZyrwhuYnGUlQE-ldYc88sW40KA/edit?usp=sharing", "_blank")}} content={(
        <>
         <div className="skill__item">UX/UI Design</div>
         <div className="skill__item">Front-end Scripting/Design</div>
         <div className="skill__item">Back-end System Design</div>
         <div className="skill__item">Native English and Spanish</div>
         <div className="skill__item">Data Structures and Algorithms</div>
         <div className="skill__item">Version Control</div>
        </>
       )} />
       <div className="skill__click-message">
        <p>▲</p>
        <p>Press button to view resume.</p>
       </div>
      </div>
     <div className="skills__skill">
      <h1>Projects</h1>
      <small className="skill__hover-message">Hover to interact with phone</small>
      <Phone color="white" name="projects-phone" content={<Carousel/>} action={function() {
         window.open(["https://scribler.imdeonrich.com","https://wtrw.imdeonrich.com","https://inkpad.imdeonrich.com"][window.getComputedStyle(document.querySelector("#carousel")).getPropertyValue("--current-slide") - 1], "_blank");
      }} />
       <div className="skill__click-message">
        <p>▲</p>
        <p>Press button to open project.</p>
       </div>
     </div>
    </section>
  </div> 
 </main>
 ); 
}

function Carousel(props) {
  const container = React.useRef(null); 
  const [phase, setPhase] = React.useState(0);
  const [transition, setTransition] = React.useState("transform 0.5s ease");
  const [transform, setTransform] = React.useState("translateY(0%)");

 return (
   <div id="carousel" ref={container} style={{transform: transform, transition: transition}}> 
    <img id={1} className="carousel__image" src="/public/images/project1.png" />
    <img className="carousel__image" src="/public/images/project2.png" />
    <img className="carousel__image" src="/public/images/project3.png" />
    <img id={2} className="carousel__image" src="/public/images/project1.png" />
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
const [windowDimensions, setWindowDimensions] = React.useState({width: window.innerWidth, height: window.innerHeight});

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
