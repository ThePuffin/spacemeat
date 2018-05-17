import React, {Component} from 'react';
import axios from 'axios';
import {
    Card,
    CardImg,
    CardText,
    CardBody,
    CardTitle,
    Button,
    ButtonGroup,
    Container,
    Row,
    Col
} from 'reactstrap';
import CheckBox from './CheckBox'

class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            api: [],
            filtre: [],
            filtreApi: [],
            loaded: false
        };
        this.update = this
            .update
            .bind(this);
        this.tri = this
            .tri
            .bind(this);
    }
    componentWillMount() {
        axios
            .get(`https://cdn.rawgit.com/akabab/starwars-api/0.2.1/api/all.json`)
            .then(res => {
                const api = res.data;
                this.setState({api})
            })
    }

    update(filtre) {
        const papa = Promise.resolve(this.setState({filtre}))
        return papa.then((value) => {
            this.tri()
        })

    }
    tri() {
        if (this.state.filtre === 1) {
            const filtreApi = this
                .state
                .api
                .filter(elt => elt.gender === "male")
            console.log(this.state.filtre);
            return this.setState({filtreApi})
        } else {
            const filtreApi = this
                .state
                .api
                .filter(elt => elt.gender === "female")

            this.setState({filtreApi})
        }
    }

    render() {
        return (
            <div>
                <Container>
                    <h1>Search</h1>
                    <div>
                        <CheckBox maj={this.update} pression={this.tri}/>
                    </div>

                </Container>
            </div>

        );
    }
}

export default Search;