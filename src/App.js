import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Options from "./Options";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import PieChart from "./piechart.jpg";
import ListGroup from "react-bootstrap/ListGroup";
import DoughnutChart from "./DoughnutChart";

export default class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            piechart: "",
        }

    }

    render() {
        return (
            <Container className="App">
                <ListGroup variant="flush" className="main-list-group">
                    <ListGroup.Item>
                        TITLE
                    </ListGroup.Item>
                    <ListGroup.Item>
                        <Row>
                            <Col>
                                <Options />

                            </Col>
                            <Col className="piechart-container">
                                <DoughnutChart />
                            </Col>
                        </Row>
                    </ListGroup.Item>
                </ListGroup>


            </Container>
        );
    }

}
