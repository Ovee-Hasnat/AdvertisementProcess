import UserForm from "@/components/UserForm/userForm";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <div className="max-w-6xl mx-auto my-10 flex">
        <UserForm />
        <div className="flex-1"/>
      </div>
    </div>
  );
}
