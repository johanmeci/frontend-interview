import { useState } from "react";
import "./styles.css";
import GridContent from "./components/GridContent/GridContent";
import ProductCard from "./components/ProductCard/ProductCard";
import SearchBox from "./components/SearchBox/SearchBox";
import useProducts from "./hooks/useProducts";

export default function App() {
  const { products, isLoading, error } = useProducts();
  const [searchProduct, setSearchProduct] = useState("");

  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(searchProduct.trim().toLowerCase())
  );

  return (
    <div className="App">
      <h1>Arrive Logistics</h1>
      <SearchBox value={searchProduct} onChange={setSearchProduct} />
      {isLoading && <p role="status">Loading products...</p>}
      {error && <p role="alert">{error}</p>}
      {!isLoading && !error && products.length === 0 && <p>No products found.</p>}
      {!isLoading && !error && products.length > 0 && filteredProducts.length === 0 && (
        <p>No products match your search.</p>
      )}
      {!isLoading && !error && filteredProducts.length > 0 && (
        <GridContent>
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </GridContent>
      )}
    </div>
  );
}
