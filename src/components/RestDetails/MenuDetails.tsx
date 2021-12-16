import React, { FC, useState } from 'react';

interface ImenuDetailProps {
    menuData?: any,
    finalOrder?: any
}

const MenuDetails: FC<ImenuDetailProps> = (propsdata) => {
    let orderIds: any | undefined = [];
    const [count, setCount] = useState(0);

    function addOrder(menuId: number) {
        setCount(count + 1)
        orderIds.push(menuId);
        propsdata.finalOrder(orderIds);
    }

    function removeOrder(menuId: number) {
        if (count > 0) {
            setCount(count - 1)
            orderIds.slice(orderIds.indexOf(menuId), 1);
            propsdata.finalOrder(orderIds)
        }
    }

    // const addToMenuList = (menuIds: any) => {
    //     if (menuIds.length > 0) {
    //         return menuIds.map((item: any, index: number) => {
    //             return (
    //                 <b key={index}>{item.menu_id},&nbsp;&nbsp;</b>
    //             )
    //         })
    //     }
    // }

    const menuDetail = (menuData: any) => {
        if (menuData.length > 0) {
            return menuData.map((item: any) => {
                return (
                    <div key={item.menu_id}>
                        <div className="col-md-7 items">
                            <b>{item.menu_id}</b> &nbsp;
                            <img src={item.menu_image} style={{ height: 80, width: 80 }} alt={item.menu_name} />
                            &nbsp;&nbsp; {item.menu_name} - Rs.{item.menu_price}
                        </div>
                        <div className="col-md-4">
                            <button className="btn btn-primary" onClick={() => addOrder(item.menu_id)}>
                                <span className="glyphicon glyphicon-plus"></span>
                            </button> &nbsp;
                            <span>{count}</span>&nbsp;
                            <button className="btn btn-danger" onClick={() => removeOrder(item.menu_id)}>
                                <span className="glyphicon glyphicon-minus"></span>
                            </button>
                        </div>
                    </div>
                )
            })
        }

    }

    return (
        <div>
            {/* <div className="col-md-12 bg-success">
                <h1>Item Added</h1>
                Item Number {addToMenuList(orderIds)} Added
            </div> */}
            <div className="col-md-12 bg-info">
                {menuDetail(propsdata.menuData)}
            </div>
        </div>
    )
}

export default MenuDetails;