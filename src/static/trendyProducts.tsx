import stylishGreyChair from "../assets/Black-grey-chair.png";
import stylishGreyChair2 from "../assets/Black-grey-chair2.png";
import chairPillow from "../assets/chair-pillow.png";
import seaterGraySofa from "../assets/Grey-sofa.png";
import nobodyArmChair from "../assets/leather-chair.png";
import realisticSofa from "../assets/realistic-sofa.png";
import alexanderSofa from "../assets/sofa.png";
import woodenChair from "../assets/wooden-chair.png";
import type Product from "../types";

const trendyProducts: Product[] = [
    {
        id: 1,
        name: "Stylish Grey Chair",
        price: 150.0,
        rating: 4,
        badge: "10% Off",
        badgeColor: "bg-[#B98D58]",
        image: stylishGreyChair,
    },
    {
        id: 2,
        name: "Chair Pillow",
        price: 190.0,
        rating: 5,
        image: chairPillow,
    },
    {
        id: 3,
        name: "Seater Gray Sofa",
        price: 300.0,
        rating: 5,
        badge: "15% Off",
        badgeColor: "bg-[#B98D58]",
        image: seaterGraySofa,
    },
    {
        id: 4,
        name: "Wooden Chair",
        price: 129.0,
        rating: 4,
        image: woodenChair,
    },
    {
        id: 5,
        name: "Alexander Sofa",
        price: 150.0,
        rating: 4,
        badge: "10% Off",
        badgeColor: "bg-[#B98D58]",
        image: alexanderSofa,
    },
    {
        id: 6,
        name: "Stylish Grey Chair",
        price: 150.0,
        rating: 5,
        image: stylishGreyChair2,
    },
    {
        id: 7,
        name: "Chair Nobody Armchair",
        price: 80.0,
        rating: 5,
        badge: "NEW",
        badgeColor: "bg-[#C69C6D]",
        image: nobodyArmChair,
    },
    {
        id: 8,
        name: "Realistic Sofa",
        price: 49.0,
        rating: 4,
        image: realisticSofa,
    },
];

export default trendyProducts;
