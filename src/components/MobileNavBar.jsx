import React, { useState } from 'react';
import logo from "../assets/img/LOgo.svg";
import Search from "../assets/img/Search.svg";
import Account from "../assets/img/Account.svg";
import Cart from "../assets/img/Cart.svg";
import { FaBars } from "react-icons/fa";
import SideNavBar from "./SideNavBar";
import { GrClose } from "react-icons/gr";
function MobileNavBar(props) {
    const [active, setActive] = useState(false)
const [search,setSearch]=useState(false)

    return (
        <div className=''>
            <nav className="myNavBar" style={{ height: '78px' }}>
                <ul className="myNavBar-List">
                    <li onClick={() => setActive(!active)}>
                        <FaBars />
                    </li>
                    <li>
                        <a href="/">
                            <img src={Account} alt="Account" />
                        </a>
                    </li>
                </ul>
                <img src={logo} alt="logo" />
                <ul className="myNavBar-List">

                    <li  onClick={()=>setSearch(!search)}>
                            <img src={Search} alt="Search" />
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
            <SideNavBar active={active} />
           
         
        </div>
    );
}

export default MobileNavBar;