import React from 'react';
import Link from 'next/link';
import { FooterSocialLink } from '@/types/footer.types';
import { BsInstagram, BsLinkedin, BsTwitter } from 'react-icons/bs';

import BeyondLogo from '@/public/assets/img/beyond.png';

function Footer(): JSX.Element {
  const FooterSocialLinks: FooterSocialLink[] = [
    {
      id: 0,
      name: 'Instagram',
      url: 'https://www.instagram.com/beyond_codes/',
      icon: BsInstagram,
    },
    {
      id: 1,
      name: 'Linkedin',
      url: 'https://www.linkedin.com/company/beyond-codes/',
      icon: BsLinkedin,
    },
    {
      id: 2,
      name: 'Twitter',
      url: 'https://twitter.com/beyond_codes',
      icon: BsTwitter,
    },
  ];

  const getSocialLinks = (): JSX.Element[] => {
    const elements = FooterSocialLinks.map(({ id, url, icon: Icon }) => (
      <li key={`fs-elm-${id}`}>
        <a href={url} target="_blank" rel="noreferrer">
          <Icon className="h-7 w-7 rounded-md bg-white/20 p-1.5 text-zinc-400 transition-all duration-150 hover:bg-white/30" />
        </a>
      </li>
    ));

    return elements;
  };

  return (
    <footer className="m-0 flex min-h-[100px] w-full flex-wrap items-center justify-center border-t border-zinc-800 p-0">
      <section className="flex w-full max-w-theme flex-wrap items-center justify-between p-5">
        <Link
          href="/"
          className="group  transition-all duration-150 hover:scale-105"
        >
          <img
            alt="Beyond"
            src={BeyondLogo.src}
            className="w-14 rounded-md bg-white/10 p-2 transition-all duration-150 group-hover:bg-white/20"
          />
        </Link>
        <nav className="flex items-center justify-center ">
          <ul className="flex list-none flex-wrap items-center justify-center gap-3 lg:flex-nowrap xl:flex-nowrap">
            {getSocialLinks()}
          </ul>
        </nav>
      </section>
    </footer>
  );
}

export default Footer;
