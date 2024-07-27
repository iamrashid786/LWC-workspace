trigger OpportunityTrigger on Opportunity (before insert, after insert) {
    if(trigger.isBefore && (trigger.isInsert || trigger.isUpdate)){
            OpporutnityHandler.createContact(trigger.new);
    }    
        
    if(trigger.isafter && (trigger.isInsert || trigger.isUpdate)){
            OpporutnityHandler.createContact(trigger.new);
        
        
    }
}