import {invoiceObject} from '../objects/invoice.object';
import {quoteObject} from '../objects/quote.object';
import {PhotoObject} from '../objects/photo.object';

export class ItemObject{
    public Description: string;
    public Stocknr: string;
    public Invoice: invoiceObject;
    public Quote: quoteObject;
    public DateAdded: Date;
    public DateLastUpdated: Date;
    
    public length: number;

    constructor(){
        this.Stocknr = null;
        this.Description = null;
        this.DateAdded = new Date();
        this.length = 1;
    }
}

export class ItemPhotosObject{
    public photoList: PhotoObject[];
    constructor(){}
}