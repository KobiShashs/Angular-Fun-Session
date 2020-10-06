import { CompanyFacadeComponent } from './components/company-facade/company-facade.component';
import { CustomerFacadeComponent } from './components/customer-facade/customer-facade.component';
import { AdminFacadeComponent } from './components/admin-facade/admin-facade.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './components/about/about.component';

const routes: Routes = [
  { path: 'admin', component: AdminFacadeComponent },
  { path: 'customer', component: CustomerFacadeComponent },
  { path: 'company', component: CompanyFacadeComponent },
  { path: '', component: AdminFacadeComponent, pathMatch: 'full' },
  { path: '**', component: AdminFacadeComponent, pathMatch: 'full' },
  { path: 'about', component: AboutComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
