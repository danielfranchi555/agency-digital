import { Inter,Nunito_Sans } from 'next/font/google'
import './globals.css'
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

        {children}
        </body>
    </html>
  )
}
