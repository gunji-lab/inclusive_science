export interface Member {
  id: string;
  nameJa: string;
  nameEn?: string;
  affiliation: string;
  position?: string;
  roles: string[];
  teams: string[];
  specialty?: string;
  photo?: string;
  profileUrl?: string;
  order?: number;
}

// 正式なメンバー情報を確認後、この配列へ追加します。
export const members: Member[] = [];
