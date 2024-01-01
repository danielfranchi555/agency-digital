import Hero from '../components/hero/Hero'
import HeroSmall from '../components/sidebar/HeroSmall'
import Services from '../components/services/Services'
import Portfolio from '../components/portfolio/Portfolio'
import FooterTwo from '../components/footer/FooterTwo'
import Contact from '../components/contact/Contact'
import Navbar from '../components/navbar/Navbar'
export default function Home() {
  return (
   <>
           <div className='w-full'>
      <section className='w-[90%] mx-auto'>
        <Hero />
        <HeroSmall />
        <Services />
        <Portfolio />
      </section>
      <Contact />
      <FooterTwo/>
      

    </div>
   </>
  )
}
