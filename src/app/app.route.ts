import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AutoSuggestionComponent } from './auto-suggestion/auto-suggestion.component';
import { PaginationComponent } from './pagination/pagination.component';

const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'auto-suggestion', component: AutoSuggestionComponent },
  { path: 'pagination', component: PaginationComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }