import Link from 'next/link'

export default function Layout({ children }) {
  return (
    <div className="layout">
      <header>
        <Link href="/">
                <h1>
              Just about news and Blogs
            </h1>
            <h2>Spread The Information</h2>
            </Link>
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