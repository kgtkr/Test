import "core-js";
import * as ReactDOM from 'react-dom';
import { App } from "./app";
import * as React from 'react';
import { BrowserRouter } from 'react-router-dom'
import {
  MuiThemeProvider
} from 'material-ui/styles';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import * as OfflinePluginRuntime from "offline-plugin/runtime";

OfflinePluginRuntime.install();

ReactDOM.render(
  <BrowserRouter>
    <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
      <App />
    </MuiThemeProvider>
  </BrowserRouter>,
  document.querySelector('#root')
);