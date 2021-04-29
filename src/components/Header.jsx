import React from 'react';
import chair from "../assets/img/chair.png";

function Header(props) {
    return (
        <header class="bg-secondary overflow-hidden" style={{ height: '600px' }}>
            <div className="container h-100 py-2">
                <div className="row h-100 align-items-center">
                    <div className="col-md-6 order-1 order-md-0">
                        <img src={chair} className='img-fluid-400 mx-auto d-block' alt="chair" />
                    </div>
                    <div className="col-md-6  order-0 order-md-1 ">
                        <h1 className='text-center text-md-end'>
                            Freeing up your hands.
                            So you can do more.
</h1>
                        <p className='text-center text-md-end w-75 ms-md-auto me-md-0 mx-auto'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet.
</p>
                        <button className="btn btn-dark btn-lg px-4 mx-auto ms-md-auto me-md-0 d-block mt-md-5 mb-4">
                            Shop Bassinets
</button>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;