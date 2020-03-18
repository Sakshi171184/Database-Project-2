import {p,userAndCustomer} from "./newfile"
import { Validatable,validate} from "./validation"
import {bussinessLogic, bussinessObject} from "./bussinessLogic"
 export class newEntry{
    
    insertingRow(data:any){
       const  user_SelectionofInputElements:NodeListOf<HTMLFormElement>=document.querySelectorAll('.formClass'); 
       let newArrayOfInputElements:any[]= Array.from(user_SelectionofInputElements).map((ew)=>ew.value);  
       let allTrue=true;

       let popup = document.getElementById("myPopup1");
       popup!.style.display="none";
         if(!validate({value:newArrayOfInputElements[0], required:true})){
            popup!.style.display="block";
            allTrue=false;            
         }

         popup = document.getElementById("myPopup2");
         popup!.style.display="none";
         if(!validate({value:newArrayOfInputElements[1],required:true})){
               popup!.style.display="block";
               allTrue=false;

         }

          popup = document.getElementById("myPopup3");
         popup!.style.display="none";
         if(!validate({value:newArrayOfInputElements[2],required:true})){
            popup!.style.display="block";
            allTrue=false;

         }

         popup = document.getElementById("myPopup4");
         popup!.style.display="none";
         if(!validate({value:newArrayOfInputElements[3],required:true, type:'email'})){
            popup!.style.display="block";
            allTrue=false;

         }
         
         popup = document.getElementById("myPopup5");
         popup!.style.display="none";
         if(!validate({value:newArrayOfInputElements[4], type:'number' ,required:true,min:1000000000,max:9999999999})){
            popup!.style.display="block";
            allTrue=false;

         }

         popup = document.getElementById("myPopup6");
         popup!.style.display="none";
         if(!validate({value:newArrayOfInputElements[5],required:true})){
            popup!.style.display="block";
            allTrue=false;

         }
         if(allTrue==true){
           let country=(document.getElementById("country")! as HTMLSelectElement).value;
           //console.log(country);
           (document.getElementById("selectCustomerNameNew")!as HTMLSelectElement).value
          let newObject:userAndCustomer=new userAndCustomer(newArrayOfInputElements[0],
            newArrayOfInputElements[1],
            newArrayOfInputElements[2],
            newArrayOfInputElements[3],        
            +(country+newArrayOfInputElements[4]),
            newArrayOfInputElements[5],
            newArrayOfInputElements[6],
            newArrayOfInputElements[7],
            );
            console.log(newObject);
            let newObjectToInsert:userAndCustomer=new userAndCustomer(newArrayOfInputElements[0],
               newArrayOfInputElements[1],
               newArrayOfInputElements[2],
               newArrayOfInputElements[3],        
               +(country+newArrayOfInputElements[4]),
               newArrayOfInputElements[5],
               newArrayOfInputElements[6],
               (document.getElementById("selectCustomerNameNew")!as HTMLSelectElement).value,
               );
            p.formDisable(); 
            bussinessObject.newEntry(newObjectToInsert).then(idOfObject=>{
               newObject.id=idOfObject;
               //console.log(newObject.id);
               data.rowformation(newObject);
               newArrayOfInputElements[4]=+(country+newArrayOfInputElements[4]);
               newArrayOfInputElements.unshift(newObject.id);
               p.RecordArray.push(newArrayOfInputElements);     

            })                                                                                
        }  	      

     }        
 }

 export let  newEntryObject=new newEntry();
