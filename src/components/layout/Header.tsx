import React from 'react';
import Link from 'next/link';
import { useIntl } from 'react-intl';
import { useRouter } from 'next/router';
import { HiOutlineMenuAlt3 } from 'react-icons/hi';
import { useLanguage } from '@/contexts/Language.context';

import {
  HeaderLink,
  MobileMenuProps,
  HeaderLinkClassName,
} from '@/types/header.types';

import BeyondLogo from '@/public/assets/img/beyond.png';

const ClassNames: HeaderLinkClassName = {
  desktop:
    'text-zinc-400 hover:text-white text-base transition-all duration-150 hover:text-white',
  mobile:
    'text-zinc-400 hover:text-white text-base transition-all duration-150 hover:text-white',
};

function MobileMenu({ isActive, children }: MobileMenuProps): JSX.Element {
  return (
    <div
      className={`${isActive ? 'translate-x-0' : 'translate-x-full'}
        fixed left-0 top-0 z-[49] flex h-full w-full flex-col items-center justify-start bg-black px-5 transition-all duration-500 lg:hidden`}
    >
      <ul className="flex h-full w-full flex-col items-center justify-center gap-10 overflow-y-auto py-[150px]">
        {children}
      </ul>
    </div>
  );
}

export default function Header(): JSX.Element {
  const Router = useRouter();
  const { formatMessage: t } = useIntl();
  const { language, changeLanguage } = useLanguage();
  const [mobileMenu, setMobileMenu] = React.useState<boolean>(false);

  const HeaderLinks: HeaderLink[] = [
    {
      id: 0,
      name: 'header.links.0',
      url: '/',
      classNames: {
        desktop: ClassNames.desktop,
        mobile: ClassNames.mobile,
      },
    },
    {
      id: 1,
      name: 'header.links.1',
      url: 'https://github.com/beyond-codes/next-ts-template',
      classNames: {
        desktop: ClassNames.desktop,
        mobile: ClassNames.mobile,
      },
      external: true,
    },
  ];

  const getDesktopElements = (): JSX.Element[] => {
    const elements = HeaderLinks.map(
      ({ url, name, id, classNames: { desktop: className }, external }) => (
        <li key={`d-elm-${id}`}>
          {external ? (
            <a
              className={className}
              href={url}
              target="_blank"
              rel="noreferrer"
            >
              {t({ id: name })}
            </a>
          ) : (
            <Link className={className} href={url}>
              {t({ id: name })}
            </Link>
          )}
        </li>
      )
    );

    return elements;
  };

  const getMobileElements = (): JSX.Element[] => {
    const elements = HeaderLinks.map(
      ({ url, name, id, classNames: { mobile: className }, external }) => (
        <li key={`m-elm-${id}`}>
          {external ? (
            <a
              className={className}
              href={url}
              target="_blank"
              rel="noreferrer"
            >
              {t({ id: name })}
            </a>
          ) : (
            <Link className={className} href={url}>
              {t({ id: name })}
            </Link>
          )}
        </li>
      )
    );

    return elements;
  };

  React.useEffect(() => {
    if (mobileMenu) {
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenu]);

  React.useEffect(() => {
    setMobileMenu(false);
  }, [Router]);

  return (
    <header className="fixed left-0 top-0 z-[10] flex min-h-[100px] w-full items-center justify-center border-b border-b-zinc-800 bg-black font-theme shadow-xl">
      <section className="flex w-full max-w-theme flex-wrap items-center justify-between gap-5 p-5">
        <Link
          href="/"
          className="group relative z-[50] transition-all duration-150 hover:scale-105"
        >
          <img
            alt="Beyond"
            src={BeyondLogo.src}
            className="aspect-square w-14 rounded-md bg-white/10 object-contain p-2 opacity-80 transition-all duration-150 group-hover:bg-white/20 group-hover:opacity-100"
          />
        </Link>
        <nav className="hidden w-fit items-center justify-end gap-5 lg:flex">
          {getDesktopElements()}
          <li>
            <button
              type="button"
              className={ClassNames.desktop}
              onClick={() => changeLanguage(language === 'tr' ? 'en' : 'tr')}
            >
              EN/TR
            </button>
          </li>
        </nav>
        <button
          type="button"
          onClick={() => setMobileMenu(!mobileMenu)}
          className="z-[100] flex max-w-fit items-center justify-center lg:hidden"
        >
          <HiOutlineMenuAlt3
            className={`${
              mobileMenu
                ? ' rotate-180 bg-white text-zinc-900'
                : 'rotate-0 bg-zinc-900 text-zinc-300'
            } h-14 w-14 rounded-md p-2 text-center transition-all duration-500`}
          />
        </button>
      </section>
      <MobileMenu isActive={mobileMenu}>{getMobileElements()}</MobileMenu>
    </header>
  );
}
