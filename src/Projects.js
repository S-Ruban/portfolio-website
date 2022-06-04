import { Typography } from "@mui/material";
import { Paper } from "@mui/material";
import bandcamp from './bandcamp.jpg'
import blockchain from './blockchain.jpg'
import ghotoverflow from './ghotoverflow.jpg'
import swiggo from './swiggo.jpg'
import youtubedl from './youtube-dl.jpg'
import { Grid } from "@mui/material";
import { styled } from "@mui/material";

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
            link: "https://www.google.co.in"
        },
        {
            title: "Blockchain",
            description: "The quick brown fox jumps over the lazy dog",
            imgsrc: blockchain,
            link: "https://www.google.co.in"
        },
        {
            title: "Ghotoverflow",
            description: "The quick brown fox jumps over the lazy dog",
            imgsrc: ghotoverflow,
            link: "https://www.google.co.in"
        },
        {
            title: "Swiggo",
            description: "The quick brown fox jumps over the lazy dog",
            imgsrc: swiggo,
            link: "https://www.google.co.in"
        },
        {
            title: "youtube-dl",
            description: "The quick brown fox jumps over the lazy dog",
            imgsrc: youtubedl,
            link: "https://www.google.co.in"
        },
        {
            title: "this site lol",
            description: "The quick brown fox jumps over the lazy dog",
            imgsrc: "./lite.jpg",
            link: "https://www.google.co.in"
        },
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
                                <Typography marginLeft="10px">
                                    <a href={project.link} target="_blank" rel="noreferrer">Github Repository</a>
                                </Typography>
                            </Item>
                        </Grid>
                    ))
                }
            </Grid>
        </div>
     );
}
 
export default Projects