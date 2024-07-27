import { LightningElement,track } from 'lwc';

export default class LifeCycleHookSample extends LightningElement {
    showTemplatePrimary = true;

    @track _isRendered = true; //boolean to check if component is rendered
    error;
    stack;

    constructor(){
        super(); //calling constructor of lightningElement
        console.log('Constructor called =>');
    }

    connectedCallback(){
        let varElement = this.template;
        console.log('ConnectedCallback called=>' + varElement.isConnected);
    }

    render(){
        console.log('Render called=>' +this.showTemplatePrimary);
    
    }
    renderedCallback(){
        if(this._isRendered){
            console.log('Parent Component renderedCalled=>');
            this._isRendered=false;
        }
    }
    disconnectedCallback(){
        console.log('Disconnnected Callback=>')
    }

    errorCallback(error, stack){
        console.log('Error callback called=>');
        this.error;
        this.stack;
    }
}