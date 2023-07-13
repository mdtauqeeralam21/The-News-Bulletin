import Footer from "./Footer";
import Header from "./Header";

export default function Layout({ children }) {
  return (
    <div className="layout">
      <header>
        <Header />
      </header>

      <div className="page-content">{children}</div>
      <Footer />
    </div>
  );
}
