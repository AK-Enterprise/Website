"use client";
import axios from "axios";
import React, { useState } from "react";

const ContactForm: React.FC = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitting(true);

    try {
      const spreadsheetId = "1MSZ4bawYCK6L1qZ_2aSdGED12-iSjMaKYqf7YQi3FJk";
      const sheetName = "Contact";
      const apiKey = "AIzaSyAa93CCgO54unPY54yC0JuNbwkhhOpJu4c";
      const apiEndpoint = `https://sheets.googleapis.com/v4/spreadsheets/${spreadsheetId}/values/${sheetName}!A1:append?valueInputOption=USER_ENTERED&key=${apiKey}`;

      const formData = {
        Name: name,
        Email: email,
        Phone: phone,
        Message: message,
      };

      const response = await axios.post(apiEndpoint, {
        values: [Object.values(formData)],
      });

      console.log("Form submitted:", response);
      setSubmitting(false);
    } catch (error) {
      console.error("Error submitting form:", error);
      setSubmitting(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="p-6 border-2 rounded-lg shadow-md bg-white"
    >
      <h2 className="text-xl font-semibold">Reach Out To Us</h2>
      <p className="text-gray-400">We Will Get Back To You Shortly</p>
      <div className="mb-2">
        <label
          htmlFor="name"
          className="block text-sm font-medium text-gray-700"
        >
          Name <span className="text-red-700">*</span>
        </label>
        <input
          type="text"
          id="name"
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          placeholder="John Doe"
        />
      </div>
      <div className="">
        <label
          htmlFor="email"
          className="block text-sm font-medium text-gray-700"
        >
          Email <span className="text-red-700">*</span>
        </label>
        <input
          type="email"
          id="email"
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          placeholder="johndoe@example.com"
        />
      </div>
      <div className="">
        <label
          htmlFor="phone"
          className="block text-sm font-medium text-gray-700"
        >
          Phone <span className="text-red-700">*</span>
        </label>
        <input
          type="tel"
          id="phone"
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          required
          placeholder="1234567890"
        />
      </div>
      <div className="mb-6">
        <label
          htmlFor="message"
          className="block text-sm font-medium text-gray-700 mb-2"
        >
          Message <span className="text-red-700">*</span>
        </label>
        <textarea
          id="message"
          rows={5}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
        />
      </div>
      <button
        type="submit"
        className="bg-black text-white px-4 py-2 rounded-md hover:bg-gray-800 focus:outline-none focus:ring-2"
        disabled={submitting}
      >
        {submitting ? "Submitting..." : "Submit"}
      </button>
    </form>
  );
};

export default ContactForm;
