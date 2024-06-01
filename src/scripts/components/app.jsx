//main application container

import "../../styles/styles.css";
import Header from "./header.jsx";
import About from "./about.jsx";

export default function App() {
 return (
  <React.Fragment>
   <Header/>
   <About/>
  </React.Fragment>
 );
}
