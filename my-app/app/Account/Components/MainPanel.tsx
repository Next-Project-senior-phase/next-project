"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

interface UserData {
  name: string;
  lastName: string;
  email: string;
  address: string;
  password?: string;
  photo?: string;
}

export default function MainPanel() {
  const [userData, setUserData] = useState<UserData | any>(null);
  const [loading, setLoading] = useState(true);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [password, setPassword] = useState("");
  const [imgURL, setImgURL] = useState("");

  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordError, setPasswordError] = useState<string | null>(null);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [sucessMSG, setSucessMSG] = useState("");

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
        setFirstName(data.data.user.name);
        setLastName(data.data.user.lastName);
        setEmail(data.data.user.email);
        setAddress(data.data.user.address);
        setImgURL(data.data.user.photo);
        console.log("User Data:", data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching the user data:", error);
        setLoading(false);
      }
    }

    fetchUserData();
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(userData);

    try {
      let updatedUserData: UserData = {
        name: firstName,
        lastName: lastName,
        email: email,
        address: address,
      };

      if (selectedFile) {
        const formData = new FormData();
        formData.append("file", selectedFile);
        formData.append("upload_preset", "ahlem_upload_preset");

        console.log(selectedFile);

        const response = await fetch(
          `https://api.cloudinary.com/v1_1/duchnti5k/image/upload`,
          {
            method: "POST",
            body: formData,
          }
        );

        const data = await response.json();

        console.log(data.secure_url);

        updatedUserData.photo = data?.secure_url;

        if (password !== confirmPassword) {
          setPasswordError("Passwords do not match");
          return;
        }

        if (password !== "") {
          updatedUserData.password = password;
        }
      } else {
        if (password !== confirmPassword) {
          setPasswordError("Passwords do not match");
          return;
        }

        if (password !== "") {
          updatedUserData.password = password;
        }
      }

      console.log(JSON.stringify(updatedUserData));

      const secondResponse = await fetch(
        `/api/users/${userData.data.user.id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(updatedUserData),
        }
      );

      if (secondResponse.ok) {
        const responseText = await secondResponse.text();
        setSucessMSG("User information updated successfully");
        setTimeout(() => {
          window.location.reload();
        }, 1000);
      } else {
        throw new Error(
          "Network response was not ok " + secondResponse.statusText
        );
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <main>
      <div className="w-[870px] h-[630px] relative dark:bg-black bg-white rounded shadow">
        <div className="left-[80px] top-[40px] relative dark:text-teal-500 text-red-500 text-xl font-medium leading-7">
          Edit Your Profile
        </div>
        <form onSubmit={(e) => handleSubmit(e)}>
          <div className="left-[80px] top-[80px] absolute flex items-center rounded-full justify-center">
            <label className="w-[685px] flex flex-col items-center justify-center border border-gray-300 border-dashed rounded-lg dark:bg-black bg-gray-50 dark:hover:bg-bray-800">
              <div className="flex flex-col items-center justify-center w-full h-full">
                <img
                  src={userData?.data.user.photo}
                  alt="Profile picture"
                  className="mt-2 font-semibold object-cover  text-gray-500"
                />
                <p className="mb-2 text-sm text-gray-500">
                  <span className="font-semibold">Click to upload</span> or drag
                  and drop
                </p>
              </div>

              <input
                id="dropzone-file"
                type="file"
                className="hidden"
                onChange={(e) => {
                  const file = e.target?.files?.[0];
                  if (file) {
                    setSelectedFile(file);
                  }
                }}
              />
            </label>
          </div>
          <div className="left-[80px] top-[160px] absolute justify-start items-start gap-12 inline-flex">
            <div className="flex-col justify-start items-start gap-2 inline-flex">
              <p className="text-black dark:text-white text-base font-normal leading-normal">
                First Name
              </p>
              <input
                placeholder="John"
                className="pl-4 w-80 h-12 left-0 top-0 relative dark:bg-neutral-700 dark:text-white bg-neutral-100 rounded"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
            </div>
            <div className="flex-col justify-start items-start gap-2 inline-flex">
              <p className="text-black dark:text-white text-base font-normal leading-normal">
                Last Name
              </p>
              <input
                placeholder="Doe"
                className="pl-4 w-80 h-12 left-0 top-0 relative dark:bg-neutral-700 dark:text-white bg-neutral-100 rounded"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
            </div>
          </div>
          <div className="left-[80px] top-[258px] absolute justify-start items-start gap-12 inline-flex">
            <div className="flex-col justify-start items-start gap-2 inline-flex">
              <p className="text-black dark:text-white text-base font-normal leading-normal">
                Email
              </p>
              <input
                placeholder="john.doe@cloud.com"
                type="email"
                className="pl-4 w-80 h-12 left-0 top-0 relative dark:bg-neutral-700 dark:text-white bg-neutral-100 rounded"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="flex-col justify-start items-start gap-2 inline-flex">
              <p className="text-black dark:text-white text-base font-normal leading-normal">
                Address
              </p>
              <input
                placeholder="10 Apple seed Street"
                className="pl-4 w-80 h-12 left-0 top-0 relative dark:bg-neutral-700 dark:text-white bg-neutral-100 rounded"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              />
            </div>
          </div>
          <div className="left-[80px] top-[366px] absolute flex-col justify-start items-start gap-4 inline-flex">
            <div className="flex-col justify-start items-start gap-2 flex">
              <p className="text-black dark:text-white text-base font-normal leading-normal">
                Password Changes
              </p>
              {/*  <input
                placeholder="Current Password"
                type="password"
                className="pl-4 w-[690px] h-12 left-0 top-0 relative bg-neutral-100 rounded"
                value={currentPassword}
                onChange={(e) => setCurrentPassword(e.target.value)}
              /> */}
            </div>
            <input
              placeholder="New Password"
              type="password"
              className="pl-4 w-[690px] h-12 left-0 top-0 relative dark:bg-neutral-700 dark:text-white bg-neutral-100 rounded"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <input
              placeholder="Confirm Password"
              type="password"
              className="pl-4 w-[690px] h-12 left-0 top-0 relative dark:bg-neutral-700 dark:text-white bg-neutral-100 rounded"
              value={confirmPassword}
              onChange={(e) => {
                setConfirmPassword(e.target.value);
                setPasswordError(null);
              }}
            />
          </div>
          {passwordError && (
            <div className="left-[80px] top-[624px] absolute text-red-500">
              {passwordError}
            </div>
          )}
          {sucessMSG && (
            <div className="left-[80px] top-[624px] absolute text-green-500">
              {sucessMSG}
            </div>
          )}
          <div className="left-[487px] top-[544px] absolute justify-start items-center gap-8 inline-flex">
            <Link
              href="/"
              className="text-black dark:text-white text-base font-normal leading-normal"
            >
              Cancel
            </Link>
            <button
              type="submit"
              className="px-12 py-4 bg-red-500 dark:bg-teal-500 rounded justify-center items-center gap-2.5 flex text-neutral-50 text-base font-medium leading-normal hover:bg-red-600"
            >
              Save Changes
            </button>
          </div>
        </form>
      </div>
    </main>
  );
}
