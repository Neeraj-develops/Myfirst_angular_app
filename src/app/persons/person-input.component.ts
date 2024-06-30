import { Component, Output, EventEmitter } from "@angular/core";
import { PersonService } from "./person.service";

@Component({
    selector:'app-input-person',
    templateUrl: './person-input.component.html',
    styleUrl : './person-input.component.css'
})
export class PersonInputComponent{


    constructor(private addPerson : PersonService){}

    entrePersonName = ' ';

    onClickPerson (){
        console.log("you have clicked the button :" + this.entrePersonName);
        this.addPerson.onPersonCreate(this.entrePersonName);
        this.entrePersonName = '';

        
    }

}