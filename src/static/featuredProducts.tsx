import armchair from "../assets/blue-chair.png";
import chairPillow from "../assets/chair-pillow.png";
import leatherChair from "../assets/leather-chair.png";
import sofa from "../assets/sofa.png";
import type { FeaturedProduct } from "../types/featuredProductsType";

const featuredProducts: FeaturedProduct[] = [
    {
        id: 1,
        name: "Brasslegged Armchair",
        price: 150.0,
        rating: 5,
        discount: null,
        image: armchair,
    },
    {
        id: 2,
        name: "Leather Chair",
        price: 200.0,
        rating: 4,
        discount: "10% Off",
        image: leatherChair,
    },
    {
        id: 3,
        name: "Chair Pillow",
        price: 49.0,
        rating: 5,
        discount: null,
        image: chairPillow,
    },
    {
        id: 4,
        name: "Alexander Roll Arm Sofa",
        price: 150.0,
        rating: 4,
        discount: "10% Off",
        image: sofa,
    },
];

export default featuredProducts;
