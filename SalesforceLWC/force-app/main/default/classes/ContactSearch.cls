public with sharing class ContactSearch{
    @AuraEnabled(cacheable=true)
    public static List<Contact> findcontacts(Stirng searchKey){
        String key = '%' + searchKey + '%';
        Return [select id,Name,Email,Phone from Contact where FirstName like :key];
    }
    }
