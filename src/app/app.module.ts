import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule }   from '@angular/router';
import {AutoCompleteModule} from 'primeng/primeng';

import { AppComponent } from './app.component';
import { RetailScreenComponent } from './retail-screen/retail-screen.component';
import { RetailScreenService } from './retail-screen/retail-screen.service';

@NgModule({
  declarations: [
    AppComponent,
    RetailScreenComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AutoCompleteModule,
    HttpModule,
    RouterModule.forRoot([
      {
        path: 'retail-screen',
        component: RetailScreenComponent
      }
    ])
  ],
  providers: [RetailScreenService],
  bootstrap: [AppComponent]
})
export class AppModule { }
