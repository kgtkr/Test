import "core-js";
import * as ReactDOM from 'react-dom';
import { App } from "./app";
import * as React from 'react';
import { HashRouter } from 'react-router-dom'
import {
  MuiThemeProvider
} from 'material-ui/styles';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import './app.scss';
import * as OfflinePluginRuntime from "offline-plugin/runtime";

OfflinePluginRuntime.install();

ReactDOM.render(
  <HashRouter>
    <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
      <App />
    </MuiThemeProvider>
  </HashRouter>,
  document.querySelector('#root')
);