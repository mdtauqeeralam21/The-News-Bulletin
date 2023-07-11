import React from 'react';
import Link from 'next/link';
import styles from '@/styles/Header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <img src="/header.png" alt="Logo" />
      </div>

      <nav className={styles.nav}>
        <ul className={styles.navLinks}>
          <li>
            <Link href="/">
              Home
            </Link>
          </li>
          <li>
            <Link href="/about">
              About
            </Link>
          </li>
          <li>
            <Link href="/news">
              News &amp; Blogs
            </Link>
          </li>
          <li>
            <Link href="/login">
              Login
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
