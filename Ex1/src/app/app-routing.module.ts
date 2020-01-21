import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AcceuilComponent } from './acceuil/acceuil.component';
import { ContactComponent } from './contact/contact.component';
import { ServiceComponent } from './service/service.component';
import { PresentationComponent } from './presentation/presentation.component';


const routes: Routes = [
  {path:"acceuil", component:AcceuilComponent},
  {path:"contact",component:ContactComponent},
  {path:"service", component:ServiceComponent},
  {path:"presentation",component:PresentationComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
