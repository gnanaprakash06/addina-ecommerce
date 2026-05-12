export default interface Product {
    id: number;
    name: string;
    price: number;
    rating: number;
    discount?: string | null;
    badge?: string | null;
    badgeColor?: string;
    image: string;
}
