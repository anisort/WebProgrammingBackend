<?php

namespace Database\Seeders;

use App\Models\Subscriber;
use Illuminate\Database\Seeder;
use App\Models\Subscription;

class SubscriberSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Subscriber::factory(10)->create()->each(function ($subscriber) {
            $subscriptions = Subscription::all()->random(2);
            $subscriber->subscriptions()->attach($subscriptions->pluck('id')->toArray());
        });
    }
}
