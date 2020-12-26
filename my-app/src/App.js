import logo from './logo.svg';
import './App.css';
import ProfilePage from './ProfileFolder/ProfilePage';
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";


const theme = createMuiTheme({
  palette: {
    type: "dark",
  },
});


function App() {
  return (
    <ThemeProvider theme={theme}>
    <ProfilePage></ProfilePage>
    </ThemeProvider>
  );
}

export default App;
