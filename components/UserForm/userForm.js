"use client";

import React, { useState } from "react";

const UserForm = ({ post, setpost, setLocal }) => {
  function encodeImageFileAsURL(filesSelected) {
    if (filesSelected.length > 0) {
      var fileToLoad = filesSelected[0];

      var fileReader = new FileReader();

      fileReader.onload = async function (fileLoadedEvent) {
        var srcData = fileLoadedEvent.target.result; // <--- data: base64
        setpost({ ...post, coverImage: srcData });
      };

      fileReader.readAsDataURL(fileToLoad);
    }
  }

  const extraImgBase = (e) => {
    let images = Object.values(e.target.files);
    console.log(images);
    let imgBase = [];

    images.map((image) => {
      var fileToLoad = image;

      var fileReader = new FileReader();

      fileReader.onload = async function (fileLoadedEvent) {
        var srcData = fileLoadedEvent.target.result; // <--- data: base64
        imgBase.push(srcData);
      };

      fileReader.readAsDataURL(fileToLoad);
    });

    setpost({ ...post, extraImage: imgBase });
    console.log(images.length, imgBase);
  };

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
            onChange={(e) => {
              setpost({
                ...post,
                mainDiv: { ...post.mainDiv, height: e.target.value },
              });
            }}
          />
          <span className="mx-2 font-bold">X</span>
          <input
            type="number"
            className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg p-2 w-24"
            placeholder="Width"
            required
            onChange={(e) => {
              setpost({
                ...post,
                mainDiv: { ...post.mainDiv, width: e.target.value },
              });
            }}
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
            onChange={(e) => {
              setpost({ ...post, mainTitle: e.target.value });
            }}
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
            onChange={(e) => {
              setpost({ ...post, subTitle: e.target.value });
            }}
          />
        </div>

        <div>
          <label className="block mb-2 text-gray-900">Add cover image</label>
          <input
            type="file"
            className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg p-2 w-3/4"
            required
            onChange={(e) => {
              encodeImageFileAsURL(e.target.files);
            }}
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
            onChange={(e) => {
              setpost({ ...post, mainBody: e.target.value });
            }}
          />
        </div>

        <div>
          <label className="block mb-2 text-gray-900">
            Add Quotes (Optional)
          </label>
          <input
            type="text"
            className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg p-2 w-full mb-2"
            placeholder="Enter a quote"
            onChange={(e) => {
              setpost({ ...post, quote: e.target.value });
            }}
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
            onChange={(e) => {
              extraImgBase(e);
            }}
          />
        </div>

        <div>
          <label className="block mb-2 text-gray-900">
            Add a call to action button (Optional)
          </label>
          <input
            type="text"
            className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg p-2 w-full mb-2"
            placeholder="Enter button text"
            onChange={(e) => {
              setpost({ ...post, buttonText: e.target.value });
            }}
          />
          <input
            type="text"
            className="bg-blue-50 border border-gray-300 text-gray-900 rounded-lg p-2 w-full focus:outline-blue-400"
            placeholder="Add any link"
            onChange={(e) => {
              setpost({ ...post, extraLink: e.target.value });
            }}
          />
        </div>

        <div>
          <button
            className="block my-6 py-3 w-52 border text-lg bg-neutral-900 text-neutral-200 rounded-full font-semibold mx-auto"
            onClick={(e) => {
              e.preventDefault();
              setLocal();
            }}
          >
            Generate
          </button>
          {/* <span
            className="py-1 px-3 underline text-gray-700 mx-4 hover:cursor-pointer"
            onClick={(e) => {}}
          >
            ↻ Preview
          </span> */}
        </div>
      </form>
    </div>
  );
};

export default UserForm;
