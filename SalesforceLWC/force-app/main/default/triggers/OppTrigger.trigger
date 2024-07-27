trigger OppTrigger on Opportunity (after insert, after update, after delete) {
    if(trigger.isafter && (trigger.isinsert || trigger.isupdate)){
        RollUpOnOpp.methodName(trigger.new,trigger.oldmap);
    }
    if(trigger.isafter && trigger.isdelete){
        RollUpOnOpp.methodName(trigger.new,trigger.oldmap);
        
    }
    
}