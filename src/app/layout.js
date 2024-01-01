import { Inter,Nunito_Sans } from 'next/font/google'
import './globals.css'
import Hero from '@/components/hero/Hero'
import HeroSmall from '@/components/sidebar/HeroSmall'
import Services from '@/components/services/Services'
import Portfolio from '@/components/portfolio/Portfolio'
import FooterTwo from '@/components/footer/FooterTwo'
import Contact from '@/components/contact/Contact'
import Navbar from '@/components/navbar/Navbar'


const inter = Inter({ subsets: ['latin'] })
const nunito = Nunito_Sans({
   subsets: ['latin'],
   weight:['200','400','300'],
   variable:'-nunito-sans'
  },

)


export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={nunito.className}>
        <Navbar/>
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
        {children}
        </body>
    </html>
  )
}
