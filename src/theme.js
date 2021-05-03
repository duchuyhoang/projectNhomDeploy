import { createMuiTheme } from '@material-ui/core/styles'
import { colors } from '@material-ui/core';
const theme = createMuiTheme({
    palette: {
        // Red
        primary: {
            light: "#FFE8E9",
            main: '#ff5a5f',
            dark: "#ff272e",
        },

        action: {
            hover: "#FF5A5F"
        },
        background: {
            paper: "#FF5A5F"
        },
        text: {
            primary: "#484848",
            secondary: "#FFFFFF",
        },
        success: {
            main: "#006c70"
        }
    },
    typography:{
        header:{fontFamily:'"Nunito", "Arial", "sans-serif"',fontWeight:600,fontSize:25},
        subHeader:{fontFamily:'"Nunito", "Arial", "sans-serif"',fontWeight:300,fontSize:16},
        fontFamily:'"Nunito", "Arial", "sans-serif"'
    },
    border:{
        main:"#ebebeb"
    }

})
export default theme