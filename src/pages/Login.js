import React from 'react';
import { Link } from "react-router-dom";
import { Row, Col, Form, Button, Image } from 'react-bootstrap';
import * as Icon from 'react-feather';
import AuthHelper from '../helpers/AuthHelper';

// Logo image file path
import Logo from '../assets/img/logo-myas.png';

class Login extends React.Component {
    constructor(...args) {
        super(...args);
        this.state = { validated: false };
    }
    onLoginHandler = (event) => {
      //  this.props.history.push("/");
      
      this.setState({ validated: true });
      const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }else{
            AuthHelper.authenticateUser('klIIUGGhjkkldhd88998383920nmkmkjhhgj');
            this.props.history.push("/");
        }
    }
    
    render() {
        const { validated } = this.state;
        return (
            <div className="auth-main-content auth-bg-image">
                <div className="d-table">
                    <div className="d-tablecell">
                        <div className="auth-box">
                            <Row>
                                <Col md={6}>
                                    <div className="form-left-content">
                                        <div className="auth-logo">
                                            <Image src={Logo} alt="Logo" />
                                        </div>
                                    </div>
                                    <div className="text-center">
                                        <Link
                                            to="/forgot-password/"
                                            className="fp-link">
                                            Terms of Use </Link> | <Link
                                                to="/forgot-password/"
                                                className="fp-link">Privacy Policy
                                    </Link>
                                    </div>
                                </Col>

                                <Col md={6}>
                                    <div className="form-content">
                                        <h1 className="heading">Log In</h1>

                                        <Form 
                                        onSubmit={e => this.onLoginHandler(e)}
                                        noValidate
                                        validated={validated}>
                                            <Form.Group controlId="validationCustom01">
                                                <Form.Label>Email address</Form.Label>
                                                <Form.Control type="email" required />
                                                <Form.Control.Feedback type="invalid">
                                                    Please choose an email.
                                                </Form.Control.Feedback>
                                            </Form.Group>

                                            <Form.Group controlId="validationCustom02">
                                                <Form.Label>Password</Form.Label>
                                                <Form.Control type="password" required />
                                                <Form.Control.Feedback type="invalid">
                                                    Please choose a password.
                                                </Form.Control.Feedback>
                                            </Form.Group>

                                            <div className="text-center">
                                                <Button variant="primary" type="submit">
                                                    Log In
                                                </Button>

                                                <Link
                                                    to="/forgot-password/"
                                                    className="fp-link">
                                                    Forgot Password?
                                                </Link>
                                            </div>
                                        </Form>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Login;