import React from "react";

import './Modal.css'

export const Modal = ({cat, onCloseClick}) => (
    <div className="modal-wrapper" onClick={onCloseClick}>
        <div className="modal-content">
            <button style={{alignSelf: 'flex-end', padding: '10px'}} onClick={onCloseClick}>Close X</button>
            <img style={{alignSelf: 'center'}} src={cat.imageUrl} alt={cat.name} width={100} height={100} />
            <Item label={'Name'} value={cat.name} />
            <Item label={'Location'} value={cat.location} />
            <Item label={'Price'} value={cat.price} />
            <Item label={'Description'} value={cat.description} />
            <Item label={'Breed'} value={cat.breed} />
        </div>
    </div>
)

const Item = ({label, value}) => (
    <div style={{display: 'flex'}}>
        <h3 style={{marginRight: '10px', color: "grey"}}>{label}</h3>
        <p>{value}</p>
    </div>
)