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
            supermarket: "",
            frequency: "",
            location: "",
            strength: "",
            button: <Button onClick={this.verifyInput} className="p-2 my-3 w-50 mx-auto" disabled>
                Calculate my budget
            </Button>,
        }
    }

    updateButton() {
        console.log(this.state);
        if (this.state.supermarket !== "" && this.state.frequency !== "" && this.state.location !== "" && this.state.strength !== ""){
            this.setState({
                button: <Button onClick={() => console.log("test")} className="p-2 my-3 w-50 mx-auto">
                    Calculate my budget
                </Button>,
            })
        }
    }

    setValue(key, val) {
        this.setState({
            [key]: val,
        }, function() {
            this.updateButton();
        });
    }


    render() {
        return (
            <div>
                <ListGroup variant="flush" className="main-list">
                    <ListGroup.Item>
                        <Form.Group as={Row} className="form-row">
                                I will shop at
                            <Form.Control as="select" className="w-25 mx-3 mt-2" defaultValue="..." onChange={e => this.setValue("supermarket", e.target.value)}>
                                <option>...</option>
                                <option value="1">Lidl or Aldi</option>
                                <option value="2">Tesco or Sainsburys</option>
                                <option value="3">Waitrose or M&S</option>
                            </Form.Control>
                        </Form.Group>
                    </ListGroup.Item>
                    <ListGroup.Item>
                        <Form.Group as={Row} className="form-row">
                            I will go out
                            <Form.Control as="select" className="w-25 mx-3 mt-2" defaultValue="..." onChange={e => this.setValue("frequency", e.target.value)}>
                                <option>...</option>
                                <option value="1">once</option>
                                <option value="2">twice</option>
                                <option value="3">three times or more</option>
                            </Form.Control>
                            a week.
                        </Form.Group>
                    </ListGroup.Item>
                    <ListGroup.Item>
                        <Form.Group as={Row} className="form-row">
                            I'll be living in
                            <Form.Control as="select" className="w-25 mx-3 mt-2" defaultValue="..." onChange={e => this.setValue("location", e.target.value)}>
                                <option>...</option>
                                <option value="1">in London</option>
                                <option value="2">Elsewhere</option>
                            </Form.Control>
                        </Form.Group>
                    </ListGroup.Item>
                    <ListGroup.Item>
                        <Form.Group as={Row} className="form-row">
                            I'm
                            <Form.Control as="select" className="w-25 mx-3 mt-2" defaultValue="..." onChange={e => this.setValue("strength", e.target.value)}>
                                <option>...</option>
                                <option value="1">a lightweight</option>
                                <option value="2">average</option>
                                <option value="3">a heavyweight</option>
                            </Form.Control>
                        </Form.Group>
                    </ListGroup.Item>
                    <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
                </ListGroup>
                {this.state.button}
            </div>

        );
    }

}
