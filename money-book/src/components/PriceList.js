import React from "react";
import Ionicon from "react-ionicons";

const PriceList = ({ items, onModifyItem, onDeleteItem}) => {
    return (
        <ul className="list-group list-grop-flush">
            {
                items.map((item) => (
                    <li className="list-group-item d-flex 
                        justify-content-between align-items-center" 
                        key={item.id}>
                        <span className="col-1 badge badge-primary">
                            {item.category.name}
                        </span>
                        <span className="col-5">{item.title}</span>
                        <span className="col-2 font-weight-bold">
                            {(item.category.type === 'income') ? '+' : '-'}
                            {item.price}元
                        </span>
                        <span className="col-2">{item.date}</span>
                        <a className="col-1"
                            // role="button"
                            onClick={(event) => { event.preventDefault(); onModifyItem(item) }}
                        >
                            <Ionicon
                                className="rounded-circle"
                                fontSize="30px"
                                style={{ backgroundColor: "#28a745", padding: '5px' }}
                                color={'#fff'}
                                icon='ios-create-outline'
                            />
                        </a>
                        <a className="col-1"
                            // role="button"
                            onClick={(event) => { event.preventDefault(); onDeleteItem(item) }}
                        >
                            <Ionicon
                                className="rounded-circle"
                                fontSize="30px"
                                style={{ backgroundColor: "dc3545", padding: '5px' }}
                                color={'#fff'}
                                icon='ios-close'
                            />
                        </a>

                    </li>
                ))
            }
        </ul>
    )
}

export default PriceList