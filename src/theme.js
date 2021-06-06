import { createMuiTheme } from "@material-ui/core"

const theme = createMuiTheme({
    palette: {
        type: "dark",
        primary: {
            main: '#9DD6CE',
            light: '#b1ded8', 
            dark: '#7eaba5'
        }, 
        secondary: {
            main: '#d6a99d',
            light: '#debbb1',
            dark: '#ab887e'
        },
        background: {
            paper: '#303342',
            default: '#4c5570'
        }
    },

})

export default theme