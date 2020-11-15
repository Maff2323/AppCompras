import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  ngOnInit () {
  if(!firebase.apps.length){
  firebase.initializeApp({
  apiKey: 'AIzaSyA-eA28uz_UM3-tjYMuAoeASY8gWKel2aI',
  authDomain: 'appcompras-5d0d0.firebaseapp.com'
  });
  }
  }
 }
