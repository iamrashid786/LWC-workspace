import { LightningElement, wire } from 'lwc';
import getAccounts from '@salesforce/apex/getAllAcounts.getAccounts';
const Page_Size = 10;
export default class GetAllAccountRecords extends LightningElement {
    accounts;
    displayedAccounts;
    currentPage = 1;

    @wire(getAccounts) wiredAccounts({error,data}){
        if(data){
            this.accounts = data;
            this.updateDisplayedAccounts();
        } else if(error){
            console.error('Getting Error While fetching the record:', error);
        }
    }
    updateDisplayedAccounts(){
        const startldx = (this.currentPage -1)* Page_Size;
        tis.displayedAccounts = this.accounts.slice(startldx,startldx + Page_Size);
    }

    handlePrevious(){
        if(this.currentPage > 1){
            this.currentPage--;
            this.updateDisplayedAccounts();
        }
    }
    handleNext(){
        const totalPages = Math.ceil(this.accounts.length/Page_Size);
        if(this.currentPage < totalPages){
            this.currentPage++;
            this.updateDisplayedAccounts();
        }
    }
 
}