import { LightningElement } from 'lwc';
import pubSub from 'c/pubSub';

export default class PubsubChildOne extends LightningElement {
    buttonHandler(evt){
        this.eventPublisher("Hello this is ChildOne")
    }

    eventPublisher(data){
        pubSub.publish("say Hello" , data)
    }
}