import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  safelist: [
    'text-gray-700',
    'text-white',
    'translate-y-12',
    'translate-y-0',
    'opacity-0',
    'opacity-100',
    'scale-0',
    'scale-100',
    'duration-[1000ms]',
    'duration-[500ms]',
    'duration-[300ms]',
  ],
};
export default config;
