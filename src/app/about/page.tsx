import { Introduction } from './introduction';
import { FrequentlyAskedQuestions } from './frequently-asked-questions';
import { Contact } from './contact';
import ContentfulService from '../lib/contentful/service';

export default async function About() {
  const faqs = await ContentfulService.getFaqs();

  return (
    <div className='w-full flex flex-col items-center'>
      <Introduction />

      <div className='w-full flex flex-col items-center max-w-[96rem]'>
        <FrequentlyAskedQuestions faqs={faqs} />
        <Contact />
      </div>
    </div>
  );
}
