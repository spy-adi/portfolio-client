import React from "react";
import "./Footer.css"
import { Typography } from "@mui/material";
import { Link } from "react-router-dom";
import{
    BsGithub,
    BsInstagram,
    BsLinkedin
} from "react-icons/bs"
const Footer = (props) => {
  return (
    <div className="footer">
        <div>
            <Typography variant="h5">About Me</Typography>
            <Typography>
                Hey, My name is Aditya Mishra. I am a Software Developer.
            </Typography>
            <Link to="/contact" className="footerContactBtn">
                <Typography>Contact Me</Typography>
            </Link>
        </div>

        <div>
            <Typography variant="h6">Social Media</Typography>
            <a href="https://github.com/spy-adi" target="black"><BsGithub /></a>
            <a href="https://www.linkedin.com/in/adityamishra22/" target="black"><BsLinkedin /></a>
        </div>
    </div>
  )
};

export default Footer;
