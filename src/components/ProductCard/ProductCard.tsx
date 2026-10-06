import type { Product } from "../../api/products";

export interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <article className="product-card">
      <h2 className="product-card__title">{product.title}</h2>
      <p className="product-card__description">{product.description}</p>
      <p className="product-card__category">{product.category}</p>
    </article>
  );
}
