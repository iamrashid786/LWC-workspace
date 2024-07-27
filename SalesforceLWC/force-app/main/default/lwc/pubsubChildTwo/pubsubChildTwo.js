import { LightningElement } from 'lwc';
import pubSub from 'c/pubSub';

export default class PubsubChildTwo extends LightningElement {
    connectedCallback(){
        this.callSubscriber()
    }
    callSubscriber(){
        pubSub.subscribe('Say Hello',this.subscriberCallback)
    }
    subscriberCallback(event){
        console.log(event)
    }
}