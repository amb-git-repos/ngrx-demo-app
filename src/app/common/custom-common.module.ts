import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NavMenuComponent } from './index';

@NgModule({
imports:[RouterModule],
declarations:[
    NavMenuComponent
],
exports:[
    NavMenuComponent
]
})

export class CustomCommonModule{


}