import './App.css';
import { Container, Grid, Paper, Typography } from '@material-ui/core';
import AppHeader from './components/Header/AppHeader.js'
import { makeStyles } from '@material-ui/core/styles';
import ButtonBase from '@material-ui/core/ButtonBase';

import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getPosts } from './actions/posts';

const App = () => {

  const classes = useStyles();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);


  return(
    //DOWN FOR MAINTENANCE
    // <Container>
    //     <AppHeader/>
    //   <Grid>
    //     <Grid container className={classes.root} spacing={2}>
    //       <Grid item xs={12}>
    //         <Grid container justifyContent="space-around" alignItems="center">
    //           {[0, 1, 2, 3, 4].map((value) => (
    //             <Grid key={value} item>
    //               <Paper className={classes.paper} />
    //             </Grid>
    //           ))}
    //         </Grid>
    //       </Grid>
    //     </Grid>
    //     <Grid container className={classes.root} spacing={2}>
    //       <Grid item xs={12}>
    //         <Grid container justifyContent="space-around" alignItems="center">
    //           {[0, 1, 2, 3, 4].map((value) => (
    //             <Grid key={value} item>
    //               <Paper className={classes.paper} />
    //             </Grid>
    //           ))}
    //         </Grid>
    //       </Grid>
    //     </Grid>
    //     <Grid container className={classes.root} spacing={2}>
    //       <Grid item xs={12}>
    //         <Grid container justifyContent="space-around" alignItems="center">
    //           {[0, 1, 2, 3, 4].map((value) => (
    //             <Grid key={value} item>
    //               <Paper className={classes.paper} />
    //             </Grid>
    //           ))}
    //         </Grid>
    //       </Grid>
    //     </Grid>
    //   </Grid>
    // </Container>
  );

}
export default App;

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: '100%',
  },
  paper: {
    height: 280,
    width: 200,
    margin: 'auto',
    margin: 5
    
  },
  control: {
    padding: theme.spacing(2),
  },
}));

