import {
  Route,
  Switch,
  Link
} from 'react-router-dom'
import * as React from 'react';
import {
  Home,
  About,
  NotFound,
  Game,
  Games
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
      marginBottom: "56px",
      minHeight: "calc(100vh - 64px - 56px)",
      padding: "16px"
    }}>
      <div className="doc">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/games" component={Games} />
          <Route exact path="/game/:name" component={Game} />
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
          label="Games"
          icon={<icons.AvGames />}
          containerElement={<Link to="/games" />}
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