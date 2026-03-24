import Image from "next/image";

export default function Home() {
  return (
    <div className="flex h-screen w-screen items-center justify-center font-sans bg-blue-500">
      <main className="flex h-full w-full flex-col items-center justify-between bg-red-100 sm:items-start">
        <img
          className="h-full w-full"
          src="/mgforge_logo.jpg"
          alt="MGForgelogo"
        />
        <span className="absolute bottom-50 text-5xl left-1/2 -translate-x-1/2 font-bold">Contact: <span className="text-mgred">+91 8100177803</span></span>
        <span className="absolute bottom-4 left-4">Copyright © 2026 MG Forge - All Rights Reserved.</span>
      </main>
    </div>
  );
}
