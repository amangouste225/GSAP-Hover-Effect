import { useEffect } from "react";
import Container from "./Container";
import Nav from "./Nav";
import "./styles/global.scss";
import gsap from "gsap";
function App() {
  useEffect(() => {
    const cursor = document.querySelector(".cursor");
    const main = document.querySelector(".container");
    const copyright = document.querySelector(".copyright");
    const cursorText = document.querySelector(".cursor span");
    const link = document.querySelector(".link");

    main?.addEventListener("mousemove", (e: Event) => {
      gsap.to(cursor, {
        x: e.x,
        y: e.y,
        duration: 0.5,
      });
    });

    copyright?.addEventListener("mouseenter", () => {
      cursor.innerHTML = "Copy email !";
      gsap.to(cursor, {
        scale: 6,
      });

      gsap.to(cursorText, {
        y: 0,
        opacity: 1,
      });
    });

    link?.addEventListener("mouseenter", () => {
      cursor.innerHTML = "Open";
      gsap.to(cursor, {
        scale: 6,
      });
    });

    link?.addEventListener("mouseleave", () => {
      cursor.innerHTML = "";
      gsap.to(cursor, {
        scale: 1,
      });
    });

    copyright?.addEventListener("mouseleave", () => {
      cursor.innerHTML = "";

      gsap.to(cursor, {
        scale: 1,
      });
      gsap.to(cursorText, {
        opacity: 0,
        y: 50,
      });
    });

    copyright?.addEventListener("click", () => {});
  }, []);

  return (
    <section className="container">
      <div className="cursor">
        {/* <h1>
          <span>copy email</span>
        </h1> */}
      </div>
      <Nav />
      <Container />
    </section>
  );
}

export default App;
