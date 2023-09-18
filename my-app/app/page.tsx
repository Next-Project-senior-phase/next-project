"use client";
import React, { useEffect, useState } from "react";
import Services from "../app/About/Components/Services";
import HPCarousel from "./Components/Carousel";
import FlashSales from "./Components/FlashSales";
import Sidebar from "./Components/Sidebar";
import ViewAllProdButton from "./Components/ViewAllProdButton";
import Categories from "./Components/Categories";
import ThisMonth from "./Components/ThisMonth";
import OurProducts from "./Components/OurProducts";
import NewArrival from "./Components/NewArrival";

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

export default function Home() {
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
    <main className="flex min-h-screen flex-col items-center justify-between pt-10 pb-10 pl-5 pr-5 gap-5 dark:bg-neutral-900">
      <div className="flex">
        <Sidebar />
        <HPCarousel />
      </div>
      <FlashSales data={products} />
      <ViewAllProdButton />
      <hr className="w-[1170px] mt-12 opacity-30 border-t dark:border-white border-black pb-10" />
      <Categories />
      <hr className="w-[1170px] opacity-30 border-t dark:border-white border-black pb-10" />
      <ThisMonth />
      <hr className="w-[1170px] opacity-30 border-t dark:border-white border-black pb-10 mt-10" />
      <OurProducts data={products} />
      <NewArrival />
      <Services />
    </main>
  );
}
