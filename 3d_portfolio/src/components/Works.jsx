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
                    <div className='absolute inset-0 justify-end m-3 card-img_hover'>
                       <div 
                        onClick={() => window.open(source_code_link, "_blank")}
                        className='black-gradient w-10 h-10 rounded-full flex justify-center items-center items-center cursor-pointer'>

                            <img
                                src={github}
                                alt='github'
                                className='w-1/2 h-1/2 object-contain'
                            />

                        </div> 
                    </div>
                </div>

                <div className='mt-5'>
                    <h3 className='text-white font-bold text=[24]px'>{name}</h3>
                    <p className='mt-2 text-secondary text-[14px]'>{description}</p>
                </div>

                <div className='mt-4 flex flex-wrap gap-2'>
                    {tags.map((tag) => (
                        <p key={tag.name} className={`text-[14px] ${tag.color}`}>
                            #{tag.name}
                        </p>
                    ))}
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

            <div className='mt-20 flex flex-wrap gap-7'>
                {projects.map((project, index) => (
                    <ProjectCard
                        key={`project-${index}`}
                        {...project}
                        index={index}
                    />
                ))}



            </div>

        </>
    )

}

export default SectionWrapper(Works, "");
