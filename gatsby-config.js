/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path');

module.exports = {
  siteMetadata: {
    title: 'Liz Makes Things',
    description: 'Software engineering, crafts, upcycling, and all manner of constructable things.',
    siteUrl: 'https://www.liz.show', // full path to blog - no ending slash
  },
  mapping: {
    'MarkdownRemark.frontmatter.author': 'AuthorYaml',
  },
  plugins: [
    'gatsby-plugin-sitemap',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'content',
        path: path.join(__dirname, 'src', 'content'),
      },
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-responsive-iframe',
            options: {
              wrapperStyle: 'margin-bottom: 1rem',
            },
          },
          'gatsby-remark-prismjs',
          'gatsby-remark-copy-linked-files',
          'gatsby-remark-smartypants',
          'gatsby-remark-abbr',
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 1040,
              quality: 100,
            },
          },
        ],
      },
    },
    'gatsby-transformer-json',
    {
      resolve: 'gatsby-plugin-canonical-urls',
      options: {
        siteUrl: 'https://www.liz.show',
      },
    },
    'gatsby-plugin-typescript',
    'gatsby-plugin-emotion',
    'gatsby-transformer-sharp',
    'gatsby-plugin-react-helmet',
    'gatsby-transformer-yaml',
    'gatsby-plugin-feed',
    {
      resolve: 'gatsby-plugin-postcss',
      options: {
        postCssPlugins: [require('postcss-color-function'), require('cssnano')()],
      },
    },
    // {
    //   resolve: 'gatsby-plugin-manifest',
    //   options: {
    //     name: 'Liz Makes Things',
    //     short_name: 'Liz Makes Things',
    //     start_url: '/',
    //     background_color: '#191b1f',
    //     theme_color: '#fff',
    //     display: 'standalone',
    //     icons: [
    //       {
    //         src: '/android-chrome-192x192.png',
    //         sizes: '192x192',
    //         type: 'image/png',
    //       },
    //       {
    //         src: '/android-chrome-512x512.png',
    //         sizes: '512x512',
    //         type: 'image/png',
    //       },
    //       {
    //         src: '/apple-touch-icon.png',
    //         sizes: '180x180',
    //         type: 'image/png',
    //       },
    //       {
    //         src: '/favicon-16x16.png',
    //         sizes: '16x16',
    //         type: 'image/png',
    //       },
    //       {
    //         src: '/favicon-32x32.png',
    //         sizes: '32x32',
    //         type: 'image/png',
    //       },
    //     ],
    //   },
    // },
    // 'gatsby-plugin-offline',
    // {
    //   resolve: 'gatsby-plugin-google-analytics',
    //   options: {
    //     trackingId: 'UA-XXXX-Y',
    //     // Puts tracking script in the head instead of the body
    //     head: true,
    //     // IP anonymization for GDPR compliance
    //     anonymize: true,
    //     // Disable analytics for users with `Do Not Track` enabled
    //     respectDNT: true,
    //     // Avoids sending pageview hits from custom paths
    //     exclude: ['/preview/**'],
    //     // Specifies what percentage of users should be tracked
    //     sampleRate: 100,
    //     // Determines how often site speed tracking beacons will be sent
    //     siteSpeedSampleRate: 10,
    //   },
    // },
  ],
};
