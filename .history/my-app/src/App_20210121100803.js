// HEY EZ TIPS FOR USING THIS 
// FILE NAMES WILL BE SAID AND WHAT TO DO IN THEM 
// chipset change phone number
// social card change links
// profile page change props to ur props (ur name and bio)
// APP JS go to create const theme il just make a sign and show u and change the colours and even theme dark/light
// responsive.jsx go to that file find element called chipset and change its 








import logo from "./logo.svg";
import "./App.css";
import ProfilePage from "./ProfileFolder/ProfilePage";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { FirebaseAuthProvider } from "@react-firebase/auth";
import firebase from "firebase/app";
import { config } from "./FirebaseAuth/Config";
import "./Css/CssCustom.css";
import "./Css/Fonts.css";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import yellow from "@material-ui/core/colors/yellow";
import grey from "@material-ui/core/colors/grey";

// mix semptia with contact make like another page for revlout type creatiopn in inspo use auth info to grab info n that

// CONTEXT API
import { SemProvider } from "./SemContext";
import { useState } from "react";



// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// HERE THIS IS WHERE U CHANGE COLOURS FOR THE APP BAR AND FAB AND COLOUR SHEME 
const theme = createMuiTheme({
  palette: {
    type: "dark",
    primary: {
      main: "#ffeb3b",
    },
    secondary: {
      main: "#ffea00 ",
    },
  },
  typography: {
    h6: {
      // ipad / phone
      fontWeight: 900,
      fontSize: "13vmin",
      fontFamily: ["Inter", "sans-serif"].join(","),
    },
    h4: {
      // desktop pc
      fontWeight: 900,
      fontSize: "3.7vmin",
      fontFamily: ["Inter", "sans-serif"].join(","),
    },
    h5: {
      fontWeight: 900,
      fontSize: 30,
    },
  },
});

function App() {
  // const [authInfo, setAuthInfo] = useState();
  const matches = useMediaQuery(theme.breakpoints.up("sm"));

  return (
    <SemProvider>
      <FirebaseAuthProvider firebase={firebase} {...config}>
        <Router>
          <Switch>
            <Route path="/Wave" component={ProfilePage} />
            <ThemeProvider theme={theme}>
              <ProfilePage></ProfilePage>
            </ThemeProvider>
          </Switch>
        </Router>
      </FirebaseAuthProvider>
    </SemProvider>
  );
}

export default App;
