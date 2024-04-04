import { createTheme } from "@mui/material";
import { Roboto } from "next/font/google";
import { red } from '@mui/material/colors';

export const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
});


export const MaterialTheme = createTheme({
  palette: {
    primary: {
      light: "#0E2030",
      main: '#283A48',
    },
    secondary: {
      main: '#19857b',
    },
    error: {
      main: red.A400,
    },
    text: {
      primary: "white",
    }
  },
  typography: {
    fontFamily: roboto.style.fontFamily,
    body1: {
      color: "#cecece",
      fontWeight: 400,
    }
  },
});