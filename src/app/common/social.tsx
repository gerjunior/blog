import Link from 'next/link';
import { FaGithub, FaLinkedin, FaYoutube, FaInstagram } from 'react-icons/fa';

type SocialProps = {
  color: string;
};

export function Social({ color }: SocialProps) {
  return (
    <div className={`flex gap-5 sm:gap-8 p-2 text-${color}`}>
      <Link href='https://github.com/gerjunior' target='_blank'>
        <FaGithub size={40} />
      </Link>
      <Link href='https://linkedin.com/in/geraldosilvadev' target='_blank'>
        <FaLinkedin size={40} />
      </Link>
      <Link href='https://www.instagram.com/geraldosilva.dev' target='_blank'>
        <FaInstagram size={40} />
      </Link>
      <Link href='https://youtube.com/@geraldo_silva' target='_blank'>
        <FaYoutube size={40} />
      </Link>
    </div>
  );
}
