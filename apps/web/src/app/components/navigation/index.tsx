import Link from 'next/link';
import { AppIcon } from '../app-icon';
import { ButtonComponent } from '../button';

const navLinks = [
  {
    link: '',
    text: 'About Us',
  },
  {
    link: '',
    text: 'Benefits',
  },
  {
    link: '',
    text: 'Features',
  },
  {
    link: '',
    text: 'Contact Us',
  },
];

export function Navigation() {
  return (
    <nav className="flex justify-between py-8">
      <div className="flex gap-8">
        <AppIcon />
        <ul className="flex gap-6 mt-3">
          {navLinks.map((item, index) => (
            <li key={index} className="font-gothamB text-sm text-[#676767]">
              <Link href={item.link}>{item.text}</Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="flex gap-3">
        <button className="text-[#E83F6F] font-gothamM text-sm mx-6">
          Log in
        </button>
        <Link href="/partner-register">
          <button className="border border-[#5603AD] font-gothamM rounded-md text-[#5603AD] px-3 py-3.5 text-sm">
            Partner Sign up
          </button>
        </Link>

        <Link href="/get-started">
          <ButtonComponent className="text-sm">Get started</ButtonComponent>
        </Link>
      </div>
    </nav>
  );
}
