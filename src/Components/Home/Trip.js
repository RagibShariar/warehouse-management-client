import React from 'react';
import './../Inventory/Inventory.css';
const Trip = () => {
    return (
        <div>
            <h1 className='text-dark text-center my-5'>Why Choose Us?</h1>
            <div className='justify-content-between align-items-center custom-grid'>
                <div className="d-flex flex-column custom-bg-dark rounded custom-height justify-content-center align-items-center px-5">
                    <h3 className='text-center my-3'>ABOUT<span className='text-primary'> US</span></h3>
                    <p className='text-center'>
                    Ragib Perfume Arena is the biggest website in Bangladesh offering huge collection of branded perfumes, online. All of our perfumes are 100% original and branded perfumes. We don’t sell fake or counterfeit products.
                    </p>
                    <button className='btn btn-primary mt-1'>Browse More</button>
                </div>
                <div className="rounded d-flex justify-content-center align-items-center custom-bg-light custom-height">
                    <img src='https://i.ibb.co/NW3Vshf/Ariana-Grande-Cloud-EDP-for-Women-Bottle-450x450.jpg' className='trip-img' alt='not found' />
                </div>
            </div>
        </div>
    );
};

export default Trip;