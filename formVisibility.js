"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const newfile_1 = require("./newfile");
const bussinessLogic_1 = require("./bussinessLogic");
class formVisibility {
    formFormation() {
        bussinessLogic_1.bussinessObject.editFunctionallity().then((data) => {
            newfile_1.p.formationOfSelect(data);
        });
        document.getElementById('form-visibility').style.display = "block";
    }
    formDelete() {
        document.getElementById('MakingForm').reset();
        document.getElementById('form-visibility').style.display = "none";
    }
}
exports.formVisibility = formVisibility;
exports.formVisibilityObject = new formVisibility();
