import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Icon } from "./Icon";

const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="header__logo logo">
        <Link href="/" passHref className="logo__link">
          qpd. <span className="logo__text">quality product design</span>
        </Link>
      </div>
      <nav className="header__nav nav">
        <ul className="nav__list">
          <li className="nav__item">
            <Link href="/projects" passHref className="nav__link">
              Проекты
            </Link>
          </li>
          <li className="nav__item">
            <Link href="/about" passHref className="nav__link">
              О студии
            </Link>
          </li>{" "}
          <li className="nav__item">
            <Link href="/services" passHref className="nav__link">
              Услуги
            </Link>
          </li>{" "}
          <li className="nav__item">
            <Link href="/request" passHref className="nav__link">
              Заявка
              <Icon
                name="send"
                width={40}
                height={40}
                stroke="--color-primary"
              />
            </Link>
          </li>
        </ul>
      </nav>
      <Icon
        className="burger-menu"
        name="menu"
        width={100}
        height={100}
        color="--color-primary"
      />
    </header>
  );
};

export default Header;
