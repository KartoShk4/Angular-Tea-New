import {AfterViewInit, Component, OnDestroy, OnInit, ViewChild} from '@angular/core';

// Подключение JQuery
declare var $: any;
// Импортируем Accordion
import 'jquery-ui/ui/widgets/accordion';
import {delay, of, Subject, takeUntil} from "rxjs";

@Component({
  selector: 'main-component',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})

export class MainComponent implements AfterViewInit, OnInit, OnDestroy {
  // Получаем доступ к диалоговому окну
  @ViewChild('myDialog') dialog: any;

  // Создали переменную для управления отмены подписок на Observable
  private destroy$ = new Subject<void>();

  ngOnInit(): void {
    of(null).pipe(
        // Установил задержку в 10сек
        delay(10000),
        takeUntil(this.destroy$)
    ).subscribe((): void => {
      // Проверяем существование диалога, если есть то вызываем функцию
      if (this.dialog) {
       this.dialog.nativeElement.showModal();
      }
    });
  }

  ngOnDestroy(): void {
    // Убираем подписку
    this.destroy$.next();
    this.destroy$.complete();
  }

  // Закрываем диалоговое окно
  closeDialog(): void {
    if (this.dialog) {
      this.dialog.nativeElement.close();
    }
  }

  // Для JQuery
  ngAfterViewInit(): void {
    // Настройка и инициализация `accordion`
    ($('#accordion') as any).accordion({
      collapsible: true,
      active: false,
      icons: false,
    });

    // Добавление в `accordion` стрелочки
    $(document).ready((): void => {
      $('.accordion-header').click(function (this: HTMLElement): void {
        let $header = $(this);
        let $body = $header.next('.accordion-body');

        if ($header.hasClass('collapsed')) {
          // Закрываем все открытые блоки
          $('.accordion-header').addClass('collapsed');
          $('.accordion-body').removeClass('show');

          // Открываем текущий блок
          $header.removeClass('collapsed');
          $body.addClass('show');
        } else {
          // Закрываем текущий блок
          $header.addClass('collapsed');
          $body.removeClass('show');
        }
      });
    });
  }
}
