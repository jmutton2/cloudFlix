import './App.css';
import { Container, Grid, Paper, Typography } from '@material-ui/core';
import AppHeader from './components/Header/AppHeader.js'
import { makeStyles } from '@material-ui/core/styles';


const App = () => {

  const classes = useStyles();


  return(
    <Container>
        <AppHeader/>
      <Grid>
        <Grid container className={classes.root} spacing={2}>
          <Grid item xs={12}>
            <Grid container spacing={2}>
              {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((value) => (
                <Grid key={value} item>
                  <Paper className={classes.paper} />
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
        <Grid container className={classes.root} spacing={2}>
          <Grid item xs={12}>
            <Grid container spacing={2}>
              {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((value) => (
                <Grid key={value} item>
                  <Paper className={classes.paper} />
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
        <Grid container className={classes.root} spacing={2}>
          <Grid item xs={12}>
            <Grid container spacing={2}>
              {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((value) => (
                <Grid key={value} item>
                  <Paper className={classes.paper} />
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );

}
export default App;

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: '200%'
  },
  paper: {
    height: 140,
    width: 100,
  },
  control: {
    padding: theme.spacing(2),
  },
}));

