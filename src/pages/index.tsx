import React from 'react';
import Meta from '@/components/layout/Meta';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

import { IconType } from 'react-icons';
import { RiMessageFill } from 'react-icons/ri';
import { BsFillFileBarGraphFill } from 'react-icons/bs';
import { SiEslint, SiTypescript } from 'react-icons/si';
import { IoRocketSharp, IoLanguage } from 'react-icons/io5';
import { useIntl } from 'react-intl';

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
  const { formatMessage: t } = useIntl();

  return (
    <li
      data-id={id}
      className="group relative flex h-full w-full max-w-[300px] flex-col items-start justify-start gap-5 gap-y-0 overflow-hidden rounded-md border border-zinc-600 bg-gradient-to-br from-white/5 to-white/20 p-5 transition-all duration-200"
    >
      <span className="pointer-events-none absolute left-0 top-0 h-full w-full bg-transparent transition-all duration-200 group-hover:bg-white/5" />
      <h3 className="flex items-center justify-start gap-2">
        <FeatureIcon className="relative -ml-2 h-9 w-9 rounded-md  p-1.5 text-zinc-400" />
        <span className="text-base text-zinc-400">{t({ id: title })}</span>
      </h3>
      <p className="mt-3 text-left text-sm text-zinc-300/70">
        {t({ id: description })}
      </p>
    </li>
  ) as JSX.Element;
}

export default function Home(): JSX.Element {
  const Features: FeatureElementProps[] = [
    {
      id: 0,
      icon: SiTypescript,
      title: 'homepage.features.elements.0.heading',
      description: 'homepage.features.elements.0.description',
    },
    {
      id: 3,
      icon: IoRocketSharp,
      title: 'homepage.features.elements.1.heading',
      description: 'homepage.features.elements.1.description',
    },
    {
      id: 1,
      icon: SiEslint,
      title: 'homepage.features.elements.2.heading',
      description: 'homepage.features.elements.2.description',
    },
    {
      id: 2,
      icon: BsFillFileBarGraphFill,
      title: 'homepage.features.elements.3.heading',
      description: 'homepage.features.elements.3.description',
    },
    {
      id: 4,
      icon: IoLanguage,
      title: 'homepage.features.elements.4.heading',
      description: 'homepage.features.elements.4.description',
    },
    {
      id: 5,
      icon: RiMessageFill,
      title: 'homepage.features.elements.5.heading',
      description: 'homepage.features.elements.5.description',
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

  const { formatMessage: t } = useIntl();

  return (
    <>
      <Meta
        title="Beyond | Next.JS TypeScript Boilerplate"
        description="Jumpstart with this Next.JS TypeScript multi-purpose boilerplate. Expand and customize as needed to
          fit project's unique requirements."
      />
      <Header />
      <main className="default-fade-in mt-[100px] grid min-h-screen w-full grid-cols-1 place-content-start place-items-center gap-5 bg-[#101010] p-5 pt-[100px] font-theme">
        <h1 className=" max-w-sm bg-gradient-to-br from-zinc-200 to-zinc-700 bg-clip-text p-1 text-center text-4xl text-transparent lg:text-5xl">
          {t({ id: 'homepage.heading' })}
        </h1>
        <p
          style={{
            textAlignLast: 'center',
          }}
          className="mt-10 max-w-lg text-justify text-base text-zinc-500"
        >
          {t({ id: 'homepage.description' })}
        </p>
        <h2 className="mt-10 bg-gradient-to-b from-zinc-200 to-zinc-700 bg-clip-text p-1 text-center text-xl text-transparent lg:text-3xl">
          {t({ id: 'homepage.features.heading' })}
        </h2>
        <section className="grid w-fit max-w-theme auto-rows-fr grid-cols-1 place-content-start place-items-center gap-5 md:grid-cols-2 lg:grid-cols-3">
          {getFeatureGrid() as JSX.Element[]}
        </section>
        <p className="text-left text-sm text-zinc-500">
          {t({ id: 'homepage.last-text' })}
        </p>
      </main>
      <Footer />
    </>
  );
}
