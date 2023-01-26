import React, { useEffect, useRef, useState } from "react";
import { Box, Container, CssBaseline, ThemeProvider } from "@mui/material";
import {
  Outlet,
  Route,
  Routes,
  useLocation,
  useNavigate,
} from "react-router-dom";

import { theme } from "./components/StyledControls/StyledControls";
import EventList from "./components/EventList/EventList";
import Header from "./components/Header/Header";
import EventMaker from "./components/EventMaker/EventMaker";
import EventMap from "./components/EventsMap/EventMap";
import Auth from "./components/Auth/Auth";
import EventPage from "./components/Event/EventPage";
import Profile from "./components/Profile/Profile";
import { authAPI } from "./api/Api";
import { AuthContextType, DeviceContextType, DeviceType } from "./types";
import styles from "./App.module.scss";
import Invite from "./components/InvitePage/Invite";

export const DeviceContext = React.createContext<DeviceContextType>({
  device: window.innerWidth < 1000 ? DeviceType.mobile : DeviceType.computer,
  setDevice: (device) => {},
});

export const AuthContext = React.createContext<AuthContextType>({
  initialized: false,
  setInitialized: (initialized) => {},
  auth: false,
  setAuth: (auth) => {},
});

const AppWrapper = () => (
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <Box className={styles.appWrapper}>
      <Header />
      <Container component="main" sx={{ mt: 4, mb: 2 }}>
        <Outlet />
      </Container>
    </Box>
  </ThemeProvider>
);

const App = () => {
  return <AppWrapper />;
};

export default App;
