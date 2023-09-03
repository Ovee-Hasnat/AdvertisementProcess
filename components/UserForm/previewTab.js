"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const PreviewTab = ({ post }) => {
  console.log(post);

  return (
    <div className="p-3 border rounded-lg">
      <div className="text-center mb-10 uppercase">Preview</div>
      <div>
        <h1 className="text-2xl font-medium font-[Merriweather]">
          {post.mainTitle}
        </h1>
        <h2 className="text-lg font-serif text-neutral-600">{post.subTitle}</h2>
      </div>

      <div className="my-4">
        {post.coverImage ? (
          <Image
            src={post.coverImage}
            height={400}
            width={500}
            alt="cover"
            className="mx-auto"
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

      <div className="my-6 flex flex-wrap justify-center">
        {post.extraImage?.map((img) => {
          console.log(39, img);
          return (
            <Image
              src={img}
              width={200}
              height={200}
              className="m-2 rounded-lg"
            />
          );
        })}
      </div>

      <div>
        {post.buttonText && post.extraLink ? (
          <Link
            className="py-1 underline text-blue-700 italic font-medium block w-fit mx-auto"
            href={post.extraLink}
            target="_blank"
          >
            {post.buttonText}
          </Link>
        ) : null}
      </div>
    </div>
  );
};

export default PreviewTab;

//FFmpeg
