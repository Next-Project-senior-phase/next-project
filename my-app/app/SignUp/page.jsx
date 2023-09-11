"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

function SignUp() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    passwordConfirm: "",
  });
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log(formData);  

      const response = await fetch("/api/auth/register", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      console.log(response, data);  
      if (response.ok) {
        setMessage("Registration successful! You can now log in.");
        localStorage.setItem('token', data.token); 
        router.push('/SignIn'); 
        setMessage(data.message || "Registration failed.");
      }
    } catch (error) {
      console.error(error); 
      setMessage("An error occurred. Please try again.");
    }
  };


  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-5">
      <div className="flex gap-6 mx-auto my-10 max-w-screen-lg">
        <div className="w-1/2 flex pt-20 bg-cbe4e8 justify-end items-center rounded-r-md">
          <img
            className="object-cover w-full h-full rounded-r-md"
            src="https://www.nutriglowcosmetics.com/wp-content/uploads/2021/09/Know-Why-natural-cosmetic-products-are-beneficial-for-your-skin-feature.jpg"
            alt="Cosmetics"
          />
        </div>
        <div className="flex flex-col w-1/2 gap-6 p-10 bg-white rounded shadow-lg">
          <div className="flex flex-col gap-6">
            <div className="text-black text-4xl font-medium leading-loose tracking-wider">
              Create an account
            </div>
            <div className="text-black text-base font-normal leading-normal">
              Enter your details below
            </div>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="flex flex-col gap-6">
              {[
                { label: "Name", name: "name", type: "text" },
                { label: "Email or Phone Number", name: "email", type: "text" },
                { label: "Password", name: "password", type: "password" },
                {
                  label: "Confirm Password",
                  name: "passwordConfirm",
                  type: "password",
                },
              ].map((field) => (
                <div className="flex flex-col gap-2" key={field.label}>
                  <label
                    className="opacity-40 text-black text-base font-normal leading-normal"
                    htmlFor={field.name}
                  >
                    {field.label}
                  </label>
                  <input
                    id={field.name}
                    name={field.name}
                    type={field.type}
                    className="w-full border-b border-black opacity-50 py-2"
                    onChange={handleChange}
                    required
                  />
                </div>
              ))}
            </div>
            <div className="flex flex-col items-start gap-6">
              <button
                type="submit"
                className="w-full px-32 py-4 bg-red-500 rounded text-neutral-50 text-base font-medium"
              >
                Create Account
              </button>
              <div className="flex flex-col gap-6 items-start">
                <button className="w-full px-20 py-4 border border-black border-opacity-40 rounded flex items-center gap-4 justify-center">
                  <div className="w-6 h-6 bg-gray-300"></div>
                  Sign up with Google
                </button>
                <div className="flex flex-col items-start gap-1">
                  <div className="opacity-70 text-black text-base font-normal">
                    Already have an account?
                  </div>
                  <Link legacyBehavior href="/SignIn">
                    <a className="opacity-70 text-black text-base font-medium underline">
                      Log in
                    </a>
                  </Link>
                </div>
              </div>
              {message && <p className="mt-4 text-red-600">{message}</p>}
            </div>
          </form>
        </div>
      </div>
    </main>
  );
}

export default SignUp;
