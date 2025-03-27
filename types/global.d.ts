export {};

declare global {
  interface Window {
    gtag: (
      command: 'event' | 'config',
      eventName: string,
      params?: Record<string, unknown>
    ) => void;
  }
}
