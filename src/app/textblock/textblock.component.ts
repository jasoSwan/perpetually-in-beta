import { Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-textblock',
  templateUrl: './textblock.component.html',
  styleUrls: ['./textblock.component.css']
})
export class TextblockComponent implements OnInit {

  @Input() text: string;
  @Input() headline: string;
  @Input() image:string;

  constructor() {

  }

  ngOnInit() {
    
  }
}
