import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Options from "./Options";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ListGroup from "react-bootstrap/ListGroup";
import DoughnutChart from "./DoughnutChart";

export default class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            groceries: 0,
            drinks: 0,
            transport: 0,
        }
        this.handler = this.handler.bind(this);
    }

    handler = (data) => {
        console.log(data)
        this.setState({
            groceries: data.groceries,
            drinks: data.drinks,
            transport: data.transport
        });
    }


    render() {
        return (
            <Container className="App">
                <ListGroup variant="flush" className="main-list-group">
                    <ListGroup.Item className="title">
                        Weekly Budget Calculator 💸
                    </ListGroup.Item>
                    <ListGroup.Item>
                        <Row noGutters="true">
                            <Col>
                                <Options handler={this.handler}/>

                            </Col>
                            <Col className="piechart-container">
                                <DoughnutChart data={{
                                    groceries: this.state.groceries,
                                    drinks: this.state.drinks,
                                    transport: this.state.transport,
                                }}/>
                            </Col>
                        </Row>
                    </ListGroup.Item>
                </ListGroup>


            </Container>
        );
    }

}
