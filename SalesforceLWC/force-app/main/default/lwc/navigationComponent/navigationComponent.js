import { LightningElement,api } from 'lwc';
import {NavigationMixin} from 'lightning/navigation';

export default class NavigationComponent extends LightningElement {
@api recordId;
//Navigation to new Account page
navigateToNewAccountPage(){
    this[NavigationMixin.Navigate]({
        type:'standard__objectPage',
        attributes: {
            objectApiName: 'Account',
            actionName:'new'
        },
    });
}

// Navigate to view Account Page
navigateToViewAccountPage(){
    this[NavigationMixin.Navigate]({
        type:'standard__recordPage',
        attributes: {
            recordId:this.recordId,
            objectApiName:'Account',
            actionName:'view'
        },
    });
}
}