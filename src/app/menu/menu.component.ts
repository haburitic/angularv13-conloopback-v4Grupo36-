import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from '../service/token-storage.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  constructor(private tokenStorageService:TokenStorageService) { }

  ngOnInit(): void {

  }

  session():boolean{
    return false;
  }
}
