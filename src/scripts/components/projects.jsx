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
    <div className="content__projects">
     <Project title="Scribler" logo="/public/images/scribler_logo.png" description="Online writers platform where users can create an account and share, create and collaborate on written documents with other users." code="https://github.com/ZippCodder/Scribler" project="https://scribler.imdeonrich.com/" previews={["/public/images/scribler-preview-1.png","/public/images/scribler-preview-3.png","/public/images/scribler-preview-2.png"]}/> 
     <Project title="WTRW" logo="/public/images/wtrw_logo.png" description="An online shooting game where the objective is to collect weapons and eliminate as many enemies to get the highest score possible." code="https://github.com/ZippCodder/WTRW" project="https://wtrw.imdeonrich.com/" previews={["/public/images/wtrw-preview-1.png","/public/images/wtrw-preview-2.png","/public/images/wtrw-preview-3.png"]}/> 
     <Project title="Inkpad" logo="/public/images/inkpad_logo.png" description="Digital art program with ample tools for creating and downloading self made works of art." code="https://github.com/ZippCodder/inkpad-editor" project="https://inkpad.imdeonrich.com/" previews={["/public/images/inkpad-preview-1.png","/public/images/inkpad-preview-2.png","/public/images/inkpad-preview-3.png"]}/> 
    <button className="project__source" onClick={() => {window.open("https://github.com/ZippCodder/personal-portfolio","_blank")}}>View Portfolio Code</button> 
    </div>
   </div>
  </main>
 );
}

function Project(props) {
 return (
  <div className="content__project">
   <Slideshow previews={props.previews} /> 
    <div className="project__info">
     <h1 className="info__title"><img className="info__logo" src={props.logo} />{props.title}</h1>
     <p className="info__description">{props.description}</p>
     <div className="info__buttons">
      <a onClick={() => {window.open(props.code, "_blank")}} target="_blank"><button className="buttons__code">See Code</button></a>
      <a onClick={() => {window.open(props.project, "_blank")}} target="_blank"><button className="buttons__project">Open Project</button></a>
     </div>
    </div>
  </div>
 );
}

function Slideshow(props) {
 
 const [currentSlide, setCurrentSlide] = React.useState(0);
 
 React.useEffect(function() {
  let img2 = new Image();
  img2.src = props.previews[1];  
  
  let img3 = new Image();
  img3.src = props.previews[2];  
 },[]);

 return (
  <div className="project__slideshow">
   <img className="slideshow__image" src={(props.previews) ? props.previews[currentSlide]:undefined} />
   <div className="slideshow__buttons">
    <button className="slideshow__button slideshow__button-1" style={{backgroundColor: (currentSlide == 0) ? "gray":"white"}} onClick={() => {setCurrentSlide(0)}}></button>
    <button className="slideshow__button slideshow__button-2" style={{backgroundColor: (currentSlide == 1) ? "gray":"white"}} onClick={() => {setCurrentSlide(1)}}></button>
    <button className="slideshow__button slideshow__button-3" style={{backgroundColor: (currentSlide == 2) ? "gray":"white"}} onClick={() => {setCurrentSlide(2)}}></button>
   </div>
  </div>
 );
}
