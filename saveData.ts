import {p,role,userAndCustomer} from "./newfile"
import { Validatable,validate} from "./validation"
import {bussinessLogic, bussinessObject} from "./bussinessLogic"
export class Save{
    SaveData(){
       let Data:any[]=[];
       let tableRow=((((event!.target)! as HTMLInputElement).parentNode)as HTMLTableCellElement).parentNode as HTMLTableRowElement; 
       let dropdown:string;
       let allTrue=true;
       for(let i=1;i<9;i++){
        let inputElement=((((document.getElementById('New-Table')!)as HTMLTableElement).rows[tableRow.rowIndex].cells[i].childNodes[0])as HTMLInputElement).value;
          if(i==7)
            continue; 
          if(i==8)
           continue;
          else if(i==4){
            ((((document.getElementById('New-Table')!)as HTMLTableElement).rows[tableRow.rowIndex].cells[i].childNodes[1])as HTMLInputElement).style.display="none";
            if(!validate({value:inputElement, required:true,type:'email'})){
              allTrue=false;
              ((((document.getElementById('New-Table')!)as HTMLTableElement).rows[tableRow.rowIndex].cells[i].childNodes[1])as HTMLInputElement).style.display="block";            
             }  
          }
          else if(i==5){
            ((((document.getElementById('New-Table')!)as HTMLTableElement).rows[tableRow.rowIndex].cells[i].childNodes[1])as HTMLInputElement).style.display="none";
            if(!validate({value:inputElement, required:true,type:'number',min:100000000000,max:9999999999999})){
              allTrue=false; 
              ((((document.getElementById('New-Table')!)as HTMLTableElement).rows[tableRow.rowIndex].cells[i].childNodes[1])as HTMLInputElement).style.display="block"; 
        
             }  
          }
          else{ 
            ((((document.getElementById('New-Table')!)as HTMLTableElement).rows[tableRow.rowIndex].cells[i].childNodes[1])as HTMLInputElement).style.display="none";
            if(!validate({value:inputElement, required:true})){
             allTrue=false;  
             ((((document.getElementById('New-Table')!)as HTMLTableElement).rows[tableRow.rowIndex].cells[i].childNodes[1])as HTMLInputElement).style.display="block";          
            }  
         }  

       }
    if(allTrue==true){   
      Data.push(tableRow.rowIndex-1);
       for(let i=1;i<11;i++) {                                                                                    
         if(i==9){
          tableRow.cells[i].innerHTML=`<input  type="button" value="Edit" class="btn btn-primary">`	;	 
          tableRow.cells[i].onclick=p.editFunctionallity;
         }
         else if(i==10){
          tableRow.cells[i].innerHTML=`<input type="button" value="Delete"   class="btn btn-danger">`;	
           tableRow.cells[i].onclick=p.deleteData;
         }
         else if(i==7){
          let inputElement=((((document.getElementById('New-Table')!)as HTMLTableElement).rows[tableRow.rowIndex].cells[i].childNodes[0])as HTMLInputElement).value;  
          tableRow.cells[i].innerHTML=role[+inputElement];
          Data.push(+inputElement); 

         }
         
         else if(i==5){
          let inputElement=((((document.getElementById('New-Table')!)as HTMLTableElement).rows[tableRow.rowIndex].cells[i].childNodes[0])as HTMLInputElement).value; 
          let dataOfPhone= inputElement.toString();
          let lastTen :string;
          let initialOfNumber:string;
          if( dataOfPhone.length==12){
              lastTen = dataOfPhone.substring(2,dataOfPhone.length);
              initialOfNumber= dataOfPhone.substring(0, 2);
          }
          else{
           lastTen = dataOfPhone.substring(3,dataOfPhone.length );
           initialOfNumber= dataOfPhone.substring(0, 3);
          }
     
            tableRow.cells[i].innerHTML ="+"+ initialOfNumber + "-"+ lastTen;
            Data.push(inputElement); 
         }
         else if(i==8){
          let inputElement=((((document.getElementById('New-Table')!)as HTMLTableElement).rows[tableRow.rowIndex].cells[i].childNodes[0])as HTMLSelectElement); 
           dropdown=inputElement.value;
          let selectedText=inputElement.options[inputElement.selectedIndex].text;
          tableRow.cells[i].innerHTML= selectedText;
          Data.push( selectedText); 

         }	
         else{
           let inputElement=((((document.getElementById('New-Table')!)as HTMLTableElement).rows[tableRow.rowIndex].cells[i].childNodes[0])as HTMLInputElement).value;  
           tableRow.cells[i].innerHTML=inputElement;
           Data.push(inputElement);                                                                             
          } 		  					   
        } 
        let newObject:userAndCustomer=new userAndCustomer(Data[1],
          Data[2],
          Data[3],
          Data[4],        
          Data[5],
          Data[6],
          Data[7],
          Data[8]
          );
          let newObjectToInsert:userAndCustomer=new userAndCustomer(Data[1],
            Data[2],
            Data[3],
            Data[4],        
            Data[5],
            Data[6],
            Data[7],
            Data[8]
            );;
            newObjectToInsert.name=dropdown; 
          bussinessObject.saveData(tableRow.id, newObjectToInsert).then(()=> p.RecordArray.splice(tableRow.rowIndex-1,1,Data))
      }
                                                          
    } 
}  
export let saveDataObject=new Save();