import Container from "@/app/_components/container";
import { Intro } from "@/app/_components/intro";
import { MoreStories } from "@/app/_components/more-stories";
import { getAllPosts } from "@/lib/api";

export const metadata = {
  title: 'Lab-Ca.TechBlog',
  description: '大阪のウェブサイト制作・CSS研究所「Lab-Ca.」の技術ブログです',
}

export default async function Index() {
  const allPosts = await getAllPosts(); // ✅ 非同期で取得

  const morePosts = allPosts;

  return (
    <main>
      <Container>
        <Intro />
        {morePosts.length > 0 && <MoreStories posts={morePosts} />}
      </Container>
    </main>
  );
}