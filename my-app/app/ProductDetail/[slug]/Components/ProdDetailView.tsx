import ProductCard from "@/app/Components/ProductCard";
import ProdDetailMain from "./ProdDetailsMain";

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
  mainData: Product;
  relatedData: Product[];
}

export default function ProdDetailView(props: Props) {
  const { mainData, relatedData } = props;

  return (
    <main className="flex min-h-screen flex-col items-center justify-between py-20 w-screen dark:bg-neutral-900">
      <ProdDetailMain data={mainData} />
      {/* RELATED */}
      <div className="justify-start items-center gap-4 flex flex-col">
        <div className="mt-28 relative left-[-44%] inline-flex justify-center items-center gap-5">
          <div className="w-5 h-10 dark:bg-teal-500 bg-red-500 rounded" />
          <p className="text-red-500 dark:text-teal-500 text-base font-semibold leading-tight">
            Related Item
          </p>
        </div>
        <div className="gap-5 inline-flex">
          {relatedData &&
            relatedData.slice(0, 4).map((prod) => {
              return <ProductCard data={prod} />;
            })}
        </div>
      </div>
      {/* RELATED */}
    </main>
  );
}
