export class imgStorageObject{
    public fireStorageRef: string; // File referance on Google Fire Storage
    public fireClourFireRef: string; // File referance on Google FireStore Database
    public photoIdentifier: string


    constructor(){}

    public setimgStorageObject(photoType:string, identifier:string){
        switch (photoType) {
            case 'restoration': {
              this.fireStorageRef = 'restorationImg/' + identifier;
              this.fireClourFireRef = 'Items/' + identifier + '/photo';
              this.photoIdentifier = 'identifier';
              break;
            }
            default:{
                this.fireStorageRef = 'restorationImg/' + identifier;
                this.fireClourFireRef = 'Items/' + identifier + '/photo';
                this.photoIdentifier = 'identifier';
                break;
              }            
          }
    }

}