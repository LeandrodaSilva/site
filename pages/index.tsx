import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import { getSortedPostsData } from '../lib/posts'
import Link from 'next/link'
import Date from '../components/date'
import { GetStaticProps } from 'next'


export const getStaticProps: GetStaticProps = async ({ locale }) => {
  const lang = {
    "pt-BR": {
      "Developer": 'Desenvolvedor',
      "This is a sample website": "Este é um exemplo de site",
      "you’ll be building a site like this in": "você estará construindo um site como este em",
      "our Next.js tutorial": "nosso tutorial Next.js"
    },
    "en-US": {
      "Developer": "Developer",
      "This is a sample website": "This is a sample website",
      "you’ll be building a site like this in": "you’ll be building a site like this in",
      "our Next.js tutorial": "our Next.js tutorial"
    }
  }

  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData,
      __: lang[`${locale}`]
    }
  }
}

export default function Home({
  allPostsData,
  __
}: {
  allPostsData: {
    date: string
    title: string
    id: string
  }[],
  __: object
}) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>{__["Developer"]}</p>
        <p>
          ({__["This is a sample website"]} - {__["you’ll be building a site like this in"]}{' '}
          <a href="https://nextjs.org/learn">{__["our Next.js tutorial"]}</a>.)
        </p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>
                <a>{title}</a>
              </Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  )
}