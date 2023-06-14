export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json }
  | Json[]

export interface Database {
  public: {
    Tables: {
      like_songs: {
        Row: {
          created_at: string | null
          song_id: number
          user_id: number
        }
        Insert: {
          created_at?: string | null
          song_id: number
          user_id?: number
        }
        Update: {
          created_at?: string | null
          song_id?: number
          user_id?: number
        }
        Relationships: [
          {
            foreignKeyName: "like_songs_song_id_fkey"
            columns: ["song_id"]
            referencedRelation: "songs"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "like_songs_user_id_fkey"
            columns: ["user_id"]
            referencedRelation: "user"
            referencedColumns: ["id"]
          }
        ]
      }
      songs: {
        Row: {
          album: string | null
          author: string | null
          created_at: string | null
          duration: number | null
          group: string | null
          id: number
          image_path: string | null
          news: boolean | null
          rating: number | null
          song_number: number | null
          src: string | null
          title: string | null
        }
        Insert: {
          album?: string | null
          author?: string | null
          created_at?: string | null
          duration?: number | null
          group?: string | null
          id?: number
          image_path?: string | null
          news?: boolean | null
          rating?: number | null
          song_number?: number | null
          src?: string | null
          title?: string | null
        }
        Update: {
          album?: string | null
          author?: string | null
          created_at?: string | null
          duration?: number | null
          group?: string | null
          id?: number
          image_path?: string | null
          news?: boolean | null
          rating?: number | null
          song_number?: number | null
          src?: string | null
          title?: string | null
        }
        Relationships: []
      }
      tokenGuest: {
        Row: {
          created_at: string | null
          id: number
          token: string | null
        }
        Insert: {
          created_at?: string | null
          id?: number
          token?: string | null
        }
        Update: {
          created_at?: string | null
          id?: number
          token?: string | null
        }
        Relationships: []
      }
      user: {
        Row: {
          created_at: string | null
          email: string | null
          id: number
          name: string | null
          password: string | null
          token: string | null
        }
        Insert: {
          created_at?: string | null
          email?: string | null
          id?: number
          name?: string | null
          password?: string | null
          token?: string | null
        }
        Update: {
          created_at?: string | null
          email?: string | null
          id?: number
          name?: string | null
          password?: string | null
          token?: string | null
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}
