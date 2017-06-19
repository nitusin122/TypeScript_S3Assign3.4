abstract class Department {
    name: string;
    constructor (deptName) {
        this.name = deptName;
    }
    printName(): string 
    { 
        return this.name + " department ";
    }
    abstract printMeeting(): void;
}

class AccountingDept extends Department{
    constructor(deptName){
        super(deptName);
    }
    getEmpCount(count = 150){
        return `${this.printName()} has ${count} employees only.`;
    }
    printMeeting(){
        return this.printName() + "meeting at 10 am.";
    }
}

class TechnologyDept extends Department{
    constructor(deptName){
        super(deptName);
    }
    getLocation(location = "Pune"){
        return `${this.printName()} is located at ${location} only.`;
    }
    printMeeting(){
        return this.printName()  + "meeting at 11 am.";
    }
}