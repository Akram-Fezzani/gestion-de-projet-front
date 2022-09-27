import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ResetComponent } from "./components/reset/reset.component";
import { UpdateprofileComponent } from "./components/updateprofile/updateprofile.component";
import { AuthenticationGuard } from "./guard/authentication.guard";

// layouts
import { AdminComponent } from "./layouts/admin/admin.component";
import { AuthComponent } from "./layouts/auth/auth.component";

// admin views
import { DashboardComponent } from "./views/admin/dashboard/dashboard.component";
import { MapsComponent } from "./views/admin/maps/maps.component";
import { TablesComponent } from "./views/admin/tables/tables.component";

// auth views
import { LoginComponent } from "./views/auth/login/login.component";
import { RegisterComponent } from "./views/auth/register/register.component";

// no layouts views
import { IndexComponent } from "./views/index/index.component";
import { LandingComponent } from "./views/landing/landing.component";
import { ProfileComponent } from "./views/profile/profile.component";
//project views
import { SettingsComponent } from "./views/admin/settings/settings.component";
import { UpdateprojectComponent } from "./components/updateProject/updateproject.component";
import { CardAffectempComponent } from "./components/cards/card-affectemp/card-affectemp.component";
import { TasksComponent } from "./components/tasks/tasks.component";
import { UpdateTaskComponent } from "./components/update-task/update-task.component";
import { UpdatereportComponent } from "./components/updatereport/updatereport.component";
import { UpgradeComponent } from "./upgrade/upgrade.component";



const routes: Routes = [
  // admin views
  {
    path: "admin",
    component: AdminComponent,
    children: [
      { path: "dashboard", component: DashboardComponent ,canActivate : [AuthenticationGuard] },
      { path: "settings", component: SettingsComponent ,canActivate : [AuthenticationGuard]},
      { path: "tables", component: TablesComponent ,canActivate : [AuthenticationGuard]},
      { path: "maps", component: MapsComponent ,canActivate : [AuthenticationGuard]},


      { path: "", redirectTo: "dashboard", pathMatch: "full" },
    ],
  },
  // auth views
  { path: "reset", component: ResetComponent,canActivate : [AuthenticationGuard] },
  { path: "updateprofile", component: UpdateprofileComponent ,canActivate : [AuthenticationGuard] },
  { path: "updateproject", component: UpdateprojectComponent ,canActivate : [AuthenticationGuard]},
  { path: "affectemp", component: CardAffectempComponent ,canActivate : [AuthenticationGuard]},
  { path: "task", component: TasksComponent,canActivate : [AuthenticationGuard] },
  { path: "updatetask", component: UpdateTaskComponent ,canActivate : [AuthenticationGuard]},
  { path: "updatereport", component: UpdatereportComponent ,canActivate : [AuthenticationGuard]},
  { path: "upgrade", component: UpgradeComponent ,canActivate : [AuthenticationGuard] },





  { path: "login", component: LoginComponent },
  {
    path: "auth",
    component: AuthComponent,
    children: [
      { path: "login", component: LoginComponent },
      { path: "register", component: RegisterComponent },
      { path: "", redirectTo: "login", pathMatch: "full" },
    ],
  },
  // no layout views
  { path: "profile", component: ProfileComponent },
  { path: "landing", component: LandingComponent },
  { path: "", component: IndexComponent },
  { path: "**", redirectTo: "", pathMatch: "full" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
