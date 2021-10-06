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
    let hours = (employee.timeOutEvents[0].hour - employee.timeInEvents[0].hour)/100;
    return hours;
}
function wagesEarnedOnDate(employee, date){
    let hours = hoursWorkedOnDate(employee, date)
    let pay = hours * employee.payPerHour;
    return pay;
}

function allWagesFor(employee){
    let pay = wagesEarnedOnDate;
    return employee.reduce(pay);
}
// function calculatePayroll([employee]){
//     let totalPay = 0;
//     for (n of employee){
//         const pay = wagesEarnedOnDate(employee, date);
//         totalPay+=pay;
//     }
    
//     return totalPay;
// }