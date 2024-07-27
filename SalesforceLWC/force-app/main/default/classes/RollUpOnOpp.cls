public class RollUpOnOpp {
    public static void methodName(List<Opportunity> newList, map<id, opportunity> oldmap){
        set<id> accid = new set<id>();
        //this is for insertion
        if(oldmap == null){
            for(Opportunity opp : newList){
                accid.add(opp.AccountId);
            }
        }
        
        //this is for update
        if(oldmap != null && newList != null){
            for(opportunity opp1 : newList){
                if(opp1.Amount != oldmap.get(opp1.Id).Amount && opp1.AccountId == oldmap.get(opp1.Id).AccountId){
                    accid.add(opp1.AccountId);
                    accid.add(oldmap.get(opp1.Id).AccountId);
                }
            }
        }
        
        //this is for delete
        
        if(newList == null){
            for(opportunity opp2:oldmap.values()){
                if(opp2.AccountId != null){
                    accid.add(opp2.AccountId);
                }
                
            }
            

        }
        
       //rollup logic
       
        if(!accid.isEmpty()){
            list<AggregateResult> Agr =[select AccountId, SUM(Amount) totalSumValue from opportunity where AccountId in : accid Group By AccountId];
            if(Agr.size()>0){
                list<account> acclist = new list<account>();
                for(AggregateResult ar : Agr){
                    Account acc = new Account();
                    acc.id = (id)ar.get('AccountId');
                    acc.TotalOppAmount__c = (decimal)ar.get('TotalSumValue');
                    acclist.add(acc);
                }
                if(!accList.isEmpty()){
                    update acclist;
                }
                
            }
        }
        
    }

}