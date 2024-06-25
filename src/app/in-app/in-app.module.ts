import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InAppRoutingModule } from './in-app-routing.module';
import { InAppComponent } from './in-app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { IgxButtonModule, IgxRippleModule, IgxCardModule, IgxIconModule, IgxListModule, IgxToggleModule, IgxAvatarModule, IgxNavigationDrawerModule } from '@infragistics/igniteui-angular';
import { FormsModule } from '@angular/forms';
import { DiscoverComponent } from './discover/discover.component';
import { TravelListsComponent } from './travel-lists/travel-lists.component';
import { ArticlesComponent } from './articles/articles.component';
import { FAQComponent } from './faq/faq.component';

@NgModule({
  declarations: [
    InAppComponent,
    DashboardComponent,
    DiscoverComponent,
    TravelListsComponent,
    ArticlesComponent,
    FAQComponent
  ],
  imports: [
    CommonModule,
    InAppRoutingModule,
    IgxButtonModule,
    IgxRippleModule,
    IgxCardModule,
    IgxIconModule,
    IgxListModule,
    FormsModule,
    IgxToggleModule,
    IgxAvatarModule,
    IgxNavigationDrawerModule
  ]
})
export class InAppModule {
}
