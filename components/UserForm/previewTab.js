"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const PreviewTab = ({ post }) => {
  console.log(post);

  return (
    <div className="p-2 border rounded-lg">
      <div className="text-center mb-10 uppercase">Preview</div>
      <div>
        <h1 className="text-2xl font-semibold">{post.mainTitle}</h1>
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
    </div>
  );
};

export default PreviewTab;

//FFmpeg
