import { CircularProgress, Container, makeStyles, Typography } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
    loading: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
    },
    loadingText: {
        paddingTop: theme.spacing(2)
    }
}))

const LoadingComponent = props => {

    const classes = useStyles();
    
    return (
        <Container className={classes.loading}>
            <CircularProgress />
            <Typography variant="body2" className={classes.loadingText}>{props.text}</Typography>
        </Container>
    );
}
 
export default LoadingComponent;