import React, { Component } from 'react';
import { getAttendance } from './emp_attendance';
import moment from 'moment';
import Pagination from './Pagination';
import { paginate } from '../utiles/paginate';
// import Attendance from './Attendance';

class Attendance extends Component {
    state = {
        attendence: getAttendance(),
        currentPage : 1,
        pageSize : 3,
    }
    handlePageChange = (page) => {
        this.setState({currentPage : page})
    }

    render() { 
        const atten = this.state.attendence.map( item => item);
        const indexLength = atten[0].attendance;
        const count = indexLength.length;
        const { pageSize, currentPage, attendences : allAttendence } = this.state;
        const attendences = paginate(allAttendence, currentPage, pageSize);
        return (
            <>
                <table className='table'>
                    <thead>
                        <tr>
                            <th>Date</th>
                            <th>Check in</th>
                            <th>Check out</th>
                            <th>Total Hours</th>
                        </tr>
                    </thead>
                    <tbody>
                    {attendences.map((atten) =>
                    <>
                {atten.attendence.map((emp) => (
                    <tr key={atten.emp.id}>
                    <td key={emp.date}>{moment(emp.date).format('MMM Do YY')}</td>
                    <td>{emp.start_time}</td>
                    <td>{emp.end_time}</td>
                    <td>{emp.total}</td>
                    </tr>
                ))};
                </>
                )}
                    </tbody>
                </table>
                <Pagination 
                    item = {count.length}
                    pageSize = {pageSize} 
                    onPageChange = {this.handlePageChange}
                    currentPage = {currentPage} />
            </>
        );
}
}      
export default Attendance;