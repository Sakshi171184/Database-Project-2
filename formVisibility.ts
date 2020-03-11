import {p} from "./newfile"
import {bussinessLogic, bussinessObject} from "./bussinessLogic"
export class formVisibility{
    formFormation(){
          bussinessObject.editFunctionallity().then((data)=>{
          p.formationOfSelect(data);
         });
       document.getElementById('form-visibility')!.style.display="block";
    }

    formDelete(){
       (document.getElementById('MakingForm')!as HTMLFormElement).reset();
       document.getElementById('form-visibility')!.style.display="none";
   }	  

}
export let formVisibilityObject=new formVisibility();