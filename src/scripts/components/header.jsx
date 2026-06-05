import { Link } from "react-router";

export default function Header(props) {

 return (
 <>
  <header className="header">
    <nav className="navigation outfit-regular">
    <span>
     <Link to="/"><a className={(!props.page) ? "nav-link--selected":"nav-link"}>About</a></Link>
     <Link to="/projects"><a className={(props.page) ? "nav-link--selected":"nav-link"}>Projects</a></Link>
    </span>
     <a className="nav-link--email" onClick={() => props.openEmail(true)}>Email Me <i className="fa-solid fa-paper-plane"></i></a>
    </nav>
  </header>
 </>
 );
}
