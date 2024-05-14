import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { ModalService } from 'src/app/services/modal.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor(public modal: ModalService,
    public auth: AuthService,
    private afAuth: AngularFireAuth,
    private router: Router
  ) {

  }

  ngOnInit(): void {}

  openModal($event: Event) {
    $event.preventDefault()
    this.modal.toggleModal('auth')
  }


}
