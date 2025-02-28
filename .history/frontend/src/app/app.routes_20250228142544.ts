import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './user/user.component';
import { FollowingComponent } from './following/following.component';

export const routes: Routes = [
  { path: 'user/:username', component: UserComponent },
  { path: 'user/:username/followings', component: FollowingComponent },
  //{ path: '', redirectTo: '/user/joaorca', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
