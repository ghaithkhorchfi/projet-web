import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Session } from 'src/app/session';
import { FakeSessionItemService } from '../fake-session-item.service';

@Component({
  selector: 'app-session-edit-form',
  templateUrl: './session-edit-form.component.html',
  styleUrls: ['./session-edit-form.component.css']
})
export class SessionEditFormComponent implements OnInit {
  id: any;
  private sub: any;
  session:any;

  tracks = ['MEAN', 'Angular', 'NodeJS', 'Android', 'Swift', 'Xamarin'];
  // session = new Session(1, 'Web', this.tracks[0], new
  //   Date('2021-12-09'), 10, 'Tunis', 0, false);
  constructor(private sessionItemService:
    FakeSessionItemService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.sub = this.route.params.subscribe(params => {
      this.id = params['id'];
    });
    console.log('Session ID ' + this.id.toString());
    this.session = this.sessionItemService.getSession(this.id);

  }
  editSession(sessionItem: NgForm): void {
    console.log("Session updates..." + JSON.stringify(sessionItem.value));
  }
}
