let person = {
    name:"Samiksha",
    age:22,
    gender:"female"
};

//console.log(person)

//updating existing properties(2 types)
//Dot notation

person.name="khushi";
//console.log(person.name)

//Bracket notation(Used with selection)
person["name"]="Sam";
//console.log(person.name)




//////////Functions

function people(name, lastName){
    console.log('hello' + name + lastName )
}

people('sam', 'fargade')

function calculate(no){
    return no * no;
}
console.log(calculate(2))