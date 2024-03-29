import SignOut from "@/components/sign-out";
import Head from "next/head";

export default function Home() {
  return (
    <div className="flex h-screen bg-black">
      <Head>
        <title>Next.js 13 Starter</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="w-screen h-screen flex flex-col space-y-5 justify-center items-center">
        <iframe
          src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="w-full max-w-screen-lg aspect-video"
        ></iframe>
        <SignOut />
      </div>
    </div>
  );
}
