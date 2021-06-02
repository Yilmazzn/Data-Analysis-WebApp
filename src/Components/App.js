
import Main from "./Main/Main";
import useStyles from "./styles";

const App = () => {

    const classes = useStyles()

    return (
        <div className={classes.background}>
            <Main />
        </div>
    );
}
 
export default App;