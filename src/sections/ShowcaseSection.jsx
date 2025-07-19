import React, { useRef } from 'react'
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

const ShowcaseSection = () => {
  const sectionRef = useRef(null);
  const project1Ref = useRef(null);
  const project2Ref = useRef(null);
  const project3Ref = useRef(null);
  
  useGSAP(() => {
    const projects = [project1Ref.current, project2Ref.current, project3Ref.current];

    projects.forEach((card, index) => {
        gsap.fromTo(
            card,
            {
                y: 50, opacity: 0
            },
            {
                y: 0,
                opacity: 1,
                duration: 1,
                delay: 0.3 * (index + 1),
                scrollTrigger: {
                    trigger: card,
                    start: 'top bottom-=100',
                }
            }
        )
    })

    gsap.fromTo(
        sectionRef.current, 
        { opacity: 0}, 
        { opacity: 1, duration: 1.5}
    )
  }, []);

  return (
    <section id='work' ref={sectionRef} className='app-showcase'>
        <div className='w-full'>
            <div className='showcaselayout'>
            {/* LEFT */}
            <div className='first-project-wrapper' ref={project1Ref}>
                <a href='https://www.handuphousing.org/' target='_blank' rel='noopener noreferrer'>
                    <div className='image-wrapper'>
                        <img src='/images/housingphoto11.png' alt='House' />
                    </div>
                </a>
                <div className='text-content'>
                    <h2>Streamlined Property Management Tool</h2>
                    <p className='text-white-50 md:text-xl'>A housing management application built with Python, Django, HTML, CSS, Javascript, and SQLite for a local nonprofit organization.</p>
                </div>
            </div>

            {/* RIGHT */}
            <div className='project-list-wrapper overflow-hidden'>
                <div className='project' ref={project2Ref}>
                    <a
                        href='https://github.com/danielvx1/HousingProject'
                        target='_blank'
                        rel='noopener noreferrer'
                    >
                        <div className='image-wrapper bg-[#ffefdb]'>
                            <img src='/images/project2.png' alt='Real Estate Application' />
                        </div>
                    </a>
                    <h2>Real Estate Application</h2>
                </div>

                <div className='project' ref={project3Ref}>
                    <a
                        href='https://github.com/danielvx1/CommunicationPlatform'
                        target='_blank'
                        rel='noopener noreferrer'
                    >
                        <div className='image-wrapper bg-[#ffefdb]'>
                            <img src='/images/project3.png' alt='Communication Platform' />
                        </div>
                    </a>
                    <h2>Communication Platform</h2>
                </div>
            </div>
            </div>
        </div>
    </section>
  )
}

export default ShowcaseSection