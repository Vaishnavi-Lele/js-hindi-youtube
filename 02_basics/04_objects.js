//const tinderUser = new Object() //singleton obj
const tinderUser = {} // non singleton obj
tinderUser.id = "123abc"
tinderUser.name = "vaishnavi"
tinderUser.isLoggedIn = false

//console.log(tinderUser);

const regularUser ={
    email: "some@gmail.com",
    fullname: {
        usertfullname: {
           firstname: "hitesh",
           lastname: "choudhary" 
        }
    }
}

//console.log(regularUser.fullname.usertfullname.firstname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}

//const obj3 = {obj1, obj2}
//const obj3 = Object.assign({}, obj1, obj2)//copies other objs and return in new obj

const obj3 = {...obj1, ...obj2}
//console.log(obj3);
const users = [
    {
     id: 1,
     email: "h@gmail.com"   
    },
]
//users[1].email
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLogged'));//hi value object madhe ahe ki nahi te check karne 

/*destructuring concepts*/
const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "hitesh"
}

// course.codeInstructor//some times code get confused when we have large amount of data
const {courseInstructor: instructor} = course//to retrive the data in other way that course.courseInstructor
//console.log(instructor);

// const navbar = ({company}) => {

// }
// navbar(company = "hitesh")

/*API's*/
// {
//     "name":"hitesh",
//     "coursename": "jsin hindi",
//     "price": "free"
// }

