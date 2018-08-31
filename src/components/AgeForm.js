import React, { Component } from 'react';
import Select from 'react-select';
import {preset_diagnosis, preset_patient_info, preset_patient_symptoms} from './PatientData';

const ages = [
    { value: 'Less than 30 days', label: 'Less than 30 days old' },
    { value: '30 days to 1 year', label: '30 days to 1 year' },
    { value: '1 year to 5 years', label: '1 year to 5 years' },
    { value: '6 years to 12 years', label: '6 years to 12 years' },
    { value: '12 years to 18 years', label: '12 years to 18 years' },
    { value: '18 years to 30 years', label: '18 years to 30 years' },
    { value: '30 years to 45 years', label: '30 years to 45 years' },
    { value: '45 years to 60 years', label: '45 years to 60 years' },
    { value: '60+ years', label: '60+ years' },
]

class AgeForm extends Component {
  
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
      
      let val = this.props.patient ? preset_patient_info[this.props.patient.value].age : null
      
      let value = null;
      if (val != null)
        value = {value: val, label: val}
      
            if(value == null)
          value = this.state.value;
      
    return (
        <div>
        <Select value={value} options={ages} onChange={this.handleChange} isClearable={true} placeholder='What is your age group?'/>
        </div>
    );
  }
}

export { AgeForm };