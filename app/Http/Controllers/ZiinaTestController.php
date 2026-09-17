<?php

namespace App\Http\Controllers;

use App\Services\ZiinaClient;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ZiinaTestController extends Controller
{
    /**
     * Create a small test payment intent and redirect to Ziina's hosted
     * checkout page. This does not charge anyone by itself — it only
     * charges if the flagged test card/flow is completed on Ziina's page.
     */
    public function test(ZiinaClient $ziina)
    {
        $intent = $ziina->createPaymentIntent(
            amountInFils: 100, // 1.00 AED
            currencyCode: 'AED',
            successUrl: route('ziina.success').'?payment_intent_id={PAYMENT_INTENT_ID}',
            cancelUrl: route('ziina.cancel'),
            test: true,
        );

        return Inertia::location($intent['redirect_url']);
    }

    public function success(Request $request, ZiinaClient $ziina)
    {
        $request->validate(['payment_intent_id' => 'required|string']);

        $intent = $ziina->getPaymentIntent($request->string('payment_intent_id'));

        return Inertia::render('Payments/ZiinaSuccess', ['intent' => $intent]);
    }

    public function cancel()
    {
        return Inertia::render('Payments/ZiinaCancel');
    }
}
