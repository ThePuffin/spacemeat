import React, { Component } from "react";
import axios from "axios";
import {
<<<<<<< HEAD
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
} from "reactstrap";
import CheckBox from "./CheckBox";

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      api: [],
      filtre: [4],
      filtreApi: []
    };
    this.update = this.update.bind(this);
    this.tri = this.tri.bind(this);
  }
  componentWillMount() {
    axios
      .get(`https://cdn.rawgit.com/akabab/starwars-api/0.2.1/api/all.json`)
      .then(res => {
        const api = res.data;
        this.setState({ api });
      });
  }
  tri() {
    if (this.state.filtre.length !== 0) {
      if (this.state.filtre.includes(1)) {
        const filtreApi = this.state.api.filter(elt => elt.gender !== "female");
        return this.setState({ filtreApi });
      } else {
        const filtreApi = this.state.api.filter(elt => elt.gender !== "male");
        return this.setState({ filtreApi });
      }
    }
  }
  update(filtre) {
    console.log(this.state.filtre);
    this.setState({ filtre });

    this.tri();
    console.log(this.state.filtre);
  }

  render() {
    return (
      <div>
        <Container>
          <h1>Search</h1>
          <div>
            <CheckBox maj={this.update} pression={this.tri} />
          </div>
          <Row>
            {this.state.filtreApi.length !== 0
              ? this.state.filtreApi.map(elt => (
                  <Col sm="3">
                    <Card key={elt.id}>
                      <CardImg src={elt.image} />
                      <CardText>
                        <Row>
                          <Col sm="6">{elt.name}</Col>
                          <Row>
                            <Col sm="6" />
                          </Row>
                        </Row>
                      </CardText>
                    </Card>
                  </Col>
                ))
              : console.log("lol")}
          </Row>
        </Container>
      </div>
    );
  }
}

=======
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

            return this.setState({filtreApi})
        } else {
            const filtreApi = this
                .state
                .api
                .filter(elt => elt.gender === "male")
            this.setState({filtreApi})
        }
    }
    augmenter() {
        this.setState({
            compteur: this.state.compteur + 1
        });
    }
    render() {
        console.log(this.state.compteur);
        const page1 = this
            .state
            .api
            .map((elt, i) => <CardPute
                height={elt.height}
                name={elt.name}
                eyeColor={elt.eyeColor}
                image={elt.image}
                count={this.augmenter}/>);
        console.log(page1);
        const page2 = this
            .state
            .filtreApi
            .map((elt, i) => { < CardPute
                height = {
                    elt.height
                }
                name = {
                    elt.name
                }
                eyeColor = {
                    elt.eyeColor
                }
                image = {
                    elt.image
                }
                count = {
                    this.augmenter
                } />
            });

        return page2.length > 0
            ? (

                <div>
                    <h1>Choose your meat</h1>
                    <CheckBox maj={this.update} pression={this.tri}/> {page2[this.state.compteur]}
                </div>
            )
            : (
                <div>
                    <h1>Choose your meat</h1>
                    <CheckBox maj={this.update} pression={this.tri}/> {page1[this.state.compteur]}
                </div>
            );
    }
}
>>>>>>> 499a53e4d5d330ff498db52a13548ffd6458ce46
export default Search;
