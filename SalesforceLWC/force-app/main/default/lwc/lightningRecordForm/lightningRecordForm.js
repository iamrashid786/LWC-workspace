import { LightningElement } from 'lwc';
import Customer_Name from '@salesforce/schema/Customer__c.Name';
import Customer_Salary from '@salesforce/schema/Customer__c.Salary__c';
import {ShowToastEvent} from 'lightning/platformShowToastEvent';
import { NavigationMixin} from 'lightning/navigation';

export default class LightningRecordForm extends NavigationMixin(LightningElement) {
    objectName = 'Customer__c';
    fields = [Name,Salary];
    handleCustomCreate(event){
        const evtvar = new ShowToatEvent({
            title:'Contact Created',
            message:'Contact ID : ' +event.detail.id,
            variant:'success'
             });
             this.dispatchEvent(evtvar);
             this[NavigationMixin.Navigate]({
                type:'standard_recordPage',
                attributes:{
                    recordId:event.detail.id,
                    objectApiName :'Customer__c',
                    actionName:'view'
                }
             });
    }
}