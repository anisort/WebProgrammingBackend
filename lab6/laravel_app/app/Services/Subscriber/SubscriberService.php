<?php

namespace App\Services\Subscriber;

use LaravelEasyRepository\BaseService;

interface SubscriberService extends BaseService{

    public function getAllWithPagination(int $perPage = 10, string $sortDirection = 'asc');
    public function getById(int $id);
    public function store(array $data);
    public function update($id, array $data);
    public function delete($id);
}
