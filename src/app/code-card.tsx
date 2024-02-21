import Prism from 'prismjs';
import { usePageEffect } from './usePageEffect';

const code = `
  // Life
  const main = () => {
    while (this.isAlive()) {
      this.consume(🧋, 🥐); 
      this.develop();
      this.blog(new Blog());
      this.sleep(8);
    } 
  }
`;

export default function CodeCard() {
  const highlighted = Prism.highlight(
    code,
    Prism.languages.javascript,
    'javascript',
  );

  const { slide } = usePageEffect();

  return (
    <div className={`rounded-3xl sm:w-[32rem] ${slide} duration-300`}>
      <pre className='rounded-3xl p-5 bg-gray-700'>
        <code
          dangerouslySetInnerHTML={{
            __html: highlighted,
          }}
        ></code>
      </pre>
    </div>
  );
}
