const fs = require('fs');
const path = require('path');
const { faker } = require('@faker-js/faker/locale/ja'); // 日本語ロケールでインポート

const POSTS_DIR = path.join(__dirname, '_posts');

const NUM_POSTS = 10; // 作成したい記事数

for (let i = 1; i <= NUM_POSTS; i++) {
  const title = `テスト記事${i}`;
  const slug = `post-${i}`;
  const fileName = `${slug}.md`;
  const content = `---
title: "${title}"
excerpt: "${faker.lorem.sentences(2)}"
coverImage: "/assets/blog/posttest/cover.jpg"
date: "${new Date().toISOString()}"
author:
  name: M.Higuchi
  picture: "/assets/blog/authors/higuchi.png"
ogImage:
  url: "/assets/blog/posttest/cover.jpg"
---

${faker.lorem.paragraphs(5, '\n\n')}
`;

  fs.writeFileSync(path.join(POSTS_DIR, fileName), content);
  console.log(`Created ${fileName}`);
}