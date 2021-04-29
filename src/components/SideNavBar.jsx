import React from 'react';

function ShopDropList({active}) {
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
        <div className={`sideNavBar ${active?'active':''}`}>
             <ul className=''>
               {
                   shopDropData.map((obj,i)=>{
                       return <li key={i}>
{
    obj.title
}
                       </li>
                   })
               }
            </ul>
        </div>
    );
}

export default ShopDropList;