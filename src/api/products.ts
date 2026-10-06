export interface Product {
  id: number;
  title: string;
  description: string;
  category: string;
}

interface ProductsResponse {
  products: Product[];
}

export async function fetchProducts(signal?: AbortSignal): Promise<Product[]> {
  const response = await fetch("https://dummyjson.com/products?limit=10", {
    signal,
  });

  if (!response.ok) {
    throw new Error(`Failed to load products (${response.status})`);
  }

  const data: ProductsResponse = await response.json();
  return data.products;
}
