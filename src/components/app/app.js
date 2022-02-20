import { Component } from 'react';
import nextId from "react-id-generator";

import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employees-list/employees-list';
import EmployeesAddForm from '../employees-add-form/employees-add-form';

import './app.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {name: 'JoKhn Cab', salary: '1800', increase: true, id: nextId()},
        {name: 'Peter Pak', salary: '1000', increase: false, id: nextId()},
        {name: 'Jonny Deppa', salary: '3000', increase: false, id: nextId()},
    
      ]
    }
    this.maxId = nextId();
    
  }

  deleteItem = (id) => {
    this.setState(({data}) => {
      //1 Cпособ фильтрации
/*    const index = data.findIndex(elem => elem.id === id); */           
/*    const before = data.slice(0, index);
      const after = data.slice(index + 1);
      const newArr = [...before, ...after]; */

      return {
        //1 Cпособ фильтрации
        /* data: newArr */
        // 2 Способ фильтрации 
        data: data.filter(item => item.id !==id)
      }

    })
  }


  addItem = (name, salary) => {
    const newItem = {
        name, 
        salary,
        increase: false,
        id: nextId(),
    }
    this.setState(({data}) => {
        const newArr = [...data, newItem];
        return {
            data: newArr
        }
    });
  }

  onToggleIncrease = (id) => {
    console.log(`Increase this ${id}`);
  }

  onToggleRise = (id) => {
    console.log(`Rise this ${id}`);
  }

  render() {
      return (
          <div className="app">
              <AppInfo />

              <div className="search-panel">
                  <SearchPanel/>
                  <AppFilter/>
              </div>
              
              <EmployeesList 
                  data={this.state.data}
                  onDelete={this.deleteItem}
                  onToggleIncrease={this.onToggleIncrease}
                  onToggleRise={this.onToggleRise}
                  />
              <EmployeesAddForm onAdd={this.addItem}/>
          </div>
      );
  }
}

export default App;
