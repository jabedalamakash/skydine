import Footer from './components/Footer'
import Nav from './components/Nav'
import './globals.css'
import { Poppins } from 'next/font/google'



const poppins = Poppins({ subsets: ['latin'], 
weight:['100',"200","300" ,"400",'500','600','700','800', '900'],
})

export const metadata = {
  title: "Sky's Dine",
  description: 'All of your foods is here',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true} className={poppins.className}>
        <Nav/>
        {children}
        <Footer/>
        </body>
    </html>
  )
}
