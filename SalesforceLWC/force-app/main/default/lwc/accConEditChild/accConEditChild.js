import { LightningElement,track,api } from 'lwc';

export default class AccConEditChild extends LightningElement {
    @api contactrecid;

    handleSuccess(event){
        const customEvent = new CustomEvent('toclosepopup');
        this.dispatchEvent(customEvent);
    }

    handleCancel(event){
        const customEvent = new CustomEvent('toclosepopup');
        this.dispatchEvent(customEvent);
    }
}