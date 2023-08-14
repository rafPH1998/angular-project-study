import { Component } from '@angular/core';

@Component({
  selector: 'app-list-render',
  templateUrl: './list-render.component.html',
  styleUrls: ['./list-render.component.css']
})
export class ListRenderComponent {
    animals = [
        {id: 1, name: "Bola", type: "DOG"},
        {id: 2, name: "TOM", type: "DOG"},
        {id: 3, name: "Jerry", type: "Cat"},
        {id: 4, name: "BOB", type: "Hourse"},
    ]
}
