public class FutureClass {
    public static void accountMethod(List<Account> acclist){
        for(Account acc : acclist){
        if(acc.Rating == 'hot'){
            
            FutureMethodInsertNewRecord();
            
        }
    } //insert acc;
    }
    
    //Insert a new Record 
    @future
    public static void FutureMethodInsertNewRecord(){
       Contact accContact = new Contact();
        accContact.LastName = 'ram';
        accContact.Email = 'ram@gmail.com';
        accContact.Description = 'Contact has been created';
        accContact.MailingCity = 'ATP';
        Insert accContact;
        
        if(accContact.Id !=null){
            system.debug('account has been created'+ accContact.Id);
        }
    }
}