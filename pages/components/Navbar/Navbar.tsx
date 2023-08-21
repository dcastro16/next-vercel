import { ActiveLink } from "../ActiveLink/ActiveLink";
import styles from "./Navbar.module.css";

const menuItems = [
  {
    text: "Home",
    href: "/",
  },
  {
    text: "About",
    href: "/about",
  },
  {
    text: "Contact",
    href: "/contact",
  },
  {
    text: "Pricing",
    href: "/pricing",
  },
];

export const Navbar = () => {
  return (
    <nav className={styles["navbar"]}>
      {menuItems.map((page, index) => {
        return (
          <ActiveLink
            key={index}
            text={page.text}
            href={page.href}
          ></ActiveLink>
        );
      })}
    </nav>
  );
};
