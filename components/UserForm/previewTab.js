"use client";
import React, { useEffect, useState } from "react";

const PreviewTab = ({ post }) => {
  //   const ee = dd.map((data) => {
  //     return data;
  //   });

  //   if (ee && ee.length > 0) console.log(111, ee[0].name);

  console.log(post.extraImage.length);
  return (
    <div className="p-2 border rounded-lg">
      <div className="text-center">PreviewTab</div>
      <div>
        {post.extraImage?.map((data, index) => (

             <img src={URL.createObjectURL(data[index])} alt="img" />
        )
        )}
      </div>
    </div>
  );
};

export default PreviewTab;
