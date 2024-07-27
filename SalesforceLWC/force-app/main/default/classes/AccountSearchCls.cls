public with sharing class AccountSearchCls {
    public AccountSearchCls() {

    }
    @AuraEnabled(Cacheable=true)
    public static List<Account> getAccounts(String actName){
        String keyString='%'+actName+'%';
        return[select Id,name from Account where name like:keyString];
    }
}