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
      <main>{children}</main>
      <footer>
        <a
          id="digitalocean-referral"
          href="https://www.digitalocean.com/?refcode=869ca71ee1c6&utm_campaign=Referral_Invite&utm_medium=Referral_Program&utm_source=badge"
        >
          <img
            src="https://web-platforms.sfo2.digitaloceanspaces.com/WWW/Badge%202.svg"
            width="200"
            height="65"
            alt="DigitalOcean Referral Badge"
          />
        </a>
      </footer>
    </div>
  );
}
