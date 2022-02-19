// the working class
class Employee {
    constructor (name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email 
    }

    getName () {
        return this.name;
    }

    // returns ID
    getId () {
        return this.id;
    }   

    // returns email
    getEmail () {
        return this.email;
    }

    
    getRole () {
        return 'Employee'; 
    }
};

// exports to other files
module.exports = Employee; 