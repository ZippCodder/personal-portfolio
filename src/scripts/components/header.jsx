
export default function Header() {
 return (
 <>
  <header className="header">
    <h1 className="header__title">Deon Rich</h1>
    <small className="header__subtitle">Web Developer</small>
    <div className="header__socials">
      <div className="socials__links">
        <a href="https://www.linkedin.com/in/deon-edward-rich-283564300/" target="_blank"><i className="fab fa-linkedin"></i></a>
        <a href="https://github.com/ZippCodder" target="_blank"><i className="fab fa-github-square"></i></a>
        <a href="https://dev.to/zippcodder" target="_blank"><i className="fab fa-dev"></i></a> 
        <a href="https://codepen.io/ZippCodder/" target="_blank"><i className="fab fa-codepen"></i></a>
      </div>
      <button className="contact__number">+506 70638994</button>
    </div>
  </header>
  <div className="sub-header">
  </div>
 </>
 );
}
