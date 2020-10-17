import React from 'react';
import './App.css';
import ListGroup from "react-bootstrap/ListGroup";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";



export default class Options extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            groceries: 0,
            drinks: 0,
            transport: 0,
        }
    }


    multiplyBudget(key, val) {
        var handler = this.props.handler;
        if (key === "all") {
            this.setState({
                groceries: this.state.groceries * 2,
                drinks: this.state.drinks * 2,
            }, function() {
                handler(this.state);
            })
        }
        else if (key === "undo-all") {
            this.setState({
                groceries: this.state.groceries * 0.5,
                drinks: this.state.drinks * 0.5,
            }, function() {
                handler(this.state);
            })
        }
        else if (key === "supermarket") {
            this.setState({
                groceries: this.state.groceries * 2,
            }, function() {
                handler(this.state);
            })
        }
        else if (key === "frequency") {
            this.setState({
                drinks: this.state.drinks * 2,
            }, function() {
                handler(this.state);
            })
        }
        else if (key === "drinks") {
            this.setState({
                drinks: Math.round(this.state.drinks * val),
            }, function() {
                handler(this.state);
            })
        }
    }

    multiplier = false;

    checkMultiplier(key) {
        if (this.multiplier) {
            this.multiplyBudget(key);
        }
    }

    modifyBudget(key, val) {
        var handler = this.props.handler;
        switch (key) {
            case "supermarket":
                this.setState({
                    groceries: val,
                }, function() {
                    handler(this.state);
                    this.checkMultiplier("supermarket");
                });
                break;

            case "frequency":
                this.setState({
                    drinks: val,
                }, function() {
                    handler(this.state);
                    this.checkMultiplier("frequency");
                });

                break;

            case "location":
                if (val === "1") {
                    this.multiplyBudget("all");
                    this.multiplier = true;
                }
                else if (val !== "1" && this.multiplier === true) {
                    this.multiplyBudget("undo-all");
                }
                break;

            case "strength":
                this.multiplyBudget("drinks", val);
                break;

            case "transport":
                this.setState({
                    transport: val,
                }, function() {
                    handler(this.state);
                });

                break;
        }

    }


    render() {

        return (
            <div>
                <ListGroup variant="flush" className="main-list">
                    <ListGroup.Item>
                        <Form.Group as={Row} className="form-row">
                                I will shop at
                            <Form.Control as="select" className="dropdown mx-3 mt-2" defaultValue="..." onChange={e => this.modifyBudget("supermarket", e.target.value)}>
                                <option>...</option>
                                <option value="15">Lidl or Aldi</option>
                                <option value="25">Tesco or Sainsburys</option>
                                <option value="35">Waitrose or M&S</option>
                            </Form.Control>
                        </Form.Group>
                    </ListGroup.Item>
                    <ListGroup.Item>
                        <Form.Group as={Row} className="form-row">
                            I will go out
                            <Form.Control as="select" className="dropdown mx-3 mt-2" defaultValue="..." onChange={e => this.modifyBudget("frequency", e.target.value)}>
                                <option>...</option>
                                <option value="8">once</option>
                                <option value="15">twice</option>
                                <option value="30">three times or more</option>
                            </Form.Control>
                            a week.
                        </Form.Group>
                    </ListGroup.Item>
                    <ListGroup.Item>
                        <Form.Group as={Row} className="form-row">
                            I'll be living in
                            <Form.Control as="select" className="dropdown mx-3 mt-2" defaultValue="..." onChange={e => this.modifyBudget("location", e.target.value)}>
                                <option>...</option>
                                <option value="1">in London</option>
                                <option value="2">Elsewhere</option>
                            </Form.Control>
                        </Form.Group>
                    </ListGroup.Item>
                    <ListGroup.Item>
                        <Form.Group as={Row} className="form-row">
                            I'm
                            <Form.Control as="select" className="dropdown mx-3 mt-2" defaultValue="..." onChange={e => this.modifyBudget("strength", e.target.value)}>
                                <option>...</option>
                                <option value="0.75">a lightweight</option>
                                <option value="1">average</option>
                                <option value="1.5">a heavyweight</option>
                            </Form.Control>
                        </Form.Group>
                    </ListGroup.Item>
                    <ListGroup.Item>
                        <Form.Group as={Row} className="form-row">
                            I'm also
                            <Form.Control as="select" className="dropdown mx-3 mt-2" defaultValue="..." onChange={e => this.modifyBudget("transport", e.target.value)}>
                                <option>...</option>
                                <option value="0">within walking distance or using a bus/train pass</option>
                                <option value="15">driving my own car</option>
                                <option value="20">commuting by bus or train without pass</option>
                            </Form.Control>
                        </Form.Group>
                    </ListGroup.Item>
                </ListGroup>
                {this.state.button}
            </div>

        );
    }

}
