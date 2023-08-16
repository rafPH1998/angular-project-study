import { Injectable } from '@angular/core';
import { Animal } from '../Animal';

@Injectable({
  providedIn: 'root'
})
export class ListService {

  constructor() { }

  remove(animals: Array<Animal>, animal: Animal) {
    return animals.filter((a) => animal.name !== a.name)
  }
}
