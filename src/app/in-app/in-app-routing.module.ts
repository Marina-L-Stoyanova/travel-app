import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InAppComponent } from './in-app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DiscoverComponent } from './discover/discover.component';
import { TravelListsComponent } from './travel-lists/travel-lists.component';
import { ArticlesComponent } from './articles/articles.component';
import { FAQComponent } from './faq/faq.component';

const routes: Routes = [{ path: '', component: InAppComponent, children: [{ path: '', redirectTo: 'dashboard', pathMatch: 'full' }, { path: 'dashboard', component: DashboardComponent, data: { text: 'Dashboard' } }, { path: 'discover', component: DiscoverComponent, data: { text: 'Discover' } }, { path: 'travel-lists', component: TravelListsComponent, data: { text: 'Travel Lists' } }, { path: 'articles', component: ArticlesComponent, data: { text: 'Articles' } }, { path: 'faq', component: FAQComponent, data: { text: 'FAQ' } }] }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InAppRoutingModule {
}
