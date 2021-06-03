import { createMuiTheme } from "@material-ui/core"
import { lightBlue, lightGreen } from "@material-ui/core/colors"

const theme = createMuiTheme({
    palette: {
        type: "dark",
        primary: {
            main: '#9DD6CE',
            light: '#b1ded8', 
            dark: '#7eaba5'
        }, 
        secondary: lightGreen,
        background: {
            paper: '#303342',
            default: '#4c5570'
        }
    },

})

export default theme