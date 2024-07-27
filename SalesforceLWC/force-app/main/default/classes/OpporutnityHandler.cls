public class OpporutnityHandler {
    public static void createContact(List<Opportunity> opp){
        List<Account> acc = new List<Account>();
        List<Contact> Con = new List<Contact>();
        
        for(Opportunity opplist : opp){
            Account ac = new Account();
            opplist.StageName = 'Closed Won';
            opplist.Name = ac.Name;
            opplist.CloseDate = ac.End_Date__c;
            
            if(opplist.StageName == 'Closed Won'){
                ac.Name = opplist.Name;
                acc.add(ac);
            }
            
          
            
                } insert acc;
        
        
    }

}