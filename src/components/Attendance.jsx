import React, { Component } from 'react';
import { getAttendance } from './emp_attendance';
import moment from 'moment';
// import Pagination from './Pagination';
// import { paginate } from '../utiles/paginate';
// import Attendance from './Attendance';

class Attendance extends Component {
    state = {
        attendence: getAttendance()
    }

    render() {
        return(
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
                        {this.state.attendence.map((atten) => (
                            <>
                                {atten.attendences.map((emp) => (
                                    <tr key={atten.emp.id}>
                                        <td key={emp.date}>{moment(emp.date).format('MMM Do YY')}</td>
                                        <td>{emp.start_time}</td>
                                        <td>{emp.end_time}</td>
                                        <td>{emp.total}</td>
                                    </tr>
                                ))};
                            </>
                        ))}
                    </tbody>
                </table>
            </>
    )}
}
export default Attendance;