// Analytics logger for B2B engagement and conversion tracking

export type AnalyticsEventType =
  | 'demo_click'
  | 'whatsapp_click'
  | 'contact_form_submit'
  | 'pricing_click'
  | 'ar_demo_launch'
  | 'try_on_interaction'
  | 'social_click'
  | 'dimension_toggle'
  | 'camera_permission_granted';

export interface AnalyticsEvent {
  id: string;
  type: AnalyticsEventType;
  label: string;
  timestamp: number;
  metadata?: Record<string, unknown>;
}

const listeners: Array<(event: AnalyticsEvent) => void> = [];
const eventLog: AnalyticsEvent[] = [];

export function trackEvent(type: AnalyticsEventType, label: string, metadata?: Record<string, unknown>) {
  const event: AnalyticsEvent = {
    id: Math.random().toString(36).substring(2, 9),
    type,
    label,
    timestamp: Date.now(),
    metadata,
  };

  eventLog.push(event);
  if (eventLog.length > 50) eventLog.shift();

  // Notify listeners
  listeners.forEach((fn) => fn(event));

  // Also log cleanly for inspection
  if (typeof window !== 'undefined' && (window as unknown as { __DEBUG_XR?: boolean }).__DEBUG_XR) {
    console.log('[Innovify XR Analytics]', event);
  }
}

export function subscribeAnalytics(fn: (event: AnalyticsEvent) => void) {
  listeners.push(fn);
  return () => {
    const idx = listeners.indexOf(fn);
    if (idx !== -1) listeners.splice(idx, 1);
  };
}

export function getEventLog(): AnalyticsEvent[] {
  return [...eventLog];
}
