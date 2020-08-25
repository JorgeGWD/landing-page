
import Head from 'next/head'
import Header from '../components/header/header'
import './sass/styles.css'
import Welcome from '../components/welcome/welcome'
import OurAdvantages from '../components/ourAdvantages/ourAdvantages'

const IndexPage = () => (
  <>
    <Head>
      <title>Cifes | Soluciones estéticas</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <Header />
    <Welcome />
    <OurAdvantages />
  </>
)

export default IndexPage
