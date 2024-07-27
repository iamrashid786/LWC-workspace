import { LightningElement,track,wire,api } from 'lwc';
import passengerRecord from @'salesforce/apex/FlightQuery.passengerRecord';

export default class GetAccountRecord extends LightningElement {
   
   //Using @Wire
    const columns = [{label: 'Name', fieldName: 'Name' }];
    @track aaa;
    @track columns=columns;
    @track bbbb;
    // @wire (passengerRecord)
    // newmeth({data,error}){
    //     if(data){
    //         console.log(JSON.stringify(data));
    //         this.aaa=data;
    //     } else{
    //         this.bbbb=error;
    //     }
    // }

    //Imperatively
    ConnectedCallBack(){
        passengerRecord()
        .then(result=>{
            this.aaa = result;
        })
        .catch(error=>{
            this.bbbb=error;
        });
    }


}