import { Routes } from '@angular/router';

import { MenuComponent } from '../../components/menu/menu.component';
import { HomeComponent } from '../../components/home/home.component';
import { AboutComponent } from '../../components/about/about.component';
import { ContactComponent } from '../../components/contact/contact.component';

export const routes: Routes = [
	{ path:'home', component: HomeComponent },
	{ path 'menu', component: MenuComponent },
	{ path '', redirectTo: '/home', pathMatch: 'full' } 
	// when the URL includes 'home', then it will route to home component
];
