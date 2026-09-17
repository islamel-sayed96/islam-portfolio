<?php

namespace App\Services;

use Illuminate\Http\Client\RequestException;
use Illuminate\Support\Facades\Http;

class ZiinaClient
{
    public function __construct(
        private readonly string $apiKey,
        private readonly string $baseUrl,
    ) {}

    /**
     * Create a payment intent and return Ziina's response (id, redirect_url, status, ...).
     *
     * @throws RequestException
     */
    public function createPaymentIntent(
        int $amountInFils,
        string $currencyCode,
        string $successUrl,
        string $cancelUrl,
        bool $test = false,
    ): array {
        return $this->client()
            ->post('/payment_intent', [
                'amount' => $amountInFils,
                'currency_code' => $currencyCode,
                'success_url' => $successUrl,
                'cancel_url' => $cancelUrl,
                'test' => $test,
            ])
            ->throw()
            ->json();
    }

    /**
     * Fetch a payment intent by id to check its current status.
     *
     * @throws RequestException
     */
    public function getPaymentIntent(string $id): array
    {
        return $this->client()
            ->get("/payment_intent/{$id}")
            ->throw()
            ->json();
    }

    private function client()
    {
        return Http::baseUrl($this->baseUrl)
            ->withToken($this->apiKey)
            ->acceptJson();
    }
}
