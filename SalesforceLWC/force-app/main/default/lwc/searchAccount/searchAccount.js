import { LightningElement,wire,api,track} from 'lwc';
import getAccounts from '@salesforce/apex/AccountSearchCls.getAccounts';
const DELAY = 300;

export default class SearchAccount extends LightningElement {
    accountName='';
    @track accountList=[];
    @wire(getAccounts,{actName:'$accountName'})
    retrieveAccounts({error,data}){
        if(data){
            this.accountList=data;
        }else if(error){

        }
    }

    handleKeyChange(event){
        const searchString=event.target.value;
        window.clearTimeout(this.delayTimeout);
        this.delayTimeout=setTimeout(()=>{this.accountName=searchString;},DELAY);
    }

}