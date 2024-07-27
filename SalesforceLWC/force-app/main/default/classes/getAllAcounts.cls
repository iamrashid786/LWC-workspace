public with sharing class getAllAcounts {
    public getAllAcounts() {

    }
    @AuraEnabled(Cacheable=true)
    public static List<Account> getAccounts(){
        return [SELECT Id, Name From Account Limit 100];

    }
}