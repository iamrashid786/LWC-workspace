public class AccountTriggerHandler {
    public static void updateAccountNo(List<Account> newAccList){
        for(Account acc : newAccList){
            System.debug('Industry :' +acc.Industry);
            System.debug('IsAvailable :' +acc.IsAvailabe__c);
            System.debug('state :' +acc.State__c);
        }
    }
    /* if(acc.Balance__c <= 1000 || acc.Balance__c >= 50000){
acc.addError('Please Enter Valid Amount b/w 1000-50000 only');
}*/
    //  3.	If we select country in the picklist, auto populate related states in the multipicklist    
    /*   if(acc.State__c == 'jharkhand'){
acc.Cities__c='Dhanbad;Bokaro';
} */
    
    //  4.	In account phone number is not equal to 10 numbers through an error.
    /*  if(acc.Phone.length() !=10){
acc.addError('Please type only valid Number of 10 digit');
}*/
    //5.	In account status is 'open' you can't delete the record.
    public static void AccountStatus(List<Account> acccountStatus){
        for(Account accc : acccountStatus){
            if(accc.Status__c == 'Opened'){
                accc.addError('You cant delete the record ' +accc.Status__c);
            }
            //6.	If user select the start date, then auto populate the end date for next month.
            if(accc.Start_Date__c != null){
                /* Date StartDate = accc.Start_Date__c;
Date EndDate = StartDate.addMonth(1);
accc.End_Date__c = EndDate;

*/
                accc.End_Date__c = accc.Start_Date__c.addMonths(1);
            }
        }
    }
    
    //1. In account Amount is below 10000 create contact, if amount greater than 10000 create opportunity  
    public static void afterMethod(List<Account> account){
        List<Contact> conList = new List<Contact>();
        List<Opportunity> opp = new List<Opportunity>();
        for(Account ac : account){
            contact con = new contact();
            con.AccountId = ac.id;
            con.LastName = ac.Name;
            Opportunity opr = new Opportunity();
            opr.AccountId = ac.id;
            opr.StageName = 'Qualification';
            opr.CloseDate= ac.End_Date__c;
            opr.Name = ac.Name;
            
            if(ac.Balance__c <= 100000){
                conList.add(con);
            }insert conList;
            
            if(ac.Balance__c >= 10000){
                opp.add(opr);
            }insert opp;
        }
        
    }
    
    //2. Whenever account record is creating/updating Rating with HOT, Create a contact automatically.
    public static void createContact(List<Account> accou){
        List<Contact> conn = new List<Contact>();
        for(Account at : accou){
            contact c = new contact();
           c.AccountId = at.Id;
            c.LastName = at.Name;
            if(at.Rating == 'Hot'){
               conn.add(c); 
            }insert conn;
        }
    }
    
    
    
}