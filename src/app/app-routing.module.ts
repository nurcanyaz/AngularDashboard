import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { CitiesComponent } from './pages/cities/cities.component';
import { HotelsComponent } from './pages/hotels/hotels.component';
import { RezervationsComponent } from './pages/rezervations/rezervations.component';
import { UsersComponent } from './pages/users/users.component';

const routes: Routes = [
  {path:'',component:DashboardComponent},
  {path:'cities',component:CitiesComponent},
  {path:'hotels',component:HotelsComponent},
  {path:'rezervations',component:RezervationsComponent},
  {path:'users',component:UsersComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
