import { fetchApiWithFallback } from "@/app/api/api.controller";
import { config } from "@/config";

const productVersionsData = [
    {
        "id": 68,
        "productId": 12,
        "skuCode": "HOODIE-COT-S-BLK",
        "attributes": {
            "size": "S",
            "color": "#000"
        },
        "quantity": 80,
        "priceCent": 5500,
        "updatedAt": null,
        "createdAt": "2025-11-06T21:33:14.136Z",
        "deletedAt": null,
        "images": [
            "https://placehold.co/600x400/fff/000?text=T-shirt"
        ]
    },
    {
        "id": 69,
        "productId": 12,
        "skuCode": "HOODIE-COT-M-BLK",
        "attributes": {
            "size": "M",
            "color": "#000"
        },
        "quantity": 54,
        "priceCent": 5500,
        "updatedAt": null,
        "createdAt": "2025-11-06T21:33:14.136Z",
        "deletedAt": null,
        "images": [
            "https://placehold.co/600x400/fff/000?text=T-shirt"
        ]
    },
    {
        "id": 70,
        "productId": 12,
        "skuCode": "HOODIE-COT-L-BLK",
        "attributes": {
            "size": "L",
            "color": "#000"
        },
        "quantity": 21,
        "priceCent": 5500,
        "updatedAt": null,
        "createdAt": "2025-11-06T21:33:14.136Z",
        "deletedAt": null,
        "images": [
            "https://placehold.co/600x400/fff/000?text=T-shirt"
        ]
    },
    {
        "id": 71,
        "productId": 12,
        "skuCode": "HOODIE-COT-XL-BLK",
        "attributes": {
            "size": "XL",
            "color": "#000"
        },
        "quantity": 12,
        "priceCent": 5500,
        "updatedAt": null,
        "createdAt": "2025-11-06T21:33:14.136Z",
        "deletedAt": null,
        "images": [
            "https://placehold.co/600x400/fff/000?text=T-shirt"
        ]
    },
    {
        "id": 72,
        "productId": 12,
        "skuCode": "HOODIE-COT-S-RED",
        "attributes": {
            "size": "S",
            "color": "#f00"
        },
        "quantity": 211,
        "priceCent": 5500,
        "updatedAt": null,
        "createdAt": "2025-11-06T21:33:14.136Z",
        "deletedAt": null,
        "images": [
            "https://placehold.co/600x400/fff/f00?text=T-shirt"
        ]
    },
    {
        "id": 73,
        "productId": 12,
        "skuCode": "HOODIE-COT-M-RED",
        "attributes": {
            "size": "M",
            "color": "#f00"
        },
        "quantity": 107,
        "priceCent": 5500,
        "updatedAt": null,
        "createdAt": "2025-11-06T21:33:14.136Z",
        "deletedAt": null,
        "images": [
            "https://placehold.co/600x400/fff/f00?text=T-shirt"
        ]
    },
    {
        "id": 74,
        "productId": 12,
        "skuCode": "HOODIE-COT-L-RED",
        "attributes": {
            "size": "L",
            "color": "#f00"
        },
        "quantity": 13,
        "priceCent": 5500,
        "updatedAt": null,
        "createdAt": "2025-11-06T21:33:14.136Z",
        "deletedAt": null,
        "images": [
            "https://placehold.co/600x400/fff/f00?text=T-shirt"
        ]
    },
    {
        "id": 75,
        "productId": 12,
        "skuCode": "HOODIE-COT-XL-RED",
        "attributes": {
            "size": "XL",
            "color": "#f00"
        },
        "quantity": 0,
        "priceCent": 5500,
        "updatedAt": null,
        "createdAt": "2025-11-06T21:33:14.136Z",
        "deletedAt": null,
        "images": [
            "https://placehold.co/600x400/fff/f00?text=T-shirt"
        ]
    },
    {
        "id": 76,
        "productId": 12,
        "skuCode": "HOODIE-COT-S-GRN",
        "attributes": {
            "size": "S",
            "color": "#0f0"
        },
        "quantity": 211,
        "priceCent": 5500,
        "updatedAt": null,
        "createdAt": "2025-11-06T21:33:14.136Z",
        "deletedAt": null,
        "images": [
            "https://placehold.co/600x400/fff/0f0?text=T-shirt"
        ]
    },
    {
        "id": 77,
        "productId": 12,
        "skuCode": "HOODIE-COT-M-GRN",
        "attributes": {
            "size": "M",
            "color": "#0f0"
        },
        "quantity": 107,
        "priceCent": 5500,
        "updatedAt": null,
        "createdAt": "2025-11-06T21:33:14.136Z",
        "deletedAt": null,
        "images": [
            "https://placehold.co/600x400/fff/0f0?text=T-shirt"
        ]
    },
    {
        "id": 78,
        "productId": 12,
        "skuCode": "HOODIE-COT-L-GRN",
        "attributes": {
            "size": "L",
            "color": "#0f0"
        },
        "quantity": 112,
        "priceCent": 5500,
        "updatedAt": null,
        "createdAt": "2025-11-06T21:33:14.136Z",
        "deletedAt": null,
        "images": [
            "https://placehold.co/600x400/fff/0f0?text=T-shirt"
        ]
    },
    {
        "id": 79,
        "productId": 12,
        "skuCode": "HOODIE-COT-XL-GRN",
        "attributes": {
            "size": "XL",
            "color": "#0f0"
        },
        "quantity": 112,
        "priceCent": 5500,
        "updatedAt": null,
        "createdAt": "2025-11-06T21:33:14.136Z",
        "deletedAt": null,
        "images": [
            "https://placehold.co/600x400/fff/0f0?text=T-shirt"
        ]
    },
    {
        "id": 80,
        "productId": 12,
        "skuCode": "HOODIE-COT-S-BLU",
        "attributes": {
            "size": "S",
            "color": "#00f"
        },
        "quantity": 211,
        "priceCent": 5500,
        "updatedAt": null,
        "createdAt": "2025-11-06T21:33:14.136Z",
        "deletedAt": null,
        "images": [
            "https://placehold.co/600x400/fff/00f?text=T-shirt"
        ]
    },
    {
        "id": 81,
        "productId": 12,
        "skuCode": "HOODIE-COT-M-BLU",
        "attributes": {
            "size": "M",
            "color": "#00f"
        },
        "quantity": 107,
        "priceCent": 5500,
        "updatedAt": null,
        "createdAt": "2025-11-06T21:33:14.136Z",
        "deletedAt": null,
        "images": [
            "https://placehold.co/600x400/fff/00f?text=T-shirt"
        ]
    },
    {
        "id": 82,
        "productId": 12,
        "skuCode": "HOODIE-COT-L-BLU",
        "attributes": {
            "size": "L",
            "color": "#00f"
        },
        "quantity": 112,
        "priceCent": 5500,
        "updatedAt": null,
        "createdAt": "2025-11-06T21:33:14.136Z",
        "deletedAt": null,
        "images": [
            "https://placehold.co/600x400/fff/00f?text=T-shirt"
        ]
    },
    {
        "id": 83,
        "productId": 12,
        "skuCode": "HOODIE-COT-XL-BLU",
        "attributes": {
            "size": "XL",
            "color": "#00f"
        },
        "quantity": 112,
        "priceCent": 5500,
        "updatedAt": null,
        "createdAt": "2025-11-06T21:33:14.136Z",
        "deletedAt": null,
        "images": [
            "https://placehold.co/600x400/fff/00f?text=T-shirt"
        ]
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
    const apiUrl = `${config.apiUrl}/api/v1/products/${productId}/versions`;

    return fetchApiWithFallback(apiUrl, searchParams, { result: productVersionsData });
}