import Image from "next/image";

const Avatar = () => {
  return <div className='hidden xl:flex xl:max-w-none'>
    <Image
      alt=''
      width={737}
      height={678}
      src={'/avatar.png'} 
      className='translate-z-0 w-full h-full'
    />
  </div>;
};

export default Avatar;
