import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const menu = [
  "Home",
  "Works",
  "Services",
  "Contact",
  "Vision",
  "Home",
  "Works",
  "Services",
  "Contact",
  "Vision",
];

export default function Container() {
  useGSAP(() => {
    const links = document.querySelectorAll(".link a");

    links.forEach((link) => {
      link.addEventListener("mouseenter", (e) => {
        const targetId = parseInt(e.target.getAttribute("data-id"));
        const rotationVal = targetId > 1 ? 360 : -360;

        const pill = document.querySelector(".pills");
        const video = document.querySelectorAll(".pills video");

        gsap.to(pill, {
          rotation: rotationVal,
          duration: 0.25,
          onComplete: () => {
            gsap.set(pill, {
              rotation: 0,
            });
          },
        });
        gsap.set(video, {
          zIndex: 0,
          opacity: 0,
          delay: 0.25,
        });

        gsap.set(`.pills video[data-id="${targetId}"]`, {
          zIndex: 10,
          opacity: 1,
          delay: 0.25,
        });
      });
    });
  }, []);

  return (
    <main>
      <div className="pills">
        <video autoPlay muted loop data-id="1">
          <source src="/black.webm" type="video/webm" />
        </video>
        <video src="/red.webm" autoPlay muted loop data-id="2" />
        <video src="/yellow.webm" autoPlay muted loop data-id="3" />
        <video src="/black.webm" autoPlay muted loop data-id="4" />
        <video src="/white.webm" autoPlay muted loop data-id="5" />
        <video src="/black.webm" autoPlay muted loop data-id="6" />
        <video src="/red.webm" autoPlay muted loop data-id="7" />
        <video src="/yellow.webm" autoPlay muted loop data-id="8" />
        <video src="/black.webm" autoPlay muted loop data-id="9" />
        <video src="/black.webm" autoPlay muted loop data-id="10" />
      </div>

      <div className="links">
        {menu.map((menu, i) => (
          <div
            key={i}
            className="link"
            onMouseEnter={() => setSelectedLink({ isActive: true, index })}
            onMouseLeave={() => setSelectedLink({ isActive: false, index })}
          >
            <a href="#" data-id={i + 1}>
              {menu}
              <span className="line-mask"></span>
            </a>
          </div>
        ))}
      </div>
    </main>
  );
}
