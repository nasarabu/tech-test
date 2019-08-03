import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Toast from 'react-bootstrap/Toast';
import logo from './assets/cropped.png';
import './App.css';

class App extends Component{
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            toastState: false,
        };
        this.message = '';
    }

    toggleToast = () => {
        this.setState({ toastState: !this.state.toastState });
    };

    onChangeEmail = (event) => {
        this.setState({ email: event.target.value });
    };

    onChangePassword = (event) => {
        this.setState({ password: event.target.value });
    };

    onClickLogin = () => {
        let { email, password } = this.state;
        if(email === '' || password === '') {
            this.message = 'All fields are required!';
            this.toggleToast();
        }
    };

    render() {
        return (
            <div id={'app'}>
                <Container fluid>
                    <Row noGutters>
                        <Col/>
                        <Col xs={12} sm={6} lg={4}>
                            <div id={'wr-lg-bx'}>
                                <div id={'mb-lg-bx'}>
                                    <Image src={logo}/>
                                    <div id={'lg-txt'}>Expert Evidence</div>
                                    <Form>
                                        <Form.Group controlId={'formBasicEmail'}>
                                            <Form.Label>Email</Form.Label>
                                            <Form.Control type={'email'} onChange={this.onChangeEmail} placeholder={'Enter email'} />
                                            <Form.Text className={'text-muted'}>
                                                We'll never share your email with anyone else.
                                            </Form.Text>
                                        </Form.Group>
                                        <Form.Group controlId={'formBasicPassword'}>
                                            <Form.Label>Password</Form.Label>
                                            <Form.Control type={'password'} onChange={this.onChangePassword} placeholder={'Password'} />
                                            <Form.Text>
                                                <a id={'psw-rst-lnk'} href={'localhost:3000'}>Forgot Password?</a>
                                            </Form.Text>
                                        </Form.Group>
                                    </Form>
                                    <Form.Group controlId={'formBasicCheckbox'}>
                                        <Form.Check type={'checkbox'} label={'Keep me logged in?'} />
                                    </Form.Group>
                                    <Button
                                        onClick={this.onClickLogin}
                                        variant={'primary'}
                                        id={'lgn-btn'}
                                    >
                                        Login
                                    </Button>
                                    <div id={'dnt-hav-act'}>
                                        <a href={'localhost:3000'}>Dont have an account?</a>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col>
                            <Toast
                                id={'univ-toast'}
                                show={this.state.toastState}
                                onClose={this.toggleToast}
                                delay={3000}
                                autohide
                            >
                                <Toast.Header>
                                    <strong className={'mr-auto'}>Note</strong>
                                </Toast.Header>
                                <Toast.Body id={'univ-toast-body'}>
                                    {this.message}
                                </Toast.Body>
                            </Toast>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default App;
