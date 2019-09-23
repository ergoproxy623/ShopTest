import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoadingBarRouterModule } from '@ngx-loading-bar/router';
import {ScoreComponent} from './components/score/score.component';
import {BasketComponent} from './components/basket/basket.component';

const routes: Routes = [
    { path: '', redirectTo: '/score', pathMatch: 'full' },
    { path: 'score', component: ScoreComponent  },
    {
        path: 'basket',
        component: BasketComponent,
    },
    { path: '**', redirectTo: '/score', pathMatch: 'full' },

];

@NgModule( {
    imports: [
        RouterModule.forRoot( routes ),
        LoadingBarRouterModule
    ],
    exports: [ RouterModule ],
    providers: []
} )
export class AppRoutingModule {
}
