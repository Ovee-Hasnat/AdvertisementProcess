import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="text-center">
      <h1 className="text-4xl">Home</h1>

      <h2 className="mt-14 text-teal-400 text-xl">Menu</h2>
      <ul>
        <li>
          <Link href={"/contact"}>Contact</Link>
        </li>
        <li>
          <Link href={"/explore"}>Explore</Link>
        </li>
        <li>
          <Link href={"/profile"}>Profile</Link>
        </li>
      </ul>
    </div>
  );
}
