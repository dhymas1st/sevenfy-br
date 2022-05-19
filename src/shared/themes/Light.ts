import { createTheme } from '@mui/material';

export const LightTheme = createTheme({
    palette: {
        primary: {
            main: '#042962',
            dark: '#000000',
            light: '#042962',
            contrastText: '#fffffff',
        },
        secondary: {
            main: '#F8F8F8',
            dark: '#F8CC4C',
            light: '#F0FAFF',
            contrastText: '#65C4FF',
        },
        background: {
            paper: '#ffffff',
            default: '#FBFBFB',
        }
    }
});