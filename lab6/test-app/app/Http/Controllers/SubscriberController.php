<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreSubscriberRequest;
use App\Http\Requests\UpdateSubscriberRequest;
use App\Http\Controllers\Controller;
use App\Http\Resources\SubscriberResource;
use App\Services\Subscriber\SubscriberService;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Symfony\Component\HttpKernel\Exception\UnauthorizedHttpException;
use Symfony\Component\HttpKernel\Exception\AccessDeniedHttpException;

class SubscriberController extends Controller
{ 
    public function __construct(private SubscriberService $subscriberService){}

    public function index(Request $request)
    {
        if (!$request->bearerToken()) {
            throw new UnauthorizedHttpException("");
        }

        if(Auth::hasRole('laravel-app', 'ApiViewerLaravel')) {
            $perPage = $request->input('per_page', 10);
            $sortDirection = $request->input('sort', 'asc');
            return SubscriberResource::collection($this->subscriberService->getAllWithPagination($perPage, $sortDirection));
        } else {
            throw new AccessDeniedHttpException;
        }
    }

    

    public function show(int $id, Request $request)
    {
        if (!$request->bearerToken()) {
            throw new UnauthorizedHttpException("");
        }

        if(Auth::hasRole('laravel-app', 'ApiViewerLaravel')) {
            return SubscriberResource::make($this->subscriberService->getById($id));
        } else {
            throw new AccessDeniedHttpException;
        }
        
    }

    public function store(StoreSubscriberRequest $request)
    {
        if (!$request->bearerToken()) {
            throw new UnauthorizedHttpException("");
        }

        if(Auth::hasRole('laravel-app', 'ApiWriterLaravel')) {
            return SubscriberResource::make($this->subscriberService->store($request->validated()));
        } else {
            throw new AccessDeniedHttpException;
        }
        
    }

    public function update(UpdateSubscriberRequest $request, int $id)
    {
        if (!$request->bearerToken()) {
            throw new UnauthorizedHttpException("");
        }

        if(Auth::hasRole('laravel-app', 'ApiWriterLaravel')) {
            return SubscriberResource::make($this->subscriberService->update($id, $request->validated()));
        } else {
            throw new AccessDeniedHttpException;
        }
    }

    public function destroy(int $id, Request $request)
    {
        if (!$request->bearerToken()) {
            throw new UnauthorizedHttpException("");
        }

        if(Auth::hasRole('laravel-app', 'ApiWriterLaravel')) {
            return response()->json(['deleted' => $this->subscriberService->delete($id)]);
        } else {
            throw new AccessDeniedHttpException;
        }
    }
}
