import React from 'react'

const ListGroup = props => {
    const { datas, textProperty, valueProperty, selectedItem, onItemSelect} = props;
    return (
        <ul className="list-group">
            {datas.map(data =>(
                <li onClick={() => onItemSelect(data)}
                    key={data[valueProperty]}
                    className={ data === selectedItem ? "list-group-item active" : "list-group-item"}>
                    {data[textProperty]}
                </li>
            ))}
        </ul>
    )
}
ListGroup.defaultProps={
    textProperty : "name",
    valueProperty : "id"
}
 
export default ListGroup;