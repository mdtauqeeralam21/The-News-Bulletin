import React from 'react';
import Link from 'next/link';
import styles from '@/styles/Header.module.css';
import Image from 'next/image';


const Header = () => {
  return (
    <>
    <nav className="bg-blue-100 flex justify-between m-2 p-3 sticky top-0">
        <Image 
        src={ "/header.png" } 
        width={ `400` } 
        height={ `200` } 
        alt="Logo" />
      <div className="p-8">
        <ul className={styles.navLinks}>
          <li>
            <Link href="/">
              Home
            </Link>
          </li>
          <li>
            <Link href="/foods">
              Foods
            </Link>
          </li>
          <li>
            <Link href="/fashion">
              Fashion
            </Link>
          </li>
    
          <li>
            <Link href="/sports">
              Sports
            </Link>
            </li>
            <li>
            <Link href="/sports">
              Entertainment
            </Link>
          </li>
          <li>
            <Link href="/technology">
              Technology
            </Link>
          </li>
      
        </ul>
      </div>
    </nav>
    </>
  );
};

export default Header;
