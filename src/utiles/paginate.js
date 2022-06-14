import _ from 'lodash';

export function paginate(items, pageNumber, pageSize){
    
    console.log(pageSize);
    const startIndex = (pageNumber - 1) *  pageSize;
    console.log(pageNumber);
    console.log(startIndex);
    return _(items)
    .slice(startIndex)
    .take(pageSize)
    .value()
}