import { Typography, Grid, styled, Paper } from "@mui/material";
import bandcamp from './images/bandcamp.jpg'
import blockchain from './images/blockchain.jpg'
import ghotoverflow from './images/ghotoverflow.jpg'
import swiggo from './images/swiggo.jpg'
import youtubedl from './images/youtube-dl.jpg'
import dl from './images/deeplearning.jpeg'
import rl from './images/reinforcementlearning.jpg'
import tnt from './images/trackntrigger.jpg'
import installer from './images/installer.png'
import squaredle from './images/squaredle.png'
import { DiPython, DiJsBadge, DiJava, DiHtml5, DiCss3, DiPostgresql, DiMongodb } from 'react-icons/di'

const Item = styled(Paper)(({ theme }) => 
    ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fafafa',
        ...theme.typography.body2,
        padding: theme.spacing(1),
    }));

const Projects = () => {

    const projects = 
    [
        {
            title: "GhotOverflow",
            description: "A dedicated Q&A forum for students of BPHC to connect and discuss questions.",
            imgsrc: ghotoverflow,
            link: "https://github.com/S-Ruban/SEISF341",
            languages: [<DiJsBadge size={30} style={{color: "#f7df1e"}}/>, <DiHtml5 size={30} style={{color: "#dd4b25"}}/>, <DiCss3 size={30} style={{color: "#254bdd"}} />, <DiMongodb size={30} style={{color: "#449a45"}}/>]
        },
        {
            title: "Swiggo",
            description: "An online food delivery web application that connects consumers, restaurant owners and delivery people.",
            imgsrc: swiggo,
            link: "https://github.com/S-Ruban/cs-f212-mini-project",
            languages: [<DiJsBadge size={30} style={{color: "#f7df1e"}}/>, <DiHtml5 size={30} style={{color: "#dd4b25"}}/>, <DiCss3 size={30} style={{color: "#254bdd"}} />, <DiPostgresql size={30} style={{color: "#31648c"}}/>]
        },
        {
            title: "Portfolio Website",
            description: "This portfolio website.",
            imgsrc: "./portfolio.jpg",
            link: "https://github.com/S-Ruban/portfolio-website",
            languages: [<DiJsBadge size={30} style={{color: "#f7df1e"}}/>, <DiHtml5 size={30} style={{color: "#dd4b25"}}/>, <DiCss3 size={30} style={{color: "#254bdd"}}/>]
        },
        {
            title: "youtube-dl",
            description: "A GUI application that uses the youtube-dl executable to download audio/video off streaming websites.",
            imgsrc: youtubedl,
            link: "https://github.com/S-Ruban/youtube-dl",
            languages: [<DiPython size={30} style={{color: "#3672a4"}}/>]
        },
        {
            title: "Bandcamp Downloader",
            description: "A Selenium GUI application to automatically retireve and download the streaming link for music on the music website Bandcamp.",
            imgsrc: bandcamp,
            link: "https://github.com/S-Ruban/bandcamp-downloader",
            languages: [<DiPython size={30} style={{color: "#3672a4"}}/>]
        },
        {
            title: "Deep Learning",
            description: "Assignments done as part of the course CS F425 (Deep Learning).",
            imgsrc: dl,
            link: "https://github.com/S-Ruban/cs-f425-assignments",
            languages: [<DiPython size={30} style={{color: "#3672a4"}}/>]
        },
        {
            title: "Reinforcement Learning",
            description: "Implementation of an RL agent that plays the board game Connect 4.",
            imgsrc: rl,
            link: "https://github.com/S-Ruban/cs-f317-project",
            languages: [<DiPython size={30} style={{color: "#3672a4"}}/>]
        },
        {
            title: "Fake Product Identification System Using Blockchain Technology",
            description: "A Blockchain application to detect fake products through QR code/barcode.",
            imgsrc: blockchain,
            link: "https://github.com/S-Ruban/bits-f463-assignments/tree/main/Assignment%202",
            languages: [<DiPython size={30} style={{color: "#3672a4"}}/>]
        },
        {
            title: "Track-n-Trigger Android App",
            description: "A utility android app.",
            imgsrc: tnt,
            link: "https://github.com/S-Ruban/TracknTrigger/tree/master",
            languages: [<DiJava size={30} style={{color: "#3672a4"}}/>]
        },
        {
            title: "GUI Installer",
            description: "A customizable GUI application that lets you install applications by running scripts",
            imgsrc: installer,
            link: "https://github.com/S-Ruban/GUI_Installer",
            languages: [<DiJava size={30} style={{color: "#3672a4"}}/>]
        },
        {
            title: "Squaredle Solver",
            description: "A python script that extracts the squaredle board of the day and finds all possible words.",
            imgsrc: squaredle,
            link: "https://github.com/S-Ruban/squaredle-solver",
            languages: [<DiPython size={30} style={{color: "#3672a4"}}/>]
        }
    ]

    return ( 
        <div className="Projects" style={{marginLeft: "50px"}}>
            <Typography variant="h4" marginTop="50px" marginBottom="20px">Projects I've done</Typography>
            <Grid align="left">
                <Typography variant="p" marginBottom="20px">
                    For more of my work, check out my <nbsp />
                    <a href="https://github.com/S-Ruban?tab=repositories" target="_blank" rel="noreferrer">Github Repositories</a>.
                </Typography>
            </Grid>
            <Grid container direction="row" align="left" marginTop="20px">
            {
                projects.map((project) => 
                (
                    <Grid item xs={12} borderRadius="10px" marginRight="50px" marginBottom="50px">
                        <Item>
                            <Typography variant="h4" align="center">{project.title}</Typography>
                            <Grid align="center" marginTop="10px" marginBottom="10px">
                                <img src={project.imgsrc} alt=""/>
                            </Grid>
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