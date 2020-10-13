import { BrowserModule } from '@angular/platform-browser';
import {NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component';
import { SpaceXcontainerComponent } from './containers/space-xcontainer/space-xcontainer.component';
import { FiltersComponent } from './components/filters/filters.component';
import { LaunchprogramsComponent } from './components/launchprograms/launchprograms.component';
import {SharedModule} from './shared/shared.module';
@NgModule({
  declarations: [
    AppComponent,
    SpaceXcontainerComponent,
    FiltersComponent,
    LaunchprogramsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 

}
