import { Typography, Grid, styled, Paper } from "@mui/material";
import { DiPython, DiJsBadge, DiJava, DiHtml5, DiCss3, DiPostgresql, DiMongodb } from 'react-icons/di'
import {Helmet} from "react-helmet";

const Item = styled(Paper)(({ theme }) => 
    ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fafafa',
        ...theme.typography.body2,
        padding: theme.spacing(1),
    }));

const relAlign = {
        display: 'flex',
        justifyContent: 'space-between',
        width: '100%',
        paddingLeft: '5%', 
        paddingRight: '5%',
      };

const Projects = () => {

    const projects = 
    [
        {
            title: "Sim2600",
            description: "A python simulation of the 6502 chip at the transistor level to reverse-engineer logic gates.",
            link: "https://github.com/S-Ruban/Sim2600",
            languages: [<DiPython size={30} style={{color: "#3672a4"}}/>]
        },
        {
            title: "Computational Physics Informal Project",
            description: "Worked on a few computational physics topics such as finding a bunch of randomized seeds for Newton-Raphson Method and Probabilistic Simulation of Cellular Automata",
            link: "https://github.com/S-Ruban/Comp-Phy-Informal-Project",
            languages: [<DiPython size={30} style={{color: "#3672a4"}}/>]
        },
        {
            title: "GhotOverflow",
            description: "A dedicated Q&A forum for students of BPHC to connect and discuss questions.",
            link: "https://github.com/S-Ruban/SEISF341",
            languages: [<DiJsBadge size={30} style={{color: "#f7df1e"}}/>, <DiHtml5 size={30} style={{color: "#dd4b25"}}/>, <DiCss3 size={30} style={{color: "#254bdd"}} />, <DiMongodb size={30} style={{color: "#449a45"}}/>]
        },
        {
            title: "Portfolio Website",
            description: "This portfolio website.",
            link: "https://github.com/S-Ruban/portfolio-website",
            languages: [<DiJsBadge size={30} style={{color: "#f7df1e"}}/>, <DiHtml5 size={30} style={{color: "#dd4b25"}}/>, <DiCss3 size={30} style={{color: "#254bdd"}}/>]
        },
        {
            title: "Squaredle Solver",
            description: "A python script that extracts the squaredle board of the day and finds all possible words.",
            link: "https://github.com/S-Ruban/squaredle-solver",
            languages: [<DiPython size={30} style={{color: "#3672a4"}}/>]
        },
        {
            title: "youtube-dl",
            description: "A GUI application that uses the youtube-dl executable to download audio/video off streaming websites.",
            link: "https://github.com/S-Ruban/youtube-dl",
            languages: [<DiPython size={30} style={{color: "#3672a4"}}/>]
        },
        {
            title: "Bandcamp Downloader",
            description: "A Selenium GUI application to automatically retireve and download the streaming link for music on the music website Bandcamp.",
            link: "https://github.com/S-Ruban/bandcamp-downloader",
            languages: [<DiPython size={30} style={{color: "#3672a4"}}/>]
        },
        {
            title: "Swiggo",
            description: "An online food delivery web application that connects consumers, restaurant owners and delivery people.",
            link: "https://github.com/S-Ruban/cs-f212-mini-project",
            languages: [<DiJsBadge size={30} style={{color: "#f7df1e"}}/>, <DiHtml5 size={30} style={{color: "#dd4b25"}}/>, <DiCss3 size={30} style={{color: "#254bdd"}} />, <DiPostgresql size={30} style={{color: "#31648c"}}/>]
        },
        {
            title: "Deep Learning",
            description: "Assignments done as part of the course CS F425 (Deep Learning).",
            link: "https://github.com/S-Ruban/cs-f425-assignments",
            languages: [<DiPython size={30} style={{color: "#3672a4"}}/>]
        },
        {
            title: "Reinforcement Learning",
            description: "Implementation of an RL agent that plays the board game Connect 4.",
            link: "https://github.com/S-Ruban/cs-f317-project",
            languages: [<DiPython size={30} style={{color: "#3672a4"}}/>]
        },
        {
            title: "GUI Installer",
            description: "A customizable GUI application that lets you install applications by running scripts",
            link: "https://github.com/S-Ruban/GUI_Installer",
            languages: [<DiJava size={30} style={{color: "#3672a4"}}/>]
        },
        {
            title: "Fake Product Identification System Using Blockchain Technology",
            description: "A Blockchain application to detect fake products through QR code/barcode.",
            link: "https://github.com/S-Ruban/bits-f463-assignments/tree/main/Assignment%202",
            languages: [<DiPython size={30} style={{color: "#3672a4"}}/>]
        },
        {
            title: "Track-n-Trigger Android App",
            description: "A utility android app.",
            link: "https://github.com/S-Ruban/TracknTrigger/tree/master",
            languages: [<DiJava size={30} style={{color: "#3672a4"}}/>]
        }
    ]

    return ( 
        <div className="Projects" style={{marginTop: "50px"}}>
            <Helmet>
                <title>Ruban S - Projects</title>
            </Helmet>
            <Grid align="left" marginBottom="30px" style={relAlign}>
                <Typography variant="p" marginTop="20px">
                    For more of my work, check out my <a href="https://github.com/S-Ruban?tab=repositories" target="_blank" rel="noreferrer">Github Repositories</a>.
                </Typography>
            </Grid>
            <Grid container direction="row" align="left" style={relAlign}>
            {
                projects.map((project) => 
                (
                    <Grid item xs={12} borderRadius="10px" marginBottom="50px">
                        <Item>
                            <Typography variant="h4" marginLeft="10px">{project.title}</Typography>
                            <Grid align="center" marginTop="10px" marginBottom="10px"></Grid>
                            <Typography marginLeft="10px">{project.description}</Typography>
                            <Typography variant="p" marginLeft="10px">
                                <a href={project.link} target="_blank" rel="noreferrer">Github Repository</a>
                            </Typography>
                            <Grid marginLeft="10px">
                                <Typography variant="p">Languages: </Typography>
                                <Grid container direction="row" align="left">
                                {
                                    project.languages.map((icon) => 
                                    (
                                        <Grid item marginRight="10px">
                                            {icon}
                                        </Grid>
                                    ))
                                }
                                </Grid>
                            </Grid>
                        </Item>
                    </Grid>
                ))
            }
            </Grid>
        </div>
     );
}
 
export default Projects