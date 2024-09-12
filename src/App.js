import "./App.scss";
import Intro from "./components/Intro";
import Navbar from "./components/Navbar";
import "./custom-bootstrap/custom-bootstrap.scss";
import "bootstrap-icons/font/bootstrap-icons.css";
// import "bootstrap/dist/js/bootstrap.bundle.js";
import Experience from "./components/Experience";
import { useEffect, useRef } from "react";
import MyWorks from "./components/MyWorks";

function App() {
  const sectionsRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Automatically scroll to the next component
            window.scrollTo({
              top: entry.target.offsetTop,
              behavior: "smooth",
            });
          }
        });
      },
      { threshold: 0.2 } // Trigger when 50% of the section is visible
    );

    sectionsRef.current.forEach((section) => {
      if (section) {
        observer.observe(section);
      }
    });

    // Cleanup the observer on unmount
    return () => {
      sectionsRef.current.forEach((section) => {
        if (section) {
          observer.unobserve(section);
        }
      });
    };
  }, []);

  return (
    <div className="container-fluid p-0">
      {/* Keep Navbar outside of scrollable sections */}
      <Navbar />

      {/* Scrollable sections */}
      <div className="scroll-sections">
        <section ref={(el) => (sectionsRef.current[0] = el)}>
          <Intro />
        </section>
        <section ref={(el) => (sectionsRef.current[1] = el)}>
          <MyWorks />
        </section>
        <section ref={(el) => (sectionsRef.current[2] = el)}>
          <Experience />
        </section>
      </div>
    </div>
  );
}

export default App;
