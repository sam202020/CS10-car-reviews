import React, { Component } from 'react'
import Select from 'react-select'

export default class SearchFilter extends Component {

    handleChange = (selectedOption) => {      
        this.props.handleFilter(selectedOption.map(option => option.value), this.props.type);      
    }

  render() {
    const { data, type } = this.props;  //makes, models, years, user
    
    String.prototype.capitalize = function() {
        return this.charAt(0).toUpperCase() + this.slice(1);
    }
    
    // const sortedArr = [...(usernamesSet)].sort((a, b) => this.sort(a, b))
    // const options = [
    //     { value: 'chocolate', label: 'Chocolate' },
    //     { value: 'strawberry', label: 'Strawberry' },
    //     { value: 'vanilla', label: 'Vanilla' }
    //   ];

    const options = []

    for (let item of data) options.push({ value: item, label: item});

    return (
        <div>
            <Select
                blurInputOnSelect={false}
                closeMenuOnSelect={false}
                isMulti
                onChange={this.handleChange}
                options={options}
                placeholder={type.capitalize()}
            />
        </div>
    )
  }
}
