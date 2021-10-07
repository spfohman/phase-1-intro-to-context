// Your code here
function createEmployeeRecord([firstName, familyName, title, payPerHour]){
    var employee = {
        firstName: firstName,
        familyName: familyName,
        title: title,
        payPerHour: payPerHour,
        timeInEvents: [],
        timeOutEvents:[]
    }
    return employee;
}

function createEmployeeRecords(arrays){
    return arrays.map(array=>createEmployeeRecord(array))
}

function createTimeInEvent(employee, timeIn){
    let time = timeIn.split(' ');
    let date = time[0]
    let hour = parseInt(time[1])
    
    var timeIn={
        type: "TimeIn",
        hour: hour,
        date: date
    }
    employee.timeInEvents.push(timeIn)
    return employee;
}

function createTimeOutEvent(employee, timeOut){
    let time = timeOut.split(' ');
    let date = time[0]
    let hour = parseInt(time[1])
    
    var timeOut={
        type: "TimeOut",
        hour: hour,
        date: date
    }
    employee.timeOutEvents.push(timeOut)
    return employee;
}
function hoursWorkedOnDate(employee, date){
    
    let timeIn = employee.timeInEvents.find(e=>{
        return e.date===date;
    })
    let timeOut= employee.timeOutEvents.find(e=>{
        return e.date===date;
    })
    return (timeOut.hour-timeIn.hour)/100;
}
function wagesEarnedOnDate(employee, date){
    let hours = hoursWorkedOnDate(employee, date)
    let pay = hours * employee.payPerHour;
    return pay;
}


function allWagesFor(employee){
    
    let dates = employee.timeInEvents.map((element)=>{
        return element.date;})
   let payable = dates.reduce((x, y) =>{
        return x + wagesEarnedOnDate(employee, y);
   },0)
   return payable;
}
function calculatePayroll(employeeRecords){
    for(let i of employeeRecords){
        console.log(i);
    }
}