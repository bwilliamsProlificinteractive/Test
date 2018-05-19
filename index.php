    public List<Account> allAccs{get;set;}
{
        allAccs = new List<Account>();
        Account acc1 = new Account();
        allAccs.add(acc1);
    }
    public void addRowMethod(){
        Account acc1 = new Account();
        allAccs.add(acc1);
    }
        
    public void removeRowMethod(){
        integer count = allAccs.size();
        allAccs.remove(count-1);
    }
    public void saveMethod(){
        insert allAccs;
    }
    
    public void clearMethod(){
        integer finalCount = allAccs.size();
        allAccs.clear();
        for(integer i=0;i<finalCount;i++){
            Account acc1 = new Account();
            allAccs.add(acc1);
            
        }
    
    }
    
    
}