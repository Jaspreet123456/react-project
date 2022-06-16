import React, { Component } from 'react';
import { getAttendance } from './emp_attendance';

class Attendance extends Component {
    state = {
        emp_attendance: getAttendance()

    }
    render() {
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
            {this.state.emp_attendance.map((atten) => (
                <>
                {atten.attendance.map((emp) => (
                    <tr key={atten.emp_id}>
                    <td>{emp.date}</td>
                    <td>{emp.start_time}</td>
                    <td>{emp.end_time}</td>
                    <td>{emp.total}</td>
                    </tr>
                    ))}
                    </>
              
            ))}
          </tbody>
                </table>
            </>
        );
    }
}
export default Attendance;