import { toBeDisabled } from '@testing-library/jest-dom/dist/matchers';
import React, { Component } from 'react';

class TableHead extends Component {

    render() { 
        const { data,columns } = this.props;
        return ( <tbody>
            {data.map(item => <tr>{
            columns.map(column => 
                <td></td>)}
            </tr>)}
        </tbody> );
    }
}
 
export default TableHead;