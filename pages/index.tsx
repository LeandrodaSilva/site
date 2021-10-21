import React from "react";
import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import * as icons from "@fortawesome/free-solid-svg-icons";
import * as brandsIcons from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>

      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Contato</h2>
        <ul className={utilStyles.list}>
          <li className={utilStyles.listItem}>
            <FontAwesomeIcon height={15} icon={icons.faEnvelope} />{"  "}
            <a href="mailto:ld_silva13@hotmail.com?subject=Olá%20Leandro">
              me@leandrodasilva.dev
            </a>
          </li>

          <li className={utilStyles.listItem}>
            <FontAwesomeIcon height={15} icon={brandsIcons.faGithub} />{"  "}
            <a href="https://github.com/LeandrodaSilva">LeandroDaSilva</a>
          </li>
        </ul>
      </section>
    </Layout>
  );
}
