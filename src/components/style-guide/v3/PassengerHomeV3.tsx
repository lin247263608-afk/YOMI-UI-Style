import { Home, FileText, MessageSquare, User, PlaneLanding, Plane, Car, Route, ArrowUpRight } from "lucide-react";
import { TabBar } from "../Phone";
import bannerAirport from "@/assets/banner-airport.jpg";
import routeHeathrow from "@/assets/route-heathrow.jpg";
import routeManchester from "@/assets/route-manchester.jpg";
import routeLondon from "@/assets/route-london.jpg";

const entries = [
  { icon: PlaneLanding, title: "接机拼车" },
  { icon: Plane, title: "送机拼车" },
  { icon: Car, title: "独享接送" },
  { icon: Route, title: "旅行包车" },
];

const routes = [
  { tag: "接机", title: "希思罗机场 → 伦敦市", price: "拼车 £25/人起", img: routeHeathrow },
  { tag: "送机", title: "曼城 → 希思罗机场", price: "拼车 £35/人起", img: routeManchester },
  { tag: "接机", title: "盖特威克 → 伦敦市", price: "拼车 £28/人起", img: routeLondon },
];

function Kicker({ children, action }: { children: React.ReactNode; action?: string }) {
  return (
    <div className="flex items-baseline gap-3">
      <p className="font-mono text-[10px] tracking-[0.28em] text-ink-soft uppercase">{children}</p>
      <span className="h-px flex-1 bg-ink/12" />
      {action && <span className="text-[11px] font-semibold text-brand">{action}</span>}
    </div>
  );
}

export function PassengerHomeV3() {
  return (
    <div className="relative min-h-full bg-surface-alt">
      <div className="pb-[84px]">
        {/* 墨蓝首屏 */}
        <div className="relative bg-ink-gradient pb-14">
          <header className="flex items-center justify-between px-5 pt-3">
            <div className="flex items-center gap-2.5">
              <span className="flex size-7 items-center justify-center rounded-lg bg-brand text-[12px] font-bold text-brand-foreground">
                Y
              </span>
              <div className="flex flex-col leading-none">
                <span className="text-[14px] font-bold text-brand-foreground">YOMI</span>
                <span className="text-[10px] text-brand-foreground/60">有米出行</span>
              </div>
            </div>
            <span className="font-mono text-[10px] tracking-[0.3em] text-brand-foreground/70 uppercase">
              中 / EN
            </span>
          </header>

          <div className="px-5 pt-3">
            <p className="text-[14px] font-semibold text-brand-foreground">
              英国全境 接送机 · 包车
            </p>
          </div>
          <div className="mt-4 px-5">

            <div className="relative h-[132px] overflow-hidden rounded-[20px]">
              <img
                src={bannerAirport}
                alt="伦敦机场接送专车"
                width={1024}
                height={576}
                loading="lazy"
                className="absolute inset-0 size-full object-cover saturate-[0.55]"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-ink/70 to-ink/10" />
              <div className="absolute inset-x-4 bottom-3.5 flex items-end justify-between">
                <p className="text-[13px] font-semibold text-brand-foreground">准点守候，全程无忧</p>
                <span className="flex size-7 items-center justify-center rounded-full bg-brand text-brand-foreground">
                  <ArrowUpRight className="size-3.5" />
                </span>
              </div>
            </div>
            <div className="mt-3 flex gap-1.5">
              {[0, 1, 2].map((i) => (
                <span
                  key={i}
                  className={`h-px flex-1 ${i === 0 ? "bg-brand" : "bg-brand-foreground/25"}`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* 四大入口，上浮面板 */}
        <section className="relative z-10 -mt-9 px-4">
          <div className="grid grid-cols-4 gap-px overflow-hidden rounded-[20px] bg-border/70 shadow-card">
            {entries.map(({ icon: Icon, title }) => (
              <div key={title} className="flex flex-col items-center gap-2 bg-card py-4">
                <Icon className="size-[19px] text-ink" strokeWidth={1.6} />
                <p className="text-[11px] font-semibold text-ink">{title}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 最近订单 */}
        <section className="mt-7 px-5">
          <Kicker>最近订单 / Recent</Kicker>
          <div className="mt-3 rounded-[20px] border-t-2 border-brand bg-card p-4 shadow-card">
            <div className="flex items-center gap-2">
              <p className="text-[12px] font-bold tracking-wide text-ink">接机 · 拼车</p>
              <span className="ml-auto font-mono text-[10px] tracking-[0.18em] text-brand uppercase">
                待出行
              </span>
            </div>
            <div className="mt-3.5 space-y-3">
              <div className="flex items-start gap-3">
                <span className="mt-1.5 font-mono text-[10px] text-muted-foreground">FROM</span>
                <p className="flex-1 text-[15px] leading-snug font-semibold text-ink">
                  希思罗机场 T5 航站楼
                </p>
              </div>
              <div className="h-px bg-ink/8" />
              <div className="flex items-start gap-3">
                <span className="mt-1.5 font-mono text-[10px] text-muted-foreground">TO</span>
                <p className="flex-1 text-[15px] leading-snug font-semibold text-ink">
                  伦敦市中心国王十字车站
                </p>
              </div>
            </div>
            <div className="mt-4 flex items-end justify-between border-t border-dashed border-border pt-3">
              <div>
                <p className="font-mono text-[15px] font-bold text-ink">2026-08-10 14:30</p>
                <p className="mt-1 text-[11px] text-muted-foreground">
                  乘车人数 2 人 · 行李 1 标准 1 大件
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 热门路线 */}
        <section className="mt-7">
          <div className="px-5">
            <Kicker action="查看全部">热门路线 / Popular</Kicker>
          </div>
          <div className="no-scrollbar mt-3 flex gap-3 overflow-x-auto px-5 pb-1">
            {routes.map((r) => (
              <article key={r.title} className="w-[196px] shrink-0">
                <div className="relative h-[104px] overflow-hidden rounded-[16px]">
                  <img
                    src={r.img}
                    alt={r.title}
                    width={768}
                    height={512}
                    loading="lazy"
                    className="absolute inset-0 size-full object-cover saturate-[0.5]"
                  />
                  <span className="absolute top-2.5 left-2.5 rounded-sm bg-ink/85 px-2 py-0.5 font-mono text-[9px] tracking-[0.16em] text-brand-foreground uppercase">
                    {r.tag}
                  </span>
                </div>
                <p className="mt-2.5 text-[13px] leading-snug font-semibold text-ink">{r.title}</p>
                <p className="mt-1 font-mono text-[12px] font-bold text-brand">{r.price}</p>
              </article>
            ))}
          </div>
        </section>

        <div className="h-5" />
      </div>

      <TabBar
        active={0}
        items={[
          { icon: <Home className="size-5" strokeWidth={1.6} />, label: "首页" },
          { icon: <FileText className="size-5" strokeWidth={1.6} />, label: "订单中心" },
          { icon: <MessageSquare className="size-5" strokeWidth={1.6} />, label: "消息" },
          { icon: <User className="size-5" strokeWidth={1.6} />, label: "我的" },
        ]}
      />
    </div>
  );
}
