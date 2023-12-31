// import Link from "next/link";

// export default function ProductCard() {
//   return (
//     <main>
//       <div className="w-64 h-64 mb-1 relative bg-neutral-100 rounded border">
//         {/* RIGHT SIDE ICONS */}
//         <div className="left-[218px] top-[8px] absolute flex-col justify-start items-start gap-2 inline-flex">
//           {/* FAV */}
//           {/* INACTIVE */}
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             fill="none"
//             viewBox="0 0 24 24"
//             strokeWidth={1}
//             stroke="currentColor"
//             className="w-6 h-6 hover:stroke-2"
//           >
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
//             />
//           </svg>
//           {/* ACTIVE */}
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             fill="none"
//             viewBox="0 0 24 24"
//             strokeWidth={1}
//             stroke="red"
//             className="w-6 h-6 hover:stroke-2"
//           >
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
//             />
//           </svg>
//           {/* FAV */}
//           {/* FULL VIEW */}
//           <Link href="/ProductDetail/:id">
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               fill="none"
//               viewBox="0 0 24 24"
//               strokeWidth={1}
//               stroke="currentColor"
//               className="w-6 h-6 hover:stroke-2"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
//               />
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
//               />
//             </svg>
//           </Link>
//           {/* FULL VIEW */}
//         </div>
//         {/* ADD TO CART */}
//         <div className="group">
//           <div className=" justify-center opacity-0 items-center bg-black w-40 h-12 duration-1000 group-hover:opacity-100">
//             <p className="text-white opacity-0 group-hover:opacity-100">
//               ADD TO CART
//             </p>
//           </div>
//         </div>
//         {/* ADD TO CART */}
//         {/* RIGHT SIDE ICONS */}
//         <img src="https://cosmetique.tn/17001-large_default/rouge-a-levre-instyle-mat-topface-012-pt1555.jpg" />
//       </div>
//       <div className="flex-col justify-start items-start gap flex">
//         <p className="text-black text-base font-medium leading-normal">
//           Channel Shit
//         </p>
//         {/* PRICE */}
//         <p className="text-red-500 text-base font-medium leading-normal">
//           $120
//         </p>
//         {/* PRICE & SALE */}
//         {/* STARS */}
//         <svg
//           width="100"
//           height="20"
//           viewBox="0 0 100 20"
//           fill="none"
//           xmlns="http://www.w3.org/2000/svg"
//         >
//           <path
//             d="M16.673 10.1717C17.7437 9.36184 17.1709 7.65517 15.8284 7.65517H13.3992C12.7853 7.65517 12.243 7.25521 12.0617 6.66868L11.3375 4.32637C10.9309 3.01106 9.0691 3.01106 8.66246 4.32637L7.93832 6.66868C7.75699 7.25521 7.21469 7.65517 6.60078 7.65517H4.12961C2.79142 7.65517 2.21592 9.35274 3.27822 10.1665L5.39469 11.7879C5.85885 12.1435 6.05314 12.7501 5.88196 13.3092L5.11296 15.8207C4.71416 17.1232 6.22167 18.1704 7.30301 17.342L9.14861 15.9281C9.65097 15.5432 10.349 15.5432 10.8514 15.9281L12.6807 17.3295C13.7636 18.159 15.2725 17.1079 14.8696 15.8046L14.09 13.2827C13.9159 12.7198 14.113 12.1081 14.5829 11.7526L16.673 10.1717Z"
//             fill="#FFAD33"
//           />
//           <path
//             d="M36.673 10.1717C37.7437 9.36184 37.1709 7.65517 35.8284 7.65517H33.3992C32.7853 7.65517 32.243 7.25521 32.0617 6.66868L31.3375 4.32637C30.9309 3.01106 29.0691 3.01106 28.6625 4.32637L27.9383 6.66868C27.757 7.25521 27.2147 7.65517 26.6008 7.65517H24.1296C22.7914 7.65517 22.2159 9.35274 23.2782 10.1665L25.3947 11.7879C25.8588 12.1435 26.0531 12.7501 25.882 13.3092L25.113 15.8207C24.7142 17.1232 26.2217 18.1704 27.303 17.342L29.1486 15.9281C29.651 15.5432 30.349 15.5432 30.8514 15.9281L32.6807 17.3295C33.7636 18.159 35.2725 17.1079 34.8696 15.8046L34.09 13.2827C33.9159 12.7198 34.113 12.1081 34.5829 11.7526L36.673 10.1717Z"
//             fill="#FFAD33"
//           />
//           <path
//             d="M56.673 10.1717C57.7437 9.36184 57.1709 7.65517 55.8284 7.65517H53.3992C52.7853 7.65517 52.243 7.25521 52.0617 6.66868L51.3375 4.32637C50.9309 3.01106 49.0691 3.01106 48.6625 4.32637L47.9383 6.66868C47.757 7.25521 47.2147 7.65517 46.6008 7.65517H44.1296C42.7914 7.65517 42.2159 9.35274 43.2782 10.1665L45.3947 11.7879C45.8588 12.1435 46.0531 12.7501 45.882 13.3092L45.113 15.8207C44.7142 17.1232 46.2217 18.1704 47.303 17.342L49.1486 15.9281C49.651 15.5432 50.349 15.5432 50.8514 15.9281L52.6807 17.3295C53.7636 18.159 55.2725 17.1079 54.8696 15.8046L54.09 13.2827C53.9159 12.7198 54.113 12.1081 54.5829 11.7526L56.673 10.1717Z"
//             fill="#FFAD33"
//           />
//           <path
//             d="M76.673 10.1717C77.7437 9.36184 77.1709 7.65517 75.8284 7.65517H73.3992C72.7853 7.65517 72.243 7.25521 72.0617 6.66868L71.3375 4.32637C70.9309 3.01106 69.0691 3.01106 68.6625 4.32637L67.9383 6.66868C67.757 7.25521 67.2147 7.65517 66.6008 7.65517H64.1296C62.7914 7.65517 62.2159 9.35274 63.2782 10.1665L65.3947 11.7879C65.8588 12.1435 66.0531 12.7501 65.882 13.3092L65.113 15.8207C64.7142 17.1232 66.2217 18.1704 67.303 17.342L69.1486 15.9281C69.651 15.5432 70.349 15.5432 70.8514 15.9281L72.6807 17.3295C73.7636 18.159 75.2725 17.1079 74.8696 15.8046L74.09 13.2827C73.9159 12.7198 74.113 12.1081 74.5829 11.7526L76.673 10.1717Z"
//             fill="#FFAD33"
//           />
//           <path
//             opacity="0.25"
//             d="M96.673 10.1717C97.7437 9.36184 97.1709 7.65517 95.8284 7.65517H93.3992C92.7853 7.65517 92.243 7.25521 92.0617 6.66868L91.3375 4.32637C90.9309 3.01106 89.0691 3.01106 88.6625 4.32637L87.9383 6.66868C87.757 7.25521 87.2147 7.65517 86.6008 7.65517H84.1296C82.7914 7.65517 82.2159 9.35274 83.2782 10.1665L85.3947 11.7879C85.8588 12.1435 86.0531 12.7501 85.882 13.3092L85.113 15.8207C84.7142 17.1232 86.2217 18.1704 87.303 17.342L89.1486 15.9281C89.651 15.5432 90.349 15.5432 90.8514 15.9281L92.6807 17.3295C93.7636 18.159 95.2725 17.1079 94.8696 15.8046L94.09 13.2827C93.9159 12.7198 94.113 12.1081 94.5829 11.7526L96.673 10.1717Z"
//             fill="black"
//           />
//         </svg>
//         {/* STARS */}
//       </div>
//     </main>
//   );
// }

import Link from "next/link";
import React from "react";

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

const ProductCard = (props: Props) => {
  const { data} = props;

  

  return (
    <main>
      <div className="group w-64 h-64 mb-1 relative bg-neutral-100 dark:bg-neutral-950 rounded border hover:scale-10 transition ease-in-out delay-150 duration-500">
        {/* RIGHT SIDE ICONS */}
        <div className="left-[218px] top-[8px] absolute flex-col justify-start items-start gap-2 inline-flex">
          {/* FAV */}
          {/* INACTIVE */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1}
            stroke="currentColor"
            className="w-6 h-6 hover:stroke-2 opacity-0 group-hover:opacity-100 transition ease-in-out delay-150 duration-500"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
            />
          </svg>
          {/* ACTIVE */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1}
            stroke="red"
            className="w-6 h-6 hover:stroke-2 opacity-0 group-hover:opacity-100 transition ease-in-out delay-150 duration-500"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
            />
          </svg>
          {/* FAV */}
          {/* FULL VIEW */}
          <Link href={`/ProductDetail/${data && data.id}`}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1}
              stroke="currentColor"
              className="w-6 h-6 hover:stroke-2 opacity-0 group-hover:opacity-100 transition ease-in-out delay-150 duration-500"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
          </Link>
          {/* FULL VIEW */}
        </div>
        {/* ADD TO CART */}
        <div className="absolute left-2 top-2 transition duration-700 ease-in-out">
          <svg
            className="w-6 h-6 transition ease-in-out delay-150 duration-500 hover:scale-150 opacity-0 group-hover:opacity-100"
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M11 27C11.5523 27 12 26.5523 12 26C12 25.4477 11.5523 25 11 25C10.4477 25 10 25.4477 10 26C10 26.5523 10.4477 27 11 27Z"
              stroke="black"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M25 27C25.5523 27 26 26.5523 26 26C26 25.4477 25.5523 25 25 25C24.4477 25 24 25.4477 24 26C24 26.5523 24.4477 27 25 27Z"
              stroke="black"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M3 5H7L10 22H26"
              stroke="black"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M10 16.6667H25.59C25.7056 16.6667 25.8177 16.6267 25.9072 16.5535C25.9966 16.4802 26.0579 16.3782 26.0806 16.2648L27.8806 7.26479C27.8951 7.19222 27.8934 7.11733 27.8755 7.04552C27.8575 6.97371 27.8239 6.90678 27.7769 6.84956C27.73 6.79234 27.6709 6.74625 27.604 6.71462C27.5371 6.68299 27.464 6.66661 27.39 6.66666H8"
              stroke="black"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
        {/* RIGHT SIDE ICONS */}
        {data && data.images.length > 0 && <img src={data.images[0].url} />}
      
      </div>
      <div className="flex-col justify-start items-start gap flex">
        <p className="text-black dark:text-white w-64 text-base font-medium leading-normal">
          {data && data.name}
        </p>
        {/* PRICE */}
        <p className="text-red-500 dark:text-teal-500 text-base font-medium leading-normal">
          ${data && data.price}
        </p>
        {/* PRICE & SALE */}
        {/* STARS */}
        {/* <Stars rate={data.ratings}/> */}
        {/* STARS */}
      </div>
    </main>
  );
};

export default ProductCard;
