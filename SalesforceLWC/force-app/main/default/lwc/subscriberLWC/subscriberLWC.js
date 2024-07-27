import { subscribe,MessageContext } from 'lightning/messageService';
import { LightningElement,wire } from 'lwc';

//Message Channel Import
import contactMessageChannel from '@salesforce/messageChannel/contactMessageChannel__c';

export default class SubscriberLWC extends LightningElement {
    counter = 0;
    subscription = null;

    @wire(MessageContext)
    messageContext;

    connectedCallback(){
       
            this.subscribeToMessageChannel();
      
    }
    subscribeToMessageChannel(){
        this.subscription = subscribe(
            this.messageContext,
            contactMessageChannel,
            (message)=> this.handleMessage(message)
        );
    }
    handleMessage(message){
        alert("Message : " + JSON.stringify(message));
    }
}