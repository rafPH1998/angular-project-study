import { Component } from '@angular/core';
import { Animal } from 'src/app/Animal';
import { ActivatedRoute } from '@angular/router';
import { ListService } from 'src/app/services/list.service';

@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.component.html',
  styleUrls: ['./item-detail.component.css']
})

export class ItemDetailComponent {
  animal?: Animal;

  constructor(private listService: ListService, private route: ActivatedRoute) {
    this.getAnimal();
  }

  getAnimal() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.listService.getItem(id).subscribe((a) => (this.animal = a)); // Assuming getItem returns an array with one Animal
  }
}
