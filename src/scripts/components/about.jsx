
import "../../styles/about.css";

export default function About() {
 return (
 <main className="about">
  <div className="about__about-tab">
    <p className="tab__title">About Me</p>
  </div>
  <div className="about__projects-tab">
    <p className="tab__title">My Projects</p>
  </div>
  <div className="about__content">
    <section className="content__personal-info">
      <img className="personal-info__profile" src="/public/images/profile.jpg"/>
       <h1 className="personal-info__greeting">Hi, Im Deon!</h1>
       <p className="personal-info__roles">Frontend Developer | Backend Developer | UX/UI Designer</p>
      <p className="personal-info__summary">
       I'm a reliable and hardworking tech enthusiast from the United States with native fluency in English and Spanish. I have extensive experience in areas such as professional written and verbal communication, carrying out complex assignments in a timely manner and advanced problem solving. In my free time I enjoy reading, playing piano and working on personal programming projects. I’m looking to provide as much value as possible, and am eager to take every opportunity available to take in new knowledge and advance my skills through results-driven work as I pursue a career in web development.
      </p>
      <div className="personal-info__details">
       <button className="details__number">+506 7063-8994</button>
       <button className="details__resume">View Resume</button>
      </div>
    </section>
    <section className="about__skills">
     <div className="skills__skill-panel">
      <Percentage theme="dodgerblue" percent="90" />
      <div className="skill-panel__skill">
       <h2 className="skill__title">Frontend</h2>
       <p className="skill__description">Strong knowledge in frontend technologies and frameworks, including essencial tools such as git. Also prficient in advanced javscript.</p>
       <div className="skill__list">HTML, CSS, Javascript | React | Typescript | Build tools | Git | Github</div>
      </div>
     </div>
    </section>
  </div> 
 </main>
 ); 
}

function Percentage(props) {
  let calc = () => {
    let p;

    switch (props.percent.length) {
      case 1:
        p = Number("0.0" + props.percent);
        break;
      case 2:
        p = Number("0." + props.percent);
        break;
      case 3:
        p = 1;
    }
    if (/^0./.test(props.percent)) return 628.31 - 628.31 * Number(props.percent.replace("0.", "0.00"));
    return 628.31 - 628.31 * p;
  };

  return (
    <svg className="skill-percentage" style={{width: "250px", height: "250px"}}>
      <g>
        <path
          stroke="lightgray"
          strokeWidth="50"
          fill="none"
          d="M 25 125 A 100 100 0 1 1 25 125.001"
        />
        <path
          style={{ "strokeDasharray": "628.31", "strokeDashoffset": calc() }}
          stroke={props.theme}
          strokeWidth="50"
          fill="none"
          d="M 25 125 A 100 100 0 1 1 25 125.001"
          strokeLinecap="round"
        />
        <text
          x="50%"
          y="50%"
          alignmentBaseline="middle"
          textAnchor="middle"
          fontSize="300%"
          fill={props.theme}
          style={{ "fontFamily": "arial" }}
        >
          {props.percent + "%"}
        </text>
        <circle cx="125" cy="175" r="10" fill={props.theme} />
      </g>
    </svg>
  );
}
