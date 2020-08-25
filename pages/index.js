
import Head from 'next/head'
import Header from '../components/header/header'
import './sass/styles.css'
import Welcome from '../components/welcome/welcome'
import OurAdvantages from '../components/ourAdvantages/ourAdvantages'
import Discount from '../components/discount/discount'

const IndexPage = () => (
  <>
    <Head>
      <title>Cifes | Soluciones estéticas</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <Header />
    <Welcome />
    <OurAdvantages />
    <Discount />
  </>
)

export default IndexPage
