import { NextRequest as Request } from "next/server";
import { fetchApiWithFallback } from "../api.controller";

const categoriesData = [
    {
        name: "Clothes",
        children: [
            { id: 1, name: "Hoodies", image: { url: "/shirt.jpg", height: 420, labelPosition: "top-left" } },
            { id: 2, name: "T-Shirts", image: { url: "/shirt.jpg", height: 300, labelPosition: "bottom-left" } },
            { id: 3, name: "Linen Shirts", image: { url: "/shirt.jpg", height: 750, labelPosition: "bottom-right" } }, // tall card
            { id: 4, name: "Shirts", image: { url: "/shirt.jpg", height: 350, labelPosition: "top-left" } },
            { id: 5, name: "Formal Shirts", image: { url: "/shirt.jpg", height: 820, labelPosition: "center" } }, // tall card
            { id: 6, name: "Casual", image: { url: "/shirt.jpg", height: 270, labelPosition: "left-vertical" } },
            { id: 7, name: "Polos", image: { url: "/shirt.jpg", height: 390, labelPosition: "bottom-left" } },
            { id: 8, name: "Jackets", image: { url: "/shirt.jpg", height: 460, labelPosition: "bottom-right" } },
            { id: 9, name: "Sweaters", image: { url: "/shirt.jpg", height: 320, labelPosition: "top-left" } },
        ],
    },
    {
        name: "Accessories",
        children: [
            { id: 10, name: "Jeans", image: { url: "/shirt.jpg", height: 380, labelPosition: "bottom-left" } },
            { id: 11, name: "Chinos", image: { url: "/shirt.jpg", height: 300, labelPosition: "top-left" } },
            { id: 12, name: "Joggers", image: { url: "/shirt.jpg", height: 440, labelPosition: "bottom-right" } },
            { id: 13, name: "Trousers", image: { url: "/shirt.jpg", height: 760, labelPosition: "top-right" } }, // tall card
            { id: 14, name: "Cargos", image: { url: "/shirt.jpg", height: 500, labelPosition: "bottom-left" } },
            { id: 15, name: "Denim", image: { url: "/shirt.jpg", height: 280, labelPosition: "top-left" } },
            { id: 16, name: "Slim Fit", image: { url: "/shirt.jpg", height: 360, labelPosition: "right-vertical" } },
            { id: 17, name: "Shorts", image: { url: "/shirt.jpg", height: 700, labelPosition: "bottom-right" } }, // tall card
        ],
    },
    {
        name: "Perfumes",
        children: [
            { id: 20, name: "Fresh", image: { url: "/shirt.jpg", height: 300, labelPosition: "top-left" } },
            { id: 21, name: "Woody", image: { url: "/shirt.jpg", height: 420, labelPosition: "left-vertical" } },
            { id: 22, name: "Citrus", image: { url: "/shirt.jpg", height: 360, labelPosition: "top-right" } },
            { id: 23, name: "Floral", image: { url: "/shirt.jpg", height: 480, labelPosition: "bottom-right" } },
            { id: 24, name: "Luxury", image: { url: "/shirt.jpg", height: 820, labelPosition: "center" } }, // tall card
            { id: 25, name: "Classic", image: { url: "/shirt.jpg", height: 400, labelPosition: "top-left" } },
            { id: 26, name: "Oriental", image: { url: "/shirt.jpg", height: 500, labelPosition: "right-vertical" } },
            { id: 27, name: "Modern", image: { url: "/shirt.jpg", height: 780, labelPosition: "top-right" } }, // tall card
        ],
    },
];

export async function GET(req: Request) {
    // extract query parameters
    const { searchParams } = new URL(req.url);
    console.log("Query Parameters:", Array.from(searchParams.entries()));

    // define what API url you want to call
    const apiUrl = "http://localhost:8888/api/v1/categories";

    return fetchApiWithFallback(apiUrl, searchParams, { result: categoriesData });
}