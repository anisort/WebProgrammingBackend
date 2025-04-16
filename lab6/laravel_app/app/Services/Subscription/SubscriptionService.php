<?php

namespace App\Services\Subscription;

use LaravelEasyRepository\BaseService;

interface SubscriptionService extends BaseService{

    public function getAllWithPagination(int $perPage = 10, string $sortDirection = 'asc');
    public function getById(int $id);
    public function store(array $data);
    public function update($id, array $data);
    public function delete($id);
}
