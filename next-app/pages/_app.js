import '../styles/globals.css'
import Link from 'next/link'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <nav>
        <Link href="/">Lorem ipsum</Link>
        <Link href="/cat-fact">Cat fact</Link>
        <Link href="/pug">Pug picture</Link>
      </nav>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
