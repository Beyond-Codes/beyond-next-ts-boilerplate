/** @type {import('next').NextConfig} */
const subPathPrefix = process.env.NEXT_PUBLIC_SITE_SUBPATH_PREFIX || '';

module.exports = {
  reactStrictMode: true,
  basePath: subPathPrefix,
};
