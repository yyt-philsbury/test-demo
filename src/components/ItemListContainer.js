import React, { Component } from 'react';
import { Items } from './Items';
import { SymptomForm } from './SymptomForm';
import { Button } from 'mdbreact';
import { AgeForm } from './AgeForm';
import { GenderForm } from './GenderForm';
import { RegionForm } from './RegionForm';
import {preset_diagnosis, preset_patient_info, preset_patient_symptoms} from './PatientData';

let global_id = 0;

class ItemListContainer extends Component {
    constructor(props) {
      super(props);
      var init = [];
      this.state = {
        items: init
      }
      this.onAddItem = this.onAddItem.bind(this);
      this.onRemoveItem = this.onRemoveItem.bind(this);
    }
    
    onAddItem(val) {
        if(val == null)
            return;
        let newItem = {txt:val.value, key:global_id++};
        this.setState((prevState, props) => ({items: [...prevState.items, newItem]}))
    }
    
    onRemoveItem(key) {
        console.log('onRemoveItem');
        const remainder = this.state.items.filter((item) => {
          if(item.key !== key) return true;
          else return false;
        });
        this.setState({items: remainder});
    }
  
  render() {
      
      let val = this.state.items
      if(this.props.patient != null) {
          val = [];
          var symps = preset_patient_symptoms[this.props.patient.value];
          
          for (var i = 0; i < symps.length; i++) {
            val = [...val, {txt:symps[i], key:global_id++}];
          }
      }
      
    return (
        <div>
            <span>
                <AgeForm patient={this.props.patient}></AgeForm>
                <GenderForm patient={this.props.patient}></GenderForm>
                <RegionForm patient={this.props.patient}></RegionForm>
                <SymptomForm onAddItem={this.onAddItem}></SymptomForm>
                <Items items={val} removeItem={this.onRemoveItem}/>
                <Button size='sm' color="red">Submit</Button>
            </span>
        </div>
    )
  }
}

export {ItemListContainer};