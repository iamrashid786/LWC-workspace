Global class UpdateAccountBatch implements Database.Batchable<sObject>{
    Global Database.QueryLocator start(Database.BatchableContext BContext){
        String accountQuery = 'select id,name,phone,industry,website from Account';
        return Database.getQueryLocator(accountQuery);
    }
    
    Global void Execute(Database.BatchableContext BContext, List<SObject> recordToProcess){
        if(!recordToProcess.isEmpty()){
            List<Account> accountToUpdate = new List<Account>();
            for(SObject sobjRecord : recordToProcess){
                Account accRecord = (Account)sobjRecord;
                //Assign the value
              accRecord.Website = 'www.google.com';
                accRecord.Phone = '7762098034';
                accRecord.Industry = 'Insurance';
                accRecord.Rating = 'hot';
                
                accountToUpdate.add(accRecord);
            }
            if(!accountToUpdate.isEmpty()){
                Update accountToUpdate;
            }
        }
    }
    
    Global void finish(Database.BatchableContext BContext){
        System.debug('Batch Job Id'+ BContext.getJObId());
       // AsyncApexJob jobdetails = [select id,status,TotalJobItem,jobItemProcessed,createdby.email from AsyncApexJob where id =:BContext.getJobId()];
    }

}