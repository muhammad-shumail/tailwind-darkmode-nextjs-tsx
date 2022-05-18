import Head from "next/head";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import Navbar from "../components/Layout/Navbar";
import Header from "../components/Header";

export default function Home() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  // When mounted on client, now we can show the UI
  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <>
      <Head>
        <title>Muhammad Shumail Ansari</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <div className="bg-gradient-to-r from-green-300 via-blue-500 to-purple-600">
        <Header />
      </div>
      <div className="bg-gradient-to-r from-pink-300 via-pink-700 to-purple-600">
        <Header />
      </div>

    </>
  );
}
