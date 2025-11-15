const recommendedProductsData = [
    {
        name: "Versace Eros Flame",
        priceCent: 65000,
        rating: 4.2,
        reviewCount: 100,
        imageUrl: "/tshirt3.jpg",
        brand: { name: "Dior" },
        badge: "Limited Offer",
    },
    {
        name: "Chanel Bleu de Chanel",
        priceCent: 110000,
        rating: 4.8,
        reviewCount: 200,
        imageUrl: "/shirt.jpg",
        brand: { name: "Dior" },
        badge: "Limited Offer",
    },
    {
        name: "YSL La Nuit de L’Homme",
        priceCent: 85000,
        rating: 4.6,
        reviewCount: 170,
        imageUrl: "/shorts.jpg",
        brand: { name: "Dior" },
        badge: "Limited Offer",
    },
    {
        name: "YSL La Nuit de L’Homme",
        priceCent: 85000,
        rating: 4.6,
        reviewCount: 170,
        imageUrl: "/shorts.jpg",
        brand: { name: "Dior" },
        badge: "Limited Offer",
    },
    {
        name: "YSL La Nuit de L’Homme",
        priceCent: 85000,
        rating: 4.6,
        reviewCount: 170,
        imageUrl: "/shorts.jpg",
        brand: { name: "Dior" },
        badge: "Limited Offer",
    },
    {
        name: "YSL La Nuit de L’Homme",
        priceCent: 85000,
        rating: 4.6,
        reviewCount: 170,
        imageUrl: "/shorts.jpg",
        brand: { name: "Dior" },
        badge: "Limited Offer",
    },
];

export async function GET() {
    return Response.json({ result: recommendedProductsData });
}