import { Typography } from "@mui/material";
import dp from './dp.jpg'

const About = () => {
    return ( 
        <div className="About">
            <Typography variant="h4" marginTop="50px" marginBottom="20px">About me</Typography>
            <img src={dp} alt=""/>
            <Typography align="left" marginLeft="50px" marginTop="20px">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sit amet luctus venenatis lectus magna fringilla urna. Odio tempor orci dapibus ultrices in iaculis nunc sed. Pellentesque id nibh tortor id aliquet lectus. Id ornare arcu odio ut sem nulla pharetra diam. Nec tincidunt praesent semper feugiat. Nulla aliquet porttitor lacus luctus accumsan. Facilisis magna etiam tempor orci. Vulputate dignissim suspendisse in est ante in nibh. Cras sed felis eget velit aliquet sagittis.
            </Typography>
        </div>
     );
}
 
export default About;