export interface Member {
  id: string;
  nameJa: string;
  nameEn: string;
  affiliation: string;
  position?: string;
  roles: string[];
  teams: string[];
  specialty?: string;
  photo?: string;
  profileUrl?: string;
  order: number;
}

export const members: Member[] = [
  {
    id: "kazuko-koshiba",
    nameJa: "小柴 和子",
    nameEn: "Kazuko Koshiba",
    affiliation: "東洋大学 生命科学部 生命科学科",
    position: "教授",
    roles: ["プロジェクトリーダー"],
    teams: ["biological-systems"],
    specialty: "発生生物学／動物の器官発生・再生／心循環器系の発生病態",
    profileUrl: "https://www.toyo.ac.jp/staff/16028.html",
    order: 1,
  },
  {
    id: "nobuhiko-kojima",
    nameJa: "児島 伸彦",
    nameEn: "Nobuhiko Kojima",
    affiliation: "東洋大学 生命科学部",
    position: "名誉教授",
    roles: ["プロジェクトオフィサー"],
    teams: [],
    specialty: "神経科学／分子神経生物学",
    profileUrl: "https://www.toyo.ac.jp/about/president_vicepresidents/pe/",
    order: 2,
  },
  {
    id: "megu-gunji",
    nameJa: "郡司 芽久",
    nameEn: "Megu Gunji",
    affiliation: "東洋大学 生命科学部 生命科学科",
    position: "准教授",
    roles: ["広報"],
    teams: [],
    specialty: "動物機能形態学／動物の形態と進化",
    profileUrl: "https://www.toyo.ac.jp/nyushi/undergraduate/lsc/dlsc/laboratory/gunji/",
    order: 3,
  },
  {
    id: "joji-horiuchi",
    nameJa: "堀内 城司",
    nameEn: "Joji Horiuchi",
    affiliation: "東洋大学 生命科学部 生体医工学科",
    position: "教授",
    roles: [],
    teams: ["biological-systems"],
    specialty: "生理学／脳神経科学／ストレスと自律反応",
    profileUrl: "https://www.toyo.ac.jp/nyushi/undergraduate/lsc/dben/laboratory/horiuchi/",
    order: 4,
  },
  {
    id: "ritsuko-kaneko",
    nameJa: "金子 律子",
    nameEn: "Ritsuko Ohtani-Kaneko",
    affiliation: "東洋大学 生命科学部 生命科学科",
    position: "教授",
    roles: [],
    teams: ["biological-systems"],
    specialty: "脳神経科学／神経発達／ホルモンと脳の性分化",
    profileUrl: "https://www.toyo.ac.jp/staff/06043.html",
    order: 5,
  },
  {
    id: "taku-nedachi",
    nameJa: "根建 拓",
    nameEn: "Taku Nedachi",
    affiliation: "東洋大学 生命科学部 生命科学科",
    position: "教授",
    roles: [],
    teams: ["biological-systems"],
    specialty: "細胞生物学／細胞工学／内分泌学",
    profileUrl: "https://www.toyo.ac.jp/nyushi/undergraduate/lsc/dlsc/laboratory/nedachi/",
    order: 6,
  },
  {
    id: "masato-masuda",
    nameJa: "増田 正人",
    nameEn: "Masato Masuda",
    affiliation: "東洋大学 総合情報学部 総合情報学科",
    position: "准教授",
    roles: [],
    teams: ["biological-systems"],
    specialty: "人工知能／計算力学／バイオデータサイエンス",
    profileUrl: "https://www.toyo.ac.jp/staff/00061.html",
    order: 7,
  },
];

export const operations = members.filter((member) => member.roles.length > 0).sort((a, b) => a.order - b.order);

export const membersByTeam = (teamId: string) =>
  members.filter((member) => member.teams.includes(teamId)).sort((a, b) => a.order - b.order);
