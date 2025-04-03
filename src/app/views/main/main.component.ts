import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { NgbModal, NgbAccordion } from '@ng-bootstrap/ng-bootstrap';
import { delay, of, Subject, takeUntil } from "rxjs";

@Component({
  selector: 'main-component',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit, OnDestroy {
  @ViewChild('acc', { static: true }) accordion!: NgbAccordion;
  @ViewChild('myDialog') myDialog!: any;

  private destroy$ = new Subject<void>();

  constructor(private modalService: NgbModal) {}

  ngOnInit(): void {
    of(null).pipe(
      delay(10000),
      takeUntil(this.destroy$)
    ).subscribe(() => {
      if (this.myDialog) {
        this.openDialog();
      }
    });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  openDialog(): void {
    this.modalService.open(this.myDialog, { centered: true });
  }
}
