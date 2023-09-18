import Link from "next/link";

export default function Sidebar () {
  return(
    <div className="w-56 h-80 flex-col justify-start items-start  gap-5  inline-flex">
      <Link  className="dark:text-neutral-50 dark:hover:text-teal-500 hover:text-red-500 transition ease-in-out delay-150 duration-500" href="/AllProducts/Makeup">Makeup</Link>
      <Link  className="dark:text-neutral-50 dark:hover:text-teal-500 hover:text-red-500 transition ease-in-out delay-150 duration-500" href="/AllProducts/Perfume">Perfume</Link>
      <Link  className="dark:text-neutral-50 dark:hover:text-teal-500 hover:text-red-500 transition ease-in-out delay-150 duration-500" href="/AllProducts/Hygiene">Hygiene</Link>
      <Link  className="dark:text-neutral-50 dark:hover:text-teal-500 hover:text-red-500 transition ease-in-out delay-150 duration-500" href="/AllProducts/Skin Care">Skin Care</Link>
      <Link  className="dark:text-neutral-50 dark:hover:text-teal-500 hover:text-red-500 transition ease-in-out delay-150 duration-500" href="/AllProducts/Hair Care">Hair Care</Link>
    </div>
  )
}