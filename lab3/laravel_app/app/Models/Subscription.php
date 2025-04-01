<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Subscription extends Model
{
    /** @use HasFactory<\Database\Factories\SubscriptionFactory> */
    use HasFactory;

    protected $fillable = ['service', 'topic', 'payload', 'expired_at'];
    protected $casts = [
        'payload' => 'array',
        'expired_at' => 'datetime',
    ];
    

    public function subscribers(){
        return $this->belongsToMany(Subscriber::class, 'subscription_subscriber');
    }
}
