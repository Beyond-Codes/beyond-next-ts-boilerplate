import React from 'react';
import Meta from '@/components/layout/Meta';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

export default function Home(): JSX.Element {
  return (
    <>
      <Meta title="Beyond" description="Beyond Template" />
      <Header />
      <main className="default-fade-in mt-[100px] grid min-h-screen w-full grid-cols-1 place-content-start place-items-center gap-5 bg-[#101010] p-5 pt-[100px] font-theme">
        <h1 className="max-w-sm bg-gradient-to-br from-zinc-300 to-zinc-700 bg-clip-text p-1 text-center text-4xl text-transparent lg:text-5xl">
          Faster way to build projects
        </h1>
        <p className="text-sm text-zinc-500">
          A Next.JS boiler plate that uses TypeScript.
        </p>
      </main>
      <Footer />
    </>
  );
}
