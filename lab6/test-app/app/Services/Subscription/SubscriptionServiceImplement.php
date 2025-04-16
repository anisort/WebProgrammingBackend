<?php

namespace App\Services\Subscription;

use LaravelEasyRepository\ServiceApi;
use App\Repositories\Subscription\SubscriptionRepository;

class SubscriptionServiceImplement extends ServiceApi implements SubscriptionService{

    /**
     * set title message api for CRUD
     * @param string $title
     */
     protected $title = "";
     /**
     * uncomment this to override the default message
     * protected string $create_message = "";
     * protected string $update_message = "";
     * protected string $delete_message = "";
     */

     /**
     * don't change $this->mainRepository variable name
     * because used in extends service class
     */
     protected SubscriptionRepository $subscriptionRepository;

    public function __construct(SubscriptionRepository $subscriptionRepository)
    {
      $this->subscriptionRepository = $subscriptionRepository;
    }

    public function getAllWithPagination(int $perPage = 10, string $sortDirection = 'asc')
    {
        return $this->subscriptionRepository->getAllWithPagination($perPage, $sortDirection);
    }

    public function getById(int $id)
    {
        return $this->subscriptionRepository->getById($id);
    }

    public function store(array $data)
    {
        return $this->subscriptionRepository->store($data);
    }

    public function update($id, array $data)
    {
        return $this->subscriptionRepository->update($id, $data);
    }

    public function delete($id)
    {
        return $this->subscriptionRepository->delete($id);
    }
}
