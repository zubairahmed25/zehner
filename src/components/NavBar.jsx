import React, { useState } from 'react';
import logo from "../assets/img/LOgo.svg";
import Location from "../assets/img/Location.svg";
import Search from "../assets/img/Search.svg";
import Account from "../assets/img/Account.svg";
import Cart from "../assets/img/Cart.svg";
import ShopDrop from './ShopDrop';
import { GrClose } from "react-icons/gr";
function NavBar(props) {
const [search,setSearch]=useState(false)
    return (
        <div className="">
            <nav className="myNavBar">
                <ul className="myNavBar-List">
                    <li>
                        <div className="myDropDown">
                            <div className="title">
                                Shop
        </div>
                            <ShopDrop />
                        </div>

                    </li>
                    <li>
                        <a href="/">
                            About 4moms
                </a>
                    </li>
                </ul>
                <img src={logo} alt="logo" />
                <ul className="myNavBar-List">
                    <li className='position-relative'>
                        <a href="/" className='d-flex align-items-center'>
                            <img src={Location} alt="location" className="me-1" />
                            United States
        </a>
                        <ul className="countryDrop">
                            <li className='active'>
                                United States
                            </li>
                            <li>
                                Canada
                            </li>
                            <li>
                                United Kingdom
                            </li>
                        </ul>
                    </li>
                    <li>
                        <a href="/">
                            Support
            </a>
                    </li>
                    <li onClick={()=>setSearch(!search)}>
                            <img src={Search} alt="Search" />
                    </li>
                    <li>
                        <a href="/">
                            <img src={Account} alt="Account" />
                        </a>
                    </li>
                    <li>
                        <a href="/">
                            <img src={Cart} alt="Cart" />
                        </a>
                    </li>
                </ul>
          <div className={`searchBox ${search?'active':''}`}>
          <div className="form-control-custom">
          <img src={Search} alt="Search" />
              <input type="text" name="" id=""/>
          </div>
              <button  onClick={()=>setSearch(!search)}>
                  <GrClose/>
              </button>
          </div>
            </nav>
        </div>
    );
}

export default NavBar;