import { Post } from "@/interfaces/post";
import fs from "fs";
import matter from "gray-matter";
import { join } from "path";

const postsDirectory = join(process.cwd(), "_posts");

export function getPostSlugs() {
  return fs
    .readdirSync(postsDirectory)
    .filter((file) => file.endsWith('.md')); // ← 追加
}

export function getPostBySlug(slug: string) {
  const realSlug = slug.replace(/\.md$/, "");
  const fullPath = join(postsDirectory, `${realSlug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  return { ...data, slug: realSlug, content } as Post;
}

export async function getAllPosts(): Promise<Post[]> {
  const slugs = fs.readdirSync(postsDirectory).filter((file) => file.endsWith(".md"));
  const posts = await Promise.all(
    slugs.map(async (slug) => {
      const realSlug = slug.replace(/\.md$/, "");
      const fullPath = join(postsDirectory, `${realSlug}.md`);
      const fileContents = await fs.promises.readFile(fullPath, "utf8");
      const { data, content } = matter(fileContents);
      return { ...data, slug: realSlug, content } as Post;
    })
  );
  return posts.sort((post1, post2) => (post1.date > post2.date ? -1 : 1));
}