import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Chip from '@material-ui/core/Chip';
import {icons} from '../components/icons'
const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      '& > *': {
        margin: theme.spacing(0.5),
      },
    },
  }));

  const chip = {backgroundColor:'white', border: "0.5px solid gray", borderRadius:"5px"}

export default function Summary({frontmatter, align}){
    const classes = useStyles();
    return(
        <div className={classes.root} style={{justifyContent:align}}>
            <Chip
            size="small"
            icon={icons[frontmatter.levels.toLowerCase()]}
            label={frontmatter.levels}
            style={chip}
        />
        <Chip
            size="small"
            icon={icons[frontmatter.sublevels.toLowerCase()]}
            label={frontmatter.sublevels}
            style={chip}
        />
        <Chip
            size="small"
            icon={icons[frontmatter.types.toLowerCase()]}
            label={frontmatter.types}
            style={chip}
        />
        {frontmatter.tags.map((item, key)=>(
            <Chip
            key={key}
            size="small"
            icon={icons[item.toLowerCase()]}
            label={item}
            style={chip}
            />
        ))}
        </div>
    )
}