import React from 'react';
import Link from 'next/link';
import styles from '@/styles/Header.module.css';
import Image from 'next/image';


const Header = () => {
  return (
    <>
    
    <nav className=" bg-white ">
        <div className='card content-center p-1 '>
          <Link href={"/"} >
        <Image className='rounded m-auto hover:border-2' 
        src={ "/header.png" } 
        width={ `400` } 
        height={ `200` } 
        alt="Logo" />
        </Link>
        </div>
      <div className="flex flex-row justify-center gap-6 bg-blue-100 p-3">
        
          <div className='p-1 hover:bg-blue-300 rounded'>
            <Link href="/">
              Home
            </Link>
          </div>
          <div className='p-1 hover:bg-blue-300 rounded'>
            <Link href="/foods">
              Foods
            </Link>
          </div>
          <div className='p-1 hover:bg-blue-300 rounded'>
            <Link href="/fashion">
              Fashion
            </Link>
          </div>
    
          <div className='p-1 hover:bg-blue-300 rounded'>
            <Link href="/sports">
              Sports
            </Link>
            </div>
            <div className='p-1 hover:bg-blue-300 rounded'>
            <Link href="/entertainment">
              Entertainment
            </Link>
          </div>
          <div className='p-1 hover:bg-blue-300 rounded'>
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
