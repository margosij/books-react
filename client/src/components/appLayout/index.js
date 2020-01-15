import React, { Component } from 'react'
import Jumbotron from "../Jumbotron"
import API from "../../utils/API"
import { Container } from "../Grid"
import SavedLayout from "../savedLayout"


class SaveBooks extends Component {
    state = {
        savedBooks: []
    }

    componentDidMount() {
        API.getBook()
        .then(res => this.setState({ savedBooks: res.data }))
        .catch(err => console.log(err))
    }

    handleDeleteButton = id => {
        API.deleteBook(id)
        .then(res => this.componentDidMount())
        .catch(err => console.log(err))
    }

    render() {
        return(
            <Container>
                <Jumbotron />
                <Container>
                    <SavedLayout savedBooks={this.state.savedBooks} handleDeleteButton={this.handleDeleteButton} />
                </Container>
            </Container>
        )
    }
}

export default SaveBooks