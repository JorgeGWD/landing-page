
import Head from 'next/head'
import Header from '../components/header/header'
import './sass/styles.css'
import Welcome from '../components/welcome/welcome'
import OurAdvantages from '../components/ourAdvantages/ourAdvantages'
import Discount from '../components/discount/discount'
import CertificationsAndPermits from '../components/certificationsAndPermits/certificationsAndPermits'
import About from '../components/about/about'
import Testimonials from '../components/testimonials/testimonials'
import Contact from '../components/contact/contact'

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
    <CertificationsAndPermits />
    <About />
    <Testimonials />
    <Contact />
  </>
)

export default IndexPage
