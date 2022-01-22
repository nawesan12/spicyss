import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <>
      <Head>
        <title>SpicySS</title>
        <meta name="description" content="SpicySS is a css library" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Image src="/images/spicy.png" alt="SpicySS" width={150} height={150} />
        <h1>SpicySS</h1>
        <h3>Coming soon</h3>
      </main>

    </>
  )
}
