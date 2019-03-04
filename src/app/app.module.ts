import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SidebarComponent } from './_Filter/_Sidebar/sidebar/sidebar.component';
import { HeadingComponent } from './_Filter/_Sidebar/heading/heading.component';
import { AssetTypeComponent } from './_Filter/_Sidebar/asset-type/asset-type.component';
import { SectorComponent } from './_Filter/_Sidebar/sector/sector.component';
import { NavBarComponent } from './_Filter/_MainBody/nav-bar/nav-bar.component';
import { CardsComponent } from './_Filter/_MainBody/cards/cards.component';
import { ActionComponent } from './_Filter/_Implementation/action/action.component';
import { ImplementationComponent } from './_Filter/_Sidebar/implementation/implementation.component';
import { FilterComponent } from './_Filter/filter/filter.component';
import { CardBodyComponent } from './_Filter/_MainBody/card-body/card-body.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    HeadingComponent,
    AssetTypeComponent,
    SectorComponent,
    NavBarComponent,
    CardsComponent,
    ActionComponent,
    ImplementationComponent,
    FilterComponent,
    CardBodyComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
