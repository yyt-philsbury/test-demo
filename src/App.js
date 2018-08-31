import React, { Component } from 'react';
import logo from './wings.png';
import { ItemListContainer } from './components/ItemListContainer'
import './App.css';
import { Button } from 'mdbreact'
import { DisplayList } from './components/DisplayList'
import Select from 'react-select';

const patients = [
    { value: 0, label: 'Bob Hope' },
    { value: 1, label: 'John Doe' },
    { value: 2, label: 'Jane Doe' },
    { value: 3, label: 'Jamal Jackson' },
    { value: 4, label: 'Tanika Brown' },
]

class App extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      selected: null,
      value: null,
      show: true,
    };
    
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }
  
  handleChange = val => {
    this.setState(prevState => ({
      selected: val
    }));
  };
  
  handleClick = () => {
    this.setState(prevState => ({
      value: this.state.selected
    }));
  }
  
  setValue = val => {
    this.setState(prevState => ({
      selected: val
    }));
  };
  
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Soar Demo</h1>
        </header>
        <div className="container-fluid">
            <style>{'body { background-color: black; }'}</style>
                <div className='row'>
                    <span className='col border border-primary bg-primary pt-1'>
                        <span>
                        <Select value={this.state.selected} options={patients} onChange={this.handleChange} isClearable={true} placeholder='Load Patient Info (optional)'></Select>
                        <Button size='sm' color="primary" onClick={this.handleClick}>Load Patient Info</Button>
                        </span>
                        <div><ItemListContainer patient={this.state.value}/></div>
                    </span>
                    <span className='col border border-primary bg-warning pt-1 text-dark'>
                        <DisplayList patient={this.state.value}></DisplayList>
                    </span>
                    <div className='col'></div>
                </div>
        </div>
      </div>
    );
  }
}

export default App;