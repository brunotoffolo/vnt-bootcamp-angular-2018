import { AboutComponent } from './about/about.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from "@angular/core";

export const APP_ROUTES: Routes = [
    { path: 'shopping-list', component: ShoppingListComponent },
    { path: 'about', component: AboutComponent },
    { path: '', redirectTo: '/shopping-list', pathMatch: 'full' },
    { path: '**', component: ShoppingListComponent }
]