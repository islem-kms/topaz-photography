// icons
import Link from 'next/link';
import { useRouter } from 'next/router';
import {
  HiHome,
  HiUser,
  HiViewColumns,
  HiRectangleGroup,
  HiChatBubbleBottomCenterText,
  HiEnvelope,
} from 'react-icons/hi2';

// nav data
export const navData = [
  { name: 'home', path: '/', icon: <HiHome /> },
  { name: 'about', path: '/about', icon: <HiUser /> },
  { name: 'services', path: '/services', icon: <HiRectangleGroup /> },
  { name: 'work', path: '/work', icon: <HiViewColumns /> },
  {
    name: 'testimonials',
    path: '/testimonials',
    icon: <HiChatBubbleBottomCenterText />,
  },
  {
    name: 'contact',
    path: '/contact',
    icon: <HiEnvelope />,
  },
];

const Nav = () => {
  const router = useRouter();
  const pathName = router.pathname;
  return (
    <nav className='flex flex-col items-center xl:justify-center gap-y-4 fixed h-max bottom-0 mt-auto xl:right-4 z-50 top-0 w-full xl:w-16 xl:max-w-md xl:h-screen'>
      <div className='flex w-full xl:flex-col items-center justify-between xl:justify-center gap-y-10 px-4 xl:px-0 h-20 xl:h-max py-8 bg-white/10'>
        {
          navData.map((link, index) => {
            return (
              <Link key={index} href={link.path}>
                {link.icon}
              </Link>
            )
          })
        }
      </div>
    </nav>
  );
};

export default Nav;
