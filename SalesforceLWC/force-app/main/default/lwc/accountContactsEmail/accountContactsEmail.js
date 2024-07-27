import { LightningElement,wire, track } from 'lwc';
import getContacts from "@salesforce/apex/AccountHandler.getContactswithEmailAndAccount";
import { refreshApex } from '@salesforce/apex';//Replacewithyouractualdataaccessmethods

export default class AccountContactsEmail extends LightningElement {
@track contactRecId;
@track conList=[];
@track showModal=false;
@track wiredContactList=[];

@wire(getContacts) wiredContacts(result){
    this.wiredContactList=result;
if(result.data){
    //console.log("conList",data);
    this.conList=result.data;
    //console.log("conList",this.conList);
    }else if(result.error){
    console.log(result.error);
    }
    }
    
    handleclickedit(event){
    //this.editData=data;//Passthedatayouwanttoedit
    this.showModal=true;
    console.log('showmodelpopup----->'+this.showModal);
    this.contactRecId=event.target.dataset.id;
    }
    
    closeMyPopup(event){
    this.showModal=false;
    refreshApex(this.wiredContactList);
    }
}