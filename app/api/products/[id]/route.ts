import { fetchApiWithFallback } from "../../api.controller";

const productData = {
    "id": 12,
    "categoryId": 75,
    "brandId": 6,
    "name": "Cotton Hoodie",
    "description": "A comfortable and stylish hoodie.",
    "updatedAt": null,
    "createdAt": "2025-11-06T21:33:14.136Z",
    "deletedAt": null,
    "attributes": [
        {
            "name": "size",
            "type": "string",
            "values": [
                "s",
                "m",
                "l",
                "xl"
            ]
        },
        {
            "name": "color",
            "type": "string",
            "values": [
                "#f00",
                "#0f0",
                "#00f",
                "#000"
            ]
        }
    ],
    "imageUrl": "https://placehold.co/600x400/fff/000",
    "reviewCount": 8,
    "averageRating": "3.62",
    "reviews": [
        {
            "id": 35,
            "productId": 12,
            "customerId": 15,
            "rate": 3,
            "comment": "Very basic hoodie.",
            "updatedAt": null,
            "createdAt": "2025-11-06T21:33:14.136Z",
            "deletedAt": null,
            "customer": {
                "id": 15,
                "fname": "Jane",
                "lname": "Doe"
            }
        },
        {
            "id": 36,
            "productId": 12,
            "customerId": 17,
            "rate": 4,
            "comment": "Comfortable fit, good material.",
            "updatedAt": null,
            "createdAt": "2025-11-06T21:33:14.136Z",
            "deletedAt": null,
            "customer": {
                "id": 17,
                "fname": "Jane",
                "lname": "Smith"
            }
        }
    ],
    "ratingStats": [
        {
            "rate": 5,
            "percent": 0
        },
        {
            "rate": 4,
            "percent": 75
        },
        {
            "rate": 3,
            "percent": 12
        },
        {
            "rate": 2,
            "percent": 12
        },
        {
            "rate": 1,
            "percent": 0
        }
    ]
};

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
    const apiUrl = `http://localhost:8888/api/v1/products/${productId}?review=3&category&brand`;

    return fetchApiWithFallback(apiUrl, searchParams, { result: productData });
}