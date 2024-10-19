import React from 'react'
import { motion, AnimatePresence } from 'framer-motion';
import { useSnapshot } from 'valtio';
import state from '../store';
import { CustomButton } from '../components';

import {
    headContainerAnimation,
    headContentAnimation,
    headTextAnimation,
    slideAnimation

} from '../config/motion';

const Home = () => {
    const snap = useSnapshot(state);

  return (
    <div>
        <AnimatePresence>
           {snap.intro && (
            <motion.section className='home' {...slideAnimation('left')}>
                <motion.header>
                    <img 
                    src='./batman.png'
                    alt='logo'
                    className=' w-8 h-8 object-contain'/>
                </motion.header>

                <motion.div className='home-content' {...headContainerAnimation}>
                    <motion.div {...headTextAnimation}>
                        <h1 className='head-text'>
                            Let's <br className='xl:block hidden'/> try three js
                        </h1>

                        <motion.div {...headContentAnimation} className='flex flex-col gap-5'>
                        <p className=' max-w-md font-normal text-gray-600'>
                            create <strong>your</strong>{" "} website.
                        </p>


                        <CustomButton 
                             type="filled"
                             title="Customize It"
                             handleClick={() => state.intro = false}
                             customStyles="w-fit px-4 py-2.5 font-bold  text-sm"
                         />
                        </motion.div>
                    </motion.div>

                </motion.div>
            </motion.section>
           )} 



        </AnimatePresence>
    </div>
  )
}

export default Home