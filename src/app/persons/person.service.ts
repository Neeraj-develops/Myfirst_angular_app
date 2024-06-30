import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Subject, map } from "rxjs";

@Injectable({providedIn : 'root'})
export class PersonService {
    personChange = new Subject<string[]>();
    person : string[] = ['raju', 'kaju', 'paju'];

    constructor(private http : HttpClient){}

    fetchData(){
        this.http.get<any>('https://swapi.dev/api/people').pipe(map(name=>{
            return name.results.map(ch=> ch.name)
        })).subscribe(resData =>{
            console.log(resData );
            this.personChange.next(resData);
            
        })
    }

    onPersonCreate (ele:string){
        this.person.push(ele);

        this.personChange.next(this.person);
        console.log(this.person);
        
    }

    onPersonRemove(name : string){
       this.person =   this.person.filter(per =>{
            return per !== name;
        })
        this.personChange.next(this.person);
        console.log(this.person);
        
    }
}