import { LightningElement,api } from 'lwc';
import {ShowToastEvent} from 'lightning/platformShowToastEvent';
import {navigationMixin} from 'lightning/navigation';

export default class Lwcwithflowexample extends LightningElement {
    @api recordId;
    get inputVariables(){
        return[{
               name:'accountid',
               type:'String',
               value:this.recordId
        },
        {
            name:'leadsource',
            type:'String',
            value:'Phone Inquiry'
        }
        ];
    }
    handleStatusChange(event){
        if(event.detail.status === 'FINISHED'){
            const flowOutputVariable = event.detail.outputVariables;
            for(let i=0; i< flowOutputVariable.length; i++){
                const flowoutputvar = flowoutputvar[i];
                if(flowoutputvar.name === 'contactId'){
                    if(flowoutputvar.value){
                        this.showToast("Success","Contact record created successfully","success");
                        this.navigateToConatactRecord(flowoutputvar.value);
                    }
                }
            }
        }

    }

    showToast(title,message,variant){
        const evt = new ShowToastEvent({
            title,
            message,
            variant
        });
        this.dispatchEvent(evt);
    }

    navigateToContactRecord(recordId){
        this[navigationMixin.Navigate]({
            type:'standard_recordPage',
            attributes:{
                recordId,
                actionName:'view'
            }

        });
    }
}