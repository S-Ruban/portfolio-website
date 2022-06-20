import { Typography, List, ListItem, ListItemButton, ListItemText, Snackbar, Box } from "@mui/material";
import { SiFacebook, SiLinkedin, SiGmail } from "react-icons/si"
import { VscGithub } from "react-icons/vsc"
import { BsFillTelephoneFill } from "react-icons/bs"
import { RiWhatsappFill} from "react-icons/ri"
import { useState } from "react";

const Contact = () => {

    const [open, setOpen] = useState(false);

    const handleClose = (event, reason) => 
    {
        if (reason === 'clickaway')
            return;
        setOpen(false);
    };

    const lc = 
    [
        { platform: "Facebook", link: "https://www.facebook.com/ruban.srirambabu", icon: <SiFacebook size={30} style={{color: "#036ce4"}}/> },
        { platform: "Github", link: "https://github.com/S-Ruban", icon: <VscGithub size={30} style={{color: "#792f9f"}}/> },
        { platform: "Linkedin", link: "https://www.linkedin.com/in/ruban-srirambabu/", icon: <SiLinkedin size={30} style={{color: "#0a66c2"}}/> }
    ]

    const nlc = 
    [
        { platform: "Mobile", contact: "+91 89712 62405", icon: <BsFillTelephoneFill size={30}/> },
        { platform: "WhatsApp", contact: "+91 89712 62405", icon: <RiWhatsappFill size={30} style={{color: "#29c44d"}}/> },
        { platform: "Personal Email", contact: "s.ruban2000@gmail.com", icon: <SiGmail size={30} style={{color: "#cd3c30"}}/> },
        { platform: "University Email", contact: "f20190097@hyderabad.bits-pilani.ac.in", icon: <SiGmail size={30} style={{color: "#cd3c30"}}/> }
    ]

    return ( 
        <div className="Contact">
            <Typography variant="h4" marginTop="50px">Ways to contact me</Typography>
            <Box sx={{ width: '100%', bgcolor: 'background.paper' }} marginLeft="50px" maxWidth="400px">
                <List>
                {
                    lc.map((contact) => 
                    (
                        <ListItem>
                            <ListItemButton component="a" href={contact.link} target="_blank" rel="noreferrer">
                                {contact.icon}
                                <Typography variant="p">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</Typography>
                                <ListItemText primary={contact.platform}/>
                            </ListItemButton>
                        </ListItem>
                    ))
                }
                {
                    nlc.map((contact) => 
                    (
                        <ListItem onClick={() => 
                            {
                                navigator.clipboard.writeText(contact.contact);
                                setOpen(true);
                            }}>
                            <ListItemButton>
                                {contact.icon}
                                <Typography variant="p">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</Typography>
                                <ListItemText primary={contact.platform} secondary={contact.contact}/>
                            </ListItemButton>
                            <Snackbar open={open} autoHideDuration={1000} onClose={handleClose} message="Copied contact details to clipboard!" />
                        </ListItem>
                    ))
                }
                </List>
            </Box>
        </div>
     );
}
 
export default Contact;
