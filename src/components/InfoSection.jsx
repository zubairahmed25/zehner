import React from 'react';
import Design from "../assets/img/Design.svg";
import Tested from "../assets/img/Tested.svg";
import Technology from "../assets/img/Technology.svg";

function InfoSection(props) {
    return (
        <div className=" py-5">
            <div className="container-md">
                <div className="d-flex overflow-auto">
                    <div className="col-4" style={{minWidth:'250px'}}>
                        <div className="text-center">
                            <div style={{ height: '74px' }}>
                                <img src={Design} alt="Design" />
                            </div>
                            <h5 className='mt-3'>
                                Functional Design
                                </h5>
                            <p style={{ color: "#636363" }} className="px-lg-5">
                                Products designed to make parents lives easier
                                </p>
                        </div>
                    </div>
                    <div className="col-4" style={{minWidth:'250px'}}>
                        <div className="text-center">
                            <div style={{ height: '74px' }}>
                                <img src={Tested} alt="Parent Tested" />
                            </div>
                            <h5 className='mt-3'>
                                Parent Tested
                                </h5>
                            <p style={{ color: "#636363" }} className="px-lg-5">
                                Tested with real parents to ensure the best results
                                </p>
                        </div>
                    </div>
                    <div className="col-4" style={{minWidth:'250px'}}>
                        <div className="text-center">
                            <div style={{height:'74px'}}>
                            <img src={Technology} alt="Design" />
                            </div>
                            <h5 className='mt-3'>
                                Technology
                                </h5>
                            <p style={{ color: "#636363" }} className="px-lg-5">
                                Tested w(FPO)arents to ensure the best results
                                </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default InfoSection;