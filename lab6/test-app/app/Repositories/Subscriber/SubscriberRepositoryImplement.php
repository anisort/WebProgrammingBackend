<?php

namespace App\Repositories\Subscriber;

use LaravelEasyRepository\Implementations\Eloquent;
use App\Models\Subscriber;

class SubscriberRepositoryImplement extends Eloquent implements SubscriberRepository{

    /**
    * Model class to be used in this repository for the common methods inside Eloquent
    * Don't remove or change $this->model variable name
    * @property Model|mixed $model;
    */
    protected Subscriber $model;

    public function __construct(Subscriber $model)
    {
        $this->model = $model;
    }

    // public function all():mixed{
    //     return $this->model->paginate();
    // }

    public function getAllWithPagination(int $perPage = 10, string $sortDirection = 'asc')
    {
        return $this->model->orderBy('id', $sortDirection)->paginate($perPage);
    }

    public function getById(int $id)
    {
        return $this->model->findOrFail($id);
    }

    public function store(array $data)
    {
        return $this->model->create($data);
    }

    public function update($id, array $data)
    {
        $subscriber = $this->model->findOrFail($id);
        $subscriber->update($data);
        return $subscriber->fresh();
    }

    public function delete($id)
    {
        $subscriber = $this->model->findOrFail($id);
        return $subscriber->delete();
    }
}
