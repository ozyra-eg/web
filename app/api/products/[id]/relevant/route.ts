import { fetchApiWithFallback } from "@/app/api/api.controller";

const relevantProductsData = [
        {
            "id": 15,
            "name": "Random Product",
            "imageUrl": "https://farm4.staticflickr.com/3049/2327691528_f060ee2d1f.jpg",
            "categoryId": 78,
            "categoryName": "random category",
            "brandId": 6,
            "brandName": "Tech Innovations",
            "priceCent": 10000,
            "relevance": 1
        },
        {
            "id": 14,
            "name": "Amazing Air Jordan Shoes",
            "imageUrl": "https://placehold.co/600x400/fff/000",
            "categoryId": 77,
            "categoryName": "Shoes",
            "brandId": 6,
            "brandName": "Tech Innovations",
            "priceCent": 1500000,
            "relevance": 1
        },
        {
            "id": 13,
            "name": "Awesome Hoodie",
            "imageUrl": "https://placehold.co/600x400/fff/000",
            "categoryId": 75,
            "categoryName": "Winter Collection",
            "brandId": 6,
            "brandName": "Tech Innovations",
            "priceCent": 0,
            "relevance": 3
        },
        {
            "id": 12,
            "name": "Cotton Hoodie",
            "imageUrl": "https://placehold.co/600x400/fff/000",
            "categoryId": 75,
            "categoryName": "Winter Collection",
            "brandId": 6,
            "brandName": "Tech Innovations",
            "priceCent": 5500,
            "relevance": 3
        },
        {
            "id": 11,
            "name": "Ultra HD Monitor",
            "imageUrl": "https://prd.place/400?id=5&p=40",
            "categoryId": 73,
            "categoryName": "Electronics",
            "brandId": 6,
            "brandName": "Tech Innovations",
            "priceCent": 35000,
            "relevance": 1
        }
    ];

export async function GET(
    req: Request,
    { params }: { params: Promise<{ id: string }> }
) {
    // extract product id from path parameters
    const productId = (await params).id;

    // extract query parameters
    const { searchParams } = new URL(req.url);
    console.log("Query Parameters:", Array.from(searchParams.entries()));

    // define what API url you want to call
    const apiUrl = `http://localhost:8888/api/v1/products/${productId}/relevant`;

    return fetchApiWithFallback(apiUrl, searchParams, { result: relevantProductsData });
}