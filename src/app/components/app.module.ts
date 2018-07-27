import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { DialogModule } from 'primeng/dialog';
import { FileUploadModule } from 'primeng/fileupload';

import { AppComponent } from './app.component';
import { PopupWindowComponent } from './popup-window/popup-window.component';
import { ImageFieldComponent } from './popup-window/image-field/image-field.component';
import { TableComponent } from './popup-window/table/table.component';

@NgModule({
    declarations: [
        AppComponent,
        PopupWindowComponent,
        ImageFieldComponent,
        TableComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        FormsModule,
        TableModule,
        HttpClientModule,
        InputTextModule,
        DialogModule,
        ButtonModule,
        FileUploadModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
