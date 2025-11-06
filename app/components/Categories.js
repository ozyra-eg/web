import Image from "next/image";
import Link from "next/link";

const positions = [
  {
    name: "Shoes",
    image: "/shoes.jpg",
    textPos: "left-0 top-1/2 -translate-y-1/2 -rotate-90",
    colSpan: "col-span-1",
    rowSpan: "row-span-2",
    height: "h-[500px]", // tall
  },
  {
    name: "Hoodies",
    image: "/hoodie.jpg",
    textPos: "top-4 left-4",
    colSpan: "col-span-1",
    rowSpan: "row-span-1",
    height: "h-[240px]",
  },
  {
    name: "Shorts",
    image: "/shorts2.jpg",
    textPos: "top-4 right-4",
    colSpan: "col-span-1",
    rowSpan: "row-span-1",
    height: "h-[240px]",
  },
  {
    name: "Pants",
    image: "/pants3.jpg",
    textPos: "bottom-4 left-4",
    colSpan: "col-span-2",
    rowSpan: "row-span-1",
    height: "h-[240px]", // wide
  },
  {
    name: "T-Shirts",
    image: "/tshirt7.jpg",
    textPos: "top-4 left-4",
    colSpan: "col-span-2",
    rowSpan: "row-span-1",
    height: "h-[240px]", // wide
  },
  {
    name: "Shirt",
    image: "/shirt.jpg",
    textPos: "bottom-4 right-4",
    colSpan: "col-span-1",
    rowSpan: "row-span-1",
    height: "h-[240px]",
  }
];

export default function Categories({ data }) {
  return (
    <section className="py-12 bg-[#FFFCF2]">
      <div className="container mx-auto">
        {/* Header Row */}
        <div className="relative mb-[24px] py-3">
          {/* Desktop & tablet view (centered heading, floating button) */}
          <h2 className="hidden sm:block text-4xl font-extrabold text-center w-fit mx-auto relative text-black">
            Categories
            <span className="block w-16 h-1 bg-gradient-to-r from-amber-400 to-pink-500 rounded-full mx-auto mt-4"></span>
          </h2>

          <Link
            href="/categories"
            className="hidden sm:block absolute right-4 top-1/2 -translate-y-1/2 link px-4 py-2 rounded-full bg-white text-[#1b365d] font-semibold shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300 hover:bg-gray-200"
          >
            View all
          </Link>

          {/* Mobile view (left heading + button on right in flex row) */}
          <div className="flex items-center justify-between sm:hidden px-20">
            <h2 className="text-[30px] font-bold text-black">Categories
              <span className="block w-16 h-1 bg-gradient-to-r from-amber-400 to-pink-500 rounded-full mx-auto mt-4"></span>
            </h2>

            <Link
              href="/categories"
              className="link px-3 py-1 rounded-full bg-white text-[#1b365d] font-semibold shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300 hover:bg-gray-200 text-lg"
            >
              View all
            </Link>
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-3 grid-rows-2 gap-6 px-5">
          {data.map((cat, i) => {
            if (i > 5) return;

            return (
              <div
                key={i}
                className={`relative rounded-2xl overflow-hidden shadow-lg cursor-pointer group 
          transition duration-500 ${positions[i].colSpan} ${positions[i].rowSpan} ${positions[i].height} 
          hover:shadow-[0_0_25px_5px_rgba(105,105,105,0.6)]`}
              >
                {/* Image with zoom effect */}
                <Image
                  src={cat.image.url}
                  alt={cat.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />

                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent 
            opacity-0 group-hover:opacity-100 transition duration-500"></div>

                {/* Text */}
                <h3
                  className={`absolute text-white text-3xl font-bold drop-shadow-lg 
            transition-all duration-500 transform group-hover:-translate-y-2 ${positions[i].textPos}`}
                >
                  {cat.name}
                </h3>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
