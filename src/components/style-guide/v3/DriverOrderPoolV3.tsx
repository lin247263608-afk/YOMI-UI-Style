import { Share2, Home, ListOrdered, CalendarDays, MessageSquare, User } from "lucide-react";
import { TabBar } from "../Phone";

const pool = [
  {
    tag: "接机 · 拼车",
    no: "YM20240316",
    route: "希思罗机场 T5 → 伦敦市区 Paddington",
    time: "2024-03-16 10:30",
    pax: "3 人 · 2 件行李",
    income: "£85.00",
    extra: "儿童座椅*1、举接机牌",
    left: "00:33:33",
    urgent: true,
  },
  {
    tag: "接机 · 独享",
    no: "YM20240316",
    route: "盖特威克机场 S → Westminster 威斯敏斯特",
    time: "2024-03-19 16:15",
    pax: "3 人 · 2 件行李",
    income: "£85.00",
    left: "49:20:33",
  },
  {
    tag: "接机 · 独享",
    no: "YM20240316",
    route: "斯坦斯特德机场 → Stratford 斯特拉特福",
    time: "2024-03-19 17:45",
    pax: "1 人 · 1 件行李",
    income: "£85.00",
    left: "58:20:33",
  },
];

export function DriverOrderPoolV3() {
  return (
    <div className="relative min-h-full bg-surface-alt">
      <div className="pb-[84px]">
        <div className="bg-ink-gradient px-5 pt-3 pb-10">
          <div className="flex items-center">
            <p className="font-mono text-[11px] tracking-[0.32em] text-brand-foreground uppercase">
              YOMI <span className="text-brand">有米出行</span>
            </p>
            <Share2 className="ml-auto size-[18px] text-brand-foreground/80" />
          </div>
          <h1 className="mt-5 text-[22px] font-bold text-brand-foreground">订单池</h1>
          <div className="mt-3 flex items-baseline gap-2">
            <p className="text-[12px] text-brand-foreground/65">
              当前有 <span className="font-mono font-bold text-brand">4</span> 个可抢订单
            </p>
            <span className="ml-auto font-mono text-[10px] tracking-[0.2em] text-brand-foreground/45 uppercase">
              下拉刷新
            </span>
          </div>
        </div>

        <div className="relative z-10 -mt-5 space-y-3 px-4">
          {pool.map((o) => (
            <article
              key={o.route}
              className={`rounded-[20px] bg-card p-5 shadow-card ${
                o.urgent ? "border-t-2 border-brand" : "border-t-2 border-ink/15"
              }`}
            >
              <div className="flex items-center">
                <p className="text-[12px] font-bold tracking-wide text-ink-soft">{o.tag}</p>
                <span className="ml-auto font-mono text-[11px] tracking-[0.14em] text-muted-foreground">
                  {o.no}
                </span>
              </div>
              <p className="mt-2.5 text-[16px] leading-snug font-bold text-ink">{o.route}</p>

              <div className="mt-4 space-y-2 border-t border-dashed border-border pt-3.5">
                <div className="flex items-baseline gap-3">
                  <span className="font-mono text-[10px] tracking-[0.2em] text-muted-foreground uppercase">
                    出发时间
                  </span>
                  <span className="ml-auto font-mono text-[13px] font-semibold text-ink">
                    {o.time}
                  </span>
                </div>
                <div className="flex items-baseline gap-3">
                  <span className="font-mono text-[10px] tracking-[0.2em] text-muted-foreground uppercase">
                    乘车人数
                  </span>
                  <span className="ml-auto text-[13px] font-semibold text-ink">{o.pax}</span>
                </div>
                {o.extra && (
                  <div className="flex items-baseline gap-3">
                    <span className="font-mono text-[10px] tracking-[0.2em] text-muted-foreground uppercase">
                      增值服务
                    </span>
                    <span className="ml-auto text-[13px] font-semibold text-ink">{o.extra}</span>
                  </div>
                )}
                <div className="flex items-baseline gap-3">
                  <span className="font-mono text-[10px] tracking-[0.2em] text-muted-foreground uppercase">
                    预估收入
                  </span>
                  <span className="ml-auto font-mono text-[18px] leading-none font-bold text-brand">
                    {o.income}
                  </span>
                </div>
              </div>

              <div className="mt-4 flex items-center">
                <div>
                  <p className="font-mono text-[9px] tracking-[0.2em] text-muted-foreground uppercase">
                    剩余接单时间
                  </p>
                  <p
                    className={`font-mono text-[14px] font-bold ${
                      o.urgent ? "text-brand" : "text-ink"
                    }`}
                  >
                    {o.left}
                  </p>
                </div>
                <button className="ml-auto rounded-full bg-ink px-8 py-2.5 text-[14px] font-bold text-brand-foreground">
                  抢单
                </button>
              </div>
            </article>
          ))}
          <p className="py-4 text-center font-mono text-[10px] tracking-[0.2em] text-muted-foreground uppercase">
            暂无更多
          </p>
        </div>
      </div>

      <TabBar
        active={1}
        accent="go"
        items={[
          { icon: <Home className="size-5" strokeWidth={1.6} />, label: "首页" },
          { icon: <ListOrdered className="size-5" strokeWidth={1.6} />, label: "订单池" },
          { icon: <CalendarDays className="size-5" strokeWidth={1.6} />, label: "我的订单" },
          { icon: <MessageSquare className="size-5" strokeWidth={1.6} />, label: "消息" },
          { icon: <User className="size-5" strokeWidth={1.6} />, label: "我的" },
        ]}
      />
    </div>
  );
}
