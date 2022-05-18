import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const Footer = () => {
    return (
        <div className='mt-5 bg-dark text-light pt-3'>
            {/* <br /> */}
            <Container className='py-5'>
                <Row className='g-5 mx-auto'>
                    <Col lg={4} md={6} sm={12}>
                        <h3 className='mb-4'>ABOUT ME</h3>
                        <p>
                            My name is RAGIB SHARIAR. I'm a newbie full stack web developer.
                            Currently I am learning full stack web development from programming hero.
                        </p>
                    </Col>
                    <Col lg={4} md={6} sm={12}>
                        <h3 className='mb-4'>CONTACT</h3>
                        <p>Email: srragib@gmail.com</p>
                        <p>Phone: 01918585333</p>

                    </Col>
                    <Col lg={4} md={6} sm={12}>
                        <h3 className='mb-4'>FOLLOW ME</h3>
                        <p><a className='text-white' href="#">Facebook</a></p>
                        <p><a className='text-white' href="#">Twitter</a> </p>
                        <p><a className='text-white' href="#">Instagram</a></p>

                    </Col>
                </Row>
            </Container>
                <Container className='text-center mt-4'>
                <Row>
                    <Col>
                    <p>Copyright &copy; All rights reserved to RAGIB PERFUME ARENA </p>
                    </Col>
                </Row>
                </Container>
        </div>
    );
};

export default Footer;