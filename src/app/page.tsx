import ProfileCard from './profile-card';
import CodeCard from './code-card';
import { DevBlogSection } from './dev-blog-section';
import ContentfulService from './lib/contentful/service';

export default async function Home() {
  const blogPages = await ContentfulService.getBlogPages();

  return (
    <main className='flex flex-col items-center p-10 w-screen gap-16'>
      <div className='w-full flex flex-col md:flex-row gap-10 justify-center items-center'>
        <ProfileCard />
        <CodeCard />
      </div>
      <DevBlogSection blogPages={blogPages} />
    </main>
  );
}
