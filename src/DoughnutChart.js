import React from 'react';
import './App.css';
import { Doughnut } from 'react-chartjs-2';




export default class DoughnutChart extends React.Component {
    constructor(props) {
        super(props);
    }



    render() {
        let data;
        data = [
                {
                    value: 300,
                    color:"#F7464A",
                    highlight: "#FF5A5E",
                    label: "Red"
                },
        {
            value: 50,
                color: "#46BFBD",
            highlight: "#5AD3D1",
            label: "Green"
        },
        {
            value: 100,
                color: "#FDB45C",
            highlight: "#FFC870",
            label: "Yellow"
        }
    ]
        return (
            <div>
                <Doughnut data={data} />
            </div>

        );
    }

}
