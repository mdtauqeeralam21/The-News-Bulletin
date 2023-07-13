import Image from "next/image";

export default function Footer() {
  return (
    <div class="mt-8 dark:bg-white">
      <footer class="footer-1  bg-white dark:bg-gray-900">
        <div class="mx-auto  w-full max-w-screen-xl">
          <div class="grid  grid-cols-2 gap-8 px-4 py-6 lg:py-8 md:grid-cols-4">
            <div>
              <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                <Image
                  src="/app-logo.jpg"
                  alt="app logo"
                  width={120}
                  height={130}
                />
              </h2>
            </div>
            <div>
              <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                Fashion
              </h2>
              <ul class="text-gray-500 dark:text-gray-400 font-medium dark:text-white">
                <li class="mb-4">
                  <a href="#" class="hover:underline">
                    Apparel
                  </a>
                </li>
                <li class="mb-4">
                  <a href="#" class="hover:underline">
                    Cosmatics
                  </a>
                </li>
                <li class="mb-4">
                  <a href="#" class="hover:underline">
                    Trending News
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                Arts & Culture
              </h2>
              <ul class="text-gray-500 dark:text-gray-400 font-medium dark:text-white">
                <li class="mb-4">
                  <a href="#" class="hover:underline">
                    Blogs
                  </a>
                </li>
                <li class="mb-4">
                  <a href="#" class="hover:underline"></a>
                </li>
                <li class="mb-4">
                  <a href="#" class="hover:underline">
                    Movies News
                  </a>
                </li>
                <li class="mb-4">
                  <a href="#" class="hover:underline">
                    Gallery
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                Sports
              </h2>
              <ul class="text-gray-500 dark:text-gray-400 font-medium dark:text-white">
                <li class="mb-4">
                  <a href="#" class="hover:underline">
                    Cricket
                  </a>
                </li>
                <li class="mb-4">
                  <a href="#" class="hover:underline">
                    Football
                  </a>
                </li>
                <li class="mb-4">
                  <a href="#" class="hover:underline">
                    Trending Sports
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div class="footer-2 px-4 py-6 bg-gray-100 dark:bg-gray-700 md:flex items-center justify-center">
            <div class="footer-3 text-sm text-gray-500 dark:text-gray-300 items-center justify-center">
              © 2023 <a href="#">The News Bulletin™</a>. All Rights Reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
