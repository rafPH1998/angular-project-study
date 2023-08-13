import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-parent-data',
  templateUrl: './parent-data.component.html',
  styleUrls: ['./parent-data.component.css']
})
export class ParentDataComponent {
    @Input() name: string = '';
    @Input() userData!: {email: string, role: string}; // o exclamação informa que o dado será vazio no momento
}
 