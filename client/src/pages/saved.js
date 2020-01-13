import React, { Component } from "react"
import Jumbotron from "../../../src/components/Jumbotron"
import { Row, Col, Container } from "../../../src/components/Grid"
import API from "../utils/API"

class Saved extends Component {
    state = {
        savedBooks: [],
        loaded: false
    }


    componentDidMount() {
        this.loadSavedBooks()
    }

    loadSavedBooks = () => {
        this.setState({ loading: true })
        API.getBook().then(res => {
            this.setState({ savedBooks: res, loaded: false })
        })
        .catch(err => console.log(err))
    }

    deleteBooks = event => {
        API.deleteBook(event.target.id).then(res => console.log(res)).catch(err => console.log(err))
    }

    render() {
        return (
            <>
            <Jumbotron />
            <Row>
                <Column>
                    {this.state.savedBooks ? (
                        <List
                        
                    )}

                </Column>
            </Row>
            </>
        )
    }
}