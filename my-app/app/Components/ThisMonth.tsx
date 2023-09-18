import LargeImage from "./LargeImage";

export default function ThisMonth() {
  return (
    <div className="flex-col justify-start items-start gap-6 inline-flex">
      <div className="pl-10 justify-start items-center gap-4 inline-flex">
        <div className="w-5 h-10 dark:bg-teal-500 bg-red-500 rounded" />
        <div className="text-red-500 dark:text-teal-500 text-base font-semibold">
          This Month's
        </div>
      </div>
      <div className="pl-10 text-black dark:text-white text-2xl font-semibold leading-10 tracking-wider">
        Best Selling Product
      </div>
      <LargeImage />
    </div>
  );
}
