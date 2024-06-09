
export default function Header() {
 return (
 <>
  <header className="header">
    <h1 className="header__title">Deon Rich</h1>
    <small className="header__subtitle">Web Developer</small>
    <div className="header__socials">
      <div className="socials__links">
        <i className="fab fa-github-square" href="https://github.com/ZippCodder"></i>
        <i className="fab fa-dev" href="https://dev.to/zippcodder"></i> 
        <i className="fab fa-codepen" href="https://codepen.io/ZippCodder/"></i>
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
