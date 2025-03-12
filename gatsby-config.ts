import type { GatsbyConfig } from "gatsby";

const config: GatsbyConfig = {
  siteMetadata: {
    title: `Alex_Pogrebnyak`,
    siteUrl: `https://www.yourdomain.tld`
  },
  graphqlTypegen: true,
  plugins: [
    // Плагин для работы с Netlify CMS
    "gatsby-plugin-netlify-cms",

    // Плагин для создания карты сайта
    "gatsby-plugin-sitemap",

    // Плагин для манифеста сайта (иконка приложения)
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        icon: "src/images/icon.png"
      }
    },

    // Плагин для работы с изображениями
    "gatsby-plugin-image",

    // Плагин для работы с файлами (загрузка изображений)
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: "images",  // название каталога для изображений
        path: `${__dirname}/src/images/`,  // путь к папке с изображениями
      },
    },

    // Плагин для трансформации markdown контента
    "gatsby-transformer-remark",

    // Другие файлы (если необходимо использовать их в проекте)
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: "pages",  // название каталога для страниц
        path: `${__dirname}/src/pages/`,  // путь к папке с страницами
      },
      __key: "pages"
    },
  ],
};

export default config;
