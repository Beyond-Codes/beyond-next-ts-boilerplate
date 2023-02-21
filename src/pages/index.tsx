import React from 'react';
import Meta from '@/components/layout/Meta';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

import { IconType } from 'react-icons';
import { RiMessageFill } from 'react-icons/ri';
import { BsFillFileBarGraphFill } from 'react-icons/bs';
import { SiEslint, SiTypescript } from 'react-icons/si';
import { IoRocketSharp, IoLanguage } from 'react-icons/io5';

type FeatureElementProps = {
  id: number;
  icon: IconType;
  title: string;
  description: string;
};

function FeatureElement({
  id,
  icon: FeatureIcon,
  title,
  description,
}: FeatureElementProps): JSX.Element {
  return (
    <li
      data-id={id}
      className="group relative flex h-full w-full max-w-[300px] flex-col items-start justify-start gap-5 gap-y-0 overflow-hidden rounded-md border border-zinc-600 bg-gradient-to-br from-white/5 to-white/20 p-5 transition-all duration-200"
    >
      <span className="pointer-events-none absolute left-0 top-0 h-full w-full bg-transparent transition-all duration-200 group-hover:bg-white/5" />
      <h3 className="flex items-center justify-start gap-2">
        <FeatureIcon className="relative -ml-2 h-9 w-9 rounded-md  p-1.5 text-zinc-400" />
        <span className="text-base text-zinc-400">{title}</span>
      </h3>
      <p className="mt-3 text-left text-sm text-zinc-300/70">{description}</p>
    </li>
  ) as JSX.Element;
}

export default function Home(): JSX.Element {
  const Features: FeatureElementProps[] = [
    {
      id: 0,
      icon: SiTypescript,
      title: 'TypeScript',
      description:
        "It's is built with TypeScript. TypeScipt is a typed superset of JavaScript that compiles to plain JavaScript.",
    },
    {
      id: 3,
      icon: IoRocketSharp,
      title: 'Deployment Helpers',
      description:
        'Includes deployment helpers to make your project easier to deploy, like Base URL, Sitemap, Robots.txt, etc.',
    },
    {
      id: 1,
      icon: SiEslint,
      title: 'Linters',
      description:
        'Includes ESLint and Prettier configured for TypeScript to make your code more readable and consistent.',
    },
    {
      id: 2,
      icon: BsFillFileBarGraphFill,
      title: 'SEO Helpers',
      description:
        'Includes SEO helpers to make your project more search engine friendly, like Meta Tags, Open Graph, OG tags, etc.',
    },
    {
      id: 4,
      icon: IoLanguage,
      title: 'Multilingual',
      description:
        'Includes multilingual layout to make your project multilingual, ready to use i18n.',
    },
    {
      id: 5,
      icon: RiMessageFill,
      title: 'Popups',
      description:
        'Includes popups layout to make your project have pure popups without any packages.',
    },
  ];

  const getFeatureGrid = () => {
    const elements = Features.map(({ icon, id, title, description }) => (
      <FeatureElement
        key={`f-elm-${id}`}
        id={id}
        icon={icon}
        title={title}
        description={description}
      />
    ));

    return elements as JSX.Element[];
  };

  return (
    <>
      <Meta title="Beyond" description="Beyond Template" />
      <Header />
      <main className="default-fade-in mt-[100px] grid min-h-screen w-full grid-cols-1 place-content-start place-items-center gap-5 bg-[#101010] p-5 pt-[100px] font-theme">
        <h1 className=" max-w-sm bg-gradient-to-br from-zinc-200 to-zinc-700 bg-clip-text p-1 text-center text-4xl text-transparent lg:text-5xl">
          Faster way to build projects
        </h1>
        <p className="mt-10 text-center text-base text-zinc-500">
          A Next.JS boilerplate that uses TypeScript.
        </p>
        <h2 className="mt-10 bg-gradient-to-b from-zinc-200 to-zinc-700 bg-clip-text p-1 text-center text-xl text-transparent lg:text-3xl">
          Features
        </h2>
        <section className="grid w-fit max-w-theme auto-rows-fr grid-cols-1 place-content-start place-items-center gap-5 md:grid-cols-2 lg:grid-cols-3">
          {getFeatureGrid() as JSX.Element[]}
        </section>
      </main>
      <Footer />
    </>
  );
}
