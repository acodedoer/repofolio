
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import StarFull from '@material-ui/icons/Star';
import StarHalf from '@material-ui/icons/StarHalf';
import StarEmpty from '@material-ui/icons/StarBorder';
import Games from '@material-ui/icons/Games';
import SPA from '@material-ui/icons/apps';
import API from '@material-ui/icons/CloudDownload';
import FullSite from '@material-ui/icons/folder';
import {faUser, faUserTie, faPlug, faUserSecret, faCubes, faDesktop, faUserNinja, faUserAstronaut, faTools, faFile, faTerminal, faServer} from '@fortawesome/free-solid-svg-icons'

export const icons = {
    "newbie": <FontAwesomeIcon icon={faUser} style={{color: "#B0E034"}}/>,
    "basic": <FontAwesomeIcon icon={faUserTie} style={{color: "#26c485"}}/>,
    "intermediary": <FontAwesomeIcon icon={faUserSecret} style={{color: "#3D8AD7"}}/>,
    "expert": <FontAwesomeIcon icon={faUserNinja} style={{color: "#BE7506"}}/>,
    "advanced": <FontAwesomeIcon icon={faUserAstronaut} style={{color: "#DE1A1A"}}/>,
    "level-1": <StarEmpty style={{color: "#DE1A1A"}}/>,
    "level-2": <StarHalf style={{color: "#DE1A1A"}}/>,
    "level-3": <StarFull style={{color: "#DE1A1A"}}/>,
    "games": <Games style={{color: "#3C91E6"}}/>,
    "productivity": <FontAwesomeIcon icon={faTools} style={{color: "#342E37"}}/>,
    "static-page": < FontAwesomeIcon icon={faFile} style={{color: "#ffbe0b"}}/>,
    "spa": <SPA style={{color: "#340068"}}/>,
    "full-site": <FullSite style={{color: "#8E3B46"}}/>,
    "api-consuming":<API style={{color: "#C7D3DD"}}/>,
    "plugin":<FontAwesomeIcon icon={faPlug} style={{color: "#6D3B47"}}/>,
    "cli-app":<FontAwesomeIcon icon={faTerminal} style={{color: "#18121c"}}/>,
    "fullstack":<FontAwesomeIcon icon={faCubes} style={{color: "#4ECDC4"}}/>,
    "backend": <FontAwesomeIcon icon={faServer} style={{color: "#454955"}}/>,
    "frontend":<FontAwesomeIcon icon={faDesktop} style={{color: "#FF8811"}}/>,
}