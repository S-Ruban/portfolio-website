import { Typography, Grid, Box, ListItem, ListItemText } from "@mui/material";
import dp from './images/dp.jpg'
import { DiJava, DiJsBadge, DiPython, DiLinux, DiWindows, DiGit, DiJenkins} from "react-icons/di"
import { SiGnubash, SiPerforce, SiJira } from 'react-icons/si';
import {Helmet} from "react-helmet";

const About = () => {

    const languages = 
    [
        <DiPython size={32} style={{color: "#3672a4"}} onClick={()=> window.open("https://www.python.org/about/", "_blank")}/>,
        <SiGnubash size={32} style={{color: "#54b255"}} onClick={()=> window.open("https://www.gnu.org/software/bash/", "_blank")}/>,
        <DiJava size={32} style={{color: "#3672a4"}} onClick={()=> window.open("https://www.java.com/en/download/help/whatis_java.html", "_blank")}/>,
        <DiJsBadge size={32} style={{color: "#f7df1e"}} onClick={()=> window.open("https://www.javascript.com/", "_blank")}/>
    ];

    const opsys = 
    [
        <DiLinux size={32}/>,
        <DiWindows size={32} style={{color: "#0183dc"}} />
    ];

    const tools = 
    [
        <SiPerforce size={32} style={{color: "#020f1f"}} onClick={()=> window.open("https://www.perforce.com/products/helix-core-apps/helix-visual-client-p4v", "_blank")}/>,
        <DiGit size={32} style={{color: "#e7573b"}} onClick={()=> window.open("https://git-scm.com/", "_blank")}/>,
        <SiJira size={32} style={{color: "#4c86fc"}} onClick={()=> window.open("https://www.atlassian.com/software/jira", "_blank")}/>,
        <DiJenkins size={32} style={{color: "#344e60"}} onClick={()=> window.open("https://www.gnu.org/software/bash/", "_blank")}/>
    ]

    const cdcs = 
    [
        { code: "CS F111", title: "Computer Programming" },
        { code: "CS F213", title: "Object Oriented Programming" }, { code: "CS F214", title: "Logic in Computer Science" }, { code: "CS F215", title: "Digital Design" }, { code: "CS F222", title: "Discrete Structures for Computer Science" },
        { code: "CS F211", title: "Data Structures & Algorithms" }, { code: "CS F212", title: "Database Systems" }, { code: "CS F241", title: "Microprocessor Programming & Interfacing" },
        { code: "CS F301", title: "Principles of Programming Languages" }, { code: "CS F342", title: "Computer Architecture" }, { code: "CS F351", title: "Theory of Computation" }, { code: "CS F372", title: "Operating Systems" },
        { code: "CS F303", title: "Computer Networks" }, { code: "CS F363", title: "Compiler Construction" }, { code: "CS F364", title: "Design & Analysis of Algorithms" },
    ];

    const dels =
    [
        { code: "BITS F386", title: "Quantum Information and Computing" }, { code: "CS F317", title: "Reinforcement Learning" }, { code: "CS F425", title: "Deep Learning" },
        { code: "BITS F463", title: "Cryptography" }, { code: "CS F441", title: "Selected Topics from Computer Science: Introduction to Computational Neuroscience" }, { code: "IS F341", title: "Software Engineering" },
        { code: "CS G518", title: "Internet of Things: Design and Development" }, { code: "CS G527", title: "Cloud Computing" }
    ];

    return ( 
        <div className="About" style={{marginLeft: "100px", marginRight: "100px"}}>
            <Helmet>
                <title>Ruban S - About</title>
            </Helmet>
            <Typography variant="h4" marginTop="50px" marginBottom="20px">About me</Typography>
            <img src={dp} alt="" width="20%" height="20%"/>
            <Typography align="left" marginTop="20px">
                I am Ruban S, an Associate Engineer at <a href="https://www.mips.com/" target='_blank' rel='noopener noreferrer'>MIPS Technologies</a>, home to the MIPS ISA, currently working in the Performance and Architecture Team. <br/>
                My main responsibilities are:
                <ul>
                    <li>Diagnosing performance bottlenecks of the CPU using industry-standard EDA tools.</li>
                    <li>Correlating the performance model with RTL simulation runs.</li>
                    <li>Developing microbenchmarks using C and RISC-V assembly to identify performance bottlenecks.</li>
                    <li>Identifying compiler optimizations, including flags and instruction re-ordering, to generate optimized benchmark code.</li>
                    <li>Developed  visualization tools and scripts in Python and Shell to extact and analyze performance data from RTL simulations and performance model runs.</li>
                    <li>Modelling modules of the CPU in the performance simulator using C++.</li>
                </ul>
            </Typography>
            <Typography align="left" marginTop="20px">
            I have a keen interest in learning about how computers work at a low-level, and seek to explore novel ideas in Computer Architecture, Compilers, Operating Systems and Networks. I'm also interested in reading and exploring technological innovations in retro computers and devices.
            </Typography>
            <Typography align="left" marginTop="20px">
                I have graduated with a degree in B.E. Computer Science (2023) at <a href="https://www.bits-pilani.ac.in/hyderabad/" target='_blank' rel='noopener noreferrer'>Birla Institute of Technology and Science, Pilani - Hyderabad Campus</a>. <br/>
                During my undergraduate, I was a teaching assistant in the course CS F342 (Computer Architecture). As a TA, I have helped students in the labs with MIPS assembly programming and general doubts in the course and helped the professors with setting lab examination questions and solutions.
            </Typography>
            <Typography align="left" marginTop="20px">
                Coming to my personal hobbies, I enjoy playing table-tennis, basketball and badminton during my spare time. I am an avid listener of various subgenres of rock and metal, my favourite being progressive rock. <br/>
                Some of my favourite bands are: <br/>
                <ul>
                    <li><a href="http://opeth.com/bio" target='_blank' rel='noopener noreferrer'>Opeth</a></li>
                    <li><a href="https://porcupinetree.com/" target='_blank' rel='noopener noreferrer'>Porcupine Tree</a></li>
                    <li><a href="https://www.rush.com/band/" target='_blank' rel='noopener noreferrer'>Rush</a></li>
                    <li><a href="https://qotsa.com/" target='_blank' rel='noopener noreferrer'>Queens of the Stone Age</a></li>
                    <li><a href="https://www.dgmlive.com/king-crimson" target='_blank' rel='noopener noreferrer'>King Crimson</a></li>
                    <li><a href="https://hakenmusic.com/" target='_blank' rel='noopener noreferrer'>Haken</a></li>
                </ul>
                I also enjoy playing <a href="https://www.ageofempires.com/games/aoeiide/" target='_blank' rel='noopener noreferrer'>Age of Empires II</a>, one of the most famous real-time strategy PC games of all time.
            </Typography>
            <Typography variant="h5" align="left" marginTop="50px" marginBottom="10px">Programming Languages</Typography>
            <Grid container direction="row" align="left">
            <img src="https://cdn.icon-icons.com/icons2/2415/PNG/512/c_original_logo_icon_146611.png" width="32px" height="32px" alt="" style={{marginLeft: "10px"}}/>
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/ISO_C%2B%2B_Logo.svg/1822px-ISO_C%2B%2B_Logo.svg.png" width="32px" height="32px" alt="" style={{marginLeft: "10px"}}/>
            <img src="https://avatars.githubusercontent.com/u/10872782?s=200&v=4" width="32px" height="32px" alt="" style={{marginLeft: "10px"}}/>
            <img src="https://cdn.icon-icons.com/icons2/2107/PNG/512/file_type_verilog_icon_130092.png" width="32px" height="32px" alt="" style={{marginLeft: "10px"}}/>
            {
                languages.map((icon) => 
                (
                    <Grid item marginRight="10px">
                        {icon}
                    </Grid>
                ))
            }
            </Grid>
            <Typography variant="h5" align="left" marginTop="20px" marginBottom="10px">Operating Systems</Typography>
            <Grid container direction="row" align="left">
            {
                opsys.map((icon) => 
                (
                    <Grid item marginRight="10px">
                        {icon}
                    </Grid>
                ))
            }
            </Grid>
            <Typography variant="h5" align="left" marginTop="20px" marginBottom="10px">Tools</Typography>
            <Grid container direction="row" align="left">
            {
                tools.map((icon) => 
                (
                    <Grid item marginRight="10px">
                        {icon}
                    </Grid>
                ))
            }
            </Grid>
            <Typography align="left" variant="h4" marginTop="50px" marginBottom="20px">Courses I've done</Typography>
            <Typography variant="h5" align="left">Core CS Courses</Typography>
            <Box sx={{ width: '100%', bgcolor: 'background.paper' }} maxWidth="350px" maxHeight="300px" overflow="auto">
            {
                cdcs.map((cdc) => 
                (
                    <ListItem>
                        <ListItemText primary={cdc.code} secondary={cdc.title}/>
                    </ListItem>
                ))
            }
            </Box>
            <Typography variant="h5" marginTop="20px" align="left">CS Electives</Typography>
            <Box sx={{ width: '100%', bgcolor: 'background.paper' }} maxWidth="350px" maxHeight="300px" overflow="auto">
            {
                dels.map((del) => 
                (
                    <ListItem>
                        <ListItemText primary={del.code} secondary={del.title}/>
                    </ListItem>
                ))
            }
            </Box>
        </div>
     );
}
 
export default About;
