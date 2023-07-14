import React from 'react';
import Link from 'next/link';
import styles from '@/styles/Header.module.css';
import Image from 'next/image';


const Header = () => {
  return (
    <>
    
    <nav className="fixed top-0 left-0 right-0 bg-white md:m-0 p-1 border-1 border-indigo-100 ">
        <div className='content-center'>
          <Link href={"/"} >
        <Image className='rounded m-auto' 
        src={ "/header.png" } 
        width={ `400` } 
        height={ `200` } 
        alt="Logo" />
        </Link>
        </div>
      <div className="flex flex-row justify-center gap-6 bg-blue-100 p-3">
        
          <div>
            <Link href="/">
              Home
            </Link>
          </div>
          <div>
            <Link href="/foods">
              Foods
            </Link>
          </div>
          <div>
            <Link href="/fashion">
              Fashion
            </Link>
          </div>
    
          <div>
            <Link href="/sports">
              Sports
            </Link>
            </div>
            <div>
            <Link href="/entertainment">
              Entertainment
            </Link>
          </div>
          <div>
            <Link href="/technology">
              Technology
            </Link>
          </div>
      </div>
    </nav>
    
    </>
  );
};

export default Header;
