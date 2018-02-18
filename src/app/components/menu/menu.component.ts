import { Component, OnInit } from '@angular/core';

// imported the exported class Dish in shared folder
import { Dish } from '../../shared/dish';
import { DishService } from '../../services/dish.service';


@Component({
	selector: 'app-menu',
	templateUrl: './menu.component.html',
	styleUrls: ['./menu.component.css']
})

export class MenuComponent implements OnInit {

	dishes: Dish[];
	selectedDish: Dish;
	// remember Dish is a pre-defined type imported from Dish up above

	// disService is of DishSerice type, automatically assigns it to dishService
	constructor(private dishService: DishService) { }

	ngOnInit() {
		// ask service to fetch information
		this.dishes = this.dishService.getDishes();
//		selectedDish = this.dishes[0];
		
	}

	onSelect(dish: Dish) {
		this.selectedDish = dish;
	}
	
}
