trigger AccountTrigger on Account (before insert, before update, before delete, after insert,after update) {
    
    /* if(trigger.isbefore){
if(trigger.isbefore &&(trigger.isInsert || trigger.isUpdate)){

}
if(trigger.isdelete && trigger.isbefore){
AccountTriggerHandler.AccountStatus(Trigger.old);   
}
} */if(trigger.isafter){
    if(trigger.isafter &&(trigger.isInsert || trigger.isUpdate)){
        //AccountTriggerHandler.afterMethod(trigger.new); 
        //  AccountTriggerHandler.createContact(trigger.new);
        FutureClass.accountMethod(Trigger.new); 
    }
}
    
}