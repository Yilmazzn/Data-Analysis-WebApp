import { Container, Link, makeStyles, Typography } from "@material-ui/core";


const useStyles = makeStyles(theme => ({
  footer: {
    alignSelf: 'flex-end'
  }
}))


function Copyright() {
  const classes = useStyles();

    return (
      <footer className={classes.footer}>
                    
        <Container maxWidth="sm">
            <Typography variant="body2">
              {'Copyright © '}
              <Link color="inherit" href="/">
                Yilmaz Uzun
              </Link>{' '}
              {new Date().getFullYear()}
              {'.'}
            </Typography>
        </Container>
                    
      </footer>
      
      
    );
  }



export default Copyright