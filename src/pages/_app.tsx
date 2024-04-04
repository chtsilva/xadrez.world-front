import * as React from 'react';
import { AppProps } from 'next/app';
import { ThemeProvider } from '@mui/material/styles';
import { MaterialTheme } from '@/theme/MaterialTheme';
import "@/theme/default.css"

export default function MyApp(props: AppProps) {
  const { Component, pageProps } = props;
  return (
    <ThemeProvider theme={MaterialTheme}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}