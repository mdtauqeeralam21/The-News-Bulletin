import Header from './Header'
import Footer from './Footer'

export default function Layout({ children }) {
  return (
    <div>
      <header className='fixed top-0 left-0 right-0'>
      <Header />
      </header>

      <div className="mt-36">
        { children }
      </div>

      <footer className='relative inset-x-0 bottom-0'>
        <Footer />
      </footer>
    </div>
  )
}