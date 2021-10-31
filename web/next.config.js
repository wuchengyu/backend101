/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  poweredByHeader: false,
  async rewrites() {
    return {
      beforeFiles: [
        // These rewrites are checked after headers/redirects
        // and before all files including _next/public files which
        // allows overriding page files
        {
          source: '/api/:api*',
          destination: `${process.env.API_URL}/:api*`,
        },
      ],
      afterFiles: [
        // These rewrites are checked after pages/public files
        // are checked but before dynamic routes
        {
          source: '/:path*',
          destination: '/404',
        },
      ],
      // fallback: [
      //   // After checking all Next.js pages (including dynamic routes)
      //   // and static files we proxy any other requests
      //   {
      //     source: '/:path*',
      //     destination: '/_error',
      //     // destination: `${process.env.SERVER_URL}/:path*`,
      //   },
      // ],
    };
  },
};
