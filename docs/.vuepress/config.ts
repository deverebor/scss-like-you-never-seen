import { defineUserConfig } from "vuepress";
import theme from "./theme";

export default defineUserConfig({
  base: "/scss-like-you-never-seen/",
  lang: "pt-BR",
  title: "SCSS como você nunca viu",
  description: "Aprenda a usar o SCSS de uma forma diferente!",
  head: [
    ["link", { rel: "icon", href: "/favicon.png" }],
    [
      "meta",
      {
        name: "google-site-verification",
        content: "bmr3QFy052qbYVYRSuLrZrIpJPgIoLv2kIOXfdkwtkk",
      },
    ],
  ],
  theme: theme,
});
