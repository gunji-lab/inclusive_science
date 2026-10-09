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
    teams: ["environment-ecology"],
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
    roles: ["グループリーダー"],
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
  {
    id: "kazuya-shimizu",
    nameJa: "清水 和哉",
    nameEn: "Shimizu Kazuya",
    affiliation: "東洋大学 生命科学部 生命科学科",
    position: "教授",
    roles: ["グループリーダー"],
    teams: ["environment-ecology"],
    specialty: "水処理微生物学／生態工学",
    profileUrl: "https://www.toyo.ac.jp/staff/10078.html",
    order: 8,
  },
  {
    id: "kazuhiro-shiizaki",
    nameJa: "椎崎 一宏",
    nameEn: "Shiizaki Kazuhiro",
    affiliation: "東洋大学 生命科学部 生命科学科",
    position: "教授",
    roles: [],
    teams: ["environment-ecology"],
    specialty: "分子生物学／環境科学",
    profileUrl: "https://www.toyo.ac.jp/staff/15061.html",
    order: 9,
  },
  {
    id: "motohiro-ito",
    nameJa: "伊藤 元裕",
    nameEn: "Ito Motohiro",
    affiliation: "東洋大学 生命科学部 生命科学科",
    position: "准教授",
    roles: [],
    teams: ["environment-ecology"],
    specialty: "海洋生態学／動物行動学／保全生態学",
    profileUrl: "https://www.toyo.ac.jp/staff/17113.html",
    order: 10,
  },
  {
    id: "masanori-take",
    nameJa: "武 正憲",
    nameEn: "Take Masanori",
    affiliation: "東洋大学 国際観光学部 国際観光学科",
    position: "教授",
    roles: [],
    teams: ["environment-ecology"],
    specialty: "造園学／自然観光資源管理／エコツーリズム",
    profileUrl: "https://www.toyo.ac.jp/staff/77185.html",
    order: 11,
  },
  {
    id: "hiroshi-suzuki",
    nameJa: "鈴木 裕",
    nameEn: "Suzuki Yutaka",
    affiliation: "東洋大学 生命科学部 生体医工学科",
    position: "教授",
    roles: [],
    teams: ["society-implementation"],
    specialty: "生体信号／信号処理／音響信号処理／感性工学",
    profileUrl: "https://www.toyo.ac.jp/staff/22021.html",
    order: 12,
  },
  {
    id: "chikako-osera",
    nameJa: "大瀬良 知子",
    nameEn: "Osera Tomoko",
    affiliation: "東洋大学 食環境科学部 健康栄養学科",
    position: "准教授",
    roles: [],
    teams: ["society-implementation"],
    specialty: "食生活学／応用栄養学",
    profileUrl: "https://www.toyo.ac.jp/staff/18083.html",
    order: 13,
  },
  {
    id: "hideo-kawaguchi",
    nameJa: "川口 英夫",
    nameEn: "Kawaguchi Hideo",
    affiliation: "東洋大学 生命科学部 生命科学科",
    position: "教授",
    roles: ["グループリーダー"],
    teams: ["society-implementation"],
    specialty: "脳科学／行動科学／細胞工学",
    profileUrl: "https://www.toyo.ac.jp/staff/09065.html",
    order: 14,
  },
  {
    id: "kiyoaki-mieno",
    nameJa: "三重野 清顕",
    nameEn: "Mieno Kiyoaki",
    affiliation: "東洋大学 文学部 哲学科",
    position: "教授",
    roles: [],
    teams: ["society-implementation"],
    specialty: "哲学／倫理学",
    profileUrl: "https://www.toyo.ac.jp/staff/17068.html",
    order: 15,
  },
  {
    id: "rie-nagasugi",
    nameJa: "永杉 理惠",
    nameEn: "Nagasugi Rie",
    affiliation: "東洋大学 文学部 教育学科",
    position: "講師",
    roles: [],
    teams: ["society-implementation"],
    specialty: "特別支援教育（肢体不自由）",
    profileUrl: "https://www.toyo.ac.jp/staff/24029.html",
    order: 16,
  },
  {
    id: "daiki-inomata",
    nameJa: "猪俣 大輝",
    nameEn: "Inomata Daiki",
    affiliation: "東洋大学 文学部 教育学科",
    position: "助教",
    roles: [],
    teams: ["society-implementation"],
    specialty: "教育史／特別活動論／教育課程論",
    profileUrl: "https://www.toyo.ac.jp/staff/24053.html",
    order: 17,
  },
];

const operationRoles = new Set(["プロジェクトリーダー", "プロジェクトオフィサー", "広報"]);

export const operations = members
  .filter((member) => member.roles.some((role) => operationRoles.has(role)))
  .sort((a, b) => a.order - b.order);

export const membersByTeam = (teamId: string) =>
  members
    .filter((member) => member.teams.includes(teamId))
    .sort((a, b) => {
      const aIsLeader = a.roles.includes("グループリーダー");
      const bIsLeader = b.roles.includes("グループリーダー");
      if (aIsLeader !== bIsLeader) return aIsLeader ? -1 : 1;
      return a.order - b.order;
    });
