var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Department = (function () {
    function Department(deptName) {
        this.name = deptName;
    }
    Department.prototype.printName = function () {
        return this.name + " department ";
    };
    return Department;
}());
var AccountingDept = (function (_super) {
    __extends(AccountingDept, _super);
    function AccountingDept(deptName) {
        return _super.call(this, deptName) || this;
    }
    AccountingDept.prototype.getEmpCount = function (count) {
        if (count === void 0) { count = 150; }
        return this.printName() + " has " + count + " employees only.";
    };
    AccountingDept.prototype.printMeeting = function () {
        return this.printName() + "meeting at 10 am.";
    };
    return AccountingDept;
}(Department));
var TechnologyDept = (function (_super) {
    __extends(TechnologyDept, _super);
    function TechnologyDept(deptName) {
        return _super.call(this, deptName) || this;
    }
    TechnologyDept.prototype.getLocation = function (location) {
        if (location === void 0) { location = "Pune"; }
        return this.printName() + " is located at " + location + " only.";
    };
    TechnologyDept.prototype.printMeeting = function () {
        return this.printName() + "meeting at 11 am.";
    };
    return TechnologyDept;
}(Department));
