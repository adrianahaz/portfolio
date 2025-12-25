const navbarItems = {
  navigation: [
    { icon: "home", href: "/" },
    { icon: "images", href: "/gallery.html" },
    { icon: "clipboard-list", href: "/projects.html" },
    { icon: "contact", href: "/contact.html" },
  ],
  social: [
    { icon: "github", href: "https://github.com/adrianahaz" },
    { icon: "linkedin", href: "https://linkedin.com/in/adrhmdlz" },
    { icon: "instagram", href: "https://instagram.com/adrhmdlz" },
    { icon: "globe", href: "https://adrianahaz.github.io" },
  ],
};

export const getNavigationItems = () => {
  return navbarItems.navigation;
};

export const getSocialItems = () => {
  return navbarItems.social;
};
