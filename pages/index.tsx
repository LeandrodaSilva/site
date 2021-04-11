import React from "react"
import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import { getSortedPostsData } from '../lib/posts'
import Link from 'next/link'
import Date from '../components/date'
import { GetStaticProps } from 'next'
import * as icons from "@fortawesome/free-solid-svg-icons"
import * as brandsIcons from "@fortawesome/free-brands-svg-icons"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"

export const getStaticProps: GetStaticProps = async () => {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData,
    }
  }
}

export default function Home({
  allPostsData,
}: {
  allPostsData: {
    date: string
    title: string
    id: string
  }[],
}) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>

      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Links</h2>
        <ul className={utilStyles.list}>
          <li className={utilStyles.listItem}>
            <FontAwesomeIcon height={15} icon={icons.faEnvelope} />{'  '}
            <a href="mailto:ld_silva13@hotmail.com?subject=Olá%20Leandro">ld_silva13@hotmail.com</a>
          </li>

          <li className={utilStyles.listItem}>
            <FontAwesomeIcon height={15} icon={brandsIcons.faGithub} />{'  '}
            <a href="https://github.com/LeandrodaSilva">LeandroDaSilva</a>
          </li>
        </ul>
      </section>

      {/*{*/}
      {/*  (allPostsData.length > 0) &&*/}
      {/*  <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>*/}
      {/*    <h2 className={utilStyles.headingLg}>Blog</h2>*/}
      {/*    <ul className={utilStyles.list}>*/}
      {/*      {allPostsData.map(({ id, date, title }) => (*/}
      {/*        <li className={utilStyles.listItem} key={id}>*/}
      {/*          <Link href={`/posts/${id}`}>*/}
      {/*            <a>{title}</a>*/}
      {/*          </Link>*/}
      {/*          <br />*/}
      {/*          <small className={utilStyles.lightText}>*/}
      {/*            <Date dateString={date} />*/}
      {/*          </small>*/}
      {/*        </li>*/}
      {/*      ))}*/}
      {/*    </ul>*/}
      {/*  </section>*/}
      {/*}*/}
    </Layout>
  )
}
