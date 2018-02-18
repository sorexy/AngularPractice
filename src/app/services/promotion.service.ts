import { Injectable } from '@angular/core';
import { Promotion } from '../shared/promotion';
import { PROMOTIONS } from '../shared/promotions';

@Injectable()
export class PromotionService {

	constructor() { }

	getPromotions(): Promotion[] {
		return PROMOTIONS;
	}
	
	getPromotion(id: number): Promotion {
		// if featured flag 1, return
		return PROMOTIONS.filter((promo) => (promo.id === id)[0]);
	}

	getFeaturedPromotion(id:number): Promotion {
		return PROMOTIONS.filter((promo) => (promo.featured))[0];
	}
}
