import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Options from "./Options";
import Container from "react-bootstrap/Container";

function App() {
  return (
    <Container className="App">
        <Options />
    </Container>
  );
}

export default App;
