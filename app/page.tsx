"use client";
import DomeGallery from "./Hero-DomeGallery/DomeGallery";
import {
  Navbar,
  NavbarBrand,
  NavbarCollapse,
  NavbarToggle,
  Dropdown,
  DropdownItem,
  TextInput,
  Button,
} from "flowbite-react";
import { HiSearch, HiShoppingCart, HiUser } from "react-icons/hi";
import Link from "next/link";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaWhatsapp,
  FaTiktok,
} from "react-icons/fa";
import { Span } from "next/dist/trace";
import Footer from "./components/Footer.js";
import DealsBanner from "./components/DealsBanner.js";
import Categories from "./components/Categories.js";
import RecentlyViewed from "./components/RecentlyViewed.js";
import NavBar from "./components/NavBar.js";
import ScrollFloat from "./components/ScrollFloat"; // make sure this is your ScrollFloat path
import { motion } from "framer-motion";
import RotatingText from "./components/RotatingText";
import TiltedCard from "./components/TiltedCard";
import HomeProductCard from "./components/HomeProductCard";
import TiltedWrapper from "./components/TiltedWrapper.js";
import { useFetch } from "./hooks/useFetch";
import { Brand, Category, Discount, HomePageDiscount, Product } from "./types";

export default function NoonNavbar() {
  const { data: categoriesData, loading: loadingCategories, error: categoriesError } = useFetch<Category>('/api/home/categories?images&names=shorts,shoes,t-shirts,shirts,pants,hoodies');
  const { data: brandsData, loading: loadingBrands, error: brandsError } = useFetch<Brand>('/api/home/brands');
  const { data: discountsData, loading: loadingDiscounts, error: discountsError } = useFetch<HomePageDiscount>('/api/home/discounts');
  const { data: recommendedProductsData, loading: loadingRecommendedProducts, error: recommendedProductsError } = useFetch<Product>('/api/home/products/recommended');
  console.log("recommended Products:", recommendedProductsData);

  return (
    <>
    
    <div className="bg-[#FFFCF2]">
      <NavBar />
  
      {/* Navigation Links below Navbar */}
      {/* <div className="flex gap-10 p-10 text-blue-700 mt-[80px] bg-amber-300">
        <p>Navigate to the pages through these links:</p>
        <Link href="/product" className="link">
          Product
        </Link>
        <Link href="/SignIn" className="link">
          SignIn
        </Link>
        <Link href="/search" className="link">
          Search
        </Link>
        <Link href="/SignUp" className="link">
          SignUp
        </Link>
        <Link href="/favourites" className="link">
          Favourites
        </Link>
        <Link href="/orders" className="link">
          Orders
        </Link>
        <Link href="/profile" className="link">
          Profile
        </Link>
        <Link href="/Cart" className="link">
          Cart
        </Link>
        <Link href="/checkout" className="link">
          checkout
        </Link>
      </div> */}
      
 <div className="relative w-full h-[90vh] overflow-hidden">
  {/* 🌐 Sphere as Background */}
  <div className="absolute inset-0 z-0">
    <DomeGallery />
  </div>

  {/* ✨ Hero Text on Top of Sphere */}
  <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-[#19100a]v px-4">
    <h1 className="font-extrabold mb-4 tracking-tight">
      <span className="text-[clamp(2rem,5vw,6rem)] font-extrabold">
        Arrival of{" "}
      </span>
      <RotatingText
        texts={["Outfit", "Collection", "Style"]}
        mainClassName="text-[clamp(2rem,5vw,6rem)] font-extrabold text-[#19100a] inline-block bg-[#FFFCF2]  px-4 py-2 rounded-3xl shadow-md"
        staggerFrom="last"
        initial={{ y: "100%", opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: "-120%", opacity: 0 }}
        rotationInterval={2000}
      />
    </h1>


    <motion.button
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, delay: 0.6 }}
      type="button"
      className="inline-flex items-center px-6 py-3 text-base font-medium text-[#FFFCF2] bg-[#5C0B00] rounded-full shadow hover:bg-[#94492e] focus:ring-2 focus:ring-offset-2 focus:ring-white  hover:shadow-lg hover:scale-105 transition-all duration-300 "
    >
      Explore Products
      <svg
        className="w-5 h-5 ml-2"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M17 8l4 4m0 0l-4 4m4-4H3"
        />
      </svg>
    </motion.button>
  </div>
</div>

      {/* Trending brands */}
      <section className="bg-[#FFFCF2] pb-7 ">
        <div className="h-full flex flex-col justify-start">
          {/* Blue section full width */}
          <section className="w-full mt-[32px] bg-[url('/TbrandsBackgd.jpg')] bg-cover bg-center bg-no-repeat px-[32px] pb-[32px] py-6">
            <div className="relative mb-[24px]  py-3">
              {/* Desktop & tablet view (centered heading, floating button) */}
              <h2 className="hidden sm:block text-4xl font-extrabold text-center w-fit mx-auto relative text-[#FFFCF2]">
                Trending Brands
                
              </h2>

              <Link
                href="/checkout"
                className="hidden sm:block absolute right-4 top-1/2 -translate-y-1/2 link px-4 py-2 rounded-full bg-[#5C0B00] text-[#FFFCF2] font-semibold shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300 hover:bg-gray-200"
              >
                View all
              </Link>

              {/* Mobile view (left heading + button on right in flex row) */}
              <div className="flex items-center justify-between sm:hidden px-5">
                <h2 className="text-[30px] font-bold text-[#FFFCF2]">Trending Brands
                  <span className="block w-16 h-1 bg-gradient-to-r from-amber-400 to-pink-500 rounded-full mx-auto mt-4"></span>
                </h2>
                
                <Link
                  href="/checkout"
                  className="link px-3 py-1 rounded-full bg-white text-[#1b365d] font-semibold shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300 hover:bg-gray-200 text-lg"
                >
                  View all
                </Link>
              </div>
            </div>

            <Swiper
              modules={[Autoplay]}
              slidesPerView={9}
              spaceBetween={1}
              breakpoints={{
                480: { slidesPerView: 2, spaceBetween: 12 },
                640: { slidesPerView: 3, spaceBetween: 16 },
                768: { slidesPerView: 4, spaceBetween: 20 },
                1024: { slidesPerView: 6, spaceBetween: 24 },
                1280: { slidesPerView: 8, spaceBetween: 28 },
              }}
              autoplay={{
                delay: 1500, // time between slides in ms
                disableOnInteraction: false, // continue autoplay after interaction
              }}
              loop={true} // makes the slider loop infinitely
              pagination={{ clickable: true }}
              className="pb-10 overflow-visible"
            >
              {brandsData && brandsData.result.map((brand, index) => (
                <SwiperSlide
                  key={index}
                  className="flex justify-center overflow-visible"
                >
                  <Link
                    href={`/brands/${brand.name
                      .toLowerCase()
                      .replace(/\s+/g, "-")}`}
                    className="flex justify-center pb-5 pt-5"
                  >
                    <TiltedCard
                      imageSrc={brand.image}
                      altText={brand.name}
                      captionText={brand.name}
                      containerHeight="165px"
                      containerWidth="165px"
                      imageHeight="165px"
                      imageWidth="165px"
                      scaleOnHover={1.1}
                      showTooltip={true}
                      showMobileWarning={false}
                      link={`/brands/${brand.name
                        .toLowerCase()
                        .replace(/\s+/g, "-")}`}
                    />
                  </Link>
                </SwiperSlide>
              ))}
            </Swiper>
          </section>
        </div>
      </section>

      {/* Flash Deals and Recommended for You */}
      <section className="container mx-auto my-[32px] gap-8 rounded-2xl">
        {/* Flash Deals */}
        <div className="bg-[#A52A2A] p-4 rounded-2xl shadow-2xl">
          <h2 className="hidden sm:block text-4xl font-extrabold text-center w-fit mx-auto relative text-[#FFFCF2]">
                Flash Deals
                
              </h2>

          <Swiper
            className=""
            modules={[Autoplay]}
            spaceBetween={20}
            slidesPerView={2}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
              1280: { slidesPerView: 4 },
            }}
            autoplay={{
              delay: 3500, // time between slides in ms
              disableOnInteraction: false, // continue autoplay after interaction
            }}
          >
            {discountsData && discountsData.result.map((deal, index) => (
              <SwiperSlide className="py-5 px-4" key={index}>
                <TiltedWrapper scaleOnHover={1.1}>
                  <Link href="/product" className="link">
                    <HomeProductCard
                    imageSrc={deal.image}
                    brand={deal.brand || "Brand Name"}
                    title={deal.name}
                    price={deal.price}
                    badge={deal.badge || "Best Seller"}
                    onAddToCart={() => console.log(`Add to cart: ${deal.name}`)}
                    onBuyNow={() => console.log(`Buy now: ${deal.name}`)}
                  />
                </Link>
                </TiltedWrapper>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Recommended for You */}
        <div className="bg-dark-brown p-4 rounded-2xl shadow mt-20">
         <h2 className="hidden sm:block text-4xl font-extrabold text-center w-fit mx-auto relative text-[#FFFCF2]">
                Recommended for You
                
              </h2>
          <Swiper
            modules={[Autoplay]}
            spaceBetween={20}
            slidesPerView={2}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
              1280: { slidesPerView: 4 },
            }}
            autoplay={{
              delay: 2000, // time between slides in ms
              disableOnInteraction: false, // continue autoplay after interaction
            }}
          >
            {recommendedProductsData && recommendedProductsData.result.map((item, index) => (
              <SwiperSlide className="py-5 px-4" key={index}>
                <TiltedWrapper scaleOnHover={1.05}>
                  <Link href="/product" className="link">
                  <HomeProductCard
                  imageSrc={item.imageUrl ?? "/beige logo.png"}
                  brand={(item.brand)? item.brand.name : "Brand Name"} // fallback if no brand
                  title={item.name}
                  price={`${(item.priceCent / 100)} EGP`}
                  badge={item.badge || null} // optional badge
                  onAddToCart={() => console.log(`Add to cart: ${item.name}`)}
                  onBuyNow={() => console.log(`Buy now: ${item.name}`)}
                  onAddToFavorites={() =>
                    console.log(`Add to favorites: ${item.name}`)
                  }
                />
                </Link>
                  
                </TiltedWrapper>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      {/* categories */}

      <Categories data={(categoriesData && !categoriesError)? categoriesData.result : []} />

      <RecentlyViewed />

      {/* DealsBanner */}

      <DealsBanner />

      <RecentlyViewed />

      {/* Recently viewed */}

      <RecentlyViewed />

      {/* footer */}

      <Footer />
      </div>
    </>
  );
}

// malachite green #3b7a57
// gold #d4af37
// sandy biege #Dcd5b9
// Nile blue #1b365d
// Turquoise #40E0D0
// Ancient Red #A52A2A
// Obsidian black #0B0B0B
// Papyrus white #f5f5dc

// bg-gradient-to-r from-[#3b7a57] via-[#d4af37] to-[#40E0D0]

// bg-gradient-to-r from-[#1b365d] via-[#d4af37] to-[#40E0D0]

// bg-gradient-to-r from-[#Dcd5b9] via-[#A52A2A] to-[#3b7a57]

// bg-gradient-to-r from-[#0B0B0B] via-[#1b365d] to-[#d4af37]

// bg-gradient-to-r from-[#f5f5dc] via-[#Dcd5b9] to-[#A52A2A]
