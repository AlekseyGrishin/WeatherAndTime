import React, { Component } from 'react'
import { Container, Navbar, Nav, FormControl, Form, Button } from 'react-bootstrap'
import logo from './logo192.png'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"
import Home from "../pages/Home.js"
import Weather from "../pages/Weather.js"
import Clock from "../pages/Clock.js"
import Wikipedia from "../components/WikipediaList.js"
import "./Header.css";


export default class Header extends Component {
    render() {
        return (
            <>
                <Navbar fixed="top" collapseOnSelect expand="md" bg="light" variant="light">
                    <Container>
                    <Navbar.Brand href="/">
                        <img src={logo} 
                        height="30" 
                        width="30" 
                        className="d-line-block align-top" 
                        alt="Logo" />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mr-auto">
                            <Nav.Link href="/Home">Главная </Nav.Link> 
                           <Nav.Link href="/Clock">Время </Nav.Link> 
                           <Nav.Link href="/Weather">Погода </Nav.Link> 
                           <Nav.Link href="/Wikipedia">Статьи из вики </Nav.Link> 
                        </Nav>
                        <Form inline>
                            <FormControl
                                type="text"
                                placeholder="..."
                                className="mr-sm-2"
                            />
                        <Button variant="outline-info">Поиск</Button>
                        </Form>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
                <Router>
                 <Switch> 
                     <Route exact path="/Home" component={Home} />
                     <Route exact path="/Clock" component={Clock} />
                     <Route exact path="/Weather" component={Weather} />
                     <Route exact path="/Wikipedia" component={Wikipedia} />
                 </Switch>  
                </Router>
            </>
        )
    }
}
