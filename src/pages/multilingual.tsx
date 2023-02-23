import Header from '@/components/layout/Header';
import Meta from '@/components/layout/Meta';
import { useLanguage } from '@/contexts/Language.context';
import React from 'react';
import { useIntl } from 'react-intl';

function Multilingual(): JSX.Element {
  const { formatMessage: t } = useIntl();
  const { changeLanguage } = useLanguage();
  return (
    <>
      <Meta
        title="Multilingual | Beyond Next.JS TypeScript Boilerplate"
        description="The context-based approach enables seamless integration of popup components, making it easy to integrate into your project."
      />
      <Header />
      <main className="default-fade-in mt-[100px] grid min-h-screen w-full grid-cols-1 place-content-start place-items-center gap-5 bg-[#101010] p-5 pt-[100px] font-theme">
        <h1 className="max-w-sm bg-gradient-to-br from-zinc-200 to-zinc-700 bg-clip-text p-1 text-center text-4xl text-transparent lg:text-5xl">
          {t({ id: 'multilingual.heading' })}
        </h1>
        <p
          style={{
            textAlignLast: 'center',
          }}
          className="mt-10 max-w-lg text-justify text-base text-zinc-500"
        >
          {t({ id: 'multilingual.description' })}
        </p>
        <h2 className="mt-10 bg-gradient-to-b from-zinc-200 to-zinc-700 bg-clip-text p-1 text-center text-xl text-transparent lg:text-3xl">
          {t({ id: 'multilingual.example.heading' })}
        </h2>
        <section className="flex items-center justify-center">
          <button
            onClick={() => {
              changeLanguage('en');
            }}
            className="min-w-[90px] rounded-l-md border-r border-r-zinc-900 bg-white/10 px-4 py-1 text-center text-sm text-zinc-300 transition-all duration-150 hover:bg-white/20 disabled:pointer-events-none disabled:opacity-50"
            type="button"
          >
            EN
          </button>
          <button
            onClick={() => {
              changeLanguage('tr');
            }}
            className="min-w-[90px] rounded-r-md border-l border-l-zinc-900 bg-white/10 px-4 py-1 text-center text-sm text-zinc-300 transition-all duration-150 hover:bg-white/20 disabled:pointer-events-none disabled:opacity-50"
            type="button"
          >
            TR
          </button>
        </section>
      </main>
    </>
  );
}

export default Multilingual;
