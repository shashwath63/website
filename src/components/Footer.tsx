import React from "react";

interface FooterProps {
  copyrightDate: number;
}

const Footer: React.FC<FooterProps> = ({ copyrightDate }) => {
  return (
    <footer>
      <div className="footer-content">
        <p>Copyright {copyrightDate}</p>

        <nav>
          <ul>
            <li>
              <a href="/about">About</a>
            </li>
            <li>
              <a href="/contact">Contact</a>
            </li>
            <li>
              <a href="/terms">Terms</a>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
