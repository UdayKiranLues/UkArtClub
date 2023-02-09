import React from 'react'
import about from './Assets/about3.jpg'

const About = () => {
    return (
        <div style={{ padding: '20px', fontSize: '25px' }} >
            <img src={about} alt='' className='w-100' />
            <br /> <br />
            <p style={{
                color: '#000',
                textAlign: 'justify',
                textIndent: '50px'
            }}>
                The birth of modernism and modern art can be traced to the Industrial
                Revolution. This period of rapid changes in manufacturing, transportation,
                and technology began around the mid-18th century and lasted through the
                19th century, profoundly affecting the social, economic, and cultural
                conditions of life in Western Europe, North America, and eventually the
                world. New forms of transportation, including the railroad, the steam engine,
                and the subway, changed the way people lived, worked, and traveled, expanding
                their worldview and access to new ideas.
                </p>
            <p style={{
                color: '#000',
                textAlign: 'justify',
                textIndent: '50px'
            }}>
                As urban centers prospered, workers flocked to cities for industrial jobs and urban populations boomed.Before the
                19th century, artists were most often commissioned to make artwork by wealthy
                patrons or institutions like the church. Much of this art depicted religious or
                mythological scenes that told stories intended to instruct the viewer. During
                the 19th century, many artists started to make art based in their own, personal
                experiences and about topics that they chose. With the publication of psychologist
                Sigmund Freud's The Interpretation of Dreams (1899) and the popularization of the
                idea of a subconscious mind, many artists began exploring dreams, symbolism, and
                personal iconography as avenues for the depiction of their subjective experiences.
                Challenging the notion that art must realistically depict the world, some artists
                experimented with the expressive use of color, non-traditional materials, and new
                techniques and mediums. Among these new mediums was photography, whose invention
                in 1839 offered radical possibilities for depicting and interpreting the world.
            </p>
        </div>
    )
}

export default About