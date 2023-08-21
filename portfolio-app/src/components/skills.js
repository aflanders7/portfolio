import { BiLogoReact, BiLogoJavascript, BiLogoHtml5 } from 'react-icons/bi'; 
import { DiCss3, DiNodejs } from 'react-icons/di'; 
import { BsGit } from 'react-icons/bs'; 
import { GrMysql } from 'react-icons/gr'; 
import { SiExpress, SiPython } from 'react-icons/si';

export const Skills=[
    {
        name: "Python",
        icon: <SiPython size= "50"/>
    },
    
    {
        name: "CSS",
        icon: <DiCss3 size= "60"/>
    },
    {
        name: "HTML",
        icon: <BiLogoHtml5 size= "70" />
    },
    {
        name: "JavaScript",
        icon: <BiLogoJavascript size= "60"/>
    },
    {
        name: "Git",
        icon: <BsGit size= "60"/>
    },
    {
        name: "React.JS",
        icon: <BiLogoReact size= "70"/>
    },

    {
        name: "MySQL",
        icon: <GrMysql size= "50"/>
    },
    {
        name: "Node.JS",
        icon: <DiNodejs size= "80"/>
    },

];