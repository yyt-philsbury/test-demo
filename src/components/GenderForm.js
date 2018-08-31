import React, { Component } from 'react';
import Select from 'react-select';
import {preset_diagnosis, preset_patient_info, preset_patient_symptoms} from './PatientData';

const genders = [
    { value: 'Male', label: 'Male' },
    { value: 'Female', label: 'Female' },
]

class GenderForm extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      value: null
    };
  }
  
  setValue = val => {
    this.setState(prevState => ({
      value: val
    }));
  };
  
  handleChange = val => {
    this.setValue(val);
  };
  
  render() {
      
      let val = this.props.patient ? preset_patient_info[this.props.patient.value].gender : null
      let value = null;
      if (val != null)
        value = {value: val, label: val}
      
      if(value == null)
          value = this.state.value;
      
    return (
        <div>
        <Select value={value} options={genders} onChange={this.handleChange} isClearable={true} placeholder='What is your gender?'/>
        </div>
    );
  }
}

export { GenderForm }