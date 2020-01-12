import React, { Component } from 'react'
import Jumbotron from "../Jumbotron"
import Nav from "../Nav"
import Button from "../Button"
import API from "../../utils/API"
import { Container, Row, Col } from "../Grid"
import Input from "../Form"
import { BookList, BookListItem } from "../BookList"

class Layout extends Component{
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
            <Nav/>
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
                                            key={book.volumeInfo.etag}
                                            title={book.volumeInfo.title}
                                            authors={book.volumeInfo.authors}
                                            image={book.volumeInfo.imageLinks.smallThumbnail}
                                            link={book.volumeInfo.selfLink}
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

export default Layout