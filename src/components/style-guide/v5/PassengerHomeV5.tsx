import { Home, FileText, MessageSquare, User, PlaneLanding, Plane, Car, Route } from "lucide-react";
import { TabBar } from "../Phone";
import bannerAirport from "@/assets/banner-airport.jpg";
import routeHeathrow from "@/assets/route-heathrow.jpg";
import routeManchester from "@/assets/route-manchester.jpg";
import routeLondon from "@/assets/route-london.jpg";

const entries = [
  { icon: PlaneLanding, title: "接机拼车", code: "ARR" },
  { icon: Plane, title: "送机拼车", code: "DEP" },
  { icon: Car, title: "独享接送", code: "PVT" },
  { icon: Route, title: "旅行包车", code: "CHT" },
];

const routes = [
  { tag: "接机", code: "LHR — LDN", title: "希思罗机场 → 伦敦市", price: "拼车 £25/人起", img: routeHeathrow },
  { tag: "送机", code: "MAN — LHR", title: "曼城 → 希思罗机场", price: "拼车 £35/人起", img: routeManchester },
  { tag: "接机", code: "LGW — LDN", title: "盖特威克 → 伦敦市", price: "拼车 £28/人起", img: routeLondon },
];

export function PassengerHomeV5() {
  return (
    <div className="relative min-h-full bg-[oklch(0.97_0.012_88)]">
      <div className="pb-[84px]">
        <header className="flex items-end justify-between border-b border-ink/12 px-5 pt-4 pb-3">
          <div>
            <p className="font-mono text-[10px] tracking-[0.34em] text-ink-soft uppercase">
              Yomi Travel · UK
            </p>
            <p className="mt-1 text-[17px] leading-none font-bold text-ink">有米出行</p>
          </div>
          <span className="border border-ink/12 px-2.5 py-1 font-mono text-[10px] tracking-[0.18em] text-ink uppercase">
            中 / EN
          </span>
        </header>

        {/* Banner：票据风窄幅 */}
        <section className="px-5 pt-4">
          <div className="relative h-[150px] overflow-hidden rounded-[6px] border border-ink/12">
            <img
              src={bannerAirport}
              alt="英国机场接送专车"
              width={1024}
              height={576}
              loading="lazy"
              className="absolute inset-0 size-full object-cover saturate-[0.45]"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-ink/80 via-ink/35 to-transparent" />
            <div className="absolute inset-x-4 bottom-4">
              <p className="font-mono text-[10px] tracking-[0.3em] text-brand uppercase">
                Meet &amp; Greet
              </p>
              <p className="mt-1.5 text-[17px] leading-tight font-bold text-brand-foreground">
                英国全境接送机 · 中文司机
              </p>
            </div>
          </div>
        </section>

        {/* 服务入口：票根格 */}
        <section className="mt-5 px-5">
          <div className="grid grid-cols-4 border border-ink/12 bg-card">
            {entries.map(({ icon: Icon, title, code }, i) => (
              <div
                key={title}
                className={`flex flex-col items-center gap-2 py-4 ${
                  i > 0 ? "border-l border-dashed border-ink/15" : ""
                }`}
              >
                <Icon className="size-[19px] text-ink" strokeWidth={1.5} />
                <p className="text-[11px] font-semibold text-ink">{title}</p>
                <p className="font-mono text-[9px] tracking-[0.18em] text-brand">{code}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 最近订单：登机牌 */}
        <section className="mt-6 px-5">
          <div className="flex items-baseline gap-3">
            <p className="font-mono text-[10px] tracking-[0.3em] text-ink-soft uppercase">
              最近订单
            </p>
            <span className="h-px flex-1 bg-ink/12" />
            <span className="text-[11px] text-muted-foreground">全部</span>
          </div>

          <article className="mt-3 border border-ink/15 bg-card">
            <div className="flex items-center gap-2 bg-ink px-4 py-2.5">
              <p className="font-mono text-[10px] tracking-[0.22em] text-brand-foreground uppercase">
                接机 · 独享
              </p>
              <p className="ml-auto font-mono text-[10px] tracking-[0.22em] text-brand uppercase">
                待接驾
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4 px-4 pt-4">
              <div>
                <p className="font-mono text-[9px] tracking-[0.22em] text-muted-foreground uppercase">
                  Flight
                </p>
                <p className="mt-1 font-mono text-[16px] font-bold text-ink">CA855</p>
              </div>
              <div>
                <p className="font-mono text-[9px] tracking-[0.22em] text-muted-foreground uppercase">
                  用车时间
                </p>
                <p className="mt-1 font-mono text-[16px] font-bold text-ink">08-10 14:30</p>
              </div>
            </div>
            <div className="mt-4 space-y-2.5 px-4">
              <div>
                <p className="font-mono text-[9px] tracking-[0.22em] text-muted-foreground uppercase">
                  From
                </p>
                <p className="text-[15px] leading-snug font-semibold text-ink">
                  希思罗机场 T5 航站楼
                </p>
              </div>
              <div>
                <p className="font-mono text-[9px] tracking-[0.22em] text-muted-foreground uppercase">
                  To
                </p>
                <p className="text-[15px] leading-snug font-semibold text-ink">
                  伦敦市中心国王十字车站
                </p>
              </div>
            </div>
            <div className="mt-4 flex items-center gap-4 border-t border-dashed border-ink/20 px-4 py-3">
              <p className="font-mono text-[11px] tracking-[0.14em] text-ink-soft">PAX 2</p>
              <p className="font-mono text-[11px] tracking-[0.14em] text-ink-soft">BAG 1 + 1</p>
            </div>
          </article>
        </section>

        {/* 热门路线 */}
        <section className="mt-6">
          <div className="flex items-baseline gap-3 px-5">
            <p className="font-mono text-[10px] tracking-[0.3em] text-ink-soft uppercase">
              热门路线
            </p>
            <span className="h-px flex-1 bg-ink/12" />
            <span className="text-[11px] text-muted-foreground">查看全部</span>
          </div>
          <div className="no-scrollbar mt-3 flex gap-3 overflow-x-auto px-5 pb-2">
            {routes.map((r) => (
              <article key={r.title} className="w-[200px] shrink-0 border border-ink/12 bg-card">
                <div className="relative h-[110px]">
                  <img
                    src={r.img}
                    alt={r.title}
                    width={768}
                    height={512}
                    loading="lazy"
                    className="absolute inset-0 size-full object-cover saturate-[0.45]"
                  />
                  <span className="absolute top-2 left-2 bg-card px-2 py-0.5 font-mono text-[9px] tracking-[0.2em] text-ink uppercase">
                    {r.tag}
                  </span>
                </div>
                <div className="px-3.5 py-3">
                  <p className="font-mono text-[10px] tracking-[0.2em] text-brand">{r.code}</p>
                  <p className="mt-1.5 text-[13px] leading-snug font-semibold text-ink">{r.title}</p>
                  <p className="mt-1.5 font-mono text-[12px] font-bold text-ink">{r.price}</p>
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
          { icon: <Home className="size-5" strokeWidth={1.5} />, label: "首页" },
          { icon: <FileText className="size-5" strokeWidth={1.5} />, label: "订单中心" },
          { icon: <MessageSquare className="size-5" strokeWidth={1.5} />, label: "消息" },
          { icon: <User className="size-5" strokeWidth={1.5} />, label: "我的" },
        ]}
      />
    </div>
  );
}
