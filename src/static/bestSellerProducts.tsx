import stylishGreyChair from "../assets/Black-grey-chair.png";
import chairPillow from "../assets/chair-pillow.png";
import alexanderSofa from "../assets/sofa.png";
import woodenChair from "../assets/wooden-chair.png";
import type { Product } from "../types";

const bestSellerProducts: Product[] = [
    {
        id: 1,
        name: "Wooden Chair",
        price: 150.0,
        rating: 4,
        badge: "10% Off",
        badgeColor: "bg-[#B98D58]",
        image: woodenChair,
    },
    {
        id: 2,
        name: "Alexander Sofa",
        price: 190.0,
        rating: 5,
        image: alexanderSofa,
    },
    {
        id: 3,
        name: "Chair Pillow",
        price: 49.0,
        rating: 5,
        image: chairPillow,
    },
    {
        id: 4,
        name: "Stylish Grey Chair",
        price: 150.0,
        rating: 4,
        badge: "15% Off",
        badgeColor: "bg-[#B98D58]",
        image: stylishGreyChair,
    },
    {
        id: 5,
        name: "Modern Lounge Chair",
        price: 210.0,
        rating: 5,
        badge: "NEW",
        badgeColor: "bg-[#C69C6D]",
        image: woodenChair,
    },
    {
        id: 6,
        name: "Classic Sofa",
        price: 320.0,
        rating: 4,
        image: alexanderSofa,
    },
];

export default bestSellerProducts;
