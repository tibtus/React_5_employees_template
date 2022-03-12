import React, { Component } from 'react';

import "./app-filter.css";

class AppFilter extends Component {
    constructor(props) {
        super(props) 
        this.state = {
            filter: 'all'
        }
    }

    onUpdateFilterLocal = (e) => {
        const filterUp = e.target.value;
        this.setState({filter : filterUp});     // установка уже локального состояния
        this.props.onUpdateFilter(filterUp);   // передаем локальрное состояние на верх
      
    }

    render() {
        const activeClass = "btn btn-light";
        const deactiveClass = "btn btn-outline-light";
        const status = this.state.filter;

        return (
            <div className="btn-group">
                <button type="button"
                        className={status === 'all' ? activeClass : deactiveClass}  
                        value='all'
                        onClick={this.onUpdateFilterLocal}
                        >
                        Все сотрудники
                </button>
                <button type="button"
                        className={status === 'rise' ? activeClass : deactiveClass}   
                        value='rise'
                        onClick={this.onUpdateFilterLocal}
                        >
                        На повышение
                </button>
                <button type="button"
                        className={status === 'salary' ? activeClass : deactiveClass}   
                        value='salary'
                        onClick={this.onUpdateFilterLocal}
                        >
                        З/П больше 1000$
                </button>
            </div>
        )

    }

}

export default AppFilter;