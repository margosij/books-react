import React, { Component } from 'react'
import Jumbotron from "../components/Jumbotron"
import Button from "../components/Button"
import API from "../utils/API"
import { Container, Row, Col } from "../components/Grid"
import Input from "../components/Form"
import { BookList, BookListItem } from "../components/BookList"
// import ButtonContainer from "../ButtonContainer"

class Books extends Component{
    state = {
        books: [],
        bookSearch: ""
    }
    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        })
    }
    handleSubmitForm = event => {
        event.preventDefault()
        API.searchBooks(this.state.bookSearch)
        .then(res => this.setState({ books: res.data.items }))
        .catch(err => console.log(err))
    }

    render() {
        return(
            <div>
                <Jumbotron/>
                <Container>
                    <Row>
                        <Col size="md-12">
                            <form>
                                <Container>
                                    <Row>
                                        <Col size="xs-9 sm-10">
                                            <Input
                                            name="bookSearch"
                                            value={this.state.bookSearch}
                                            onChange={this.handleInputChange}
                                            placeholder="Search for a book"
                                            />
                                        </Col>
                                        <Col size="xs-3 sm-2">
                                            <Button
                                            onClick={this.handleSubmitForm}
                                            type="success"
                                            className="input-lg"
                                            >
                                            Search
                                            </Button>
                                        </Col>
                                    </Row>
                                </Container>
                            </form>
                        </Col>
                    </Row>
                    <Row>
                        <Col size="xs-12">
                            {!this.state.books.length ? (
                                <h1 className="text-center">No Books to Display</h1>
                            ) : (
                                <BookList>
                                    {this.state.books.map(book => {
                                        return(
                                            <BookListItem
                                            key={book.key}
                                            title={book.volumeInfo.title}
                                            description={book.volumeInfo.description}
                                            authors={book.volumeInfo.authors}
                                            image={book.volumeInfo.imageLinks.smallThumbnail}
                                            link={book.accessInfo.webReaderLink}
                                            date={book.volumeInfo.publishedDate}
                                            />
                                        )
                                    })}
                                </BookList>
                            )}
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}

export default Books