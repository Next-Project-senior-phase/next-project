"use client";
import React, { useEffect, useState } from "react";
import ProductCard from "../Components/ProductCard";

interface Image {
  id: number;
  url: string;
  productId: number;
}

interface Product {
  id: number;
  name: string;
  ratings: number | null;
  description: string | null;
  category: string;
  status: boolean;
  price: number;
  images: Image[];
}

interface Props {
  data: Product;
}

function AllProducts() {
  const [products, setProducts] = useState<Product[]>([]);
  console.log(products);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("api/products");
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error("Error fetching the products", error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between py-20 px-20 dark:bg-neutral-900">
      <div className="inline-grid grid-cols-4 gap-6">
        {products.map((product, productIndex) => (
          <ProductCard key={productIndex} data={product} />
        ))}
      </div>
    </main>
  );
}

export default AllProducts;
