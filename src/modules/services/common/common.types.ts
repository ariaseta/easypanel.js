export interface GetServiceErrorResponse {
  error: string | null;
}

export interface GetNotesResponse {
  notes: string;
}

export interface RenameServiceResponse {
  success: boolean;
}

export interface SetNotesResponse {
  success: boolean;
}
