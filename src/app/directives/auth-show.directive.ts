import {Directive, ElementRef, OnInit} from '@angular/core';
import {AuthService} from '../auth.service';

@Directive({
  selector: '[appAuthShow]'
})
export class AuthShowDirective implements OnInit {

  constructor(private authService: AuthService,
              private el: ElementRef) {
  }

  ngOnInit(): void {
    this.authService.currentUser.subscribe(res => {
      console.log(res);
      if (res) {
        this.el.nativeElement.style.display = 'block';
      } else {
        this.el.nativeElement.style.display = 'none';
      }
    });
  }

}
