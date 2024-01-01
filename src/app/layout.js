import { Inter,Nunito_Sans } from 'next/font/google'
import './globals.css'
import Navbar from '@/Components/NavBar/Navbar'
import Hero from '@/Components/Hero/Hero'
import HeroSmall from '@/Components/HeroSmall/HeroSmall'
import Services from '@/Components/Services/Services'
import Portfolio from '@/Components/Portfolio/Portfolio'
import Footer from '@/Components/Footer/Footer'
import FooterTwo from '@/Components/FooterTwo/FooterTwo'

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
      <Footer />
      <FooterTwo/>
      

    </div>
        {children}
        </body>
    </html>
  )
}
