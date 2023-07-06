import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { HomeComponent } from './components/home/home.component';
import { CarlistComponent } from './components/carlist/carlist.component';
import { CarrentalComponent } from './components/carrental/carrental.component';
import { PaymentComponent } from './components/payment/payment.component';

const routes: Routes = [
  {path:'',component: AdminDashboardComponent , children:[
  {path:'home',component:HomeComponent},
  {path:'carlist',component:CarlistComponent},
  {path:'carrental',component:CarrentalComponent},
  {path:'payment',component:PaymentComponent},
  {path:'',redirectTo:'/admin/home',pathMatch:'full'},
  ],},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
