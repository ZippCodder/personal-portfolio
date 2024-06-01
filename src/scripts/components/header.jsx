
export default function Header() {
 return (
 <>
  <header className="header">
    <h1 className="header__title">Deon Rich</h1>
    <small className="header__subtitle">Web Developer</small>
    <div className="header__socials">
      <div className="socials__links">
        <i className="fab fa-github-square"></i>
        <i className="fab fa-dev"></i> 
        <i className="fab fa-codepen"></i>
      </div>
      <button className="contact__email-button">Email Me</button>
    </div>
  </header>
  <div className="sub-header">
   <small className="sub-header__text">Portolio built with - HTML, CSS, React, Node.js</small>
  </div>
 </>
 );
}
