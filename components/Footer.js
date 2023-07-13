import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <div className="mt-8">
      <footer className="footer-1  bg-gray-700 dark:bg-gray-900">
        <div className="mx-auto  w-full max-w-screen-xl">
          <div className="grid  grid-cols-2 gap-8 px-4 py-6 lg:py-8 md:grid-cols-4">
            <div>
              <h2 className="mb-6 text-sm font-semibold uppercase dark:text-white">
                <Image
                  src="/app-logo.jpg"
                  alt="app logo"
                  width={120}
                  height={130}
                />
              </h2>
            </div>
            <div>
              <h2 classNameName="mb-6 text-sm font-semibold text-white uppercase dark:text-white">
                Fashion
              </h2>
              <ul classNameName=" dark:text-gray-400 font-medium dark:text-white">
                <li classNameName="mb-4">
                  <Link href="#" classNameName="hover:underline">
                    Apparel
                  </Link>
                </li>
                <li className="mb-4">
                  <Link href="#" className="hover:underline">
                    Trending News
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-white uppercase dark:text-white">
                Arts & Culture
              </h2>
              <ul className="text-white-500 dark:text-gray-400 font-medium dark:text-white">
                <li className="mb-4">
                  <Link href="#" className="hover:underline">
                    Blogs
                  </Link>
                </li>
                <li className="mb-4">
                  <Link href="#" className="hover:underline"></Link>
                </li>
                <li className="mb-4">
                  <Link href="#" className="hover:underline">
                    Movies News
                  </Link>
                </li>
                <li className="mb-4">
                  <Link href="#" className="hover:underline">
                    Gallery
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-white uppercase dark:text-white">
                Sports
              </h2>
              <ul className="  font-medium dark:text-white">
                <li className="mb-4">
                  <Link href="#" className="hover:underline">
                    Cricket
                  </Link>
                </li>
                <li className="mb-4">
                  <Link href="#" className="hover:underline">
                    Football
                  </Link>
                </li>
                
              </ul>
            </div>
          </div>
          <div className="footer-2 bg-gray-200 dark:bg-gray-700 md:flex items-center justify-center">
            <div className="footer-3 text-sm text-gray-900 dark:text-gray-300 items-center justify-center">
              © 2023 <Link href="#">The News Bulletin™</Link>. All Rights Reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}