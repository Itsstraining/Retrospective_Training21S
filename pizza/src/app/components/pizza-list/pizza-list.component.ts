import { Component, OnInit } from '@angular/core';
import { Pizza } from '../../models/pizza.model';

@Component({
  selector: 'app-pizza-list',
  templateUrl: './pizza-list.component.html',
  styleUrls: ['./pizza-list.component.scss']
})
export class PizzaListComponent implements OnInit {

  constructor() { }
  
  public pizzaList:Array<Pizza>=[
    {
      id:"Pizza1",
      name:"Pizza Beef",
      price:200,
      inStock: true,
      imgUrl:"https://media-cdn.tripadvisor.com/media/photo-s/0e/54/ea/06/pizza-hut.jpg"
    },{
      id:"Pizza2",
      name:"Pizza Beef",
      price:200,
      inStock: true,
      imgUrl:"https://media-cdn.tripadvisor.com/media/photo-s/0e/54/ea/06/pizza-hut.jpg"
    },{
      id:"Pizza3",
      name:"Pizza Beef",
      price:200,
      inStock: true,
      imgUrl:"https://media-cdn.tripadvisor.com/media/photo-s/0e/54/ea/06/pizza-hut.jpg"
    },{
      id:"Pizza4",
      name:"Pizza Beef",
      price:200,
      inStock: true,
      imgUrl:"https://media-cdn.tripadvisor.com/media/photo-s/0e/54/ea/06/pizza-hut.jpg"
    },{
      id:"Pizza5",
      name:"Pizza Beef",
      price:200,
      inStock: true,
      imgUrl:"https://media-cdn.tripadvisor.com/media/photo-s/0e/54/ea/06/pizza-hut.jpg"
    }
  ];
   

  ngOnInit(): void {
  }

}
