export interface Subscription {
    id: number;
    service: string;
    topic: string;
    payload: any;
    expired_at: string;
  }