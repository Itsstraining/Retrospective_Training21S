import { Component, Input, OnInit } from '@angular/core';
import { Pizza } from 'src/app/models/pizza.model';

@Component({
  selector: 'app-pizza',
  templateUrl: './pizza.component.html',
  styleUrls: ['./pizza.component.scss']
})
export class PizzaComponent implements OnInit {

  constructor() { }
  @Input()
  public pizza:Pizza ={
    id:"Pizza1",
    name:"Pizza Beef",
    price:200,
    inStock: true,
    imgUrl:"https://media-cdn.tripadvisor.com/media/photo-s/0e/54/ea/06/pizza-hut.jpg"
  }
  ngOnInit(): void {
  }

}
