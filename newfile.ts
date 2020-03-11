import {bussinessLogic, bussinessObject} from "./bussinessLogic"
import {applicationLogic,applicationObject} from "./applicationLogic"
import {cancel, cancelDataObject} from "./DeleteData"
import {Save,saveDataObject} from "./saveData"
import {formVisibility ,formVisibilityObject} from "./formVisibility"
import {newEntry, newEntryObject} from "./newEntry"
import {deleteMany,deleteManyObject} from "./deleteMany"

 enum role{
    Developer=0,
    Devops,
    QA
 }

 type customer={
     customerid:number,
     name:string

 }

 class EmployeeType{
    public id:number;
    public firstname:string;
    public middlename:string;
    public lastname:string;
    public email:string;
    public phonenumber:number;
    public address:string;
    public role:role;
   constructor(firstname:string,
    middlename:string,
    lastname:string, 
    email:string,
    phonenumber:number,
    address:string,
    role:role,
   ){
        this.firstname=firstname;
        this.middlename=middlename;
        this.lastname=lastname;
        this.email=email;
        this.phonenumber=phonenumber;
        this.address=address,
        this.role=role;

    }
}

class userAndCustomer extends EmployeeType{
     public name:string;

     constructor(firstname:string,
        middlename:string,
        lastname:string, 
        email:string,
        phonenumber:number,
        address:string,
        role:role,
        customername:string
        ){
            super(firstname,middlename,lastname,email,phonenumber,address,role);
            this.name=customername;

     }     
}

 class globalClass {
    RecordArray:Array<any[]>;
   
    constructor(){
       
       document.getElementById("mainButton")!.onclick=this.appendData;

    }
    appendData(){
       applicationObject.appendData();
        p.fetchData();
    };

    editFunctionallity():void{
        let tableRow=((((event!.target)! as HTMLInputElement).parentNode)as HTMLTableCellElement).parentNode as HTMLTableRowElement;                                                                                                                                    
        bussinessObject.editFunctionallity().then((data)=>{
        applicationObject.editFunctionallity(data,tableRow);
        })
    };

    fetchData():void{
         bussinessObject.fetchData()
        .then(data=>{applicationObject.fetchData(data);
           document.getElementById("DeleteMany")!.onclick=p.deleteMany;
           document.getElementById("NEWENTRYBUTTON")!.onclick=p.formFormation;
          }
        );
       
    };

    deleteData():void{
        let tableRow=((((event!.target)! as HTMLInputElement).parentNode)as HTMLTableCellElement).parentNode as HTMLTableRowElement;
        let id=tableRow.id;
        bussinessObject.deleteData(id)
        .then(()=>applicationObject.deleteData(tableRow));
    };

   saveData(){
       saveDataObject.SaveData();
    } ;

   DeleteData(){
       cancelDataObject.DeleteData();
    };

   deleteMany(){
       deleteManyObject.deleteMany();
   };

   newentry(){
       event?.preventDefault();
      newEntryObject.insertingRow(applicationObject);
         
   };

   formFormation(){
       formVisibilityObject.formFormation();
       document.getElementById("submitButton")!.onclick=p.newentry;
       document.getElementById("cancelButton")!.onclick=p.formDisable;
   }

   formDisable(){
       console.log("");
       formVisibilityObject.formDelete();

   }

   formationOfSelect(data:customer[]){
    document.getElementById("customerName")!.innerHTML=`<select id=selectCustomerNameNew></select>`;
        var select = document.getElementById("selectCustomerNameNew"); 
        for(let i = 0; i < data.length; i++) {
          let opt = data[i];
          let optionElement= document.createElement("option");
          optionElement.textContent = opt.name;
          optionElement.value = opt.customerid.toString();
          select!.appendChild( optionElement);
          }​
   }

}

  const p=new globalClass();

export {p,role,userAndCustomer,customer}






   
   
  
