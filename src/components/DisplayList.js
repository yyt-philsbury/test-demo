import React, { Component } from 'react';
import { ListGroup, ListGroupItem } from 'mdbreact'
import { preset_diagnosis } from './PatientData';

class DisplayList extends Component {
    
    render() {
        let items;
        if (this.props.patient != null) {
            let patient = this.props.patient;
            let diagnosises = preset_diagnosis[patient.value];
            items = diagnosises.map(diagnosis => {return <ListGroupItem>{diagnosis}</ListGroupItem>})
        }
        else {
            items = [];
        }
        
        return (
            <ListGroup>
            {items}
            </ListGroup>
        );
    }
}

export { DisplayList };