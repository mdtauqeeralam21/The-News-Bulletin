import Header from './Header'
import Footer from './Footer'

export default function Layout({ children }) {
  return (
    <div>
      <header className='m-1'>
      <Header />
      </header>

      <div className="mt-36">
        { children }
      </div>

      <footer>
        <Footer />
      </footer>
    </div>
  )
}