import { Component, OnInit } from '@angular/core';
import { menuItem } from 'src/app/shared/models/menu-item-model';

@Component({
  selector: 'app-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.scss']
})
export class MenuItemComponent implements OnInit {

  menuItems: menuItem[] = [
    {image: '../../assets/burger.jpg', name: 'Burger', description: 'That is one delicious burger.'},
    {image: '../../assets/pasta.jpg', name: 'Pasta', description: 'Holy cow that is some good pasta.'}
  ]  

  constructor() {}

  ngOnInit(): void {
  }

}
