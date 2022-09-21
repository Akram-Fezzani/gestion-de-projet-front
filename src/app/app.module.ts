import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { FormsModule } from '@angular/forms';

// layouts
import { AdminComponent } from "./layouts/admin/admin.component";
import { AuthComponent } from "./layouts/auth/auth.component";

// admin views
import { DashboardComponent } from "./views/admin/dashboard/dashboard.component";
import { MapsComponent } from "./views/admin/maps/maps.component";
import { SettingsComponent } from "./views/admin/settings/settings.component";
import { TablesComponent } from "./views/admin/tables/tables.component";

// auth views
import { LoginComponent } from "./views/auth/login/login.component";
import { RegisterComponent } from "./views/auth/register/register.component";

// no layouts views
import { IndexComponent } from "./views/index/index.component";
import { LandingComponent } from "./views/landing/landing.component";
import { ProfileComponent } from "./views/profile/profile.component";

// components for views and layouts

import { AdminNavbarComponent } from "./components/navbars/admin-navbar/admin-navbar.component";
import { AuthNavbarComponent } from "./components/navbars/auth-navbar/auth-navbar.component";
import { CardBarChartComponent } from "./components/cards/card-bar-chart/card-bar-chart.component";
import { CardLineChartComponent } from "./components/cards/card-line-chart/card-line-chart.component";
import { CardPageVisitsComponent } from "./components/cards/card-page-visits/card-page-visits.component";
import { CardProfileComponent } from "./components/cards/card-profile/card-profile.component";
import { CardSettingsComponent } from "./components/cards/card-settings/card-settings.component";
import { CardSocialTrafficComponent } from "./components/cards/card-social-traffic/card-social-traffic.component";
import { CardStatsComponent } from "./components/cards/card-stats/card-stats.component";
import { CardTableComponent } from "./components/cards/card-table/card-table.component";
import { FooterAdminComponent } from "./components/footers/footer-admin/footer-admin.component";
import { FooterComponent } from "./components/footers/footer/footer.component";
import { FooterSmallComponent } from "./components/footers/footer-small/footer-small.component";
import { HeaderStatsComponent } from "./components/headers/header-stats/header-stats.component";
import { IndexNavbarComponent } from "./components/navbars/index-navbar/index-navbar.component";
import { MapExampleComponent } from "./components/maps/map-example/map-example.component";
import { IndexDropdownComponent } from "./components/dropdowns/index-dropdown/index-dropdown.component";
import { TableDropdownComponent } from "./components/dropdowns/table-dropdown/table-dropdown.component";
import { PagesDropdownComponent } from "./components/dropdowns/pages-dropdown/pages-dropdown.component";
import { NotificationDropdownComponent } from "./components/dropdowns/notification-dropdown/notification-dropdown.component";
import { SidebarComponent } from "./components/sidebar/sidebar.component";
import { UserDropdownComponent } from "./components/dropdowns/user-dropdown/user-dropdown.component";
import { HttpClientModule } from "@angular/common/http";
import { ResetComponent } from "./components/reset/reset.component";
import { UpdateprofileComponent } from './components/updateprofile/updateprofile.component';
import { UpdateprojectComponent } from './components/updateproject/updateproject.component';
import { CardUpdateProjectComponent } from './card-update-project/card-update-project.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatFormFieldModule } from '@angular/material/form-field';
import { CardAffectempComponent } from './components/cards/card-affectemp/card-affectemp.component';
import {MatSelectModule} from '@angular/material/select';
import {ReactiveFormsModule } from '@angular/forms';
import { CardAffectManagerComponent } from './components/cards/card-affect-manager/card-affect-manager.component';
import { CreateTaskComponent } from './components/create-task/create-task.component';
import { CardUpdateTaskComponent } from './components/cards/card-update-task/card-update-task.component';
import { TasksComponent } from './components/tasks/tasks.component';
import { TaskTableDropdownComponent } from './components/dropdowns/task-table-dropdown/task-table-dropdown.component';
import { CardTableTaskComponent } from './components/cards/card-table-task/card-table-task.component';
import { UpdateTaskComponent } from './components/update-task/update-task.component';
import { CardCreateReportComponent } from './components/cards/card-create-report/card-create-report.component';
import { CardTableReportComponent } from './components/cards/card-table-report/card-table-report.component';
import { UpdatereportComponent } from './components/updatereport/updatereport.component';
import { CardUpdateReportComponent } from './components/cards/card-update-report/card-update-report.component';
import { FooterAuthComponent } from './components/footers/footer-auth/footer-auth.component';
import { UpgradeComponent } from './upgrade/upgrade.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    CardBarChartComponent,
    CardLineChartComponent,
    IndexDropdownComponent,
    PagesDropdownComponent,
    TableDropdownComponent,
    NotificationDropdownComponent,
    UserDropdownComponent,
    SidebarComponent,
    FooterComponent,
    FooterSmallComponent,
    FooterAdminComponent,
    CardPageVisitsComponent,
    CardProfileComponent,
    CardSettingsComponent,
    CardSocialTrafficComponent,
    CardStatsComponent,
    CardTableComponent,
    HeaderStatsComponent,
    MapExampleComponent,
    AuthNavbarComponent,
    AdminNavbarComponent,
    IndexNavbarComponent,
    AdminComponent,
    AuthComponent,
    MapsComponent,
    SettingsComponent,
    TablesComponent,
    LoginComponent,
    RegisterComponent,
    IndexComponent,
    LandingComponent,
    ProfileComponent,
    ResetComponent,
    UpdateprofileComponent,
    UpdateprojectComponent,
    CardUpdateProjectComponent,
    CardAffectempComponent,
    CardAffectManagerComponent,
    CreateTaskComponent,
    CardUpdateTaskComponent,
    TasksComponent,
    TaskTableDropdownComponent,
    CardTableTaskComponent,
    UpdateTaskComponent,
    CardCreateReportComponent,
    CardTableReportComponent,
    UpdatereportComponent,
    CardUpdateReportComponent,
    FooterAuthComponent,
    UpgradeComponent,
  ],
  imports: [BrowserModule,
     AppRoutingModule,
     FormsModule,
     MatSlideToggleModule,
     MatSliderModule,
     HttpClientModule,
     BrowserModule,
    FormsModule,
    MatFormFieldModule,
    MatSelectModule,
    ReactiveFormsModule,
    MatSlideToggleModule,
     BrowserAnimationsModule
    ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
