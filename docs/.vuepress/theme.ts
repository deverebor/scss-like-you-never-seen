import { hopeTheme } from "vuepress-theme-hope";

export default hopeTheme({
  author: "Lucas Souza(@deverebor)",
  navbarIcon: true,
  darkmode: "enable",
  iconAssets: "fontawesome",
  navbar: [
    {
      text: "Home",
      link: "/",
      icon: "home",
    },
    {
      text: "Começando",
      link: "/started/",
      icon: "code",
    },
    {
      text: "Documentação",
      link: "/content/",
      icon: "book",
    },
  ],
})

