import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { loadStripe } from '@stripe/stripe-js';
//change this later with your actual STRIPE key
import {environment } from '../../../environments/environment';
import { firstValueFrom } from 'rxjs';

//injecting this in our payment component to start a checkout session
@Injectable({ providedIn: 'root' })
export class PaymentService {
  constructor(private http: HttpClient) {}

  async startCheckout(priceId: string): Promise<void> {
    const { sessionId } = await firstValueFrom(
      this.http.post<{ sessionId: string }>('/api/checkout', { priceId })
    );
    //calling the stripe API to load a checkout session with the sessionId
    const stripe = await loadStripe(environment.stripePublishableKey);
    if (!stripe) throw new Error('Stripe JS failed to load');

    const { error } = await stripe.redirectToCheckout({ sessionId });
    if (error) throw error;
  }
}
