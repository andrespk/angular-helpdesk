import { Component, OnInit, AfterViewInit, ViewChild, Renderer2 } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-rh',
  templateUrl: './rh.component.html',
  styleUrls: ['./rh.component.scss']
})
export class RhComponent implements OnInit, AfterViewInit {

  @ViewChild('fantasma', null) fantasma;

  constructor(private renderer: Renderer2) { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    // const teste = this.fantasma.nativeElement;
    // teste.style.display = 'none';
    // console.log(teste);
    // this.animate();
  }

  public animate() {
    let show = false;
    setInterval(() => {
      if (show) {
        // $('#fantasma').fadeOut();
        // this.fantasma.nativeElement.style.display = 'none';
        this.renderer.setStyle(
          this.fantasma.nativeElement,
          'display',
          'none'
        );
      } else {
        // this.fantasma.nativeElement.style.display = 'inline';
        // $('#fantasma').fadeIn();
        this.renderer.setStyle(
          this.fantasma.nativeElement,
          'display',
          'inline'
        );
      }
      show = !show;
    }, 500);
  }

}
