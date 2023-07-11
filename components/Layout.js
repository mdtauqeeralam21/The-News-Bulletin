import Link from 'next/link'

export default function Layout({ children }) {
  return (
    <div className="layout">
      <header>
      <h1>The News and Blogs Bulletin</h1>
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