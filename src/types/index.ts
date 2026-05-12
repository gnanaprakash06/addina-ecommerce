export interface Product {
    id: number;
    name: string;
    price: number;
    rating: number;
    discount?: string | null;
    badge?: string | null;
    badgeColor?: string;
    image: string;
}

export interface Feedback {
    id: number;
    name: string;
    role: string;
    comment: string;
    rating: number;
    image: string;
}
