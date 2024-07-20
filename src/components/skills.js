import { BiLogoReact, BiLogoJavascript } from 'react-icons/bi'; 
import { DiNodejs } from 'react-icons/di'; 
import { BsGit } from 'react-icons/bs'; 
import { SiSnowflake, SiPython, SiSvelte } from 'react-icons/si';
import { PiFileSql } from "react-icons/pi";
import { FaAws } from "react-icons/fa";

export const Skills=[
    {
        name: "Python",
        icon: <SiPython size= "50"/>
    },

    {
        name: "AWS",
        icon: <FaAws size= "60" />
    },
    {
        name: "SQL",
        icon: <PiFileSql size= "55"/>
    },
    {
        name: "Snowflake",
        icon: <SiSnowflake size= "54"/>
    },
    {
        name: "JavaScript",
        icon: <BiLogoJavascript size= "60"/>
    },
    {
        name: "React.JS",
        icon: <BiLogoReact size= "70"/>
    },
    {
        name: "Node.JS",
        icon: <DiNodejs size= "80"/>
    },
    {
        name: "Git",
        icon: <BsGit size= "60"/>
    },
];