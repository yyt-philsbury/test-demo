import React, { Component } from 'react';
import { ListGroup, ListGroupItem } from 'mdbreact'
import { preset_diagnosis, preset_diagnosis2, preset_diagnosis3 } from './PatientData';

import {
    Accordion,
    AccordionItem,
    AccordionItemTitle,
    AccordionItemBody,
} from 'react-accessible-accordion';

import 'react-accessible-accordion/dist/fancy-example.css';

class DisplayList extends Component {
    
    render() {
        let items1;
        let items2;
        let items3;
        
        if (this.props.patient != null) {
            let patient = this.props.patient;
            items1 = preset_diagnosis[patient.value].map(diagnosis => {return <AccordionItemBody>{diagnosis}</AccordionItemBody>})
            items2 = preset_diagnosis2[patient.value].map(diagnosis => {return <AccordionItemBody>{diagnosis}</AccordionItemBody>})
            items3 = preset_diagnosis3[patient.value].map(diagnosis => {return <AccordionItemBody>{diagnosis}</AccordionItemBody>})
        }
        else {
            return (
                <h6>Please load a sample patient info</h6>
            )
        }
        
        return (
            <Accordion>
                <AccordionItem>
                    <AccordionItemTitle>
                        <h6>Likely diagnosis based on family history and symptoms</h6>
                    </AccordionItemTitle>
                    {items1}
                </AccordionItem>
                <AccordionItem>
                    <AccordionItemTitle>
                        <h6>Likely diagnosis based on physical exam and symptoms</h6>
                    </AccordionItemTitle>
                        {items2}
                </AccordionItem>
                <AccordionItem>
                    <AccordionItemTitle>
                        <h6>Likely diagnosis based on lab results and symptoms</h6>
                    </AccordionItemTitle>
                        {items3}
                </AccordionItem>
            </Accordion>
        );
    }
}

export { DisplayList };