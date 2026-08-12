import { Home, FileText, MessageSquare, User, PlaneLanding, Plane, Car, Route } from "lucide-react";
import { TabBar } from "../Phone";
import bannerAirport from "@/assets/banner-airport.jpg";
import routeHeathrow from "@/assets/route-heathrow.jpg";
import routeManchester from "@/assets/route-manchester.jpg";
import routeLondon from "@/assets/route-london.jpg";

const entries = [
  { icon: PlaneLanding, title: "接机拼车", tone: "brand" },
  { icon: Plane, title: "送机拼车", tone: "go" },
  { icon: Car, title: "独享接送", tone: "ink" },
  { icon: Route, title: "旅行包车", tone: "brand" },
];

const routes = [
  { tag: "接机", title: "希思罗机场 → 伦敦市", price: "拼车 £25/人起", img: routeHeathrow },
  { tag: "送机", title: "曼城 → 希思罗机场", price: "拼车 £35/人起", img: routeManchester },
  { tag: "接机", title: "盖特威克 → 伦敦市", price: "拼车 £28/人起", img: routeLondon },
];

const toneCls: Record<string, string> = {
  brand: "bg-brand text-brand-foreground",
  go: "bg-go text-brand-foreground",
  ink: "bg-ink text-brand-foreground",
};

export function PassengerHomeV6() {
  return (
    <div className="relative min-h-full bg-surface">
      <div className="pb-[84px]">
        <header className="flex items-center justify-between px-5 pt-4">
          <div>
            <p className="text-[24px] leading-none font-black tracking-tight text-ink">
              有米出行
            </p>
            <p className="mt-2 text-[11px] font-bold tracking-[0.2em] text-brand uppercase">
              go go go · uk rides
            </p>
          </div>
          <span className="rounded-full border-[3px] border-ink bg-surface px-3 py-1.5 text-[10px] font-black tracking-[0.16em] text-ink">
            中 / EN
          </span>
        </header>

        {/* Banner */}
        <section className="mt-4 px-5">
          <div className="relative h-[196px] overflow-hidden rounded-[20px] border-[3px] border-ink">
            <img
              src={bannerAirport}
              alt="英国机场接送与包车旅行"
              width={1024}
              height={576}
              loading="lazy"
              className="absolute inset-0 size-full object-cover saturate-[0.75]"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-ink/80 via-ink/25 to-brand/25" />
            <div className="absolute inset-x-5 bottom-5">
              <span className="inline-block rounded-full bg-brand px-3 py-1 text-[10px] font-black tracking-[0.16em] text-brand-foreground">
                STUDENT PICK
              </span>
              <p className="mt-2.5 text-[24px] leading-[1.1] font-black text-brand-foreground">
                开学季落地
                <br />
                拼车最低 £25 起
              </p>
            </div>
          </div>
        </section>

        {/* 服务入口 */}
        <section className="mt-5 grid grid-cols-4 gap-2.5 px-5">
          {entries.map(({ icon: Icon, title, tone }) => (
            <div key={title} className="flex flex-col items-center gap-2">
              <span
                className={`flex size-14 items-center justify-center rounded-[18px] ${toneCls[tone]}`}
              >
                <Icon className="size-6" strokeWidth={2.2} />
              </span>
              <p className="text-[11px] font-bold text-ink">{title}</p>
            </div>
          ))}
        </section>

        {/* 最近订单 */}
        <section className="mt-7 px-5">
          <div className="flex items-baseline">
            <h2 className="text-[17px] font-black text-ink">最近订单</h2>
            <span className="ml-auto text-[11px] font-bold text-brand">全部订单</span>
          </div>
          <article className="mt-3 overflow-hidden rounded-[20px] border-[3px] border-ink bg-card">
            <div className="flex items-center gap-2 bg-ink px-4 py-2.5">
              <span className="rounded-full bg-brand px-2.5 py-0.5 text-[10px] font-black text-brand-foreground">
                接机
              </span>
              <span className="rounded-full border border-brand-foreground/40 px-2.5 py-0.5 text-[10px] font-black text-brand-foreground">
                独享
              </span>
              <span className="ml-auto text-[11px] font-black text-go">待接驾</span>
            </div>
            <div className="px-4 pt-4">
              <div className="flex items-baseline gap-3">
                <p className="text-[11px] font-bold text-muted-foreground">航班</p>
                <p className="font-mono text-[14px] font-black text-ink">CA855</p>
                <p className="ml-auto font-mono text-[14px] font-black text-brand">
                  2026-08-10 14:30
                </p>
              </div>
              <div className="mt-4 space-y-3">
                <div className="flex gap-3">
                  <span className="mt-1.5 size-2.5 rounded-full bg-brand" />
                  <p className="flex-1 text-[16px] leading-snug font-bold text-ink">
                    希思罗机场 T5 航站楼
                  </p>
                </div>
                <div className="flex gap-3">
                  <span className="mt-1.5 size-2.5 rounded-full bg-go" />
                  <p className="flex-1 text-[16px] leading-snug font-bold text-ink">
                    伦敦市中心国王十字车站
                  </p>
                </div>
              </div>
            </div>
            <div className="mt-4 flex items-center gap-2 border-t-[3px] border-ink bg-brand-soft px-4 py-3">
              <p className="text-[11px] font-bold text-ink">乘车人数 2 人</p>
              <span className="size-1 rounded-full bg-ink/40" />
              <p className="text-[11px] font-bold text-ink">行李 1 标准 1 大件</p>
            </div>
          </article>
        </section>

        {/* 热门路线 */}
        <section className="mt-7">
          <div className="flex items-baseline px-5">
            <h2 className="text-[17px] font-black text-ink">热门路线</h2>
            <span className="ml-auto text-[11px] font-bold text-brand">查看全部</span>
          </div>
          <div className="no-scrollbar mt-3 flex gap-3.5 overflow-x-auto px-5 pb-2">
            {routes.map((r) => (
              <article
                key={r.title}
                className="w-[208px] shrink-0 overflow-hidden rounded-[20px] border-[3px] border-ink bg-card"
              >
                <div className="relative h-[128px]">
                  <img
                    src={r.img}
                    alt={r.title}
                    width={768}
                    height={512}
                    loading="lazy"
                    className="absolute inset-0 size-full object-cover saturate-[0.75]"
                  />
                  <span className="absolute top-2.5 left-2.5 rounded-full bg-brand px-2.5 py-0.5 text-[10px] font-black text-brand-foreground">
                    {r.tag}
                  </span>
                </div>
                <div className="border-t-[3px] border-ink px-3.5 py-3">
                  <p className="text-[13px] leading-snug font-bold text-ink">{r.title}</p>
                  <p className="mt-1.5 font-mono text-[14px] font-black text-go">{r.price}</p>
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
          { icon: <Home className="size-5" strokeWidth={2.2} />, label: "首页" },
          { icon: <FileText className="size-5" strokeWidth={2.2} />, label: "订单中心" },
          { icon: <MessageSquare className="size-5" strokeWidth={2.2} />, label: "消息" },
          { icon: <User className="size-5" strokeWidth={2.2} />, label: "我的" },
        ]}
      />
    </div>
  );
}
