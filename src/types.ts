// from /api/{tenantId}/items
export interface Item {
  id: number;
  name: string;
  isCompleted: boolean;
}

// from /api/{tenantId}/items/{itemId}
export interface ItemDetail {
  id: number;
  name: string;
  memo?: string;
  imageUrl?: string;
  isCompleted: boolean;
}

export interface ItemCreateRequest {
  name: string;
}

export interface ItemUpdateRequest {
  name: string;
  memo: string;
  imageUrl: string;
  isCompleted: boolean;
}
