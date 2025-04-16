<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\StoreSubscriptionRequest;
use App\Http\Requests\UpdateSubscriptionRequest;
use App\Services\Subscription\SubscriptionService;
use App\Http\Resources\SubscriptionResource;

class SubscriptionController extends Controller
{
    public function __construct(private SubscriptionService $subscriptionService){}

    public function index()
    {
        $perPage = request('per_page', 10);
        $sortDirection = request('sort', 'asc');
        return SubscriptionResource::collection($this->subscriptionService->getAllWithPagination($perPage, $sortDirection));
    }

    public function show(int $id)
    {
        return SubscriptionResource::make($this->subscriptionService->getById($id));
    }

    public function store(StoreSubscriptionRequest $request)
    {
        return SubscriptionResource::make($this->subscriptionService->store($request->validated()));
    }

    public function update(UpdateSubscriptionRequest $request, int $id)
    {
        return SubscriptionResource::make($this->subscriptionService->update($id, $request->validated()));
    }

    public function destroy(int $id)
    {
        return response()->json(['deleted' => $this->subscriptionService->delete($id)]);
    }
}
