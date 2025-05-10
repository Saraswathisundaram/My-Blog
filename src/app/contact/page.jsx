"use client";
import { useState } from "react";

export default function Contact() {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent page reload

    if (validateEmail(email)) {
      setError("");
      setIsSubmitted(true);
      // Proceed with form submission logic (e.g., API call)
    } else {
      setError("Please enter a valid email address.");
      console.log("error triggered");
      setIsSubmitted(false);
    }
  };

  const validateEmail = (email) => {
    const regex = /\S+@\S+\.\S+/;
    return regex.test(email);
  };

  return (
    <main className="container mx-auto px-4 py-6">
      <h2 className="text-4xl font-bold mb-4">Contact Us</h2>
      <form className="w-full max-w-lg" onSubmit={handleSubmit}>
        <div className="flex items-center mb-4">
          <label htmlFor="name" className="w-1/4">
            Name:
          </label>
          <input
            type="text"
            id="name"
            className="border rounded px-2 py-1 w-3/4"
          />
        </div>
        <div className="flex items-center mb-4">
          <label htmlFor="email" className="w-1/4">
            Email:
          </label>
          <div className="flex flex-col w-full ml-8">
            <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="border rounded px-2 py-1"
              placeholder="example@email.com"
              required
            />
            {error && <p className="mt-2 text-sm text-red-600">{error}</p>}
          </div>
        </div>
        <div className="flex items-center mb-4">
          <label htmlFor="message" className="w-1/4">
            Message:
          </label>
          <textarea
            id="message"
            className="border rounded px-2 py-1 w-3/4"
            rows="4"
          ></textarea>
        </div>
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
        >
          Submit
        </button>
      </form>
      {isSubmitted && !error && (
        <p className="mt-2 text-sm text-green-600">Your email is valid!</p>
      )}
    </main>
  );
}
