module.exports = {
  siteMetadata: {
    title: `RA/TK Fathul Insani`,
    description: `Website resmi RA/TK Fathul Insani - Tempat terbaik untuk pendidikan anak usia dini dengan pendekatan islami dan kurikulum berkualitas.`,
    siteUrl: "https://holo-theme.netlify.app/",
    author: `Fardi Hamdan`,
    keywords: "RA Fathul Insani, TK Fathul Insani, Pendidikan Anak Usia Dini, PAUD Islam, Kurikulum Berkualitas, Kegiatan Anak, Taman Kanak-Kanak Islam, Sekolah Dasar Islam, Pendidikan Holistik, Pengembangan Anak, Belajar Sambil Bermain, Lingkungan Belajar Aman, Guru Profesional, Kegiatan Kreatif Anak, Pendidikan Karakter, Taman Pendidikan Al-Qur'an",
  },
  plugins: [
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/static/img`,
        name: "uploads",
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/src/blog`,
        name: "blog",
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/src`,
        name: "_content",
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: "gatsby-remark-relative-images",
            options: {
              name: "uploads",
            },
          },
          {
            resolve: "gatsby-remark-relative-images",
            options: {
              name: "images",
            },
          },
          {
            resolve: "gatsby-remark-copy-linked-files",
            options: {
              // destinationDir: "public",
              ignoreFileExtensions: [
                `png`,
                `jpg`,
                `jpeg`,
                `bmp`,
                `tiff`,
                `webp`,
              ],
            },
          },
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 1360,
              withWebp: false,
              showCaptions: false,
              quality: 100,
              disableBgImageOnAlpha: false,
              wrapperStyle: `margin: 7vw 0;`,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `RA /TK Fathul Insani`,
        short_name: `Holo`,
        start_url: `/`,
        background_color: `#ebebfa`,
        theme_color: `#ebebfa`,
        display: `standalone`,
        icon: `src/images/logo-ra-rb.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: "gatsby-plugin-netlify-cms",
      options: {
        enableIdentityWidget: false,
      },
    },
    {
      resolve: "gatsby-plugin-decap-cms",
      options: {
        modulePath: `${__dirname}/src/cms/cms.js`,
      },
    },
    {
  resolve: gatsby-plugin-sitemap,
  options: {
    query: `
      {
        site {
          siteMetadata {
            siteUrl
          }
        }
        allSitePage {
          nodes {
            path
          }
        }
      }
    `,
    serialize: ({ site, allSitePage }) =>
      (allSitePage?.nodes || []).map(page => {
        return {
          url: new URL(page.path, site.siteMetadata.siteUrl).toString(),
          changefreq: daily,
          priority: 0.7,
        };
      }),
  },
},
    `gatsby-plugin-netlify`,
    `gatsby-plugin-gatsby-cloud`,
    "gatsby-plugin-postcss",
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    `gatsby-plugin-offline`,
    `gatsby-plugin-sitemap`,
  ],
}
