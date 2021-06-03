import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
    video: {
        objectFit: 'cover',
        width: '100%',
        height: '100%',
        position: 'fixed',
    },
    heroContainer: {
        height: '100vh', 
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        box_shadow: 'inset 0 0 0 1000px rgba(0, 0, 0, 0)',
        objectFit: 'contain'
    }

}))

export default useStyles