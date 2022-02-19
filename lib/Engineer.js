// imports employee
const Employee = require("../lib/Employee.js");


class Engineer extends Employee {
    constructor (name, id, email, github) {
        super (name, id, email);

        this.github = github; 
    }

    // returns github 
    getGithub () {
        return this.github;
    }

   
    getRole () {
        return "Engineer";
    }
}

// exports 
module.exports = Engineer;