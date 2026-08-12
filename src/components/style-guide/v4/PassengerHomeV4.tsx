import { Home, FileText, MessageSquare, User, PlaneLanding, Plane, Car, Route } from "lucide-react";
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

export function PassengerHomeV4() {
  return (
    <div className="relative min-h-full bg-[oklch(0.978_0.008_75)]">
      <div className="pb-[84px]">
        <header className="flex items-center justify-between px-6 pt-4">
          <div>
            <p className="text-[19px] leading-none font-bold tracking-tight text-ink">有米出行</p>
            <p className="mt-1.5 text-[11px] tracking-[0.14em] text-muted-foreground">
              英国全境 · 接送机与包车
            </p>
          </div>
          <span className="rounded-full border border-ink/10 bg-card px-3 py-1.5 text-[10px] font-semibold tracking-[0.2em] text-ink">
            中 / EN
          </span>
        </header>

        {/* Banner：大圆角、柔和阴影 */}
        <section className="mt-5 px-5">
          <div className="relative h-[188px] overflow-hidden rounded-[28px] shadow-float">
            <img
              src={bannerAirport}
              alt="伦敦机场接送专车"
              width={1024}
              height={576}
              loading="lazy"
              className="absolute inset-0 size-full object-cover saturate-[0.6]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/75 via-ink/15 to-transparent" />
            <div className="absolute inset-x-5 bottom-5">
              <span className="rounded-full bg-card/90 px-2.5 py-1 text-[10px] font-semibold tracking-[0.14em] text-ink">
                LONDON · HEATHROW
              </span>
              <p className="mt-2.5 text-[20px] leading-tight font-bold text-brand-foreground">
                落地即走
                <br />
                中文司机全程守候
              </p>
            </div>
          </div>
        </section>

        {/* 服务入口 */}
        <section className="mt-6 grid grid-cols-4 gap-3 px-5">
          {entries.map(({ icon: Icon, title }) => (
            <div
              key={title}
              className="flex flex-col items-center gap-2.5 rounded-[22px] bg-card py-4 shadow-card"
            >
              <span className="flex size-10 items-center justify-center rounded-full bg-brand-soft">
                <Icon className="size-[19px] text-brand" strokeWidth={1.8} />
              </span>
              <p className="text-[11px] font-semibold text-ink">{title}</p>
            </div>
          ))}
        </section>

        {/* 最近订单 */}
        <section className="mt-7 px-5">
          <div className="flex items-baseline">
            <h2 className="text-[15px] font-bold text-ink">最近订单</h2>
            <span className="ml-auto text-[11px] text-muted-foreground">全部订单</span>
          </div>
          <article className="mt-3 overflow-hidden rounded-[26px] bg-card shadow-float">
            <div className="flex items-center gap-2 px-5 pt-4">
              <span className="rounded-full bg-ink px-2.5 py-1 text-[10px] font-bold text-brand-foreground">
                接机
              </span>
              <span className="rounded-full bg-brand-soft px-2.5 py-1 text-[10px] font-bold text-brand">
                独享
              </span>
              <span className="ml-auto text-[11px] font-semibold text-go">待接驾</span>
            </div>
            <div className="px-5 pt-4">
              <div className="flex items-baseline gap-3">
                <p className="text-[11px] text-muted-foreground">航班</p>
                <p className="font-mono text-[13px] font-bold text-ink">CA855</p>
                <p className="ml-auto font-mono text-[13px] font-bold text-ink">2026-08-10 14:30</p>
              </div>
              <div className="mt-4 space-y-3">
                <div className="flex gap-3">
                  <span className="mt-1.5 size-2 rounded-full bg-brand" />
                  <p className="flex-1 text-[15px] leading-snug font-semibold text-ink">
                    希思罗机场 T5 航站楼
                  </p>
                </div>
                <div className="flex gap-3">
                  <span className="mt-1.5 size-2 rounded-full bg-ink/25" />
                  <p className="flex-1 text-[15px] leading-snug font-semibold text-ink">
                    伦敦市中心国王十字车站
                  </p>
                </div>
              </div>
            </div>
            <div className="mt-4 flex items-center gap-2 bg-surface-alt px-5 py-3.5">
              <p className="text-[11px] text-muted-foreground">乘车人数 2 人</p>
              <span className="size-1 rounded-full bg-border" />
              <p className="text-[11px] text-muted-foreground">行李 1 标准 1 大件</p>
            </div>
          </article>
        </section>

        {/* 热门路线 */}
        <section className="mt-7">
          <div className="flex items-baseline px-5">
            <h2 className="text-[15px] font-bold text-ink">热门路线</h2>
            <span className="ml-auto text-[11px] text-muted-foreground">查看全部</span>
          </div>
          <div className="no-scrollbar mt-3 flex gap-4 overflow-x-auto px-5 pb-2">
            {routes.map((r) => (
              <article
                key={r.title}
                className="w-[212px] shrink-0 overflow-hidden rounded-[24px] bg-card shadow-card"
              >
                <div className="relative h-[132px]">
                  <img
                    src={r.img}
                    alt={r.title}
                    width={768}
                    height={512}
                    loading="lazy"
                    className="absolute inset-0 size-full object-cover saturate-[0.6]"
                  />
                  <span className="absolute top-3 left-3 rounded-full bg-card/90 px-2.5 py-1 text-[10px] font-bold text-ink">
                    {r.tag}
                  </span>
                </div>
                <div className="px-4 py-3.5">
                  <p className="text-[13px] leading-snug font-semibold text-ink">{r.title}</p>
                  <p className="mt-1.5 font-mono text-[13px] font-bold text-brand">{r.price}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <div className="h-4" />
      </div>

      <TabBar
        active={0}
        items={[
          { icon: <Home className="size-5" strokeWidth={1.7} />, label: "首页" },
          { icon: <FileText className="size-5" strokeWidth={1.7} />, label: "订单中心" },
          { icon: <MessageSquare className="size-5" strokeWidth={1.7} />, label: "消息" },
          { icon: <User className="size-5" strokeWidth={1.7} />, label: "我的" },
        ]}
      />
    </div>
  );
}
