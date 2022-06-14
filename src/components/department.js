const department = [
    {id : "101", name : "Wordpress"},
    {id : "102", name : "React"},
    {id : "103", name : "Angular"}
];

export function getDepartment(){
    return department.filter(d => d)
}