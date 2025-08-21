import { Link } from "react-router-dom";
import "../../styles/projects.css";

export default function Projects() {
 return (
  <main className="projects"> 
   <div className="projects__about-tab">
     <Link to="/"><p className="tab__title">About Me</p></Link>
   </div>
   <div className="projects__projects-tab">
     <p className="tab__title">My Projects</p>
   </div>
   <div className="projects__content">
   <img src="/public/images/paperclip.png" className="paperclip" />
    <div className="content__projects">
     <Project title="Centro" logo="/public/images/main-centro-logo.png" description="A job application service and platform which aids job-seekers in finding jobs which aligns with their skills and requirements, and generating referrals for their applicant profile." code="https://github.com/ZippCodder/Avenida" project="https://crcentro.com/" previews={["/public/images/centro-pic-3.png","/public/images/centro-pic-2.png","/public/images/centro-pic-1.png"]} subtitle="Job Application Service" tech={["HTML, CSS, Javascript", "React", "Node.JS","MongoDB"]}/> 
     <Project title="WTRW" logo="/public/images/wtrw_logo.png" description="An online shooting game where the objective is to collect weapons and eliminate as many enemies to get the highest score possible." code="https://github.com/ZippCodder/WTRW" project="https://wtrw.imdeonrich.com/" previews={["/public/images/wtrw-preview-1.png","/public/images/wtrw-preview-2.png","/public/images/wtrw-preview-3.png"]} subtitle="Online Game" tech={["HTML, CSS, Javascript", "WebGL", "Graphic Design", "DSA"]}/> 
     <Project title="Inkpad" logo="/public/images/inkpad_logo.png" description="Digital art program with ample tools for creating and downloading self made works of art." code="https://github.com/ZippCodder/inkpad-editor" project="https://inkpad.imdeonrich.com/" subtitle="Digital Art Program" previews={["/public/images/inkpad-preview-1.png","/public/images/inkpad-preview-2.png","/public/images/inkpad-preview-3.png"]} tech={["HTML, CSS, Javascript", "Canvas API", "UX/UI"]}/> 
     <Project title="Audio Visualizer" description="An audio visualizer built with the Web Audio API." codepen={true} project="https://codepen.io/ZippCodder/full/OJRvJpN" code="https://codepen.io/ZippCodder/pen/OJRvJpN" previews={["/public/images/audio-visualizer-thumbnail.png"]} tech={["Javascript", "HTML Canvas", "Web Audio API"]}/> 
     <Project title="React Data Components" description="Dynamic React components for visualizing basic data sets." codepen={true} project="https://codepen.io/ZippCodder/full/GRjdeZe" code="https://codepen.io/ZippCodder/pen/GRjdeZe?editors=0010" previews={["/public/images/react-data-components-thumbnail.png"]} tech={["React", "Javascript", "SVG"]}/> 
     <Project title="Voice Controlled To-Do List" description="A voice controlled to-do list application built using the Web Speech API." codepen={true} code="https://codepen.io/ZippCodder/pen/wvqrBOe" project="https://codepen.io/ZippCodder/full/wvqrBOe" previews={["/public/images/todo-thumbnail.png"]} tech={["HTML, CSS, Javascript", "Web Speech API"]}/> 
     <Project title="8-Bit Piano" description="An 8-Bit style piano built with React and the Web Audio API." codepen={true} code="https://codepen.io/ZippCodder/pen/KKgQrWX?editors=0110" project="https://codepen.io/ZippCodder/full/KKgQrWX" previews={["/public/images/piano-thumbnail.png"]} tech={["React", "Javascript", "Web Audio API"]}/> 
    <button className="project__source" onClick={() => {window.open("https://github.com/ZippCodder/personal-portfolio","_blank")}}>View Portfolio Code</button> 
    </div>
   </div>
  </main>
 );
}

function Project(props) {
 return (
  <div className="content__project">
   <Slideshow previews={props.previews} inactive={props.codepen} /> 
    <div className="project__info">
     <h1 className="info__title"><img className="info__logo" src={(!props.codepen) ? props.logo:"/public/images/codepen-logo.png"} />{props.title}<p className="info__subtitle">{props.subtitle}</p></h1>
     <div className="info__tech">
      {(props.tech || []).map((tech,ind) => {
         return <p className="tech__item" key={ind}>{tech}</p>
       })}
     </div>
     <p className="info__description">{props.description}</p>
     <div className="info__buttons">
      <a onClick={() => {window.open(props.code, "_blank")}} target="_blank"><button className="buttons__code">See Code</button></a>
      <a onClick={() => {window.open(props.project, "_blank")}} target="_blank"><button className="buttons__project">Open Project <i className="fas fa-project-diagram"></i></button></a>
     </div>
    </div>
  </div>
 );
}

function Slideshow(props) {
 
 const [currentSlide, setCurrentSlide] = React.useState(0);

 return (
  <div className="project__slideshow">
   <img className="slideshow__image" src={props.previews[0]} style={{display: (currentSlide == 0) ? "block":"none"}} />
   <img className="slideshow__image" src={(!props.inactive) ? props.previews[1]:""} style={{display: (currentSlide == 1) ? "block":"none"}} />
   <img className="slideshow__image" src={(!props.inactive) ? props.previews[2]:""} style={{display: (currentSlide == 2) ? "block":"none"}} />
   <div className="slideshow__buttons" style={{display: (!props.inactive) ? "grid":"none"}}>
    <button className="slideshow__button slideshow__button-1" style={{backgroundColor: (currentSlide == 0) ? "gray":"white"}} onClick={() => {setCurrentSlide(0)}}></button>
    <button className="slideshow__button slideshow__button-2" style={{backgroundColor: (currentSlide == 1) ? "gray":"white"}} onClick={() => {setCurrentSlide(1)}}></button>
    <button className="slideshow__button slideshow__button-3" style={{backgroundColor: (currentSlide == 2) ? "gray":"white"}} onClick={() => {setCurrentSlide(2)}}></button>
   </div>
  </div>
 );
}
