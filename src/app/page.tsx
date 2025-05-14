import Container from "@/app/_components/container";
import { getAllPosts } from "@/lib/api";

export const metadata = {
  title: 'Lab-Ca.TechBlog',
  description: '大阪のウェブサイト制作・CSS研究所「Lab-Ca.」の技術ブログです',
}

export default async function Index() {
  const allPosts = await getAllPosts(); // ✅ 非同期で取得
  return (
    <main>
      <Container>
        {allPosts.length > 0 && <MoreStories posts={allPosts} />}
      </Container>
    </main>
  );
}