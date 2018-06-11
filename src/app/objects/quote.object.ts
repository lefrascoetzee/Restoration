export class quoteObject{
    public QuoteId: string;
    public Price: number;
    public Comments: string;
    public LastUpdated: Date;

    constructor(){
        this.QuoteId = null;
        this.Price = null;
        this.Comments = null;
        this.LastUpdated = new Date();
    }

}

export class quoteListObject{
    public QuoteId: string;
    public DateReceived: Date;

    constructor(){}

}