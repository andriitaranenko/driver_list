import { Component, OnInit } from '@angular/core';
import {AuthService, User} from "../services/auth.service";

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.scss']
})
export class MainLayoutComponent implements OnInit {
  currentUser!: any;
  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.authService.user$.subscribe(res => this.currentUser = res);
    console.log(this.currentUser, 'curr user')
  }

  logout() {
    this.authService.logout();
  }

}