"use client";
import React, { useEffect, useState } from "react";
import ProductCard from "../Components/ProductCard";
import { Product } from '@prisma/client';

interface Image {
  url: string;
}

interface productinterface {
  name: string;
  images: Image[];
}

function AllProducts() {
  const [products, setProducts] = useState<productinterface[]>([]);
  const [selectedProduct, setSelectedProduct] = useState<productinterface | null>(null);


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
  const handleHeartClick = (Product: productinterface) => {
    setSelectedProduct(Product);
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between px-20">
      <div className="inline-grid grid-cols-4 gap-6">
        {products.map((product, productIndex) => (
          <ProductCard key={productIndex} data={product}
          onHeartClick={handleHeartClick}
          />
        ))}
      </div>
    </main>
  );
}

export default AllProducts;