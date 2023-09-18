"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

interface UserData {
  data: {
    user: {
      name: string;
      email: string;
    };
  };
}

export default function UserDropDown() {
  const [toggle, setToggle] = useState(false);
  const [hide, setHide] = useState("");
  const [userData, setUserData] = useState<UserData | any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (toggle) {
      setHide("");
    } else {
      setHide("hidden");
    }
  }, [toggle]);

  useEffect(() => {
    async function fetchUserData() {
      try {
        setLoading(true);
        const response = await fetch("/api/users/me");
        if (!response.ok) {
          throw new Error("Network response was not ok " + response.statusText);
        }
        const data = await response.json();
        setUserData(data);
        console.log("User Data:", userData);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching the user data:", error);
        setLoading(false);
      }
    }

    fetchUserData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!userData) {
    return null;
  }

  return (
    <main>
      <button
        onClick={() => setToggle(!toggle)}
        className="flex items-center text-sm font-medium text-black dark:text-white rounded-full  md:mr-0 focus:ring dark:focus:ring-teal-500 focus:ring-red-500 "
        type="button"
      >
        <img
          className="w-8 h-8 mr-2 rounded-full"
          src={
            userData.data.user.photo === "default.png"
              ? "https://media.istockphoto.com/id/1300845620/fr/vectoriel/appartement-dic%C3%B4ne-dutilisateur-isol%C3%A9-sur-le-fond-blanc-symbole-utilisateur.jpg?s=612x612&w=0&k=20&c=BVOfS7mmvy2lnfBPghkN__k8OMsg7Nlykpgjn0YOHj0="
              : userData.data.user.photo
          }
          alt="user photo"
        />
        <p className="text-black dark:text-white">{userData.data.user.name}</p>
        <svg
          className="w-2.5 h-2.5 ml-2.5 dark:invert"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 10 6"
        >
          <path
            stroke="black"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="m1 1 4 4 4-4"
          />
        </svg>
      </button>

      {/* DROPDOWN MENU */}
      <div className={hide}>
        <div className="z-10 absolute mt-2 dark:bg-black bg-white divide-y divide-gray-100 rounded-lg shadow w-44">
          <div className="px-4 py-3 text-sm text-red-500 dark:text-teal-500">
            <div className="font-medium ">
              {userData.data.user.name + " " + userData.data.user.lastName}
            </div>
            <div className="truncate">{userData.data.user.email}</div>
          </div>
          <ul className="py-2 text-sm text-gray-700 dark:text-gray-200">
            <li>
              <Link legacyBehavior href="./Account">
                <a className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                  My account
                </a>
              </Link>
            </li>
            <li>
              <Link legacyBehavior href="./Wishlist">
                <a className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                  Wishlist
                </a>
              </Link>
            </li>
            <li>
              <Link legacyBehavior href="./Cart">
                <a className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                  Cart
                </a>
              </Link>
            </li>
          </ul>
          <div className="group">
            <div className="py-2 group-hover:bg-red-500 rounded-b-lg">
              <a
                href="/"
                className="block px-4 py-2 text-sm text-gray-700 group-hover:bg-red-500 hover:text-white"
                onClick={async (e) => {
                  e.preventDefault();
                  try {
                    const response = await fetch("/api/auth/logout", {
                      method: "POST",
                    });

                    if (response.ok) {
                      window.location.href = "/";
                    } else {
                      console.error("Logout failed");
                    }
                  } catch (error) {
                    console.error(
                      "An error occurred while logging out:",
                      error
                    );
                  }
                }}
              >
                Sign out
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* DROPDOWN MENU */}
    </main>
  );
}
