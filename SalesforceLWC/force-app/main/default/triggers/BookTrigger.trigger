trigger BookTrigger on Book__c (before insert,before update) {
    if(trigger.isbefore && (trigger.isInsert || trigger.isUpdate)){
        BookHandler.methodBook(trigger.new);
    }
    

}