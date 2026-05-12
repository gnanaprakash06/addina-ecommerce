import featuredProducts from "../static/featuredProducts";
import ProductCard from "./ProductCard";

export default function ProductGrid() {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product) => (
                <ProductCard product={product} />
            ))}
        </div>
    );
}
