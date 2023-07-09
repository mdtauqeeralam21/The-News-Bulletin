import React from 'react';
import Link from 'next/link';
import styles from '@/styles/Header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <h2 className={styles.heading}>News and Blogs</h2>
      <nav>
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
            <Link href="/about">
              News&Blogs
            </Link>
          </li>
          <li>
            <Link href="/about">
              Login
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
