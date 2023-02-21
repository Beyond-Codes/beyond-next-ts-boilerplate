import React from 'react';
import Head from 'next/head';
import { NextSeo } from 'next-seo';
import { useRouter } from 'next/router';

type MetaProps = {
  title: string;
  description: string;
};

function Meta({ title, description }: MetaProps): JSX.Element {
  const router = useRouter();

  return (
    <>
      <Head>
        <meta charSet="UTF-8" key="charset" />
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1"
          key="viewport"
        />
        <link
          rel="icon"
          href={`${router.basePath}/favicon.ico`}
          key="favicon"
        />
      </Head>
      <NextSeo
        title={title}
        description={description}
        openGraph={{
          title,
          description,
          site_name: process.env.NEXT_PUBLIC_SITE_NAME,
        }}
      />
    </>
  );
}

export default Meta;
