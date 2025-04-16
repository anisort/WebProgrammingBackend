<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Http\Requests\StoreSubscriptionRequest;
use App\Http\Requests\UpdateSubscriptionRequest;
use App\Services\Subscription\SubscriptionService;
use App\Http\Resources\SubscriptionResource;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Symfony\Component\HttpKernel\Exception\AccessDeniedHttpException;
use Symfony\Component\HttpKernel\Exception\UnauthorizedHttpException;

class SubscriptionController extends Controller
{
    public function __construct(private SubscriptionService $subscriptionService){}

    public function index(Request $request)
    {

        if (!$request->bearerToken()) {
            throw new UnauthorizedHttpException("");
        }

        if(Auth::hasRole('laravel-app', 'ApiViewerLaravel')) {
            $perPage = request('per_page', 10);
            $sortDirection = request('sort', 'asc');
            return SubscriptionResource::collection($this->subscriptionService->getAllWithPagination($perPage, $sortDirection));
        } else {
            throw new AccessDeniedHttpException();
        }

    }

    public function show(int $id, Request $request)
    {

        if (!$request->bearerToken()) {
            throw new UnauthorizedHttpException("");
        }

        if(Auth::hasRole('laravel-app', 'ApiViewerLaravel')) {
            return SubscriptionResource::make($this->subscriptionService->getById($id));
        } else {
            throw new AccessDeniedHttpException();
        }

    }

    public function store(StoreSubscriptionRequest $request)
    {
        if (!$request->bearerToken()) {
            throw new UnauthorizedHttpException("");
        }

        if(Auth::hasRole('laravel-app', 'ApiWriterLaravel')) {
            return SubscriptionResource::make($this->subscriptionService->store($request->validated()));
        } else {
            throw new AccessDeniedHttpException();
        }
    }

    public function update(UpdateSubscriptionRequest $request, int $id)
    {
        if (!$request->bearerToken()) {
            throw new UnauthorizedHttpException("");
        }

        if(Auth::hasRole('laravel-app', 'ApiWriterLaravel')) {
            return SubscriptionResource::make($this->subscriptionService->update($id, $request->validated()));
        } else {
            throw new AccessDeniedHttpException();
        }
    }

    public function destroy(int $id, Request $request)
    {
        if (!$request->bearerToken()) {
            throw new UnauthorizedHttpException("");
        }

        if(Auth::hasRole('laravel-app', 'ApiWriterLaravel')) {
            return response()->json(['deleted' => $this->subscriptionService->delete($id)]);
        } else {
            throw new AccessDeniedHttpException();
        }
    }
}
