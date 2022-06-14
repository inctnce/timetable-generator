import React from 'react';
import { CssBaseline, ThemeProvider, Stack } from "@mui/material"
import theme from './theme/MainTheme';
import AppBar from './components/AppBar';
import Router from './Router';


const App: React.FC = () => {
  return (
    <Stack alignItems="center" minHeight="100vh" spacing={3}>
      <ThemeProvider theme={theme} >
        <CssBaseline />
        <AppBar />
        <Stack alignItems="center" flex={1} spacing={3} pr={3} pl={3} width="100%" height="inherit" >
          <Router />
        </Stack>
      </ThemeProvider>
    </Stack>
  );
}

export default App;
