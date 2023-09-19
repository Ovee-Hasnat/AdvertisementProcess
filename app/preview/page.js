"use client";

import html2canvas from "html2canvas";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import * as htmlToImage from "html-to-image";
import download from "downloadjs";

const PreviewPage = () => {
  const [post, setPost] = useState({});
  const [Loader, setLoader] = useState(true);

  useEffect(() => {
    if (typeof window !== "undefined" && window.localStorage) {
      let post = JSON.parse(localStorage.getItem("post"));
      console.log("post:", post);
      setPost(post);
      setLoader(false);
    }
  }, []);

  let x, y;

  if (!Loader) {
    console.log(post.mainDiv);
    x = parseInt(post.mainDiv.width) * 96;
    y = parseInt(post.mainDiv.height) * 96;
  }

  function printDivContent() {
    var contentOfDiv = document.getElementById("divCon").innerHTML;
    // var newWin = window.open("", "", `height=auto, width=${x}`);

    // newWin.document.write(contentOfDiv);

    // newWin.document.close();
    // newWin.print();

    html2canvas(document.getElementById("divCon")).then((canvas) => {
      var newWin = window.open("", "", `height=auto, width=${x}`);
      console.log(canvas);
      newWin.document.body.appendChild(canvas);
      newWin.document.close();
      newWin.print();
    });
  }

  const getJPG = () => {
    htmlToImage
      .toJpeg(document.getElementById("divCon"), { quality: 0.99 })
      .then(function (dataUrl) {
        var link = document.createElement("a");
        link.download = "my-image-name.jpeg";
        link.href = dataUrl;
        link.click();
      });
  };

  const getPNG = () => {
    htmlToImage
      .toPng(document.getElementById("divCon"))
      .then(function (dataUrl) {
        download(dataUrl, "my-node.png");
      });
  };

  return (
    <div className={"p-4 bg-neutral-200"}>
      {/* <button
        className="py-1 px-6 bg-black text-white font-medium block mx-auto my-6"
        onClick={printDivContent}
      >
        Print
      </button> */}

      <button
        id="dropdownDefaultButton"
        data-dropdown-toggle="dropdown"
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center"
        type="button"
      >
        Download{" "}
        <svg
          className="w-2.5 h-2.5 ml-2.5"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 10 6"
        >
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="m1 1 4 4 4-4"
          />
        </svg>
      </button>

      <div
        id="dropdown"
        className="z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-32 dark:bg-gray-700"
      >
        <ul
          className="py-2 text-sm text-gray-700 dark:text-gray-200"
          aria-labelledby="dropdownDefaultButton"
        >
          <li>
            <p
              className="block px-4 py-2 hover:bg-gray-100 cursor-pointer"
              onClick={printDivContent}
            >
              as PDF
            </p>
          </li>
          <li>
            <p
              className="block px-4 py-2 hover:bg-gray-100 cursor-pointer"
              onClick={getPNG}
            >
              as PNG
            </p>
          </li>
          <li>
            <p
              className="block px-4 py-2 hover:bg-gray-100 cursor-pointer"
              onClick={getJPG}
            >
              as JPG
            </p>
          </li>
        </ul>
      </div>

      <Link href={"/"} className="underline w-fit block my-6">
        Back
      </Link>

      {!Loader ? (
        <div id="divCon">
          <div
            className={`p-3 border bg-white`}
            style={{ width: x, height: "auto" }}
          >
            <div>
              <h2 className="text-2xl font-medium font-[Merriweather]">
                {post.mainTitle}
              </h2>
              <h4 className="text-lg font-serif text-neutral-600">
                {post.subTitle}
              </h4>
            </div>

            <div>
              {post.coverImage ? (
                <Image
                  src={post.coverImage}
                  height={400}
                  width={500}
                  alt="cover"
                  className="mx-auto my-4"
                />
              ) : null}
            </div>

            <div>
              <p className="text-justify">{post.mainBody}</p>
              {post.quote ? (
                <p className="font-serif text-neutral-600 text-xl text-center my-8 italic">
                  " {post.quote} "
                </p>
              ) : null}
            </div>

            <div className="flex flex-wrap justify-center">
              {post.extraImage?.map((img, i) => {
                return (
                  <Image
                    src={img}
                    width={200}
                    height={200}
                    className="m-2"
                    alt="extra"
                    key={i}
                  />
                );
              })}
            </div>

            <div>
              {post.buttonText && post.extraLink ? (
                <Link
                  className="py-1 underline text-blue-700 italic font-medium block w-fit mx-auto my-6"
                  href={post.extraLink}
                  target="_blank"
                >
                  {post.buttonText}
                </Link>
              ) : null}
            </div>
          </div>
        </div>
      ) : (
        "Loading"
      )}
    </div>
  );
};

export default PreviewPage;
