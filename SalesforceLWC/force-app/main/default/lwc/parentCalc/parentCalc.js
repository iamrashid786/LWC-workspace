import { LightningElement ,track,api,wire } from 'lwc';

export default class ParentCalc extends LightningElement {
    firstNumber = 0;
    secondNumber = 0;
    @track result = 0;

    handleChanges(event){
        if(event.target.name==="First Number"){
            this.firstNumber=event.target.value;
        }
        if(event.target.name ==="Second Number"){
            this.secondNumber = event.target.value;
        }
        this.result=parseInt(this.firstNumber)+parseFloat(this.secondNumber)
    }
}