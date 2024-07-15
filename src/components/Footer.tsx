import React from "react";
import Link from "next/link";
import Image from "next/image";

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__logo">
          <Link href="/" className="footer__logo-link" passHref>
            qpd.{" "}
            <span className="footer__logo-text">quality product design</span>
          </Link>
        </div>
        <nav className="footer__nav">
          <ul className="footer__nav-list">
            <li className="footer__nav-item">
              <Link href="/" className="footer__nav-link" passHref>
                Проекты
              </Link>
            </li>
            <li className="footer__nav-item">
              <Link href="/services" className="footer__nav-link" passHref>
                Услуги
              </Link>
            </li>
            <li className="footer__nav-item">
              <Link href="/about" className="footer__nav-link" passHref>
                О студии
              </Link>
            </li>
            <li className="footer__nav-item">
              <Link href="/contact" className="footer__nav-link" passHref>
                Контакты
              </Link>
            </li>
          </ul>
        </nav>
        <div className="footer__socials">
          <a
            href="https://facebook.com"
            className="footer__social-link"
            aria-label="Facebook">
            <Image src="/vercel.svg" alt="vercel" width={40} height={40}/>
          </a>
          <a
            href="https://twitter.com"
            className="footer__social-link"
            aria-label="Twitter">
            <Image src="/vercel.svg" alt="vercel" width={40} height={40}/>
          </a>
          <a
            href="https://instagram.com"
            className="footer__social-link"
            aria-label="Instagram">
            <Image src="/vercel.svg" alt="vercel" width={40} height={40}/>
          </a>
        </div>
        <p className="footer__copyright">© 2024 qpd. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
