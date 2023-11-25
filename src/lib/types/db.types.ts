export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[];

export interface Database {
  public: {
    Tables: {
      "zine-one": {
        Row: {
          address: string | null;
          created_at: string;
          email: string | null;
          id: number;
          name: string;
          social: string | null;
          token_id: number;
          wallet_address: string | null;
        };
        Insert: {
          address?: string | null;
          created_at?: string;
          email?: string | null;
          id?: number;
          name?: string;
          social?: string | null;
          token_id: number;
          wallet_address?: string | null;
        };
        Update: {
          address?: string | null;
          created_at?: string;
          email?: string | null;
          id?: number;
          name?: string;
          social?: string | null;
          token_id?: number;
          wallet_address?: string | null;
        };
        Relationships: [];
      };
    };
    Views: {
      [_ in never]: never;
    };
    Functions: {
      [_ in never]: never;
    };
    Enums: {
      [_ in never]: never;
    };
    CompositeTypes: {
      [_ in never]: never;
    };
  };
}
