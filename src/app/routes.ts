import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AppComponent } from './app.component';
const routes: Routes = [
  { path: '', 
  component: AppComponent,
  title:'Max Liu-Developer' },
  { path: 'about', 
  component: AboutComponent,
  title:'About Me' } ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export default routes;
