import {createMuiTheme} from '@material-ui/core/styles';

const theme = createMuiTheme({

    palette: {
        common:
            {
                black: "#000",
                white: "#fff"
            }
        ,
        background:
            {
                paper: "#fff",
                default: "#fafafa"
            }
        ,
        primary:
            {
                light: "#4f5b62",
                main: "#263238",
                dark: "#000a12",
                contrastText: "#fafafa"

            }
        ,
        secondary:
            {
                light: "#cfd8dc",
                main: "#f5f5f5",
                dark: "#c7c7c7",
                contrastText: "#263238"
            }
        ,
        error:
            {
                light: "#e57373",
                main: "#f44336",
                dark: "#d32f2f",
                contrastText: "#fff"
            }
        ,
        text:
            {
                primary: "rgba(0, 0, 0, 0.87)",
                secondary: "rgba(0, 0, 0, 0.54)",
                disabled: "rgba(0, 0, 0, 0.38)",
                hint: "rgba(0, 0, 0, 0.38)"
            },

    },

});

export default theme;