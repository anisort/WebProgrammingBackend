<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class StoreSubscriptionRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'service' => [
                'required',
                'string',
                Rule::unique('subscriptions')->where(fn ($query) => 
                    $query->where('topic', $this->input('topic'))
                ),
            ],
            'topic' => 'required|string',
            'payload' => 'required|array',
            'expired_at' => 'required|date|after:now',
        ];
    }
}
