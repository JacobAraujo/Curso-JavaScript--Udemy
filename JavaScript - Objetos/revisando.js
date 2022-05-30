// Factory functions

function createUser(name, lastName) {
    return{
        name,
        lastName,
        get completeName() {
            return `${name} ${lastName}`;
        }
    };
}

const users = [];
users.push(createUser('Jacob', 'Alexandre'));
console.log(users);
console.log(users[0].completeName)
console.log(users[0].name);

// Constructor function

function User(name, lastName) {
    this.name = name;
    this.lastName = lastName;

    Object.freeze(this);
}

const users1 = [];
users1.push(new User('Jacob', 'Alexandre'));