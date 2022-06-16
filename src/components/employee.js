const employee = [
    {
        id : 1,
        firstName : "Jaspreet",
        lastName : "Rajapal",
        department : {id:"102", name:"React"},
        email : "singhrajpal@gmail.com",
        number : 9098263411,
        password : "123456",
    },

    {
        id : 2,
        firstName : "Tarun",
        lastName : "Sharma",
        department :{id:"101", name:"Wordpress"},
        email : "tarun@gmail.com",
        number : 8998263411,
        password : "123456",
    },

    {
        id : 3,
        firstName : "Ajay",
        lastName : "Khuswah",
        department : {id:"102", name:"React"},
        email : "ajay@gmail.com",
        number : 9065263411,
        password : "123456",
    },
    {
        id : 4,
        firstName : "Chirag",
        lastName : "Bajaj",
        department : {id: "103", name:"Angular"},
        email : "chirag@gmail.com",
        number : 9098263422,
        password : "123456",
     
    },
    {
        id : 5,
        firstName : "Bhagwati",
        lastName : "Batewera",
        department : {id:"103", name:"Angular"},
        email : "bhagwati@gmail.com",
        number : 9098265411,
        password : "123456",
    },
    {
        id : 6,
        firstName : "Jay",
        lastName : "Patel",
        department : {id:"101", name:"Wordpress"},
        email : "patel@gmail.com",
        number : 9094563411,
        password : "123456",
    }
]    
export function getEmployee() {
    return employee;
}