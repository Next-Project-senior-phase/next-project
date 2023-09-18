import { PrismaClient } from ".prisma/client";
import ProductCard from "@/app/Components/ProductCard";
const prisma = new PrismaClient();

const fetchProdByCategory = async (category: string) => {
  try {
    const relatedProd = await prisma.product.findMany({
      where: {
        category,
      },
      include: {
        images: true,
      },
    });
    return relatedProd;
  } catch (error) {
    console.error(error);
  } finally {
    prisma.$disconnect();
  }
};

const fetchProdByName = async (query: string) => {
  try {
    const relatedProd = await prisma.product.findMany({
      include: {
        images: true,
      },
    });
    return relatedProd.filter((e)=>e.name.toLocaleLowerCase().includes(query.toLocaleLowerCase()));
  } catch (error) {
    console.error(error);
  } finally {
    prisma.$disconnect();
  }
};

export default async function ProductDetail({
  params,
}: {
  params: { slug: string };
}) {
  const query:string = decodeURI(params.slug);
  const filtered = async (query:string) =>{
    if(["Makeup","Perfume","Hair Care","Skin Care", "Hygiene"].includes(query)){
      const filter = await fetchProdByCategory(query);
      console.log(filter);
      
      return filter;
    } else {
      const filter = await fetchProdByName(query);
      console.log(filter);
      return filter;
    }
  }
  
  
  const filterdd = await filtered(query)
  
  return (
    <main className="flex min-h-screen flex-col items-center justify-between py-20 px-20 dark:bg-neutral-900">
      <div className="inline-grid grid-cols-4 gap-6">
        {
       
        filterdd&&filterdd.map((e) => {
            return <ProductCard data={e} />;
          })}
      </div>
    </main>
  );
}
