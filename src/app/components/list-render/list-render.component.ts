import { Component } from '@angular/core';
import { Animal } from 'src/app/Animal';

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

    showAge(animal: Animal): void
    {
        this.animalDetails = `O animal ${animal.name} tem ${animal.age} anos`;
    }
}
