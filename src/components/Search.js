import React, {Component} from 'react';
import axios from 'axios';
import {
    Card,
    CardImg,
    CardText,
    CardBody,
    CardTitle,
    CardSubtitle,
    Button,
    ButtonGroup,
    Container,
    Row,
    Col
} from 'reactstrap';
import CheckBox from './CheckBox'
import CardPute from './CardPute'

class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            api: [],
            filtre: [],
            filtreApi: [],
            compteur: 0
        };
        this.update = this
            .update
            .bind(this);
        this.tri = this
            .tri
            .bind(this);
        this.augmenter = this
            .augmenter
            .bind(this)
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

        if (this.state.filtre !== 1) {
            const filtreApi = this
                .state
                .api
                .filter(elt => elt.gender === "female")
            console.log(filtreApi);
            return this.setState({filtreApi})
        } else {
            const filtreApi = this
                .state
                .api
                .filter(elt => elt.gender === "male")
            console.log(console.log(filtreApi));
            this.setState({filtreApi})
        }
    }
    augmenter() {
        this.setState({
            compteur: this.state.compteur + 1
        });
    }
    render() {
        const page1 = this
            .state
            .api
            .map((elt, i) => <CardPute
                height={elt.height}
                name={elt.name}
                eyeColor={elt.eyeColor}
                image={elt.image}
                count={this.augmenter}/>);
        const page2 = this
            .state
            .filtreApi
            .map((elt, i) => <CardPute
                height={elt.height}
                name={elt.name}
                eyeColor={elt.eyeColor}
                image={elt.image}
                count={this.augmenter}/>);

        return page2.length > 0
            ? (

                <div>
                    <h1>Choose your meat's taste</h1>
                    <CheckBox maj={this.update} pression={this.tri}/> {page2[this.state.compteur]}
                </div>
            )
            : (
                <div>
                    <h1>Choose your meat's taste</h1>
                    <CheckBox maj={this.update} pression={this.tri}/> {page1[this.state.compteur]}
                </div>
            );
    }
}
export default Search;
