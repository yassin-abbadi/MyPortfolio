import Footer from "./components/5-footer/Footer";
import Contact from "./components/4-contact/Contact";
import Main from "./components/3-main/Main";
import Hero from "./components/2-hero/Hero";
import Header from "./components/1-header/Header";
import { useEffect, useState } from "react";

// First thing we did is clean almost everything (we cleaned the vite stuff)
//then added the jsconfig.json
//then modified the .eslintrc.cjs to , node: true
//then deleted the app.css file and root from this very page (it came with vite)
//then emptied the code from the vite index.css
//$ react app works like this: the first thing that runs is the main.jsx (it reads the code and directs you to app.jsx).
// therefore, put that folder to pin so it's in place all the time.
// add component titles (header, hero, main, contact & footer) and import them from components (see app.jsx)

//use his courses materials (العناصر حق css وغيره ممتاز جدا)
//see how to add comments on css and html
//html {box-sizing: border-box;}
//*, *::before, *::after {box-sizing: inherit;}

function App() {
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 300) {
        setshowScrollBTN(true);
      } else {
        setshowScrollBTN(false);
      }
    });
  }, []);

  const [showScrollBTN, setshowScrollBTN] = useState(false);


    // SHOULD I KEEP A DIVDER BETWEEN HEADER AND HERO?

  return (
    <div id="up" className="container">
      <Header />
    {/*  <div className="divider" /> */}

      <Hero />
      <div className="divider" />
      <Main />
      <div className="divider" />
      <Contact />
      <div className="divider" />
      <Footer />

      <a
        style={{ opacity: showScrollBTN ? 1 : 0, transition: "2s" }}
        href="#up"
      >
        <button className="icon-keyboard_arrow_up scroll-to-top"></button>
      </a>
    </div>
  );
}

export default App;
