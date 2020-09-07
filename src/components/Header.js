import React from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from "reactstrap";

export default class Header extends React.Component {
  constructor(props) {
    super(props);

    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.state = {
      collapsed: true
    };
  }

  toggleNavbar() {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }
  render() {
    return (
      <div className="header">
        <Navbar color="faded" light>
          <NavbarBrand href="/" className="mr-auto">
            <span className="miniTitre">Space Meet</span>
          </NavbarBrand>
          <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
          <Collapse isOpen={!this.state.collapsed} navbar>
            <Nav navbar>
              <NavItem>
                <NavLink href="./">Connexion</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="./home">Prétendants</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="./match">Match Ultime</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="./search">Trouver l'âme soeur</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}
