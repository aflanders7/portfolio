import React from 'react';
 
function Footer() {
  return (
    <footer className="footer">
      <div className="footer-name">© 2026 Audrey Flanders</div>
      <div className="footer-links">
        <a
          className="footer-link"
          href="https://github.com/aflanders7"
          target="_blank"
          rel="noreferrer"
        >
          GitHub ↗
        </a>
        <a
          className="footer-link"
          href="https://www.linkedin.com/in/audreyflanders/"
          target="_blank"
          rel="noreferrer"
        >
          LinkedIn ↗
        </a>
        <a className="footer-link" href="mailto:audrey.flanders117@gmail.com">
          Email ↗
        </a>
      </div>
    </footer>
  );
}
 
export default Footer;
 
