import React, { Component } from 'react';
import { getEmployee } from './employee.js'
import Pagination from './Pagination.jsx';
import { paginate } from '../utiles/paginate';
import ListGroup  from './ListGroup';
import { getDepartment } from './department.js';
import EmployeeTable from './EmplyeeTable.jsx';
import _ from 'lodash';

class Employee extends Component{
    state = {
        employee : [],
        currentPage : 1,
        pageSize : 6,
        department : [],
        sortColumn : {path : "id" , order : 'asc'}
    }

    componentDidMount(){
        const department = [{ id:"", name: "All Employee" }, ...getDepartment()];
        this.setState({employee: getEmployee(), department})
    }

    handleDelete = (emp) => {
        console.log(emp)
        const employee = this.state.employee.filter(e => e.id !== emp.id)
        this.setState({employee})
    };

    handleEdit = (emp) => {
        console.log(emp)
        const employee = this.state.employee.filter(e => e.id === emp.id)
        this.setState({employee})
    };

    handlePageChange = (page) => {
        this.setState({currentPage : page})
    }

    handleDepartmentSelect = department => {
        this.setState({ selectedDepartment: department, currentPage: 1 });
    };
    handleSort = sortColumn => {
       
        this.setState({ sortColumn })
    };

    render(){
        const { length : count } = this.state.employee;
        const { pageSize , currentPage, selectedDepartment, employee: emp, sortColumn } = this.state;
        const filtered = selectedDepartment && selectedDepartment.id
            ? emp.filter(e => e.department.id === selectedDepartment.id)
            : emp;
       
        if(count === 0) return <p>No Data Found</p>;
        const sort = _.orderBy(filtered, [sortColumn.path], [sortColumn.order]) 
        const employee = paginate(sort, currentPage, pageSize );
        return (
            <div className='row'>
                <div className="col-3">
                    <ListGroup 
                    datas = {this.state.department}
                    selectedItem = {this.state.selectedDepartment}
                    onItemSelect={this.handleDepartmentSelect}/>
                </div>
                <div className="col">
                    <p>Table contains Data of {filtered.length} Employee</p>
                    <h2>Employee Table</h2>
                    <EmployeeTable 
                        employee ={employee}
                        onDelete={this.handleDelete}
                        onSort = {this.handleSort}
                        sortColumn= {sortColumn}
                        onEdit = {this.handleEdit}
                        />
                    <Pagination 
                        item = {filtered.length}
                        pageSize = {pageSize} 
                        onPageChange = {this.handlePageChange}
                        currentPage = {currentPage} />
                </div>
            </div>
                
        );
    }
}

export default Employee;