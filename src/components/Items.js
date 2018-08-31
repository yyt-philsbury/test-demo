import React from 'react'
import {preset_diagnosis, preset_patient_info, preset_patient_symptoms} from './PatientData';

const Item = ({item, removeItem}) => (
    <h6>{item.txt}
        <span onClick={() => removeItem(item.key)}>
            <i className="fa fa-minus-square fa-fw" aria-hidden="true"></i>
        </span>
    </h6>
)

const Items = ({items, removeItem, patient}) => {
    
        const node = items.map(item => {
            return <Item item={item} removeItem={removeItem} key={item.key}/> 
        })
    
    return <div>{node}</div>;
}

export { Items };