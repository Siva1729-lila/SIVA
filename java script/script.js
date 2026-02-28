//  console.log("Hello World");
// //Reinitialize and redeclare
// var a; //Global scope
// a=10;
// var a;
// a=20;
// //Reinitialize
// let b=10;
// //let b;
// b=20;
// //cant redeclare or reinitialize
// const c=30; //Block scope
// console.log(a);
// console.log(b);
// console.log(c);
// var num=10;
// var str="sivalila"; //'' " " 
// var bool=true;
// var un;
// var nu=null;
// var big=123456789n;
// var symbol=Symbol('li');
// console.log(typeof num);
// console.log(typeof str);
// console.log(typeof bool);
// console.log(typeof un);
// console.log(typeof nu);
// console.log(typeof big);
// console.log(typeof symbol);
// var arr=[1,2,3,4,5]
// console.log(typeof arr);
// var obj={
//     name:"sivalila",
//     dept:"DS"

// }
// console.log(obj);
// console.log(typeof obj);

//Arithmatic operator
// var a=10;
// var b="2"
// console.log(a+b);
// console.log(a-b);
// console.log(a/b);
// console.log(a%b);
// console.log(a*b);
// console.log(a**b);

//Relational operator
// var a=10;
// var b=20;
// console.log(a==b);
// console.log(a===b);
// console.log(a!=b);
// console.log(a!==b);
// console.log(a>b);
// console.log(a<b);
// console.log(a>=b);
// console.log(a<=b);

//logical(&&,||,!)
// var a=true;
// var b=false;
// console.log(a&&b);
// console.log(a||b);
// console.log(!a);

// control statement
// conditional(if,if....else,else if,switch) 
//if(Even)
// var a=10;
// if(a%2==0){
//     console.log("Even");

// }
// //if...else (odd or even)
// if(a%2==0){
//     console.log(`${a} is Even`); //Templet literal

// }
// else{
//     console.log(`${a} is odd`);

// }

// // else...if
// var mark=80;
// if(mark>90){
//     console.log("O Grade")

// }
// else if(mark>70){
//     console.log("A grade")

// }
// else if(mark>35){
//     console.log("pass")


// }
// else{
//     console.log("fail")
// }
//Ternary operator(condition? true:false)
// var a=5;
// const result=(a%2==0) ? `${a} is Even`:`${a} is Odd`;
// console.log(result);


// var marks = 85;

// var grade = (marks >= 90) ? "A" :
//             (marks >= 80) ? "B" :
//             (marks >= 70) ? "C" :
//             (marks >= 60) ? "D" :
//             "F";

// console.log("Marks: " + marks);
// console.log("Grade: " + grade);


// var marks=90;
// const grade=(marks>90) ? "O grade" :(marks>70) ? "A grade":"B grade";
// console.log(grade);

// switch
// var day=3;
// switch(day){
//     case 1:{
//         console.log("sunday");
//         break;
//     }
//      case 2:{
//         console.log("MON");
//         break;
//     }
//      case 3:{
//         console.log("TUE");
//         break;
//     }
//      case 4:{
//         console.log("WED");
//         break;
//     }
//      case 5:{
//         console.log("THUR");
//         break;
//     }
//      case 6:{
//         console.log("FRI");
//         break;
//     }
//      case 7:{
//         console.log("SAT");
//         break;
//     }
//     default:{
//         console.log("Invalid day");
//     }

// }
// looping statement(for,while,do..while)
//for loop
// for(let i=0;i<=10;i++){
//     console.log(i);
// }

//while loop
// var num=1234;
// var count=0;
// while(num>=0){
//     count++;
//     num=Math.floor(num/10);
// }
// console.log(count);

//do while
// var a= 0;
// do{
//     console.log("Example do while");
// }while(a!==0);

// //Normal Function
// function add(){
//     var a=10;
//     var b=20;
//     console.log(a+b)
// }
// add();

// //with parameters
// function add(a,b){
//     console.log(a+b)

// }
// add(10,20);
// //with return type
// function add(a,b){
//     return a+b;

// }
// var result=add(10,20);
// console.log(result);

//Arrow function
// var add=()=>{
//     console.log("i am arrow function");
// }
// add();

// //with parameter
// var add=(a=0,b=0) =>{
//     console.log(a+b);
// }
// add(10,20);


//with return 
// var add=(a,b)=>{
//     return a+b;
// }
// console.log(add(10,20))


// //call back funvtion
// var add=(a,b,demo)=>{
//     var c=a+b;
//     demo(c);

// }
// var result=(res)=>{
//     console.log(res);
// }
// add(10,20,result)

// //Example 2
// var add=(a,b,demo)=>{
//     var c=a+b;
//     demo(c);
// }
// add(10,20,(res)=>{
//     for(let i=1;i<=res;i++){
//         if(i%2==0){
//             console.log(i);
//         }
//     }
// })


//spread operator(...)
// var arr=[1,2,3];
// var arr2=[...arr,4,5,6];
// console.log(arr);
// console.log(arr2);

//Destructuring operator
// var [m1,m2,m3,m4,m5]=[99,98,97,98,96];
// console.log(m1);
// console.log(m2);
// console.log(m3);
// console.log(m4);
// console.log(m5);

// var {name,age,dept,contact}={
//     name:"sivalila",
//     age:24,dept:["DS","CS"],
//     contact:{
//         mobile:9346258795,
//         mail:'korasivaliladharreddy@gmail.com'
//     }
// }

// console.log(name);
// console.log(age);
// console.log(dept);
// console.log(contact);

// for..in
// var arr=[10,20,30,40]; //Array
// for(let i in arr){
//     console.log(i,arr[i]);
// }
// var obj={ //object
//     name:"sivalila",
//     age:24,
//     isActive:true
// }
// for(let key in obj){
//     console.log(key,obj[key])
// }

// for..of
//  var arr=[10,20,30,40];
//  for(let val of arr){
//      console.log(val);
//  }
// //for each 
// arr.forEach((val,index)=>{
//     console.log(val,index);

// })

// var arr=[1,2,3,4,5];
// // //Map
// var double=arr.map((val)=>(val*2));
// console.log(double)

// //Filter
// var even=arr.filter((val)=>(val%2===0));
// console.log(even);

// //reduce
// var total=arr.reduce((sum,val)=>(sum+val),0);
// console.log(total)

// var result=arr.map((val)=>val**2).filter((val)=>val%2==0).reduce((sum,val),0).reduce((sum,val)=>(sum+val),0);
// console.log(result);


//scope
//global scope
//var
// var a=10;
// if(true){
//     var b=20;

// }
// console.log(a);
// console.log(b);

//const
const i=10; //global scope
if(true){

    const j=20; //block scope
    console.log(j);
}
console.log(i);

