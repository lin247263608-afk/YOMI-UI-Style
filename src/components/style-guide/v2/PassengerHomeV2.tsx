import {
  Home,
  FileText,
  MessageSquare,
  User,
  PlaneLanding,
  Plane,
  Car,
  Route,
} from "lucide-react";
import { TabBar } from "../Phone";
import bannerAirport from "@/assets/banner-airport.jpg";
import routeHeathrow from "@/assets/route-heathrow.jpg";
import routeManchester from "@/assets/route-manchester.jpg";
import routeLondon from "@/assets/route-london.jpg";

const entries = [
  { icon: PlaneLanding, title: "接机拼车", sub: "高效便捷" },
  { icon: Plane, title: "送机拼车", sub: "准时直达" },
  { icon: Car, title: "独享接送", sub: "尊享专车" },
  { icon: Route, title: "旅行包车", sub: "深度自由" },
];

const routes = [
  { tag: "接机", title: "希思罗机场 → 伦敦市", price: "拼车 £25/人起", img: routeHeathrow },
  { tag: "送机", title: "曼城 → 希思罗机场", price: "拼车 £35/人起", img: routeManchester },
  { tag: "接机", title: "盖特威克 → 伦敦市", price: "拼车 £28/人起", img: routeLondon },
];


export function PassengerHomeV2() {
  return (
    <div className="relative min-h-full bg-background">
      <div className="pb-[84px]">
        <header className="flex items-center justify-between bg-card px-4 py-3">
          <div className="flex items-center gap-2">
            <span className="flex size-7 items-center justify-center rounded-lg bg-brand text-[12px] font-bold text-brand-foreground">
              Y
            </span>
            <div className="flex flex-col leading-none">
              <span className="text-[13px] font-bold text-ink">YOMI</span>
              <span className="text-[10px] text-muted-foreground">有米出行</span>
            </div>
          </div>
          <span className="rounded-xl border border-border px-2.5 py-1 text-[12px] font-semibold text-ink">
            中 / EN
          </span>
        </header>

        {/* 轮播 Banner */}
        <div className="px-4 pt-3">
          <div className="relative h-[142px] overflow-hidden rounded-3xl shadow-card">
            <img
              src={bannerAirport}
              alt="伦敦机场接送专车"
              width={1024}
              height={576}
              loading="lazy"
              className="absolute inset-0 size-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-ink/85 via-ink/45 to-transparent" />
            <div className="absolute inset-0 flex flex-col justify-end p-4">
              <span className="w-fit rounded-full bg-brand px-2.5 py-1 text-[10px] font-bold text-brand-foreground">
                英国全境
              </span>
              <p className="mt-2 text-[17px] leading-snug font-bold text-brand-foreground">
                接送机 · 包车
                <br />
                准点守候，全程无忧
              </p>
            </div>
          </div>
          <div className="mt-2.5 flex justify-center gap-1.5">
            {[0, 1, 2].map((i) => (
              <span
                key={i}
                className={`h-1.5 rounded-full transition-all ${i === 0 ? "w-5 bg-brand" : "w-1.5 bg-border"}`}
              />
            ))}
          </div>
        </div>


        {/* 四大入口 */}
        <section className="mt-3 grid grid-cols-2 gap-2.5 px-4">
          {entries.map(({ icon: Icon, title, sub }, i) => (
            <div
              key={title}
              className="group relative flex items-center gap-3 overflow-hidden rounded-2xl bg-card p-3 shadow-card ring-1 ring-border/60"
            >
              <span className="absolute inset-y-0 left-0 w-[3px] bg-brand/70" />
              <div
                className={`flex size-10 shrink-0 items-center justify-center rounded-xl ${
                  i % 2 === 0
                    ? "bg-brand-soft text-brand"
                    : "bg-ink text-brand-foreground"
                }`}
              >
                <Icon className="size-[18px]" />
              </div>
              <div className="min-w-0">
                <p className="truncate text-[14px] font-bold text-ink">{title}</p>
                <p className="truncate text-[11px] text-muted-foreground">{sub}</p>
              </div>
            </div>
          ))}
        </section>


        {/* 最近订单 */}
        <section className="mt-4 px-4">
          <div className="flex items-center gap-2 px-1">
            <span className="h-3.5 w-1 rounded-full bg-brand" />
            <h2 className="text-[16px] font-bold text-ink">最近订单</h2>
          </div>
          <div className="mt-2 overflow-hidden rounded-3xl bg-card shadow-card ring-1 ring-border/60">
            <div className="flex items-center gap-2 border-b border-dashed border-border px-4 py-3">
              <span className="rounded-lg bg-brand-soft px-2.5 py-1 text-[11px] font-bold text-brand">
                接机
              </span>
              <span className="rounded-lg bg-secondary px-2.5 py-1 text-[11px] font-semibold text-ink-soft">
                拼车
              </span>
              <span className="ml-auto rounded-full bg-ink-gradient px-3 py-1 text-[11px] font-bold text-brand-foreground">
                待出行
              </span>
            </div>
            <div className="px-4 py-3.5">
              <div className="flex gap-2.5">
                <div className="mt-1.5 flex flex-col items-center">
                  <span className="size-2 rounded-full bg-go ring-3 ring-go/15" />
                  <span className="my-1 h-5 w-px bg-border" />
                  <span className="size-2 rounded-full bg-brand ring-3 ring-brand/15" />
                </div>
                <div className="min-w-0 flex-1 space-y-3.5">
                  <p className="truncate text-[14px] font-bold text-ink">希思罗机场 T5 航站楼</p>
                  <p className="truncate text-[14px] font-bold text-ink">伦敦市中心国王十字车站</p>
                </div>
              </div>
              <div className="mt-3.5 flex flex-wrap items-center gap-x-4 gap-y-1 rounded-2xl bg-secondary/70 px-3 py-2.5">
                <p className="font-mono text-[12px] font-semibold text-ink">2026年8月10日 14:30</p>
                <p className="text-[12px] text-muted-foreground">
                  乘车人数：2 人　行李：1 标准 1 大件
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 热门路线 */}
        <section className="mt-4">
          <div className="flex items-center justify-between px-5">
            <div className="flex items-center gap-2">
              <span className="h-3.5 w-1 rounded-full bg-brand" />
              <h2 className="text-[16px] font-bold text-ink">热门路线</h2>
            </div>
            <span className="text-[12px] text-muted-foreground">查看全部 &gt;</span>
          </div>
          <div className="mt-2 flex gap-2.5 no-scrollbar overflow-x-auto px-4 pb-1">
            {routes.map((r) => (
              <div
                key={r.title}
                className="w-[168px] shrink-0 overflow-hidden rounded-2xl bg-card shadow-card ring-1 ring-border/60"
              >
                <div className="relative h-[88px]">
                  <img
                    src={r.img}
                    alt={r.title}
                    width={768}
                    height={512}
                    loading="lazy"
                    className="absolute inset-0 size-full object-cover saturate-[0.6]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/55 to-transparent" />
                  <span className="absolute top-2 left-2 rounded-md bg-card/85 px-2 py-0.5 text-[10px] font-bold text-ink">
                    {r.tag}
                  </span>
                </div>
                <div className="p-3">
                  <p className="text-[13px] leading-snug font-bold text-ink">{r.title}</p>
                  <p className="mt-1.5 font-mono text-[12px] font-bold text-brand">{r.price}</p>
                </div>
              </div>
            ))}
          </div>
        </section>


        <div className="h-4" />
      </div>

      <TabBar
        active={0}
        items={[
          { icon: <Home className="size-5" />, label: "首页" },
          { icon: <FileText className="size-5" />, label: "订单中心" },
          { icon: <MessageSquare className="size-5" />, label: "消息" },
          { icon: <User className="size-5" />, label: "我的" },
        ]}
      />
    </div>
  );
}
