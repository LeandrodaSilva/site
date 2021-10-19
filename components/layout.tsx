import Head from "next/head";
import Image from "next/image";
import styles from "./layout.module.css";
import utilStyles from "../styles/utils.module.css";
import Link from "next/link";

export const name = "Leandro S.";
export const siteTitle = "Leandro S.";

export default function Layout({
  children,
  home,
}: {
  children: React.ReactNode;
  home?: boolean;
}) {
  return (
    <div className={styles.container}>
      <img className={styles.background} src="/images/world.svg" width="1920" height="1080" alt="World Map" />
      <main>{children}</main>
    </div>
  );
}
