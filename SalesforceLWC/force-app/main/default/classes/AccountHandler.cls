public with sharing class AccountHandler {
    public AccountHandler() {

    }
    @AuraEnabled(cacheable=true)
    public static List<Contact> getContactswithEmailAndAccount(){
        return [select id,Name,FirstName,LastName,Account.Name,Phone from Contact where Email!=null AND AccountID!=null];
    }
}