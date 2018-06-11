import {invoiceObject} from '../objects/invoice.object';
import {quoteObject} from '../objects/quote.object';

export class ItemObject{
    public Description: string;
    public Stocknr: string;
    public Invoice: invoiceObject;
    public Quote: quoteObject;

    constructor(){
        this.Stocknr = null;
        this.Description = null;
    }

}