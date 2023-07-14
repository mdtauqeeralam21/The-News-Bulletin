import Header from './Header'
import Footer from './Footer'

export default function Layout({ children }) {
  return (
    <div>
      <header className='font-Playfair text-lg fixed top-0 left-0 w-full'>
      <Header />
      </header>

      <div className=" font-Playfair mt-40">
        { children }
      </div>

      <footer className='relative inset-x-0 bottom-0'>
        <Footer />
      </footer>
    </div>
  )
}