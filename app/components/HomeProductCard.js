"use client";

import { useState } from "react";
import Image from "next/image";
import { ShoppingCart, Check, Heart } from "lucide-react";

export default function HomeProductCard({
  imageSrc,
  brand,
  title,
  price,
  badge,
  onAddToCart,
  onBuyNow,
  onAddToFavorites,
}) {
  const [isFavorite, setIsFavorite] = useState(false);
  const [inCart, setInCart] = useState(false);

  const handleFavoriteClick = () => {
    setIsFavorite(!isFavorite);
    if (onAddToFavorites) onAddToFavorites(title);
  };

  const handleCartClick = () => {
    setInCart(!inCart);
    if (onAddToCart) onAddToCart(title);
  };

  return (
    <div className="group bg-[#F0DEC9] rounded-3xl hover:shadow-lg transition overflow-hidden border-[2px] border-gray-500">
      
      {/* Image wrapper */}
      <div className="relative w-full h-[300px] md:h-[350px]">
        <Image
          src={imageSrc}
          alt={title}
          fill
          className="object-cover "
        />

        {badge && (
          <span className="absolute top-6 left-6 bg-amber-500 text-white text-xs font-semibold px-3 py-1 rounded-full shadow">
            {badge}
          </span>
        )}

        <button
          onClick={handleFavoriteClick}
          className="absolute top-6 right-6 bg-white p-2 rounded-full shadow transition-all duration-300 hover:scale-110 hover:bg-gray-100
                 opacity-0 group-hover:opacity-100"
        >
          <Heart
            className={`w-4 h-4 transition-colors duration-300 ${
              isFavorite ? "text-red-500 fill-red-500" : "text-gray-700"
            }`}
          />
        </button>

        <button
          onClick={handleCartClick}
          className="absolute bottom-6 right-6 bg-white p-2 rounded-full shadow transition-transform duration-350 hover:scale-110 hover:bg-gray-100"
        >
          {inCart ? (
            <Check className="w-4 h-4 text-green-600" />
          ) : (
            <ShoppingCart className="w-4 h-4 text-gray-700" />
          )}
        </button>
      </div>

      {/* Product info */}
      <div className="p-4 pt-[0px]">
        {brand && <p className="text-sm text-gray-500">{brand}</p>}
        <h3 className="font-semibold text-gray-800 truncate">{title}</h3>
        <p className="text-lg font-bold text-gray-900">{price}</p>

        <button
          onClick={onBuyNow}
          className="mt-2 w-full bg-black text-white py-2 rounded-3xl hover:bg-white hover:text-black transition duration-350"
        >
          Buy Now
        </button>
      </div>
    </div>
  );
}
