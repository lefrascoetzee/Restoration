import {invoiceObject} from '../objects/invoice.object';
import {quoteObject} from '../objects/quote.object';

export class ItemObject{
    public Description: string;
    public Stocknr: string;
    public Invoice: invoiceObject;
    public Quote: quoteObject;
    public DateAdded: Date;
    public DateLastUpdated: Date;

    constructor(){
        this.Stocknr = null;
        this.Description = null;
        this.DateAdded = new Date();
    }

}