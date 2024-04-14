---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: '照片墙'
  # text: 'A VitePress Site'
  tagline: ❤️莫善欣❤️的照片墙
  actions:
    - theme: brand
      text: '查看 →'
      link: /imgs

    # - theme: alt
    #   text: API Examples
    #   link: /api-examples

  image:
    src: /logo.jpg
    alt: logo.jpg

features:
  - icon: ❤️
    title: 心地善良
    details: 你总是能够帮助别人，总是能够给别人带来温暖
  - icon: ❤️
    title: 善解人意
    details: 你总是能够理解别人的心情，总是能够给别人带来快乐
  - icon: ❤️
    title: 外柔内刚
    details: 外表柔美，内心坚强，总是能够给人带来力量
---

<style>
:root {
  --vp-home-hero-name-color: transparent;
  --vp-home-hero-name-background: -webkit-linear-gradient(120deg, #bd34fe 30%, #41d1ff);
  --vp-home-hero-image-background-image: linear-gradient(-45deg, #bd34fe 50%, #47caff 50%);
  --vp-home-hero-image-filter: blur(44px);
}

.image-container .image-src {
  border-radius: 10%;
}

@media (min-width: 640px) {
  :root {
    --vp-home-hero-image-filter: blur(56px);
  }
}

@media (min-width: 960px) {
  :root {
    --vp-home-hero-image-filter: blur(68px);
  }
}
</style>
