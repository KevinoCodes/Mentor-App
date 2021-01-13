import { Container, AppBar, Toolbar, IconButton, Button, Typography, Paper } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/styles';
import { makeStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import './App.css';
import { createMuiTheme } from '@material-ui/core/styles';
import grey from '@material-ui/core/colors/grey';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: grey[500],
    },
    secondary: {
      main: grey[500],
    },
  },
});

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));


function App() {
  const classes = useStyles();

  return (
    <ThemeProvider theme={theme}>
      <br />      <br />      <br />      <br />
      <Container className="heroImage">
        <AppBar className="navBar" position="static">
          <Toolbar>
            <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" className={classes.title}>
              News
            </Typography>
            <Button color="inherit">Login</Button>
          </Toolbar>
        </AppBar>
        <br /><br /><br /><br /><br /><br /><br /><br /><br />
      </Container>
      <Paper className="footer" elevation={0}></Paper>
    </ThemeProvider>
  )
}

export default App;