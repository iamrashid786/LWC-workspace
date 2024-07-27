import { LightningElement,wire } from 'lwc';

export default class PublisherLWC extends LightningElement {
    @wire(MessageContext)
    messageContext;

    handleaddition(){
        const payload = {
            operator:'addition',
            constant:2
        };
        publish(this.messageContext,contactMessageChannel,payload)
    }

    handlesubstraction(){
        const payload = {
            operator:'substraction',
            constant:1
        };

        publish(this.messageContext,contactMessageChannel, payload)
    }
}