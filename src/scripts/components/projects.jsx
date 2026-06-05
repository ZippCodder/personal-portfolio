import "../../styles/projects.css";
import Header from "./header.jsx";
import { EmailBox } from "./about.jsx";

export default function Projects() {

 const [open, setOpen] = React.useState(false); 

 return (
  <>
  <Header openEmail={setOpen} page={1}/>
  <EmailBox open={open} setOpen={setOpen} />
  <main className="projects"> 
   <div className="projects__content">
    <div className="content__projects">
     <Project title="WTRW" logo="/public/images/wtrw_logo.png" description="A WebGL based shooting game with complex game mechanics." code="https://github.com/ZippCodder/WTRW" project="https://deonrich.dev:5000/" previews={["/public/images/wtrw-preview-1.png","/public/images/wtrw-preview-2.png","/public/images/wtrw-preview-3.png"]} subtitle="Online Game" tech={["HTML, CSS, Javascript", "WebGL", "Graphic Design", "DSA"]}/> 
     <Project title="Inkpad" logo="/public/images/inkpad_logo.png" description="Digital art program with ample tools for creating and downloading digital art." code="https://github.com/ZippCodder/inkpad-editor" project="https://deonrich.dev:3000/" subtitle="Digital Art Program" previews={["/public/images/inkpad-preview-1.png","/public/images/inkpad-preview-2.png","/public/images/inkpad-preview-3.png"]} tech={["HTML, CSS, Javascript", "Canvas API", "UX/UI"]}/> 
     <Project title="Audio Visualizer" description="An audio visualizer built with the Web Audio API." codepen={true} project="https://codepen.io/ZippCodder/full/OJRvJpN" code="https://codepen.io/ZippCodder/pen/OJRvJpN" previews={["/public/images/audio-visualizer-thumbnail.png"]} tech={["Javascript", "HTML Canvas", "Web Audio API"]}/> 
     <Project title="React Data Components" description="Dynamic React components for visualizing basic data sets." codepen={true} project="https://codepen.io/ZippCodder/full/GRjdeZe" code="https://codepen.io/ZippCodder/pen/GRjdeZe?editors=0010" previews={["/public/images/react-data-components-thumbnail.png"]} tech={["React", "Javascript", "SVG"]}/> 
     <Project title="Voice Controlled To-Do List" description="A voice controlled to-do list application built using the Web Speech API." codepen={true} code="https://codepen.io/ZippCodder/pen/wvqrBOe" project="https://codepen.io/ZippCodder/full/wvqrBOe" previews={["/public/images/todo-thumbnail.png"]} tech={["HTML, CSS, Javascript", "Web Speech API"]}/> 
     <Project title="8-Bit Piano" description="An 8-Bit style piano built with React and the Web Audio API." codepen={true} code="https://codepen.io/ZippCodder/pen/KKgQrWX?editors=0110" project="https://codepen.io/ZippCodder/full/KKgQrWX" previews={["/public/images/piano-thumbnail.png"]} tech={["React", "Javascript", "Web Audio API"]}/> 
    </div>
   </div>
  </main>
 </>
 );
}

function Project(props) {
 return (
  <div className="content__project outfit-regular">
   <Slideshow previews={props.previews} inactive={true} /> 
    <div className="project__info outfit-regular">
     <h1 className="info__title">{props.title}</h1>
     <p className="info__description">{props.description}</p>
     <div className="info__buttons">
      <a onClick={() => {window.open(props.code, "_blank")}} target="_blank"><button className="buttons__code outfit-regular">See Details</button></a>
      <a onClick={() => {window.open(props.project, "_blank")}} target="_blank"><button className="buttons__project outfit-regular">Open Project <i className="fa-solid fa-display"></i></button></a>
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
    <button className="slideshow__button slideshow__button-1" style={{backgroundColor: (currentSlide == 0) ? "#328fa8":"lightgray"}} onClick={() => {setCurrentSlide(0)}}></button>
    <button className="slideshow__button slideshow__button-2" style={{backgroundColor: (currentSlide == 1) ? "#328fa8":"lightgray"}} onClick={() => {setCurrentSlide(1)}}></button>
    <button className="slideshow__button slideshow__button-3" style={{backgroundColor: (currentSlide == 2) ? "#328fa8":"lightgray"}} onClick={() => {setCurrentSlide(2)}}></button>
   </div>
  </div>
 );
}
