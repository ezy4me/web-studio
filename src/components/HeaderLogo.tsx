import Link from "next/link";
export default function HeaderLogo() {
  return (
    <div className="header__logo logo">
      <Link href="/" passHref className="logo__link">
        qpd. <span className="logo__text">quality product design</span>
      </Link>
    </div>
  );
}
