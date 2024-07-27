import { LightningElement,track,wire } from 'lwc';
import findcontacts from '@salesforce/apex/ContactSearch.findcontacts';

export default class WireSearchContact extends LightningElement {
    @track searchKey;
    @wire(findcontacts,{searchKey: '$searchKey'})contacts;

    handleSearch(event){
        this.searchKey = event.target.value;
    }

}