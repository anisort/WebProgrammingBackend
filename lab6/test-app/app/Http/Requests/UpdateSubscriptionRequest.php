<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class UpdateSubscriptionRequest extends FormRequest
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
                'sometimes',
                'required',
                'string',
                Rule::unique('subscriptions')->where(fn ($query) => 
                    $query->where('topic', $this->input('topic'))
                )->ignore($this->route('subscription')),
            ],
            'topic' => 'sometimes|required|string',
            'payload' => 'sometimes|required|array',
            'expired_at' => 'sometimes|required|date|after:now',
        ];
    }
}
