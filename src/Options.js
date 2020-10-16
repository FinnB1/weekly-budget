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
        console.log(this.state.supermarket);
        if (this.state.supermarket !== "" && this.state.frequency !== "" && this.state.location !== "" && this.state.strength !== ""){
            this.setState({
                buttonActive: <Button onClick={this.verifyInput} className="p-2 my-3 w-50 mx-auto">
                    Calculate my budget
                </Button>,
            })
        }
    }

    setValue(key, val) {
        console.log("Setting state of "+key+" to "+val);
        this.setState({
            [key]: val,
        })
        this.updateButton()
    }


    render() {
        return (
            <div>
            <Card bg="transparent">
                <ListGroup className="main-list">
                    <ListGroup.Item>
                        <Form.Group as={Row} className="form-row">
                                I will shop at
                            <Form.Control as="select" className="w-25 mx-3 mt-2" defaultValue="..." onChange={() => this.setValue("supermarket", this.value)}>
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
                            <Form.Control as="select" className="w-25 mx-3 mt-2" defaultValue="...">
                                <option>...</option>
                                <option>once</option>
                                <option>twice</option>
                                <option>three times or more</option>
                            </Form.Control>
                            a week.
                        </Form.Group>
                    </ListGroup.Item>
                    <ListGroup.Item>
                        <Form.Group as={Row} className="form-row">
                            I'll be living in
                            <Form.Control as="select" className="w-25 mx-3 mt-2" defaultValue="...">
                                <option>...</option>
                                <option>in London</option>
                                <option>Elsewhere</option>
                            </Form.Control>
                        </Form.Group>
                    </ListGroup.Item>
                    <ListGroup.Item>
                        <Form.Group as={Row} className="form-row">
                            I'm
                            <Form.Control as="select" className="w-25 mx-3 mt-2" defaultValue="...">
                                <option>...</option>
                                <option>a lightweight</option>
                                <option>average</option>
                                <option>a heavyweight</option>
                            </Form.Control>
                        </Form.Group>
                    </ListGroup.Item>
                    <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
                </ListGroup>
            </Card>
                {this.state.button}
            </div>

        );
    }

}
