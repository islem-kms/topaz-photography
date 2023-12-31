import { motion } from 'framer-motion';

const transitonVariants = {
  initial: {
    x: '100%',
    width: '100%',
    //y: '0%',
    //height: '100%'
  },
  animate: {
    x: '0%',
    width: '0%',
    //y: '100%',
    //height: '100%'
  },
  exit: {
    x: ['0%', '100%'],
    width: ['0%', '100%'],
    //y: ['0%'],
    //height: ['0%', '100%']
  }
}

const Transition = () => {
  
  return (
    <>
      <motion.div 
        className='fixed top-0 bottom-0 right-full h-screen z-30 bg-[#2e2257]'
        variants={transitonVariants} initial="initial" animate="animate" exit="exit" transition={{ delay: 0.2, duration: 0.6, ease:'easeInOut'}}>
      </motion.div>
      <motion.div 
        className='fixed top-0 bottom-0 right-full h-screen z-20 bg-[#3b2d71]'
        variants={transitonVariants} initial="initial" animate="animate" exit="exit" transition={{ delay: 0.4, duration: 0.6, ease:'easeInOut'}}>
      </motion.div>
      <motion.div 
        className='fixed top-0 bottom-0 right-full h-screen z-10 bg-[#4b3792]'
        variants={transitonVariants} initial="initial" animate="animate" exit="exit" transition={{ delay: 0.6, duration: 0.6, ease:'easeInOut'}}>
      </motion.div>
    </>
  );
};

export default Transition;
