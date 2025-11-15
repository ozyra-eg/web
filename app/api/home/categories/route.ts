import { fetchApiWithFallback } from "../../api.controller";

const categoriesData = [
    {
        name: "Shoes",
        image: { url: "/shoes.jpg", height: 500 },
    },
    {
        name: "Hoodies",
        image: { url: "/hoodie.jpg", height: 240 },
    },
    {
        name: "Shorts",
        image: { url: "/shorts2.jpg", height: 240 },
    },
    {
        name: "Pants",
        image: { url: "/pants2.jpg", height: 240 },
    },
    {
        name: "T-Shirts",
        image: { url: "/tshirt7.jpg", height: 240 },
    },
    {
        name: "Shirt",
        image: { url: "/shirt.jpg", height: 240 },
    }
];

export async function GET(req: Request) {
    // extract query parameters
    const { searchParams } = new URL(req.url);
    console.log("Query Parameters:", Array.from(searchParams.entries()));

    // define what API url you want to call
    const apiUrl = "http://localhost:8888/api/v1/categories";

    return fetchApiWithFallback(apiUrl, searchParams, { result: categoriesData });
}