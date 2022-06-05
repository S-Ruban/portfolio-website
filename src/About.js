import { Typography, Grid, Box, ListItem, ListItemText } from "@mui/material";
import dp from './dp.jpg'
import { DiJava, DiJsBadge, DiPython, DiReact, DiCss3, DiHtml5, DiNodejsSmall, DiMongodb, DiMysql, DiPostgresql, DiLinux, DiWindows } from "react-icons/di"

const About = () => {

    const languages = [
        <DiJava size={40} style={{color: "#3672a4"}} onClick={()=> window.open("https://www.java.com/en/download/help/whatis_java.html", "_blank")}/>,
        <DiJsBadge size={40} style={{color: "#f7df1e"}} onClick={()=> window.open("https://www.javascript.com/", "_blank")}/>,
        <DiPython size={40} style={{color: "#3672a4"}} onClick={()=> window.open("https://www.python.org/about/", "_blank")}/>
    ];
    const frontend = [
        <DiReact size={40} style={{color: "#5ed3f3"}} onClick={()=> window.open("https://reactjs.org/", "_blank")}/>,
        <DiCss3 size={40} style={{color: "#254bdd"}} onClick={()=> window.open("https://developer.mozilla.org/en-US/docs/Web/CSS", "_blank")}/>,
        <DiHtml5 size={40} style={{color: "#dd4b25"}} onClick={()=> window.open("https://developer.mozilla.org/en-US/docs/Web/HTML", "_blank")}/>
    ];
    const backend = [
        <DiNodejsSmall size={40} style={{color: "#68a063"}} onClick={()=> window.open("https://nodejs.org/en/about/", "_blank")}/>
    ];
    const databases = [
        <DiMongodb size={40} style={{color: "#449a45"}} onClick={()=> window.open("https://www.mongodb.com/", "_blank")}/>,
        <DiMysql size={40} style={{color: "#00618a"}} onClick={()=> window.open("https://www.mysql.com/", "_blank")}/>,
        <DiPostgresql size={40} style={{color: "#31648c"}} onClick={()=> window.open("https://www.postgresql.org/about/", "_blank")}/>
    ];

    const opsys = [
        <DiLinux size={40}/>,
        <DiWindows size={40} style={{color: "#0183dc"}} />
    ];

    const cdcs = [
        {
            code: "CS F111",
            title: "Computer Programming"
        },
        {
            code: "CS F211",
            title: "Data Structures & Algorithms"
        },
        {
            code: "CS F212",
            title: "Database Systems"
        },
        {
            code: "CS F213",
            title: "Object Oriented Programming"
        },
        {
            code: "CS F214",
            title: "Logic in Computer Science"
        },
        {
            code: "CS F215",
            title: "Digital Design"
        },
        {
            code: "CS F222",
            title: "Discrete Structures for Computer Science"
        },
        {
            code: "CS F241",
            title: "Microprocessor Programming & Interfacing"
        },
        {
            code: "CS F301",
            title: "Principles of Programming Languages"
        },
        {
            code: "CS F303",
            title: "Computer Networks"
        },
        {
            code: "CS F342",
            title: "Computer Architecture"
        },
        {
            code: "CS F351",
            title: "Theory of Computation"
        },
        {
            code: "CS F363",
            title: "Compiler Construction"
        },
        {
            code: "CS F364",
            title: "Design & Analysis of Algorithms"
        },
        {
            code: "CS F372",
            title: "Operating Systems"
        },
    ];

    const dels = [
        {
            code: "BITS F386",
            title: "Quantum Information and Computing"
        },
        {
            code: "BITS F463",
            title: "Cryptography"
        },
        {
            code: "CS F317",
            title: "Reinforcement Learning"
        },
        {
            code: "CS F425",
            title: "Deep Learning"
        },
        {
            code: "CS F441",
            title: "Introduction to Computational Neuroscience"
        },
        {
            code: "IS F341",
            title: "Software Engineering"
        }
    ];

    return ( 
        <div className="About">
            <Typography variant="h4" marginTop="50px" marginBottom="20px">About me</Typography>
            <img src={dp} alt=""/>
            <Typography align="left" marginLeft="50px" marginTop="20px">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sit amet luctus venenatis lectus magna fringilla urna. Odio tempor orci dapibus ultrices in iaculis nunc sed. Pellentesque id nibh tortor id aliquet lectus. Id ornare arcu odio ut sem nulla pharetra diam. Nec tincidunt praesent semper feugiat. Nulla aliquet porttitor lacus luctus accumsan. Facilisis magna etiam tempor orci. Vulputate dignissim suspendisse in est ante in nibh. Cras sed felis eget velit aliquet sagittis.
            </Typography>
            <Typography variant="h5" align="left" marginTop="50px" marginLeft="50px" marginBottom="10px">Programming Languages</Typography>
            <Grid container direction="row" align="left" marginLeft="50px">
            <img src="https://cdn.icon-icons.com/icons2/2415/PNG/512/c_original_logo_icon_146611.png" width="32px" height="32px" alt="" style={{marginLeft: "10px"}}/>
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/ISO_C%2B%2B_Logo.svg/1822px-ISO_C%2B%2B_Logo.svg.png" width="32px" height="32px" alt="" style={{marginLeft: "10px"}}/>
            {
                languages.map((icon) => (
                    <Grid item marginRight="10px">
                        {icon}
                    </Grid>
                ))
            }
            </Grid>
            <Typography variant="h5" align="left" marginTop="20px" marginLeft="50px" marginBottom="10px">Frontend</Typography>
            <Grid container direction="row" align="left" marginLeft="50px">
            {
                frontend.map((icon) => (
                    <Grid item marginRight="10px">
                        {icon}
                    </Grid>
                ))
            }
            </Grid>
            <Typography variant="h5" align="left" marginTop="20px" marginLeft="50px" marginBottom="10px">Backend</Typography>
            <Grid container direction="row" align="left" marginLeft="50px">
            {
                backend.map((icon) => (
                    <Grid item marginRight="10px">
                        {icon}
                    </Grid>
                ))
            }
            </Grid>
            <Typography variant="h5" align="left" marginTop="20px" marginLeft="50px" marginBottom="10px">Databases</Typography>
            <Grid container direction="row" align="left" marginLeft="50px">
            <img src="https://www.oracle.com/a/ocom/img/sql-dev.svg" width="48px" height="48px" alt="" style={{marginLeft: "10px"}} onClick={()=> window.open("https://www.oracle.com/in/database/technologies/appdev/sql.html", "_blank")}/>
            {
                databases.map((icon) => (
                    <Grid item marginRight="10px">
                        {icon}
                    </Grid>
                ))
            }
            </Grid>
            <Typography variant="h5" align="left" marginTop="20px" marginLeft="50px" marginBottom="10px">Operating Systems</Typography>
            <Grid container direction="row" align="left" marginLeft="50px">
            {
                opsys.map((icon) => (
                    <Grid item marginRight="10px">
                        {icon}
                    </Grid>
                ))
            }
            </Grid>
            <Typography variant="h4" marginTop="50px" marginBottom="20px">Courses I've done</Typography>
            <Typography variant="h5" marginLeft="50px" align="left">Core CS Courses</Typography>
            <Box sx={{ width: '100%', bgcolor: 'background.paper' }} marginLeft="50px" maxWidth="500px">
            {
                cdcs.map((cdc) => (
                    <ListItem>
                        <ListItemText primary={cdc.code} secondary={cdc.title}/>
                    </ListItem>
                ))
            }
            </Box>
            <Typography variant="h5" marginLeft="50px" marginTop="20px" align="left">CS Electives</Typography>
            <Box sx={{ width: '100%', bgcolor: 'background.paper' }} marginLeft="50px" maxWidth="500px">
            {
                dels.map((del) => (
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