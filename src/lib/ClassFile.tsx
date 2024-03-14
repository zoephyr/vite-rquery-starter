
export class FileResource{
    id: number;
    title: string;
    pathname: string;
    sizeInBytes: number;

constructor (id: number, title: string, pathname: string, sizeInBytes: number ){
        
            this.id= id;
            this.title=  title;
            this.pathname= pathname,
            this.sizeInBytes= sizeInBytes
        }
}