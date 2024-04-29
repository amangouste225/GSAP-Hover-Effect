export default function Container() {
  return (
    <main>
      <ul className="pills">
        <li>
          <video autoPlay muted loop alt="video" data-id="1">
            <source src="/black.webm" type="video/webm" />
          </video>
        </li>
        <li>
          <video src="/red.webm" autoPlay muted loop alt="video" data-id="2" />
        </li>
        <li>
          <video
            src="/yellow.webm"
            autoPlay
            muted
            loop
            alt="video"
            data-id="3"
          />
        </li>
        <li>
          <video
            src="/black.webm"
            autoPlay
            muted
            loop
            alt="video"
            data-id="4"
          />
        </li>
        <li>
          <video
            src="/white.webm"
            autoPlay
            muted
            loop
            alt="video"
            data-id="5"
          />
        </li>
        <li>
          <video
            src="/black.webm"
            autoPlay
            muted
            loop
            alt="video"
            data-id="6"
          />
        </li>
      </ul>

      <div className="links">
        <div className="link">
          <a href="#" data-id="1">
            Vision
          </a>
        </div>
        <div className="link">
          <a href="#" data-id="2">
            Home
          </a>
        </div>
        <div className="link">
          <a href="#" data-id="3">
            Work
          </a>
        </div>
        <div className="link">
          <a href="#" data-id="4">
            Services
          </a>
        </div>
        <div className="link">
          <a href="#" data-id="5">
            Contact
          </a>
        </div>
        <div className="link">
          <a href="#" data-id="6">
            Vision
          </a>
        </div>
      </div>
    </main>
  );
}
