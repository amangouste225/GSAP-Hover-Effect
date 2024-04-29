export default function Nav() {
  return (
    <header>
      <div className="logo">makepill</div>
      <ul className="nav-link">
        <li>
          <a href="#" className="nav-link_item">
            Instagram
          </a>
        </li>
        <li>
          <a href="#" className="nav-link_item">
            X/ Twitter
          </a>
        </li>
        <li>
          <a href="#" className="nav-link_item">
            Dribble
          </a>
        </li>
        <li>
          <a href="#" className="nav-link_item">
            Youtube
          </a>
        </li>
        <li>
          <a href="#" className="nav-link_item">
            LinkedIn
          </a>
        </li>
      </ul>
      <div className="copyright">
        <a href="#">hello@makeppill.com</a>
      </div>
    </header>
  );
}
