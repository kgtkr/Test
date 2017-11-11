import {
  Route,
  Switch,
  Link
} from 'react-router-dom'
import * as React from 'react';
import { Home } from "./pages";
import {
  Paper,
  AppBar,
  BottomNavigation,
  BottomNavigationItem
} from "material-ui";
import * as icons from "material-ui/svg-icons";

export function App() {
  return <div>
    <AppBar title="tkrのホームページ"
      showMenuIconButton={false}
      style={{
        position: "fixed",
        top: "0px",
        left: "0px",
        right: "0px"
      }} />
    <Paper style={{
      marginTop: "64px",
      minHeight: "calc(100vh - 64px)",
      padding: "16px"
    }}>
      <Switch>
        <Route path="/" component={Home} />
      </Switch>
    </Paper>
    <Paper style={{
      position: "fixed",
      bottom: "0px",
      left: "0px",
      right: "0px"
    }}>
      <BottomNavigation>
        <BottomNavigationItem
          style={{
            textAlign: "center"
          }}
          label="HOME"
          icon={<icons.ActionHome />}
          containerElement={<Link to="/" />}
        />
      </BottomNavigation>
    </Paper>
  </div>;
}