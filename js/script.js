console.log("hello world!");
var a = 2;
let b = 3;
const c = a + b ;
console.log(c);
a = 12 ;
console.log(a);
a = 12 ;
console.log(a++);// مساوی 12
a = 12 ;
a++;
console.log(a++);//مساوی 13
a = 12 ;
a++;
console.log(++a);//مساوی 14
a = 12 ;
a--;
console.log(a);//مساوی 11
a = 2;
b = 3;
z = a + b ;
console.log(z);
z = a - b ;
console.log(z);
z = a * b ;
console.log(z);
z = a / b ;
console.log(z);
z = a ** b ;
console.log(z);
z = a % b ;
console.log(z);
z = -1;
console.log(z);
a = 2;
b = 3; 
if (a < b ){
    console.log(true);
}else{
    console.log(false);
}
if (a % 2 == 0 ){
    console.log("even");
}else{
    console.log("odd");
}
z = 13;
if (z > 12){
    console.log("قبول");
}
if (z > 8){
    console.log("مردود");
}else{
    console.log("رفته تو کوزه");
}
z = 175;
if (z > 200){
    console.log("قابل قبول");
}else if(z > 100){
    console.log("قابل اغماض");
}else{
    console.log("مردود");
}
// if (a >= b ){

// }
a = "3";
b = "5"
a = `hello
    how are you? your brather age is ${b} years old.OK!?`
    console.log(a);
a = 3;
b = 4;
if(b > a){
    console.log("b is grater than a and b = "+b+" a = "+a+"");
    console.log(`b is grater than a and b = ${b} a = ${a}`);
}
// a = [10,11,12]
// b = [13,14]
// if(a.length > b.length){
//     console.log(`a is greater than b length a = ${a.length} and length b = ${b.length}`);
// }else if(b.length > a.length){
//     console.log(`b is greater than a`);
// }else{
//     console.log(`both are some at the length`);
// }
a = [10,11,12]
b = [13,14,15]
if(a[1] > b[2]){
    console.log(`a is greater than b`);
}else if (a[1] < b[2]){
    console.log(`b is greater than a`);
}else{
    console.log(`both are some at the length`);
}

a = {
    "students": [
        {
            'fname' : 'hossein',
            'lname' : 'nikzad',
            'bond'  : 12,
        },

        {
            'fname' : 'reza',
            'lname' : 'salehi',
            'bond'  : 20,
        },

        {
            'fname' : 'amir',
            'lname' : 'shirazi',
            'bond'  : 10,
        },
    ],
};
console.log(a);
console.log(a.students);
console.log(a.students[0].fname);
console.log(a.students[0].lname);
console.log(a.students[0].bond);
console.log(a.students[1].fname);
console.log(a.students[1].lname);
console.log(a.students[1].bond);
console.log(a.students[2].fname);
console.log(a.students[2].lname);
console.log(a.students[2].bond);

a = [
    {
        'fname' : 'hossein',
        'lname' : 'nikzad',
        'bond'  : 12,
    },

    {
        'fname' : 'reza',
        'lname' : 'salehi',
        'bond'  : 20,
    },

    {
        'fname' : 'amir',
        'lname' : 'shirazi',
        'bond'  : 10,
    },
]
console.log(a);
console.log(a[0].fname);
console.log(a[0].lname);
console.log(a[0].bond);
console.log(a[1].fname);
console.log(a[1].lname);
console.log(a[1].bond);
console.log(a[2].fname);
console.log(a[2].lname);
console.log(a[2].bond);


class car{
    fname = "benz";
}
let mashin = new car;
console.log(mashin.fname);