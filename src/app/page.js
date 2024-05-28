'use client'
import { getUserDataByUsername } from "@/services/api-service";
import { Star, StarHalf } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Home() {

  const [username, setUsername] = useState('');
  const [userData, setUserData] = useState(null);
  const router = useRouter()

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!username) {
      return alert('Username not valid')
    }

    router.push(`/user/${username}`)
  }

  return (
    <>
      <section className="flex flex-col gap-1.5 justify-center items-center h-screen w-screen">
        <Image
          src="/github-color-svgrepo-com.svg"
          alt="github"
          width={170}
          height={170}
          className="item-center"
        />
        <p className="m-3">Find your Developer Profile</p>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="github username"
            className=" px-4 py-2.5 border-red-300 border-2 rounded-md w-full"
          />
        </form>

        <div className="text-xs text-pretty absolute bottom-0">
          Build using Next.js,Github Rest Api and Tailwind CSS
          <br />
          <div className="flex justify-center">Give it a star <Star className="h-4 text-yellow-400"/> <a href="###">here</a></div>
        </div>
      </section>
    </>
  );
}
