// Подключение JQuery
declare var $: any;

import {AfterViewInit, Component} from '@angular/core';
// Импортируем Accordion
import 'jquery-ui/ui/widgets/accordion';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit{
  ngAfterViewInit() {
    // Настройка и инициализация `accordion`
    ($('#accordion') as any).accordion({
      collapsible: true,
      active: false,
      icons: false,
    });

    // Добавление в `accordion` стрелочки
    $(document).ready((): void => {
      $('.accordion-header').click(function (this: HTMLElement): void {
        let $header = $(this); // Теперь this — это кликнутый .accordion-header
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


