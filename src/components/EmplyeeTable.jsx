import React, { Component } from 'react';
import TableHeader from './TableHeader';
import NavLink from 'react-router-dom/NavLink';

class EmployeeTable extends Component {
    columns = [
        {path: "id", label:"Id"},
        {path: "firstName", label:"FName"},
        {path: "lastName", label:"LName"},
        {path: "department.name", label:"Department"},
        {path: "email", label:"Email"},
        {path: "number", label:"Phone-Number"},
        {path: "password", label:"Password"},
        { key : 'delete'}
    ];
    
    render() {
        const { employee, onDelete, onSort, sortColumn, onEdit } = this.props;

        return ( 
            <table className="table">
                <TableHeader 
                    columns = {this.columns}
                    sortColumn = {sortColumn}
                    onSort = {onSort}
                />
                {/* <TableBody 
                    data={employee}
                /> */}
                <tbody >
                    {employee.map(emp => (<tr key={emp.id}>
                    <td>{emp.id}</td>
                    <td>{emp.firstName}</td>
                    <td>{emp.lastName}</td>
                    <td>{emp.department.name}</td>
                    <td>{emp.email}</td>
                    <td>{emp.number}</td>
                    <td>{emp.password}</td>
                    <td><button onClick={() => onDelete(emp)} className="btn btn-dark">Delete</button></td>
                    <td><button onClick={() => onEdit(emp)} className="btn btn-dark">Edit</button></td>
                    <td><button className="btn btn-dark"> <NavLink to='/Attendance'>Attendance</NavLink></button></td>
                </tr>
                ))}
                </tbody>
            </table>
        )
    }
} 
 
export default EmployeeTable;