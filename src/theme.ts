'use client';
import { Nunito } from 'next/font/google';
import { createTheme } from '@mui/material/styles';



const nunito = Nunito({
    weight: ['400'],
    subsets: ['latin'],
    display: 'swap',
});

const theme = createTheme({
    typography: {
        fontFamily: nunito.style.fontFamily,
        h1: {
            fontSize: '2.5rem',
            lineHeight: '2.5rem'
        },
        body1: {
            fontSize: '1rem',
            lineHeight: '1.625rem'
        }
    },
    breakpoints: {
        values: {
            xs: 0,
            sm: 640,
            md: 768,
            lg: 1048,
            xl: 1194,
        },
    },
    spacing: 4,

    palette: {
        primary: {
            main: '#F4E041'
        },
        secondary: {
            main: '#00BDD3'
        },
        background: {
            default: '#F8F8F8'
        },
        grey: {
            100: '#B4B4B4'
        },


    },
    components: {
        MuiContainer: {

            defaultProps: {
                'maxWidth': 'xl'
            },

        },
        MuiButton: {
            defaultProps: {
                disableElevation: true
            },
            styleOverrides: {
                root: {
                    'borderRadius': '80px',
                    'padding': '4px 29px',
                    'textTransform': 'none',
                    'fontSize': '1rem',
                    '&:hover': {
                        backgroundColor: '#FFE302',
                    },
                },
            },
        },
        MuiAppBar: {
            styleOverrides: {
                colorPrimary: {
                    backgroundColor: "white"
                }
            }
        },
        MuiToolbar: {
            styleOverrides: {
                root: {
                    'height': '60px'
                }
            }
        },
        MuiTextField: {
            defaultProps: {
                'variant': 'outlined',
                'color': 'secondary',
                'required': true
            },
            styleOverrides: {
                root: {
                    'maxWidth': '380px'
                }
            }
        },
        MuiRadio: {
            defaultProps: {
                'color': 'secondary',
            }
        },

    }
});

export default theme;
