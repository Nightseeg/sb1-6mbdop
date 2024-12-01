export interface CallResponse {
  success: boolean;
  callId?: string;
  error?: string;
}

export interface CallStatusResponse {
  status: 'completed' | 'failed' | 'in-progress';
  duration: number;
}