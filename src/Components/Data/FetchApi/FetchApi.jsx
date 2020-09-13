import React , {Component} from 'react';
import axios from 'axios';
import DTCTable from "../../UI/Table/Table";

class FetchApi extends Component {
    constructor(props) {
        super(props);
   this.state = {
       apiURL:'http://dtcdashboard.pythonanywhere.com/api/v1/employee/',
       data: []
   }
    }
componentDidMount(){
    axios({
        method: 'GET',
        url: this.state.apiURL,
    }).then(response => {
        console.log(response)
        this.setState({data: response.data})
    });

}
    render() {
        return (
            <div>
                <DTCTable data = {this.state.data} />
            </div>
        );
    }

}

export default FetchApi;