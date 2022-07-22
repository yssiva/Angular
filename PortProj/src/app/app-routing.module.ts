import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllslotsComponent } from './allslots/allslots.component';
const routes: Routes = [{path:'slots',component: AllslotsComponent}];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
