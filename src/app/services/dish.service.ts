import { Injectable } from '@angular/core';
import { Dish } from '../shared/dish';
import { DISHES } from '../shared/dishes';

@Injectable()
export class DishService {

	constructor() {}

	getDishes() {
		return DISHES;
	}

	getDish(id: number): Dish {
		// => is shorthand way of writing a function write inside function
		return DISHES.filter( (dish)=>(dish.id === id) )[0];
	}

	getFeaturedDish(): Dish {
		return DISHES.filter( (dish)=> (dish.featured) )[0]; // bcause boolean, no need ===1
	}
	
}
