public class FlightHandler {
    public static void flightMethod(List<Flight__c> fl){
        for(Flight__c fli : fl){
            system.debug('Name :'+fli.Name);
            if(fli.Name=='British Airline'){
                fli.CLASS__c='First';
            }else
                fli.Description__c='Sorry for inconvience! please try later';
        }
    }

}