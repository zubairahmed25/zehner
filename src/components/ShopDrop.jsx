import React from 'react';
import { Tab, Row, Col, Nav } from 'react-bootstrap';
import shopAllPic from "../assets/img/Image.jpg";
import seatsPic from "../assets/img/Image (1).jpg";

function ShopDrop(props) {
    var shopDropData = [
        {
            id: 1,
            title: "Shop All",
            uniqueId: "shopAll"
        },
        {
            id: 2,
            title: "Seats",
            uniqueId: "seats"
        },
        {
            id: 3,
            title: "Playards",
            uniqueId: "playards"
        },
        {
            id: 4,
            title: "Bassinets",
            uniqueId: "bassinets"
        },
        {
            id: 5,
            title: "Bath",
            uniqueId: "bath"
        },
        {
            id: 6,
            title: "Mobile",
            uniqueId: "mobile"
        },
        {
            id: 7,
            title: "Accessories",
            uniqueId: "accessories"
        },
        {
            id: 8,
            title: "Spare Parts",
            uniqueId: "spareParts"
        },
    ]
    return (
        <div className='shopdropMain'>
            <Tab.Container id="left-tabs-example" defaultActiveKey="shopAll">
                <Row>
                    <Col sm={3}>
                        <Nav variant="pills" className="flex-column">
                            {
                                shopDropData.map((obj, i) => {
                                    return <>
                                        <Nav.Item key={i}>
                                            <Nav.Link eventKey={obj.uniqueId}>
                                                <span>
                                                    {
                                                        obj.title
                                                    }
                                                </span>
                                                <svg width="8" height="16" viewBox="0 0 8 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M1 1.01099L7.31079 7.886L1.18769 15.0107" stroke="#17A7E0" strokeMiterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                                                </svg>

                                            </Nav.Link>
                                        </Nav.Item>
                                        {
                                            obj.id === 6 ? <hr key={i*10} /> : <></>
                                        }
                                    </>
                                })
                            }
                        </Nav>
                    </Col>
                    <Col sm={9}>
                        <Tab.Content>

                            <Tab.Pane eventKey={shopDropData[0].uniqueId}>
                                <div className='dropDownImg mx-auto pt-2'>
                                    <img src={shopAllPic} alt="shopAllPic" className="img-fluid" />
                                    <p className='mt-3'>
                                        High Tech Baby Products, Designed with Multi-tasking Parents in Mind. Believe in Better.
                                    </p>
                                </div>
                            </Tab.Pane>
                            <Tab.Pane eventKey={shopDropData[1].uniqueId}>
                            <div className='dropDownImg mx-auto pt-2'>
                                    <img src={seatsPic} alt="seatsPic" className="img-fluid" />
                                    <p className='mt-3'>
                                    Comfortable Seats for Infants That Offer a Variety of Features like motions and articulation. 
                                    </p>
                                </div>
        </Tab.Pane>
                            <Tab.Pane eventKey={shopDropData[2].uniqueId}>
                                2
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem doloremque amet exercitationem minus maiores, ut consequuntur harum necessitatibus sint qui cumque fugiat, dolore laboriosam ducimus quisquam id ex dignissimos nulla?
        </Tab.Pane>
                            <Tab.Pane eventKey={shopDropData[3].uniqueId}>
                                3
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem doloremque amet exercitationem minus maiores, ut consequuntur harum necessitatibus sint qui cumque fugiat, dolore laboriosam ducimus quisquam id ex dignissimos nulla?
        </Tab.Pane>
                            <Tab.Pane eventKey={shopDropData[4].uniqueId}>
                                4
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem doloremque amet exercitationem minus maiores, ut consequuntur harum necessitatibus sint qui cumque fugiat, dolore laboriosam ducimus quisquam id ex dignissimos nulla?
        </Tab.Pane>
                            <Tab.Pane eventKey={shopDropData[5].uniqueId}>
                                5
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem doloremque amet exercitationem minus maiores, ut consequuntur harum necessitatibus sint qui cumque fugiat, dolore laboriosam ducimus quisquam id ex dignissimos nulla?
        </Tab.Pane>
                            <Tab.Pane eventKey={shopDropData[6].uniqueId}>
                                6
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem doloremque amet exercitationem minus maiores, ut consequuntur harum necessitatibus sint qui cumque fugiat, dolore laboriosam ducimus quisquam id ex dignissimos nulla?
        </Tab.Pane>
                            <Tab.Pane eventKey={shopDropData[7].uniqueId}>
                                7
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem doloremque amet exercitationem minus maiores, ut consequuntur harum necessitatibus sint qui cumque fugiat, dolore laboriosam ducimus quisquam id ex dignissimos nulla?
        </Tab.Pane>
                        </Tab.Content>
                    </Col>
                </Row>
            </Tab.Container>
        </div>
    );
}

export default ShopDrop;