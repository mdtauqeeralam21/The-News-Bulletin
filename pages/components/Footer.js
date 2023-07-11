import Image from "next/image";
import imge from "@/assets/app-logo.jpg";
export default function Footer() {
  return (
    <>
      <hr />
      <div class="footer css-100">
        <h2 class="footer-101"></h2>
        <div class="filter-cont">
          <div class="filter-inner-cont">
            <ul class="map-cat-cb-cont">
              <li>
                <a class="lia-css" href="#">
                  <span class="css-y740m4"></span>
                  <Image
                    src={imge}
                    width={120}
                    height={100}
                    alt="logo of app"
                  />
                </a>
              </li>
            </ul>
            <ul class="map-cat-cb-cont">
              <li>
                <a class="lia-css" href="/en/food-and-drink">
                  <span class="css-y740m4">
                    <b>Food &amp; Drinks</b>
                  </span>
                </a>
              </li>
              <li>
                <a class="lia-css" href="/en/category/cafe">
                  Cafe
                </a>
              </li>
              <li>
                <a class="lia-css" href="/en/category/bakery">
                  Bakery
                </a>
              </li>
              <li>
                <a class="lia-css" href="/en/category/ice-cream">
                  Ice Cream
                </a>
              </li>
              <li>
                <a class="lia-css" href="/en/category/restaurant">
                  Restaurant
                </a>
              </li>
              <li>
                <a class="lia-css" href="/en/category/bagel-shop">
                  Bagel Shop
                </a>
              </li>
              <li>
                <a class="lia-css" href="/en/category/grocery-store">
                  Grocery store
                </a>
              </li>
            </ul>
            <ul class="map-cat-cb-cont">
              <li>
                <a class="lia-css" href="/en/art-culture">
                  <span class="css-y740m4">
                    <b>Art &amp; Culture</b>
                  </span>
                </a>
              </li>
              <li>
                <a class="lia-css" href="/en/category/gallery">
                  Gallery
                </a>
              </li>
              <li>
                <a class="lia-css" href="/en/category/bookstore">
                  Bookstore
                </a>
              </li>
              <li>
                <a class="lia-css" href="/en/category/public-art">
                  Public Art
                </a>
              </li>
              <li>
                <a class="lia-css" href="/en/category/museum">
                  Museum
                </a>
              </li>
              <li>
                <a class="lia-css" href="/en/category/architecture">
                  Architecture
                </a>
              </li>
              <li>
                <a class="lia-css" href="/en/category/school">
                  School
                </a>
              </li>
            </ul>
            <ul class="map-cat-cb-cont">
              <li>
                <a class="lia-css" href="/en/fashion">
                  <span class="css-y740m4">
                    <b>Fashion</b>
                  </span>
                </a>
              </li>
              <li>
                <a class="lia-css" href="/en/category/apparel">
                  Apparel
                </a>
              </li>
              <li>
                <a class="lia-css" href="/en/category/cosmetics">
                  Cosmetics
                </a>
              </li>
            </ul>
            <ul class="map-cat-cb-cont">
              <li>
                <a class="lia-css" href="/en/living">
                  <span class="css-y740m4">
                    <b>Living</b>
                  </span>
                </a>
              </li>
              <li>
                <a class="lia-css" href="/en/category/sports">
                  Sports
                </a>
              </li>
              <li>
                <a class="lia-css" href="/en/category/supermarket">
                  Supermarket
                </a>
              </li>
              <li>
                <a class="lia-css" href="/en/category/kids">
                  Kids
                </a>
              </li>
              <li>
                <a class="lia-css" href="/en/category/general-store">
                  General store
                </a>
              </li>
              <li>
                <a class="lia-css" href="/en/category/plant">
                  Plant
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="css-footer20">
        <ul class="css-footer21">
          <li>
            <span font-size="10" letter-spacing="1" class="css-y740m4">
              ©copyright 2023
            </span>
          </li>
          <li>
            <span font-size="10" letter-spacing="1" class="css-y740m4">
              The News and Blogs Bulletin
            </span>
          </li>
        </ul>
      </div>
    </>
  );
}
