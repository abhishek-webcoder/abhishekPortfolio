import { Component, ElementRef, OnInit, Renderer2 } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { CommonModule, ViewportScroller } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
    if (typeof window !== 'undefined') {
      let ele = this.el;
      window.addEventListener('scroll', function () {
        const navbar = ele.nativeElement.querySelector('.navbar');
        if (window.scrollY > 0) {
          navbar.classList.add('navbar--scroll');
        } else {
          navbar.classList.remove('navbar--scroll');
        }
      });
    }
  }

  constructor(
    private viewportScroller: ViewportScroller,
    private el: ElementRef,
    private renderer: Renderer2
  ) {}

  showHideMenu() {
    let hamburgerMenu = this.el.nativeElement.querySelector(
      '.navbar__mobile-menu-items'
    );
    if (!hamburgerMenu.classList.contains('active')) {
      hamburgerMenu.classList.add('active');
      this.renderer.addClass(document.body, 'bodyScrollStop');
    } else {
      hamburgerMenu.classList.remove('active');
      this.renderer.removeClass(document.body, 'bodyScrollStop');
    }
  }

  scrollTo(scrollId: string) {
    this.viewportScroller.scrollToAnchor(scrollId);
  }
}
