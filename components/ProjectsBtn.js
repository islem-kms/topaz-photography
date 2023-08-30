import Image from "next/image";
import Link from "next/link";
import { HiArrowRight } from "react-icons/hi2"

const ProjectsBtn = () => {
  return (
    <div className='mx-auto xl:mx-0'>
      <Link href={'/work'} className='relative w-[185px] h-[185px] flex justify-center items-center bg-circleStar bg-cover bg-center bg-no-repeat group'>
        <Image 
          alt='' 
          width={141} 
          height={148}
          src={'/rounded-text.png'}
          className='animate-spin-slow w-full w-max-[141px] h-max-[148px]'
        />
        <HiArrowRight className='absolute text-4xl group-hover:translate-x-2 transition-all duration-300' />
      </Link>
    </div>
  );
};

export default ProjectsBtn;
