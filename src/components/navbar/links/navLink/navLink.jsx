"use client";
import Link from "next/link";
import styles from "./navLink.module.css";
import { usePathname } from "next/navigation";

const NavLink = ({ link }) => {
  const pathName = usePathname();

  return (
    <div
      className={`${styles.container} ${
        pathName === link.path ? styles.active : ""
      }`}
    >
      <Link href={link.path}>{link.title}</Link>
    </div>
  );
};

export default NavLink;
