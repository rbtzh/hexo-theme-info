# *info* Theme for HEXO

A theme for [hexo](https://hexo.io/), ~~a copy🐱 of iA.net, hopefully.~~  **INSPIRED** by [iA.net](https://ia.net). Written by [zhao-robert](https://github.com/zhao-robert/) with [LOVE❤️](https://en.wikipedia.org/wiki/Love)~

## Why this exists?

- I love the design of [iA's Website](https://ia.net).

- And [iA's Website](https://ia.net) seems simple enough for me, who had never written something like this.
- I need a theme for my [personal website](https://yanbo.site).

- [LOVE❤️](https://en.wikipedia.org/wiki/Love)

## Before You Use

### Set Scaffolds

```markdown
add these to post.md's front-matter

title: {{ title }}
date: {{ date }}
author: 
type: "post"
categories: 
tags: 
headpic: 
excerpt: 
```

- `headpic`: This gone be the Head Picture displayed at the top of the article. Landscape orientation suggested. Paste the URL of picture you want to add on it. optional.

- `excerpt`: This will displayed in all the lists as description. Although this can be generated, I strongly suggest you to add (at least 2) sentences to describe your article.  optional.

  ### **add pages**

  use `hexo new page <page name>` to add below pages:

  - categories
  - posts
  - tags

  then add front-matter

  ```markdown
  type: "<page name>"
  layout: "<page name>"
  ```

  ### **Edit _config.yml**

  Edit the `_config.yml` , turn off the built in syntax highlight

  ```yaml
  highlight:
    enable: false
    ...
  prismjs:
    enable: false
  
  ```

  

## THE BASIC PLAN

- [x] Index
- [x] Blog list / Archives
- [x] Blog page
- [x] Tags / Categories
- [ ] About
- [ ] more......

## THE *more granularity*  PLAN

- [x] let header shows the current address
- [x] find out how to add css file using relative path
- [x] use rem to re-layout css files
- [x] Responsive Design
- [x] Dark mode
- [x] Learn GSAP (The one [iA's Website](https://ia.net) using) to add animation.
- [x] syntax highlight
- [ ] add pangu.js
- [ ] redesign
- [ ] I really need a design system
- [ ] auto position the image base on scale
- [ ] Multi-language support
- [ ] Transition of 'a' tags
- [ ] switch to tailwindcss
- [ ] ~~Add Google Analytics  (won't add. don't give big companies your data.)~~
- [ ] more......

**I don't know whether this project has any Infringements of intellectual property rights or not, since I WILL KEEP THIS NON-COMMERCIAL. Thanks. Make issues if come with any trouble.**
