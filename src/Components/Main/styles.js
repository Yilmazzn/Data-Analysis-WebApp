import { makeStyles } from "@material-ui/core";

const drawerWidth = 200


const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
      },
      toolbar: {
        paddingRight: 24, // keep right padding when drawer closed
      },
      appBar: {
        zIndex: theme.zIndex.drawer + 1,
      },
      title: {
        flexGrow: 1,
      },
      drawerPaper: {
        position: 'relative',
        overflowX: 'hidden',
        width: drawerWidth,
        transition: theme.transitions.create('width', {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.enteringScreen,
        }),
      },
      drawerPaperClose: {
        overflowX: 'hidden',
        transition: theme.transitions.create('width', {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.leavingScreen,
        }),
        width: theme.spacing(7),
        [theme.breakpoints.up('sm')]: {
          width: theme.spacing(7),
        },
      },
      appBarSpacer: theme.mixins.toolbar,
      content: {
        flexGrow: 1,
        flexDirection: 'row',
        height: '100vh',
        overflow: 'hidden',
        background: `linear-gradient(#303342, #6a708f);`,
        zIndex: theme.zIndex.drawer - 1
      },
      container: {
        paddingTop: theme.spacing(4),
        paddingBottom: theme.spacing(4),
        overflowY: 'hidden'
      },
      paper: {
        padding: theme.spacing(2),
        display: 'flex',
        overflow: 'hidden',
        flexDirection: 'column',
      },
      fixedHeight: {
        height: 240,
      },
      listItemsGap: {
        ...theme.mixins.toolbar
      },
}))
 
export default useStyles;