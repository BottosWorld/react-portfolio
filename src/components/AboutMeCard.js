import React from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import AboutMeVideo from './AboutMeVideo'
import AboutMeTypewriter from './AboutMeTypewriter'
import AboutMeTypewriterSkills from './AboutMeTypewriterSkills'
import AboutMeTypewriterHeader from './AboutMeTypewriterHeader'

import SmokeSVG from './../images/bottosworld_smoke_vivid_colors_9d064716-acb1-4344-8c5c-622f1451ea23.svg'
import PersonSVG from './../images/bottosworld_software_engineer_in_the_lab_programming_matrix_eff_da86d188-b7c3-4541-87e4-b83c61da0b05.svg'




const AboutMeCard = (props) => {
    return(
        <div class="container">
            <div class="row align-items-end">
            <div class="col">
                <h2 class="font-weight-bold text-center">Languages:</h2>
                <br></br>
                <p class="font-weight-bold text-center">PHP</p>
                <br></br>

                <p class="font-weight-bold text-center">JavaScript</p>
                <br></br>

                <p class="font-weight-bold text-center">Python</p>
                <br></br>

                <p class="font-weight-bold text-center">Solidity</p>
                <br></br>

                <p class="font-weight-bold text-center">Ruby</p>
            </div>
            <div class="col-lg-7">
            <Card style={{backgroundImage: `url()`,backgroundColor: 'black', backgroundSize: 'cover', filter: `opacity(65%)`, backgroundPosition: "center"}}>
            <Card.Body>
                <Card.Header as="h1">
                    {/* Bryan Enjoys <AboutMeTypewriterHeader/>  */}
                    About Me
                </Card.Header>

                <h5 class="font-weight-bold text-center">
                    I specialize in PHP/Laravel and JavaScript (Node.js, React.js, Next.js) on AWS (EC2, S3, RDS). I am well-versed in both front-end and back-end development, database design and optimization, system design, and API development.
                </h5>
                <br></br>
                <h5 class="font-weight-bold text-center">
                    I am a meticulous, analytical solutionist with a passion for solving complex problems, the ability to bridge the gap between business needs and technical requirements, and the drive to work autonomously and collaboratively across teams.
                </h5>
                <br></br>
                <h5 class="font-weight-bold text-center">
                    I enjoy learning about new languages, frameworks, and trends in the software engineering space. I'm currently focused on studying AI and blockchain where I spend most of my time on AI prompts, language models, smart contracts, and decentralized applications.
                </h5>
                <br></br>
                <p></p>
                <p class="font-weight-bold text-center">Connect with me on <Button variant="outline-primary" href="https://linkedin.com/in/bryanleebottorff">LinkedIn</Button> to learn more!</p>
            </Card.Body>
            </Card>
            </div>
            <div class="col">
                <h3 class="font-weight-bold text-center">Frameworks:</h3>
                <p class="font-weight-bold text-center">Laravel</p>
                <p class="font-weight-bold text-center">React.js</p>
                <p class="font-weight-bold text-center">Node.js</p>
                <p class="font-weight-bold text-center">Express.js</p>
                <p class="font-weight-bold text-center">Next.js</p>
                <p class="font-weight-bold text-center">Django</p>
                <p class="font-weight-bold text-center">Rails</p>
                <p class="font-weight-bold text-center">Hardhat</p>
                <p class="font-weight-bold text-center">Alchemy</p>
            </div>
            </div>
        </div>
    )
}

export default AboutMeCard