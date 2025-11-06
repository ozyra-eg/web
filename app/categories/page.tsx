"use client";

import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import Masonry from "./Masonry";
import { useFetch } from "../hooks/useFetch";

export default function CategoriesPage() {
  const { data, loading, error } = useFetch('http://localhost:8888/api/v1/categories?images&children&name=winter collection');
  
  // TODO: handle the UI for these states
  if (! data) return <div>No Categories Found.</div>;
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <>
    <NavBar />
    <div className="mx-auto py-12 bg-white">
        
      <h1 className="text-4xl font-extrabold text-center mb-10 relative text-black ">All Categories</h1> 
      {data.result.map((cat, i) => (
        <section key={i} className="mb-16 bg-blue-900 px-4 py-6">
          {/* Section Header */}
          <h2 className="text-4xl font-extrabold text-center mb-10 relative text-beige pt-6">
            {cat.name}
            <span className="block w-16 h-1 bg-gradient-to-r from-amber-400 to-pink-500 rounded-full mx-auto mt-2"></span>
          </h2>

          {/* Masonry Grid */}
          <div className="relative">
            <Masonry items={cat.children} animateFrom="random" />  {/*  <-- change the animation start from this animateFrom attribute (random, top, bottom, center, left, right) */}
          </div>
        </section>
      ))}

    </div>
    <Footer />
    </>
  );
}
