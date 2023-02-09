import React from 'react'
import about from './Assets/whatwe.jpg'

const What = () => {
  return (
    <div style={{padding:'20px',fontSize:'25px'}} > 
    <img src={about} alt='' className='w-100' />
    <br /> <br />
        <p style={{
            color:'#000',
            textAlign:'justify',
            textIndent:'50px'
        }}>
        Blast Theory make interactive art to explore social and political questions.  The group's work places the public at the centre of unusual and sometimes unsettling experiences, to create new perspectives and open up the possibility of change.

Led by Matt Adams, Ju Row Farr and Nick Tandavanitj, the group draw on popular culture and new technologies to make performances, games, films, apps and installations.

Blast Theory have shown work at the Venice Biennale, Tribeca Film Festival, ICC in Tokyo, Hebbel am Ufer in Berlin, the Barbican and Tate Britain. </p>
<p style={{
            color:'#000',
            textAlign:'justify',
            textIndent:'50px'
        }}>
             Commissioners include Channel 4, Sundance Film Festival and the Royal Opera House.

The artists work closely with researchers and scientists and have collaborated with the Mixed Reality Lab at the University of Nottingham since 1997, co-authoring over 45 research papers. The artists teach and lecture internationally including at the Sorbonne, Stanford University and the Royal College of Art. They curated the Screen series for Live Culture at Tate Modern.

Blast Theory have been nominated for four BAFTAs and won the Golden Nica at Prix Ars Electronica and the Nam June Paik Art Center Award.
</p>
    </div>
  )
}

export default What