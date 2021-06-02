import { createMuiTheme } from "@material-ui/core"

const useTheme = createMuiTheme({
    palette: {
        type: "dark",
        primary: {
            main: '#ffffff'
        },
        background: {
            primary: '#2e3443',
            second: '#4c5570',
        }
    }
})

export default useTheme