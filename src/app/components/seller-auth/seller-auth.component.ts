import { Component, OnInit } from '@angular/core';
import { SellerService } from 'src/app/services/seller.service';

@Component({
  selector: 'app-seller-auth',
  templateUrl: './seller-auth.component.html',
  styleUrls: ['./seller-auth.component.scss']
})
export class SellerAuthComponent implements OnInit {
  constructor(private seller: SellerService) {
  }
  showLogin = false

  ngOnInit(): void {
    this.seller.reloadServer()
  }
  signUp(data: object) {
    this.seller.userSignUp(data).subscribe((res) => console.warn(res))
  }
  openLogin() {
    this.showLogin = true
  }
  openSignup() {
    this.showLogin = false
  }
}
