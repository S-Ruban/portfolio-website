import { Typography, Grid, styled, Paper } from "@mui/material";
import bandcamp from './bandcamp.jpg'
import blockchain from './blockchain.jpg'
import ghotoverflow from './ghotoverflow.jpg'
import swiggo from './swiggo.jpg'
import youtubedl from './youtube-dl.jpg'
import dl from './deeplearning.jpeg'
import rl from './reinforcementlearning.jpg'
import tnt from './trackntrigger.jpg'
import { DiPython, DiJsBadge, DiJava, DiHtml5, DiCss3 } from 'react-icons/di'

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fafafa',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    color: theme.palette.text.secondary,
  }));

const Projects = () => {

    const projects = [
        {
            title: "Bandcamp",
            description: "The quick brown fox jumps over the lazy dog",
            imgsrc: bandcamp,
            link: "https://github.com/S-Ruban/bandcamp-downloader",
            languages: [<DiPython size={30} style={{color: "#3672a4"}}/>]
        },
        {
            title: "Blockchain",
            description: "The quick brown fox jumps over the lazy dog",
            imgsrc: blockchain,
            link: "https://github.com/S-Ruban/bits-f463-assignments/tree/main/Assignment%202",
            languages: [<DiPython size={30} style={{color: "#3672a4"}}/>]
        },
        {
            title: "GhotOverflow",
            description: "The quick brown fox jumps over the lazy dog",
            imgsrc: ghotoverflow,
            link: "https://github.com/S-Ruban/SEISF341",
            languages: [<DiJsBadge size={30} style={{color: "#f7df1e"}}/>, <DiHtml5 size={30} style={{color: "#dd4b25"}}/>, <DiCss3 size={30} style={{color: "#254bdd"}} />]
        },
        {
            title: "Swiggo",
            description: "The quick brown fox jumps over the lazy dog",
            imgsrc: swiggo,
            link: "https://github.com/S-Ruban/cs-f212-mini-project",
            languages: [<DiJsBadge size={30} style={{color: "#f7df1e"}}/>, <DiHtml5 size={30} style={{color: "#dd4b25"}}/>, <DiCss3 size={30} style={{color: "#254bdd"}} />]
        },
        {
            title: "youtube-dl",
            description: "The quick brown fox jumps over the lazy dog",
            imgsrc: youtubedl,
            link: "https://github.com/S-Ruban/youtube-dl",
            languages: [<DiPython size={30} style={{color: "#3672a4"}}/>]
        },
        {
            title: "Portfolio Website",
            description: "The quick brown fox jumps over the lazy dog",
            imgsrc: "./lite.jpg",
            link: "https://github.com/S-Ruban/portfolio-website",
            languages: [<DiJsBadge size={30} style={{color: "#f7df1e"}}/>, <DiHtml5 size={30} style={{color: "#dd4b25"}}/>, <DiCss3 size={30} style={{color: "#254bdd"}}/>]
        },
        {
            title: "Deep Learning",
            description: "The quick brown fox jumps over the lazy dog",
            imgsrc: dl,
            link: "https://github.com/S-Ruban/cs-f425-assignments",
            languages: [<DiPython size={30} style={{color: "#3672a4"}}/>]
        },
        {
            title: "Reinforcement Learning",
            description: "The quick brown fox jumps over the lazy dog",
            imgsrc: rl,
            link: "https://github.com/S-Ruban/cs-f317-project",
            languages: [<DiPython size={30} style={{color: "#3672a4"}}/>]
        },
        {
            title: "Track-n-Trigger Android App",
            description: "The quick brown fox jumps over the lazy dog",
            imgsrc: tnt,
            link: "https://github.com/S-Ruban/TracknTrigger/tree/master",
            languages: [<DiJava size={30} style={{color: "#3672a4"}}/>]
        }
    ]

    return ( 
        <div className="Projects">
            <Typography variant="h4" marginTop="50px" marginBottom="20px">Projects I've done</Typography>
            <Grid container direction="row" align="left">
            {
                projects.map((project) => (
                    <Grid item xs={12} borderRadius="10px" marginLeft="50px" marginRight="50px" marginBottom="50px" marginTop="50">
                        <Item>
                            <Typography variant="h4" align="center">{project.title}</Typography>
                            <Grid align="center" marginTop="10px" marginBottom="10px">
                                <img src={project.imgsrc} alt=""/>
                            </Grid>
                            <Typography marginLeft="10px">{project.description}</Typography>
                            <Typography variant="p" marginLeft="10px">
                                <a href={project.link} target="_blank" rel="noreferrer">Github Repository</a>
                            </Typography>
                            <Grid>
                                <Typography variant="p" marginLeft="10px">Languages: </Typography>
                                <Grid container direction="row" align="left">
                                {
                                    project.languages.map((icon) => (
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