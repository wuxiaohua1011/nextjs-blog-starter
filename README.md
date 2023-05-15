# Nimbus Nova's Main page

Note: This blog page is adapted from 
`https://github.com/sandypockets/nextjs-blog-starter`

## Commands
```shell
yarn dev
``` 

## How it works
Blog posts are stored in the `/_posts` directory as Markdown files. Each post must include the appropriate front matter. 

To create the blog posts we use [`remark`](https://github.com/remarkjs/remark) and [`remark-html`](https://github.com/remarkjs/remark-html) to convert the Markdown files into an HTML string, and then send it down as a prop to the page. The metadata of every post is handled by [`gray-matter`](https://github.com/jonschlinkert/gray-matter) and also sent in props to the page.

### Front matter
An example of the required front matter:

> Note: The formatting of the front matter is important. Ensure the indentation, and quotes remain the same. 

```text
---
title: 'A blog starter you actually want to use'
excerpt: 'There are hundreds of different blog starters out there. But none felt quite right. So I built my own. Based off the basic Next.js Blog Starter, but now with several handy features like dark mode (using local storage) or Google Analytics. It comes with Storybook too.'
coverImage: '/assets/blog/a-nextjs-blog-starter-you-actually-want-to-use/tree-minimal.jpg'
date: '2021-08-24T05:35:07.322Z'
author:
  name: sandypockets
  picture: '/assets/blog/authors/sandypockets_avatar.jpg'
ogImage:
  url: '/assets/blog/a-nextjs-blog-starter-you-actually-want-to-use/tree-minimal.jpg'
---
```

Adjust the value of each key as needed.

### Create a new article
There are two ways to create a new article: manually, or using the included script to scaffold one out. 

#### Using the script
First, you should replace the placeholder `sandypockets` information in the `scripts/generate-post.js` script with your own info. Then, it's as simple as running the script: 

```shell
yarn new your-post-title
```

The script will generate a new post in the `/_posts` directory with the title used in the command above, and a default front matter.

