"use client";

import PreviewTab from "@/components/UserForm/previewTab";
import UserForm from "@/components/UserForm/userForm";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

export default function Home() {
  const [post, setpost] = useState({
    mainDiv: { height: 1, width: 1 },
    mainTitle: "",
    subTitle: "",
    mainBody: "",
    date: new Date().toLocaleString(),
    coverImage: {},
    extraImage: [],
    quote: "",
    extraLink: "",
  });

  return (
    <div>
      <div className="max-w-7xl mx-auto my-10 flex gap-2">
        <div className="flex-1">
          <UserForm post={post} setpost={setpost} />
        </div>
        <div className="flex-1">
          <PreviewTab post={post} />
        </div>
      </div>
    </div>
  );
}
