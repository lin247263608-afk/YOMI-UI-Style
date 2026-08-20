import { Share2, Clock, Home, ListOrdered, CalendarDays, MessageSquare, User, RefreshCw } from "lucide-react";
import { TabBarHaze } from "./TabBarHaze";

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

export function DriverOrderPoolV7() {
  return (
    <div className="relative min-h-full bg-background">
      <div className="pb-[84px]">
        <div className="pb-3">
        <header className="flex items-center gap-3 bg-haze px-4 py-3.5">
          <span className="flex size-7 items-center justify-center rounded-lg bg-brand text-[12px] font-bold text-brand-foreground">
            Y
          </span>
          <h1 className="flex-1 text-center text-[17px] font-bold tracking-wide text-ink">
            有米出行 <span className="text-brand">YOMI</span>
          </h1>
          <Share2 className="size-5 text-ink-soft" />
        </header>

        <div className="flex items-center px-4 pt-2 pb-0">
          <p className="text-[12px] text-muted-foreground">
            当前有 <span className="font-mono font-bold text-brand">4</span> 个可抢订单
          </p>
          <span className="ml-auto flex items-center gap-1 text-[12px] text-muted-foreground">
            <RefreshCw className="size-3.5" />
            下拉刷新
          </span>
        </div>

        </div>

        <div className="space-y-2.5 px-3.5 pt-2">
          {pool.map((o) => (
            <article
              key={o.route}
              className="overflow-hidden rounded-2xl bg-card shadow-card ring-1 ring-border/60"
            >
              <div className="flex items-center border-b border-dashed border-border px-4 py-2.5">
                <span className="rounded-md bg-brand-soft px-2.5 py-1 text-[11px] font-bold text-brand">
                  {o.tag}
                </span>
                <span className="ml-auto font-mono text-[12px] text-muted-foreground">
                  订单号: {o.no}
                </span>
              </div>

              <div className="border-l-[3px] border-brand/70 px-4 py-3.5">
                <p className="text-[15px] leading-snug font-bold text-ink">{o.route}</p>
                <p className="mt-1.5 font-mono text-[12px] text-muted-foreground">
                  出发时间: {o.time}
                </p>
                <div className="mt-1.5 flex items-baseline gap-3">
                  <p className="text-[12px] text-muted-foreground">乘车人数: {o.pax}</p>
                  <p className="ml-auto text-[12px] text-muted-foreground">
                    预估收入{" "}
                    <span className="font-mono text-[15px] font-bold text-ink">{o.income}</span>
                  </p>
                </div>
                {o.extra && (
                  <p className="mt-2.5 rounded-xl bg-secondary/70 px-3 py-2 text-[12px] font-semibold text-ink">
                    增值服务: {o.extra}
                  </p>
                )}

                <div className="mt-3.5 flex items-center border-t border-border pt-3">
                  <span
                    className={`flex items-center gap-1.5 font-mono text-[12px] ${
                      o.urgent ? "font-bold text-brand" : "text-muted-foreground"
                    }`}
                  >
                    <Clock className="size-3.5" />
                    剩余接单时间 {o.left}
                  </span>
                  <button className="ml-auto rounded-xl bg-ink-gradient px-7 py-2.5 text-[14px] font-bold text-brand-foreground shadow-float">
                    抢单
                  </button>
                </div>
              </div>
            </article>
          ))}
          <p className="py-3 text-center text-[12px] text-muted-foreground">暂无更多</p>
        </div>

      </div>

      <TabBarHaze
        active={1}
        items={[
          { icon: <Home className="size-5" />, label: "首页" },
          { icon: <ListOrdered className="size-5" />, label: "订单池" },
          { icon: <CalendarDays className="size-5" />, label: "我的订单" },
          { icon: <MessageSquare className="size-5" />, label: "消息" },
          { icon: <User className="size-5" />, label: "我的" },
        ]}
      />
    </div>
  );
}
