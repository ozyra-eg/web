import { fetchApiWithFallback } from "../api.controller";

const discountsData = [
    {
        "id": 18,
        "name": "winter sale",
        "type": "percentage",
        "value": 10,
        "startDate": "2025-10-01T00:00:00.000Z",
        "endDate": "2026-03-02T00:00:00.000Z",
        "isActive": true,
        "appliesToType": "category",
        "minPurchaseAmountCents": 0,
        "updatedAt": null,
        "createdAt": "2025-11-06T21:33:14.136Z",
        "deletedAt": null
    }
];


export async function GET(req: Request) {
    // extract query parameters
    const { searchParams } = new URL(req.url);
    console.log("Query Parameters:", Array.from(searchParams.entries()));

    // define what API url you want to call
    const apiUrl = "http://localhost:8888/api/v1/discounts";

    return fetchApiWithFallback(apiUrl, searchParams, { result: discountsData });
}