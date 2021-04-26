import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  
  constructor(public router: Router) { 
  }

  ngOnInit(): void {
  
  }



  showMenu() {

  const navBar = document.querySelector('.navbar') as HTMLElement;
  const  navLink = document.querySelector('.navbar-links') as HTMLElement;
  const close = document.querySelector('.close') as HTMLElement;
  const ham = document.querySelector('.ham') as HTMLElement;
  
  navBar.classList.toggle('active');
  navLink.classList.toggle('active');
  close.classList.toggle('active');
  ham.classList.toggle('active');
   

  
  
    
  }

}
