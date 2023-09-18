import Link from "next/link";

export default function ViewAllProdButton () {
    return(
        <Link href="/AllProducts">
        <div className="w-60 h-14 px-12 py-4 dark:bg-teal-500 bg-red-500 mt-10 rounded justify-center items-center gap-2.5 inline-flex hover:drop-zshadow-lg transition ease-in-out delay-150 duration-500">
          <p className="text-neutral-50 text-base font-medium leading-normal">
            View All Products
          </p>
        </div>
      </Link>
    )
}