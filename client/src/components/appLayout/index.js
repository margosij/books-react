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
        .then(res => {console.log(res, "what's in the res")
            this.setState({ savedBooks: res })})
        .catch(err => console.log(err))
    }

    handleDeleteButton = event => {
        const deleteThisBook = event
        console.log(event, "finding the target")
        API.deleteBook(deleteThisBook)
        .then(res => this.componentDidMount())
        .catch(err => console.log(err))
    }

    render() {
        if(this.state.savedBooks && !this.state.savedBooks.length) return "Loading!";
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