"use client";

import React, { useState } from "react";

const UserForm = () => {
  const [post, setpost] = useState({
    postObj: {
      mainDiv: { height: 1, width: 1 },
      mainTitle: "",
      subTitle: "",
      mainBody: "",
      Date: new Date().toLocaleString(),
      coverImage: [],
      extraImage: [],
      quote: "",
      ExtraLink: "",
    },
  });

  return (
    <div>
      <form className="p-2 border rounded-lg space-y-5 max-w-xl">
        <div>
          <label className="block mb-2 text-gray-900">Main div</label>
          <input
            type="number"
            className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg p-2 w-24"
            placeholder="Height"
            required
          />
          <span className="mx-2 font-bold">X</span>
          <input
            type="number"
            className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg p-2 w-24"
            placeholder="Width"
            required
          />
          <span className="mx-2 font-medium">Inches</span>
        </div>

        <div>
          <label className="block mb-2 text-gray-900">Add title</label>
          <input
            type="text"
            className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg p-2 w-full"
            placeholder="Title"
            required
          />
        </div>

        <div>
          <label className="block mb-2 text-gray-900">
            Add sub-title (Optional)
          </label>
          <input
            type="text"
            className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg p-2 w-full"
            placeholder="Sub-title (if any)"
          />
        </div>

        <div>
          <label className="block mb-2 text-gray-900">Add cover image</label>
          <input
            type="file"
            className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg p-2 w-3/4"
            required
          />
        </div>

        <div>
          <label className="block mb-2 text-gray-900">Description</label>
          <textarea
            type="text"
            className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg p-2 w-full"
            placeholder="Enter your description here ..."
            required
            rows={6}
          />
        </div>

        <div>
          <label className="block mb-2 text-gray-900">
            Add Quotes & Links (Optional)
          </label>
          <input
            type="text"
            className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg p-2 w-full mb-2"
            placeholder="Enter a quote"
          />
          <input
            type="text"
            className="bg-blue-50 border border-gray-300 text-gray-900 rounded-lg p-2 w-full focus:outline-blue-400"
            placeholder="Add any link"
          />
        </div>

        <div>
          <label className="block mb-2 text-gray-900">
            Add extra images (Optional)
          </label>
          <input
            type="file"
            className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg p-2 w-full"
            multiple
          />
        </div>

        <div>
          <button className="my-6 py-3 w-52 border text-lg bg-neutral-900 text-neutral-200 rounded-full font-semibold">
            Generate
          </button>
          <span className="py-1 px-3 underline text-gray-700 mx-4 hover:cursor-pointer">
            Preview
          </span>
        </div>
      </form>
    </div>
  );
};

export default UserForm;
