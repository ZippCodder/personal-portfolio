
export default function Header() {
 return (
 <>
  <header className="header">
    <h1 className="header__title">Deon Rich</h1>
    <small className="header__subtitle">Web Developer</small>
    <div className="header__socials">
      <div className="socials__links">
        <a href="https://github.com/ZippCodder" target="_blank"><i className="fab fa-github-square"></i></a>
        <a href="https://dev.to/zippcodder" target="_blank"><i className="fab fa-dev"></i></a> 
        <a href="https://codepen.io/ZippCodder/" target="_blank"><i className="fab fa-codepen"></i></a>
      </div>
      <button className="contact__email-button" onClick={() => {window.open("https://mail.google.com/mail/u/0/?fs=1&to=deon.edward.rich@gmail.com&tf=cm", "_blank")}}>Email Me</button>
    </div>
  </header>
  <div className="sub-header">
   <small className="sub-header__text">Portolio built with - <i className="fab fa-html5"></i><i className="fab fa-css3-alt"></i><i className="fab fa-js"></i><i className="fab fa-react"></i><i className="fab fa-node-js"></i></small>
  </div>
 </>
 );
}
