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

export interface CategoriesResponse {
    result: Category[]
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
