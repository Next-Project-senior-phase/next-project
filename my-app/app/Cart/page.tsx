import Item from "./Components/Item";

export default function Cart() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between pt-20 pb-20 pl-5 pr-5 gap-4 dark:bg-neutral-900">
      {/* TITLE BAR */}
      <div className="w-[1170px] h-16 px-10  dark:bg-black bg-white rounded shadow justify-center items-center inline-flex">
        <div className="justify-start items-center gap-72 inline-flex">
          <p className="text-black dark:text-white text-base font-normal leading-normal">
            Product
          </p>
          <p className="text-black dark:text-white text-base font-normal leading-normal">
            Price
          </p>
          <p className="text-black dark:text-white text-base font-normal leading-normal">
            Quantity
          </p>
          <p className="text-black dark:text-white text-base font-normal leading-normal">
            Subtotal
          </p>
        </div>
      </div>
      {/* TITLE BAR */}
      {/* ITEMS */}
      <Item />
      {/* ITEMS */}
      <div className="pt-10 gap-32 inline-flex">
        {/* COUPON */}
        <div className="inline-flex items-start gap-4">
          <input
            placeholder="Coupon Code"
            className="w-80 pl-4 py-4 rounded border dark:border-white border-black justify-start items-center flex opacity-50 dark:text-white text-black text-base font-normal leading-normal"
          />
          <button className="w-56  px-1 py-4 bg-red-500 dark:bg-teal-500 rounded justify-center items-center gap-2.5 flex text-neutral-50 text-base font-medium leading-normal">
            Apply Coupon
          </button>
        </div>
        {/* COUPON */}
        {/* CART DETAILS */}
        <div className=" w-[470px] h-80 relative rounded border dark:border-white border-black">
          <p className="left-[24px] top-[32px] absolute dark:text-white text-black text-xl font-medium leading-7">
            Cart Total
          </p>
          <div className="left-[24px] top-[84px] absolute justify-start items-start gap-72 inline-flex">
            <p className="text-black dark:text-white text-base font-normal leading-normal">
              Subtotal:
            </p>
            <p className="text-black dark:text-white left-[335px] absolute text-base font-normal leading-normal">
              $1750
            </p>
          </div>
          <div className="left-[24px] top-[140px] absolute justify-start items-start gap-80 inline-flex">
            <p className="text-black dark:text-white text-base font-normal leading-normal">
              Shipping:
            </p>
            <p className="text-black dark:text-white left-[345px] absolute text-base font-normal leading-normal">
              Free
            </p>
          </div>
          <div className="left-[24px] top-[196px] absolute justify-start items-start gap-80 inline-flex">
            <p className="text-black dark:text-white text-base font-normal leading-normal">
              Total:
            </p>
            <p className="text-black dark:text-white left-[335px] absolute text-base font-normal leading-normal">
              $1750
            </p>
          </div>
          <div className="px-12 py-4 left-[89px] top-[236px] absolute dark:bg-teal-500 bg-red-500 rounded justify-center items-center gap-2.5 inline-flex">
            <div className="text-neutral-50 text-base font-medium leading-normal">
              Procees to checkout
            </div>
          </div>
          <div className="w-96 h-px left-[24px] top-[124px] absolute opacity-40 justify-center items-center inline-flex">
            <div className="w-96 h-px border-t dark:border-white border-black"></div>
          </div>
          <div className="w-96 h-px left-[24px] top-[180px] absolute opacity-40 justify-center items-center inline-flex">
            <div className="w-96 h-px border-t dark:border-white border-black"></div>
          </div>
        </div>
        {/* CART DETAILS */}
      </div>
    </main>
  );
}
