---
title: "How to create your own personal blog website in 10 minutes"
excerpt: "Are you ready to share your thoughts, passions, and expertise with the world? Look no further! In just 10 minutes, discover the step-by-step guide to create your very own personal blog website. From selecting the perfect design to setting up hosting and publishing your first post, embark on a seamless journey towards establishing your online presence and connecting with a global audience. Unleash your creativity and let your voice be heard, as you take the first exciting steps towards becoming a distinguished blogger in no time."
coverImage: "/assets/blog/how-to-code-your-personal-website-with-blog/personal-website-blog.jpeg"
date: "2023-05-15T16:46:58.941Z"
author:
  name: "Nimbus Nova"
  picture: "/assets/blog/authors/nimbus_nova_avatar.png"
ogImage:
  url: "/assets/blog/how-to-code-your-personal-website-with-blog/personal-website-blog.jpeg"
---


### 1. Clone and install this repo
  - Fork the repo
  - `git clone git@github.com:wuxiaohua1011/nextjs-blog-starter.git` 


![](/assets/blog/how-to-code-your-personal-website-with-blog/step_1.png)


### 2. Deployment with [Vercel](https://vercel.com/)
I use [Vercel](https://vercel.com/) for deployment, feel free to use any. A hobby account on Vercel should suffice
![](/assets/blog/how-to-code-your-personal-website-with-blog/step_2.png)

You can also attach your domain quite easily. I used Google Domain
![](/assets/blog/how-to-code-your-personal-website-with-blog/step_2.2.png)



### 3. Modify content


### 4. [Optional] Modify features
#### Constants

Set up each of the constants, much like you would a `.env`, in the `lib/constants.js` file.   

```javascript
export const EXAMPLE_PATH = 'blog-starter'
export const CMS_NAME = 'Markdown'
export const HOME_OG_IMAGE_URL = 'https://og-image.vercel.app/Next.js%20Blog%20Starter%20Example.png?theme=light&md=1&fontSize=100px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg'
export const BLOG_NAME = 'Next.js Blog Starter'
export const KEYWORDS = 'starter, blog, next.js, template'
export const DESCRIPTION = 'A starter blog template for Next.js'
export const AUTHOR = 'nimbus nova'
export const LANG = 'en-CA'
export const GITHUB_REPO = 'https://github.com/wuxiaohua1011'
```

#### Generate a sitemap and robots.txt

Sitemaps are an important part of SEO. This section walks through adding your base URL to the sitemap generator. The generator runs automatically after each build, generating a new sitemap each time you update your blog. 

The generated sitemap can be found in `public/sitemap.xml`. This command also generates a new `public/robots.txt` file.

1. Open the `scripts/generate.sitemap.mjs` file.
2. On Line 5, replace `https://blog-starter.sandypockets.dev` with your own blog's website.
3. On Line 6, replace `en-CA` with your preferred locale (`en-UK`, `en-US`, etc.). This is used to determine the format of the date stamp in the sitemap.  

When you're ready to test it:

1. Run `yarn build`
2. Check the `public/` directory for the `sitemap.xml` file and `robots.txt` file.
3. Run `yarn start`
4. Visit `http://localhost:3000/sitemap.xml`

If you see the xml sitemap, then it was successful.

![](/assets/blog/how-to-code-your-personal-website-with-blog/step_4.1.png)


### RSS Feed
An RSS feed is available for the blog at `/feed.xml`. However, you must first configure the RSS generator to use your own URL.

1. Open the `scripts/generate-rss.mjs` file.
2. On Line 7, replace the `https://blog-starter.sandypockets.dev` value of `BLOG_URL` with your own.

When you're ready to test it:

1. Run `yarn build`
2. Check the `public/` directory for the `feed.xml` file.
3. Run `yarn start`
4. Visit `http://localhost:3000/feed.xml`

If you see the xml RSS feed, then it was successful.
![](/assets/blog/how-to-code-your-personal-website-with-blog/step_4.2.png)

#### Set up Google Analytics

You will need to have your Google tag ID. If you do not have one, or do not have a Google Analytics account, you can sign up at [analytics.google.com](https://analytics.google.com/)

1. Create a copy of the `.env.local.example` file, and name it `.env.local`. To do so in the terminal, run:

```shell
cp .env.local.example .env.local
```

2. Grab your Google tag ID from your Analytics account, and replace the `G-XXXXXXXXXX` in the new `.env.local` file you just created.

![](/assets/blog/how-to-code-your-personal-website-with-blog/step_5.1.png)

#### Set up SendGrid
You will need a free SendGrid account, which allows you to send up to 100 emails each day.

1. Get your SendGrid API key from your SendGrid account.
2. Open the `.env.local` file that you created when setting up Google Analytics.
3. Replace `REPLACE-WITH-YOUR-API-KEY` with your actual API key from SendGrid.

![](/assets/blog/how-to-code-your-personal-website-with-blog/step_5.2.png)
