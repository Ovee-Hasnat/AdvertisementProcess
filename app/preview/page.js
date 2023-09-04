"use client";

import html2canvas from "html2canvas";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

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

  return (
    <div className={"p-4 bg-neutral-200"}>
      <button
        className="py-1 px-6 bg-black text-white font-medium block mx-auto my-6"
        onClick={printDivContent}
      >
        Print
      </button>
      <Link href={"/"} className="underline w-fit block mx-auto my-6">
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
                    className="m-2 rounded-lg"
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
