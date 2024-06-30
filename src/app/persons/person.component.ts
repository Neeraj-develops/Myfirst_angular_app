import { Component, Input, OnDestroy, OnInit } from "@angular/core";
import { PersonService } from "./person.service";
import { Subscription } from "rxjs";

@Component({
    selector:'app-person',
    templateUrl:'./persons.component.html'
})
export class PersonsComponent implements OnInit, OnDestroy{

    personList : string[];

    personSubs : Subscription;

    isFetching = false;

    constructor (private perList : PersonService){
    }

    ngOnInit(): void {
        this.personSubs = this.perList.personChange.subscribe(persons => {
            this.personList = persons
            this.isFetching=false;
        })
        this.isFetching=true;
        this.perList.fetchData()
        
    }

    onRemove(name : string){
       this.perList.onPersonRemove(name);
    }

    ngOnDestroy(): void {
        this.personSubs.unsubscribe();
    }


}