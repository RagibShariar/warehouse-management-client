import React from 'react';
import { Button, Carousel } from 'react-bootstrap';
import { RotatingLines } from 'react-loader-spinner';
import { Link } from 'react-router-dom';
import useBikes from '../../hooks/useBikes';
import './Home.css';
import ItemCard from './ItemCard';
import Trip from './Trip';

const Home = () => {
    //inserting bikes from custom hook
    const [bikes] = useBikes();
    return (
        <div id='home'>

            {/* * * *  banner * * * * */}
            <Carousel className=''>
                <Carousel.Item>
                    <img style={{height:'600px'}}
                        className="d-block w-100 "
                        src="https://i.ibb.co/nnQFTZz/Mens-Cologne-Web.jpg"
                        alt="First slide"
                    ></img>
                    <Carousel.Caption>
                        <div className="banner-container">
                            <h1 className='banner-heading'>HUGE COLLECTION</h1>
                            <p>DECANTS ARE AVAILABLE TOO!</p>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img style={{height:'600px'}}
                        className="d-block w-100"
                        src="https://i.ibb.co/nnQFTZz/Mens-Cologne-Web.jpg"
                        alt="First slide"
                    ></img>
                    <Carousel.Caption>
                        <div className="banner-container text-uppercase">
                            <h1 className='banner-heading'>Ragib Perfume Arena</h1>
                            <p>Ragib Perfume Arena, the fragrance of jannah.</p>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>

            {/* Inventory items */}
            <div className='mt-5 mx-auto row w-90'>
                {
                    bikes.length === 0 ?
                        <div className='mx-auto my-5'>
                            <div className='mx-auto w-25  justify-content-center d-flex'>
                                {/* < color="grey" strokeColor="#FF5733" className='d-block mx-auto' /> */}
                                <RotatingLines width="100" strokeColor="#FF5733" className='d-block mx-auto' />
                            </div>
                        </div>
                        :
                        bikes.slice(0, 6).map(bike => <ItemCard key={bike._id} bike={bike} />)
                }
                <Button as={Link} to='/manage-items' variant="primary" className='d-block w-50 mx-auto'>Manage Inventory</Button>
            </div>

            {/* Trip section */}
            <section className='container my-5'>
                <Trip></Trip>
            </section>
            <hr className='w-75 mx-auto d-block my-5' />
            <section className='container my-5'>
                <div className='justify-content-between align-items-center custom-grid'>
                    <div className="rounded d-flex justify-content-center align-items-center custom-bg-light custom-height">
                        <img src='https://i.ibb.co/0JZH0Kq/Ajmal-Senora-75ml-EDP-for-women-1.jpg' className='trip-img' alt='not found' />
                    </div>
                    <div className="d-flex flex-column custom-bg-dark rounded custom-height justify-content-center align-items-center px-5">
                        <h2 className='text-center my-3'>OUR<span className='text-primary'> COMMITMENT</span></h2>
                        <p className='text-center'>
                        We understand that, when anyone is looking for an online solution, they just want to be sure about the products. We never sell any fake or counterfeit products. That’s our commitment to our buyers. You can always get 100% original perfumes from us.
                        </p>
                        <Button as={Link} to='/manage-items' className='btn btn-primary mt-1'>Choose now</Button>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;