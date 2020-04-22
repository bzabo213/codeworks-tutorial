//  Loops with Arrays

let people = [
    {
        name: "Darryl",
        email: "darryl@codeworks.com"
    },
    {
        name: "Mark",
        email: "mark@codeworks.com"
    },
    {
        name: "Brittany",
        email: "brittany@codeworks.com"
    },
    {
        name: "Jake",
        email: "jake@codeworks.com"
    },
    {
        name: "Zach",
        email: "zach@codeworks.com"
    }
]

for(let i = 0; i < people.length; i++){
    let person = people[i];
    // debugger;
    console.log(i, " Name: \t", person.name, "\nE-Mail: \t", person.email);
}