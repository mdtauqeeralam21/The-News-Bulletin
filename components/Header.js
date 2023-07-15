import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useSession,signIn,signOut } from 'next-auth/react';


const Header = () => {
  const {data:session}=useSession();
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
            <Link href="/news">
              News
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
          <div>
         {session?.user ?(
          <>
              {/* <p>{session.user.name}</p> */}
              <div className='p-2 bg-blue-800 text-white text-sm text-center rounded hover:bg-blue-400 rounded'
              onClick={()=> signOut()}>Sign out</div>
              </>
          ):
          (
            <div className='p-2 bg-blue-800 text-white text-sm hover:bg-blue-400 rounded'
            onClick={()=> signIn()}>Sign in</div>
          )
          }      
        </div>
      </div>
    </nav>
    
    </>
  );
};

export default Header;
