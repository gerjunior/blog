import Prism from 'prismjs';
import { usePageEffect } from './common/usePageEffect';
import { useRef } from 'react';

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
  const wrapperDivRef = useRef<HTMLDivElement | null>(null);
  const { effectClassSet: wrapperDivEffectClassSet } = usePageEffect(
    wrapperDivRef,
    {
      duration: 300,
      effect: 'slide',
    },
  );

  const highlighted = Prism.highlight(
    code,
    Prism.languages.javascript,
    'javascript',
  );

  return (
    <div
      ref={wrapperDivRef}
      className={`rounded-3xl sm:w-[32rem] ${wrapperDivEffectClassSet}`}
    >
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
