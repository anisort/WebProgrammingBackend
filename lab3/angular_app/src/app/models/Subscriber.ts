import { Subscription } from "./Subscription";

export interface Subscriber {
    id: number;
    name: string;
    email: string;
    subscriptions: Subscription[];
  }