public class BookHandler {
    public static Decimal price;
    public static void methodBook(List<Book__c> bk){
        for(Book__c book : bk){
            
            if(book.Book_Name__c=='Java' && book.Quantity__c <=12){
                book.Total_Price__c= 250;
                price = book.Total_Price__c * book.Quantity__c;
                book.Total_Price__c=price;
                
            }else if(book.Book_Name__c=='JavaScript' && book.Quantity__c <=12){
                book.Total_Price__c= 150.54;
                price = book.Total_Price__c * book.Quantity__c;
                book.Total_Price__c=price;
               
            }
        }
    }
}