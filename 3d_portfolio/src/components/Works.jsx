import Tilt from 'react-parallax-tilt';
import { motion } from 'framer-motion';
import { styles } from '../style';
import { github } from '../assets'
import { SectionWrapper } from '../hoc';
import { projects } from '../constants'
import { fadeIn, textVariant } from '../utils/motion';


const ProjectCard = ({ index, name, description, tags, image, source_code_link }) => {
    return (
        <motion.div variants={fadeIn("up", "sprint", index * 0.5, 0.75)}>
            <Tilt
                oprions={{
                    max: 45,
                    scale: 1,
                    speed: 450
                }}
        className='bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full'
        >

        <div className='relative w-full h-[230px]'>

            <img
        src={image}
        alt={name}
        className='w-full h-full object-cover rounded-2xl'

        />    
            
        </div>


            </Tilt>
        </motion.div>
    )
}


const Works = () => {
    return (
        <>
            <motion.div variants={textVariant()}>
                <p className={styles.sectionSubText}> My Work</p>
                <h2 className={styles.sectionHeadText}> Projects. </h2>
            </motion.div>

            <div className='w-full flex'>
                <motion.p
                    variants={fadeIn("", "", 0.1, 1)}
                    className='mt-3 text-secondary test-[17]px max-w-3xl leading-[30px]'
                >

                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                </motion.p>
            </div>

            <div className='mt-20 flex-wrap gap-7'>
                {projects.map((project, index) => (
                    <ProjectCard
                        key={`project-${index}`}
                        {...projects}
                        index={index}
                    />
                ))}



            </div>

        </>
    )

}

export default SectionWrapper(Works, "");
