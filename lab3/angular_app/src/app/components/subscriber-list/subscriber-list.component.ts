import { Component, OnInit } from '@angular/core';
import { SubscriberService } from '../../services/subscriber.service';
import { Subscriber } from '../../models/Subscriber';

@Component({
  selector: 'app-subscriber-list',
  standalone: false,
  templateUrl: './subscriber-list.component.html',
  styleUrl: './subscriber-list.component.scss'
})
export class SubscriberListComponent {
  subscribers: Subscriber[] = [];
  currentPage = 1;
  totalPages = 1;
  expandedSubscriberId: number | null = null;

  constructor(private subscriberService: SubscriberService) {}

  ngOnInit(): void {
    this.loadSubscribers();
  }

  loadSubscribers(page: number = 1): void {
    this.subscriberService.getSubscribers(page).subscribe((response) => {
      this.subscribers = response.data;
      this.currentPage = response.meta.current_page;
      this.totalPages = response.meta.last_page;
    });
  }

  changePage(page: number) {
    if (page >= 1 && page <= this.totalPages) {
      this.loadSubscribers(page);
    }
  }

  toggleSubscriptions(subscriberId: number) {
    this.expandedSubscriberId = this.expandedSubscriberId === subscriberId ? null : subscriberId;
  }
}
