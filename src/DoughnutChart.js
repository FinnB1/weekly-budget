import React from 'react';
import './App.css';
import { Doughnut } from 'react-chartjs-2';




export default class DoughnutChart extends React.Component {
    constructor(props) {
        super(props);
    }

    setValue(key, val) {
        this.setState({
            [key]: val,
        });
    }

    render() {
        let data;
        data = { datasets:[{
            label: "£ per week",
                data: [
                    this.props.data.groceries,
                    this.props.data.drinks,
                    this.props.data.transport,
                    5
                ],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.8)',
                    'rgba(54, 162, 235, 0.8)',
                    'rgba(255, 206, 86, 0.8)',
                ],
            }],
            labels:['Groceries', 'Drinks', 'Transport', "Other Costs"] }
        return (
            <div>
                <Doughnut data={data} />
            </div>

        );
    }

}
