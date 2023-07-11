import Header from './Header'

export default function Layout({ children }) {
  return (
    <div className="layout">
      <header>
      <Header />
      </header>

      <div className="page-content">
        { children }
      </div>

      <footer>
        <p>Copyright 2023 Just About News and Blogs :)</p>
      </footer>
    </div>
  )
}