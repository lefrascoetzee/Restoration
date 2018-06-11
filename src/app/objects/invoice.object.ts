import { Timestamp } from "rxjs/internal/operators/timestamp";

export class invoiceObject{
    public InvoiceId: string;
    public Price: number;
    public Comments: string;
    public LastUpdated: Date;

    constructor(){
         this.InvoiceId = null;
         this.Price = null;
         this.Comments = null;
         this.LastUpdated = new Date();
    }

}