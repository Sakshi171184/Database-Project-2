"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const bussinessLogic_1 = require("./bussinessLogic");
const applicationLogic_1 = require("./applicationLogic");
const DeleteData_1 = require("./DeleteData");
const saveData_1 = require("./saveData");
const formVisibility_1 = require("./formVisibility");
const newEntry_1 = require("./newEntry");
const deleteMany_1 = require("./deleteMany");
var role;
(function (role) {
    role[role["Developer"] = 0] = "Developer";
    role[role["Devops"] = 1] = "Devops";
    role[role["QA"] = 2] = "QA";
})(role || (role = {}));
exports.role = role;
class EmployeeType {
    constructor(firstname, middlename, lastname, email, phonenumber, address, role) {
        this.firstname = firstname;
        this.middlename = middlename;
        this.lastname = lastname;
        this.email = email;
        this.phonenumber = phonenumber;
        this.address = address,
            this.role = role;
    }
}
class userAndCustomer extends EmployeeType {
    constructor(firstname, middlename, lastname, email, phonenumber, address, role, customername) {
        super(firstname, middlename, lastname, email, phonenumber, address, role);
        this.name = customername;
    }
}
exports.userAndCustomer = userAndCustomer;
class globalClass {
    constructor() {
        document.getElementById("mainButton").onclick = this.appendData;
    }
    appendData() {
        applicationLogic_1.applicationObject.appendData();
        p.fetchData();
    }
    ;
    editFunctionallity() {
        let tableRow = ((event.target).parentNode).parentNode;
        bussinessLogic_1.bussinessObject.editFunctionallity().then((data) => {
            applicationLogic_1.applicationObject.editFunctionallity(data, tableRow);
        });
    }
    ;
    fetchData() {
        bussinessLogic_1.bussinessObject.fetchData()
            .then(data => {
            applicationLogic_1.applicationObject.fetchData(data);
            document.getElementById("DeleteMany").onclick = p.deleteMany;
            document.getElementById("NEWENTRYBUTTON").onclick = p.formFormation;
        });
    }
    ;
    deleteData() {
        let tableRow = ((event.target).parentNode).parentNode;
        let id = tableRow.id;
        bussinessLogic_1.bussinessObject.deleteData(id)
            .then(() => applicationLogic_1.applicationObject.deleteData(tableRow));
    }
    ;
    saveData() {
        saveData_1.saveDataObject.SaveData();
    }
    ;
    DeleteData() {
        DeleteData_1.cancelDataObject.DeleteData();
    }
    ;
    deleteMany() {
        deleteMany_1.deleteManyObject.deleteMany();
    }
    ;
    newentry() {
        var _a;
        (_a = event) === null || _a === void 0 ? void 0 : _a.preventDefault();
        newEntry_1.newEntryObject.insertingRow(applicationLogic_1.applicationObject);
    }
    ;
    formFormation() {
        formVisibility_1.formVisibilityObject.formFormation();
        document.getElementById("submitButton").onclick = p.newentry;
        document.getElementById("cancelButton").onclick = p.formDisable;
    }
    formDisable() {
        console.log("");
        formVisibility_1.formVisibilityObject.formDelete();
    }
    formationOfSelect(data) {
        document.getElementById("customerName").innerHTML = `<select id=selectCustomerNameNew></select>`;
        var select = document.getElementById("selectCustomerNameNew");
        for (let i = 0; i < data.length; i++) {
            let opt = data[i];
            let optionElement = document.createElement("option");
            optionElement.textContent = opt.name;
            optionElement.value = opt.customerid.toString();
            select.appendChild(optionElement);
        }
    }
}
const p = new globalClass();
exports.p = p;
