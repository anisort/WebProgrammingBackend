<?php

namespace App\Repositories\Subscriber;

use LaravelEasyRepository\Repository;

interface SubscriberRepository extends Repository{

    public function getAllWithPagination(int $perPage = 10, string $sortDirection = 'asc');
    public function getById(int $id);
    public function store(array $data);
    public function update($id, array $data);
    public function delete($id);
}
