import { Routes } from '@angular/router';

export const moduleRoutes : Routes = [
    { path: 'home', loadChildren: 'src/app/modules/home/home.module#HomeModule'},
    { path: 'loan', loadChildren: 'src/app/modules/loan/loan.module#LoanModule'},
    { path: 'about', loadChildren: 'src/app/modules/about/about.module#AboutModule'},
    { path: 'contact', loadChildren: 'src/app/modules/contact/contact.module#ContactModule'}
]