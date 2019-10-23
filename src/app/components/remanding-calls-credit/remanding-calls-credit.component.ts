import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { RemandingCallsCreditService } from './remanding-calls-credit.service';

@Component({
  selector: 'app-remanding-calls-credit',
  templateUrl: './remanding-calls-credit.component.html',
  styleUrls: ['./remanding-calls-credit.component.scss'],
})
export class RemandingCallsCreditComponent implements OnInit,OnDestroy {
  public remainingCallCredits: number;
  private subscription: Subscription;
  constructor(
    public remainingCallsCreditsService: RemandingCallsCreditService) {
  }
  ngOnInit(){
    this.subscription = this.remainingCallsCreditsService.RemainingCallsCreditSubject
     .subscribe(remainingCallCredits=>{
       this.remainingCallCredits = remainingCallCredits;
     })
   }
 
   ngOnDestroy(){
     this.subscription.unsubscribe();
   }}
