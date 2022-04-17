


const db = require('./db')

const Employee = require('./models/employees')

const { faker } = require('@faker-js/faker');


db.on("error", console.error.bind(console, "MongoDB connection error:"));

// Find all employess
const findAll = async () => {
    const employees = await Employee.find()
    console.log('All employees:', employees)
}

// Create an employee
const createEmployee = async () => {
    const employee = new Employee ({first_name: "Ronald", last_name: "McDonald", email: "ronald@mcdonalds.com", job_title: "Founder", address: {street: "Burger Lane", city: "Big Mac City", state: "New York", zip: "10010"}});
    await employee.save()
    console.log("Create employee:", employee)
}

// Create Multiple employees
const createMultipleEmployees = async () => {
    const employee_1 = new Employee ({first_name: "Shake", last_name: "Shack", email: "shake@shack.com", job_title: "Founder", address: {street: "Brioche Avenue", city: "Bun City", state: "New York", zip: "10010"}});
    const employee_2 = new Employee ({first_name: "Burger", last_name: "King", email: "theburger@king.com", job_title: "Founder", address: {street: "King Street", city: "Whopper City", state: "New York", zip: "10010"}});
    const employee_3 = new Employee ({first_name: "Taco", last_name: "Bell", email: "yoquier@tacobell.com", job_title: "Founder", address: {street: "Burrito Boulevard", city: "Nacho City", state: "New York", zip: "10010"}});
    await Promise.all([employee_1.save(), employee_2.save(), employee_3.save()]);
    // await employee_2.save()
    // await employee_3.save()
    console.log("Created employees:", employee_1, employee_2, employee_3)
}

// Delete one employee
const deleteEmployee = async () => {
    const deleted = await Employee.deleteOne({first_name: "Drake"})
    console.log("deleted")
}

// update one employee
const updateEmployee = async () => {
    const updated = await Employee.updateOne({ first_name: 'Burger'}, { first_name: 'The'});
    console.log(updated);
}

// find faker json data
const findFaker= async () => {
    const employees = await faker.database.type()
    console.log('All employees:', employees)
}

// return a list of all employees full names (first_name + last_name)
const displayEmployeeNames = async () => {
    const employeesNames = await Employee.find({}, {first_name: 1, last_name: 1});
    console.log('All employees by name:', employeesNames)
}

const run = async () => {
    // await findAll();
    // await createEmployee();
    // await createMultipleEmployees();
    // await deleteEmployee();
    // await updateEmployee();
    await displayEmployeeNames();
    // await findFaker();
    process.exit();

}

run()

