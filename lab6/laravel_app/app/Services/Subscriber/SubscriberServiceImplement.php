<?php

namespace App\Services\Subscriber;

use LaravelEasyRepository\ServiceApi;
use App\Repositories\Subscriber\SubscriberRepository;

class SubscriberServiceImplement extends ServiceApi implements SubscriberService{

    /**
     * set title message api for CRUD
     * @param string $title
     */
     protected string $title = "";
     /**
     * uncomment this to override the default message
     * protected string $create_message = "";
     * protected string $update_message = "";
     * protected string $delete_message = "";
     */

     /**
     * don't change $this->subscriberRepository variable name
     * because used in extends service class
     */
     protected SubscriberRepository $subscriberRepository;

    public function __construct(SubscriberRepository $subscriberRepository)
    {
      $this->subscriberRepository = $subscriberRepository;
    }

    public function getAllWithPagination(int $perPage = 10, string $sortDirection = 'asc')
    {
        return $this->subscriberRepository->getAllWithPagination($perPage, $sortDirection);
    }

    public function getById(int $id)
    {
        return $this->subscriberRepository->getById($id);
    }

    public function store(array $data)
    {
        return $this->subscriberRepository->store($data);
    }

    public function update($id, array $data)
    {
        return $this->subscriberRepository->update($id, $data);
    }

    public function delete($id)
    {
        return $this->subscriberRepository->delete($id);
    }
}
