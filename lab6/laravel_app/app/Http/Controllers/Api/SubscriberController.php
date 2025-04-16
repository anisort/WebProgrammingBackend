<?php

namespace App\Http\Controllers\Api;

use App\Http\Requests\StoreSubscriberRequest;
use App\Http\Requests\UpdateSubscriberRequest;
use App\Http\Controllers\Controller;
use App\Http\Resources\SubscriberResource;
use App\Services\Subscriber\SubscriberService;

class SubscriberController extends Controller
{ 
    public function __construct(private SubscriberService $subscriberService){}

    public function index()
    {
        $perPage = request('per_page', 10);
        $sortDirection = request('sort', 'asc');
        return SubscriberResource::collection($this->subscriberService->getAllWithPagination($perPage, $sortDirection));
    }

    public function show(int $id)
    {
        return SubscriberResource::make($this->subscriberService->getById($id));
    }

    public function store(StoreSubscriberRequest $request)
    {
        return SubscriberResource::make($this->subscriberService->store($request->validated()));
    }

    public function update(UpdateSubscriberRequest $request, int $id)
    {
        return SubscriberResource::make($this->subscriberService->update($id, $request->validated()));
    }

    public function destroy(int $id)
    {
        return response()->json(['deleted' => $this->subscriberService->delete($id)]);
    }
}
