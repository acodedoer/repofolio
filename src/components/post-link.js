import { Link } from "gatsby"
import React from 'react';
import InfoIcon from '@material-ui/icons/Info';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Summary from './summary'

const useStyles = makeStyles({
  root: {
    width: "80%",
    marginBottom: "1em"
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  act: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
});

export default function PostLink({post}) {
  const classes = useStyles();

  return (
    <Card id="post" className={classes.root}>
      <CardContent>
        <Typography variant="h5" component="h2">
          {post.frontmatter.title}
        </Typography>
        <div id="postInner">
          <div id="postInner1">
          <Typography className={classes.pos} color="textSecondary">
            {post.frontmatter.description}
          </Typography>
          </div>
          <div id="postInner2">
          <Summary frontmatter={post.frontmatter} align={'left'}/>
          </div>
        </div>
      </CardContent>
      <CardActions className={classes.act}>
        <Button size="small"style={{backgroundColor: "rgb(55, 59, 95)"}} variant="contained">
          <Link style={{textDecoration:"none", color:'white'}} to={post.frontmatter.slug}>
           View Details
          </Link>
        </Button>
        <Button variant="contained" color="secondary" size="small">Clone Template</Button>
      </CardActions>
    </Card>
  );
}
