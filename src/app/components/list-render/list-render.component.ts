import { Component } from '@angular/core';
import { Animal } from 'src/app/Animal';

import { ListService } from 'src/app/services/list.service';

@Component({
  selector: 'app-list-render',
  templateUrl: './list-render.component.html',
  styleUrls: ['./list-render.component.css']
})
export class ListRenderComponent {
    animals: Array<Animal> = [
        {id: 1, name: "Bola", type: "DOG", age: 12},
        {id: 2, name: "TOM", type: "DOG", age: 23},
        {id: 3, name: "Jerry", type: "Cat", age: 27},
        {id: 4, name: "BOB", type: "Hourse", age: 10},
    ]

    animalDetails = ''

    constructor(private listService: ListService) {

    }

    showAge(animal: Animal)
    {
        this.animalDetails = `O animal ${animal.name} tem ${animal.age} anos`;
    }

    removeAnimal(animal: Animal) {
        this.animals = this.listService.remove(this.animals, animal)
    }
}
