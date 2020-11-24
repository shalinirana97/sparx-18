import React from "react";
import './assets/scss/index.scss';
import Grid from '@material-ui/core/Grid';
import Header from './components/header';
import ContentPage from './components/mainContent';
import './App.css';

const App = () => {

  return (
    <Grid container className="layout">
      <Header />
      <ContentPage />
    </Grid >
  );
}

export default App;
