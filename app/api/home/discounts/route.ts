const discountsData = [
    {
        name: "Dior Sauvage Parfum Spray",
        price: "500 EGP",
        rating: 4.0,
        reviews: 120,
        image: "/shoes6.jpg",
        brand: "Dior", // ✅ added
        badge: "Limited Offer", // ✅ added
    },
    {
        name: "Armani Code Eau de Toilette",
        price: "750 EGP",
        rating: 4.5,
        reviews: 95,
        image: "/shoes6.jpg",
        brand: "Armani",
        badge: "Best Seller",
    },
    {
        name: "Gucci Bloom Eau de Parfum",
        price: "900 EGP",
        rating: 4.3,
        reviews: 140,
        image: "/shoes6.jpg",
        brand: "Gucci",
        badge: "Hot Deal",
    },
    {
        name: "Gucci Bloom Eau de Parfum",
        price: "900 EGP",
        rating: 4.3,
        reviews: 140,
        image: "/shoes6.jpg",
        brand: "Gucci",
        badge: "Hot Deal",
    },
    {
        name: "Gucci Bloom Eau de Parfum",
        price: "900 EGP",
        rating: 4.3,
        reviews: 140,
        image: "/shoes6.jpg",
        brand: "Gucci",
        badge: "Hot Deal",
    },
];

export async function GET() {
    return Response.json({ result: discountsData });
}