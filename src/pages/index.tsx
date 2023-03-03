import React from 'react';
import { useIntl } from 'react-intl';
import Meta from '@/components/layout/Meta';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

export default function Home(): JSX.Element {
  const { formatMessage: t } = useIntl();

  return (
    <>
      <Meta
        title="Beyond | Next.JS TypeScript Boilerplate"
        description="Jumpstart with this Next.JS TypeScript multi-purpose boilerplate. Expand and customize as needed to
          fit project's unique requirements."
      />
      <Header />
      <main className="default-fade-in flex min-h-screen w-full items-start justify-center bg-[#101010] pt-[200px] font-theme">
        <section className="grid w-full max-w-[40rem] grid-cols-1 place-content-start place-items-center gap-5 p-5">
          <h1 className="max-w-2xl bg-gradient-to-br from-zinc-200 to-zinc-700 bg-clip-text p-1 text-center text-5xl font-semibold text-transparent lg:text-7xl">
            {t({ id: 'homepage.heading' })}
          </h1>
          <p
            style={{
              textAlignLast: 'center',
            }}
            className="my-10 text-justify text-base font-light text-zinc-500"
          >
            {t({ id: 'homepage.description' })}
          </p>
          <ul className="grid min-h-[400px] grid-cols-1 place-content-stretch place-items-center gap-5 md:grid-cols-2 lg:grid-cols-2">
            <li className="group relative row-span-2 flex h-full w-full flex-col items-start justify-center gap-y-0 overflow-hidden rounded-md border border-zinc-600 bg-gradient-to-br from-white/5 to-white/20 p-10 transition-all duration-200">
              <span className="pointer-events-none absolute left-0 top-0 h-full w-full bg-transparent transition-all duration-200 group-hover:bg-white/5" />
              <h3 className=" flex flex-col items-start justify-center gap-0 text-left text-xl font-medium text-zinc-300">
                {t({ id: 'homepage.feature-blocks.0.heading' })}
              </h3>
              <p className="mt-5 text-left text-sm text-zinc-400">
                {t({ id: 'homepage.feature-blocks.0.description' })}
              </p>
            </li>
            <li className="group relative flex h-full w-full  flex-col items-start justify-center gap-y-0 overflow-hidden rounded-md border border-zinc-600 bg-gradient-to-br from-white/5 to-white/20 p-10 transition-all duration-200">
              <span className="pointer-events-none absolute left-0 top-0 h-full w-full bg-transparent transition-all duration-200 group-hover:bg-white/5" />
              <h3 className="flex flex-col items-start justify-center gap-0 text-left text-xl font-medium text-zinc-300">
                {t({ id: 'homepage.feature-blocks.1.heading' })}
              </h3>
              <p className="mt-5 text-left text-sm text-zinc-400">
                {t({ id: 'homepage.feature-blocks.1.description' })}
              </p>
            </li>
            <li className="group relative flex h-full w-full  flex-col items-start justify-center gap-y-0 overflow-hidden rounded-md border border-zinc-600 bg-gradient-to-br from-white/5 to-white/20 p-10 transition-all duration-200">
              <span className="pointer-events-none absolute left-0 top-0 h-full w-full bg-transparent transition-all duration-200 group-hover:bg-white/5" />
              <h3 className="flex flex-col items-start justify-center gap-0 text-left text-xl font-medium text-zinc-300">
                {t({ id: 'homepage.feature-blocks.2.heading' })}
              </h3>
              <p className="mt-5 text-left text-sm text-zinc-400">
                {t({ id: 'homepage.feature-blocks.2.description' })}
              </p>
            </li>
          </ul>
          <p className="my-5 text-left text-sm text-zinc-500">
            {t({ id: 'homepage.last-text' })}
          </p>
        </section>
      </main>
      <Footer />
    </>
  );
}
