import React, { Component } from 'react';
import Select from 'react-select';
import {preset_diagnosis, preset_patient_info, preset_patient_symptoms} from './PatientData';

const regions = [
    { value: 'North America', label: 'North America' },
    { value: 'South America', label: 'South America' },
    { value: 'Central America', label: 'Central America' },
    { value: 'North Africa', label: 'North Africa' },
    { value: 'West Africa', label: 'West Africa' },
    { value: 'East Africa', label: 'East Africa' },
    { value: 'South Africa', label: 'South Africa' },
    { value: 'Central Africa', label: 'Central Africa' },
    { value: 'Western Europe', label: 'Western Europe' },
    { value: 'Eastern Europe', label: 'Eastern Europe' },
    { value: 'Scandinavia', label: 'Scandinavia' },
    { value: 'East Asia', label: 'East Asia' },
    { value: 'South Asia', label: 'South Asia' },
    { value: 'Southeast Asia', label: 'Southeast Asia' },
    { value: 'Australasia', label: 'Australasia' },
    { value: 'Middle East', label: 'Middle East' },
    { value: 'Caribbeans', label: 'Caribbeans' },
]

class RegionForm extends Component {
  
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
      
      let val = this.props.patient ? preset_patient_info[this.props.patient.value].region : null
      let value = null;
      if (val != null)
        value = {value: val, label: val}
      
            if(value == null)
          value = this.state.value;
      
    return (
        <div>
        <Select value={value} options={regions} onChange={this.handleChange} isClearable={true} placeholder='Where did you last travel from or reside in?'/>
        </div>
    );
  }
}

export { RegionForm }