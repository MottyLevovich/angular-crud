import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentsModule } from './students/students.module';
import { DialogsModule } from './dialogs/dialogs.module';
import { TableFiltersModule } from './table-filters/table-filters.module';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        NgbModule,
        StudentsModule,
        DialogsModule,
        TableFiltersModule,
        AppRoutingModule // must be last for child routing to work properly
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
