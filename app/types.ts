/*----- Categories Data -----*/
export interface CategoryImage {
    id: number;
    height: number;
    url: string;
    labelPosition: string;
}

export interface Category {
    id: number;
    imageId: number;
    parentId: number;
    name: string;
    description?: string;
    attributes?: object;
    children?: Category[];
    image?: CategoryImage;
    createdAt: Date;
    updatedAt?: Date;
    deletedAt?: Date;
}

/*----- Brand Data -----*/
// TODO: update to match Database Brand entity
export interface Brand {
    name: string;
    products: number;
    rating: number;
    reviews: number;
    categories: string[];
    image: string;
}

/*----- Discount Data -----*/
export interface Discount {
    id: number;
    name: string;
    type: string; // TODO: convert to enum ?
    value: number;
    appliesToType: string; // TODO: convert to enum ?
    startDate?: Date;
    endDate?: Date;
    isActive?: boolean;
    minPurchaseAmountCents: number;
    createdAt: Date;
    updatedAt?: Date;
    deletedAt?: Date;
}

// TODO: use actual discount interface in the home page
export interface HomePageDiscount {
    name: string;
    price: number;
    brand: string;
    badge: string;
    image: string;
}

/*----- Product Data -----*/
export interface Product {
    id: number;
    name: string;
    priceCent: number;
    brandId: number;
    brand?: Brand;
    categoryId: number;
    category?: Category;
    imageUrl?: string;
    reviewCount?: number;
    avgRating?: number;
    relevance?: number;
    badge?: string;
}

/*----- API Response -----*/
export type ApiResponse<resource> = {
    result: resource[];
    message?: string;
}

/*----- Categories Masonry -----*/
export interface MasonryProps {
    items: Category[];
    ease: string;
    duration: number;
    stagger: number;
    animateFrom: string;
    scaleOnHover: boolean;
    hoverScale: number;
    blurToFocus: boolean;
    colorShiftOnHover: boolean;
}
