import Prism from 'prismjs';

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

  return (
    <div className='rounded-3xl sm:w-[32rem]'>
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
