import { NgModule, LOCALE_ID } from '@angular/core';
import localeFr from '@angular/common/locales/fr';
import { APP_BASE_HREF, CommonModule, registerLocaleData } from '@angular/common';
import {HttpClientModule, HttpClient, HTTP_INTERCEPTORS} from '@angular/common/http';
import { FormsModule } from '@angular/forms';

registerLocaleData(localeFr);
import { BrowserModule } from '@angular/platform-browser';
// translate
import {TranslateModule, TranslateLoader} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
// LOG
import { LoggerModule, NgxLoggerLevel } from 'ngx-logger';

import { AppRoutingModule } from './app-routing.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';


// UI
import { EditorModule } from 'primeng/editor';
import {TableModule} from 'primeng/table';
import { FileUploadModule } from 'primeng/fileupload';
import { ToastModule } from 'primeng/toast';
import { MessageModule } from 'primeng/message';
import { MessagesModule } from 'primeng/messages';
import {TriStateCheckboxModule} from 'primeng/tristatecheckbox';
import {PasswordModule} from 'primeng/password';
import {DialogModule} from 'primeng/dialog';
import { DropdownModule } from 'primeng/dropdown';
import { InputSwitchModule } from 'primeng/inputswitch';
import { InputTextModule } from 'primeng/inputtext';
import { RadioButtonModule } from 'primeng/radiobutton';
import { TooltipModule } from 'primeng/tooltip';
import { AppComponent } from './app.component';
import { RequestPatchComponent } from './nav/request-patch/request-patch.component';
import { SidebarComponent } from './nav/sidebar/sidebar.component';
import { MessageService } from 'primeng/api';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { CheckboxModule } from 'primeng/checkbox';
import { OverlayPanelModule } from 'primeng/overlaypanel';
// services
import { AuthenticationService } from './auth/authentication-service/authentication-service';
import { JwtInterceptor} from './auth/interceptor/jwt-inteceptor';
import { LoginComponent } from './auth/login/login.component';
import { LogoutComponent } from './auth/logout/logout.component';
import { TawkService} from './services/TawkService';
import { BrandService} from './services/brand.service';
import { EcuService} from './services/ecu.service';
import { TicketViewComponent } from './tile-components/ticket-view/ticket-view.component';
import { UserListComponent } from './nav/user-list/user-list.component';
import { EditUserComponent } from './forms/edit-user/edit-user.component';
import { TenantListComponent } from './nav/tenant-list/tenant-list.component';
import { EditTenantComponent } from './forms/edit-tenant/edit-tenant.component';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ConfirmationService} from 'primeng/api';
import { TicketListComponent } from './nav/ticket-list/ticket-list.component';
import { TicketInProgressComponent } from './nav/ticket-in-progress/ticket-in-progress.component';
import { UploadDialogComponent } from './tile-components/upload-dialog/upload-dialog.component';
import { BrandListComponent } from './nav/brand-list/brand-list.component';
import { EditBrandComponent } from './forms/edit-brand/edit-brand.component';
import { EditEcuComponent } from './forms/edit-ecu/edit-ecu.component';
import { EditMailComponent } from './forms/edit-mail/edit-mail.component';

// AoT requires an exported function for factories
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/');
}

@NgModule({
  declarations: [
    AppComponent,
    RequestPatchComponent,
    SidebarComponent,
    LoginComponent,
    LogoutComponent,
    TicketViewComponent,
    UserListComponent,
    EditUserComponent,
    TenantListComponent,
    EditTenantComponent,
    TicketListComponent,
    TicketInProgressComponent,
    UploadDialogComponent,
    BrandListComponent,
    EditBrandComponent,
    EditEcuComponent,
    EditMailComponent
  ],
  imports: [
    BrowserModule, AppRoutingModule,  CommonModule,HttpClientModule, BrowserAnimationsModule, FormsModule,
    FileUploadModule, DialogModule, ToastModule, DropdownModule, InputSwitchModule,MessageModule, MessagesModule,
    InputTextModule, TableModule, TriStateCheckboxModule, PasswordModule, RadioButtonModule, ConfirmDialogModule,
    InputTextareaModule, TooltipModule, CheckboxModule, OverlayPanelModule, EditorModule,
    LoggerModule.forRoot({
      serverLoggingUrl: '/api/logs',
      level: NgxLoggerLevel.INFO,
      serverLogLevel: NgxLoggerLevel.ERROR
    }),
    TranslateModule.forRoot({
      loader: {
          provide: TranslateLoader,
          useFactory: HttpLoaderFactory,
          deps: [HttpClient]
      },
      defaultLanguage: 'en'
    })
  ],
  providers: [
    AuthenticationService,
    TawkService, BrandService, EcuService, MessageService, ConfirmationService,
    {provide: APP_BASE_HREF, useValue : '/front/' },
    {provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true},
    { provide: LOCALE_ID, useValue: navigator.language}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
