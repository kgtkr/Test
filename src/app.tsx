import {
  Route,
  Switch,
  Link
} from 'react-router-dom'
import * as React from 'react';
import {
  Home,
  Bio,
  About,
  NotFound
} from "./pages";
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
      <div className="doc">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/bio" component={Bio} />
          <Route exact path="/about" component={About} />
          <Route component={NotFound} />
        </Switch>
      </div>
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

        <BottomNavigationItem
          style={{
            textAlign: "center"
          }}
          label="Bio"
          icon={<icons.ActionFace />}
          containerElement={<Link to="/bio" />}
        />

        <BottomNavigationItem
          style={{
            textAlign: "center"
          }}
          label="About"
          icon={<icons.ActionInfo />}
          containerElement={<Link to="/about" />}
        />
      </BottomNavigation>
    </Paper>
  </div>;
}