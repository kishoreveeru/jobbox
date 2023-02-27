import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { SharedService } from '../services/shared.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  
  showControls : boolean = false;
  constructor(private router: Router, private sharedService: SharedService) {
   }

   showControlFlag = this.sharedService.getLoginStatus().subscribe(flag =>
    {
      this.showControls = flag;
    });
   
  ngOnInit(): void {
    this.sharedService
    }

    logOut()
    {
      this.sharedService.setLoginStatus(true);
      this.router.navigateByUrl('/home')
      
    }
}
