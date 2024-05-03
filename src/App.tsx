import Container from "./Container";
import Nav from "./Nav";
import "./styles/global.scss";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
function App() {
  useGSAP(() => {
    const cursor = document.querySelector(".cursor");
    const main = document.querySelector(".container");
    const copyright = document.querySelector(".copyright");
    const link = document.querySelectorAll(".link");
    main?.addEventListener("mousemove", (e: Event) => {
      gsap.to(cursor, {
        x: e.x,
        y: e.y,
        ease: "back.out",
        duration: 1,
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

    copyright?.addEventListener("click", () => {
      cursor.innerHTML = "Copied";
    });
    link.forEach((el) =>
      el.addEventListener("mouseenter", () => {
        cursor.innerHTML = "Open";
        gsap.to(cursor, {
          scale: 6,
        });
      })
    );

    link.forEach((el) =>
      el.addEventListener("mouseleave", () => {
        cursor.innerHTML = "";
        gsap.to(cursor, {
          scale: 1,
        });
      })
    );

    copyright?.addEventListener("mouseleave", () => {
      cursor.innerHTML = "";

      gsap.to(cursor, {
        scale: 1,
      });
      gsap.to(cursorText, {
        opacity: 0,
        y: 40,
      });
    });

    copyright?.addEventListener("click", () => {});

    const perl = (start, end, t) => {
      return start * (1 - t) + end * t;
    };

    const listContent = document.querySelector(".links");
    let cur = 0;
    let tar = 0;
    const eas = 0.5;

    document.addEventListener("mousemove", (e) => {
      const extra = listContent.offsetHeight - window.innerHeight;
      tar = (e.clientY / window.innerHeight) * -extra;
    });
    const animate = () => {
      cur = perl(cur, tar, eas);
      listContent.style.transform = `translateY(${cur}px)`;
      requestAnimationFrame(animate);
    };

    animate();
  }, []);

  return (
    <section className="container">
      <div className="cursor"></div>
      <Nav />
      <Container />
    </section>
  );
}

export default App;
