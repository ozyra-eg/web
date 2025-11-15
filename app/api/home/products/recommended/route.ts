const recommendedProductsData = [
    {
        name: "Versace Eros Flame",
        price: "650 EGP",
        rating: 4.2,
        reviews: 100,
        image: "/tshirt3.jpg",
        brand: "Dior",
        badge: "Limited Offer",
    },
    {
        name: "Chanel Bleu de Chanel",
        price: "1100 EGP",
        rating: 4.8,
        reviews: 200,
        image: "/shirt.jpg",
        brand: "Dior",
        badge: "Limited Offer",
    },
    {
        name: "YSL La Nuit de L’Homme",
        price: "850 EGP",
        rating: 4.6,
        reviews: 170,
        image: "/shorts.jpg",
        brand: "Dior",
        badge: "Limited Offer",
    },
    {
        name: "YSL La Nuit de L’Homme",
        price: "850 EGP",
        rating: 4.6,
        reviews: 170,
        image: "/shorts.jpg",
        brand: "Dior",
        badge: "Limited Offer",
    },
    {
        name: "YSL La Nuit de L’Homme",
        price: "850 EGP",
        rating: 4.6,
        reviews: 170,
        image: "/shorts.jpg",
        brand: "Dior",
        badge: "Limited Offer",
    },
    {
        name: "YSL La Nuit de L’Homme",
        price: "850 EGP",
        rating: 4.6,
        reviews: 170,
        image: "/shorts.jpg",
        brand: "Dior",
        badge: "Limited Offer",
    },
];

export async function GET() {
    return Response.json({ result: recommendedProductsData });
}