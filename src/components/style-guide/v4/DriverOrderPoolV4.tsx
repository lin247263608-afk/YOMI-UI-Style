import { Share2, Home, ListOrdered, CalendarDays, MessageSquare, User } from "lucide-react";
import { TabBar } from "../Phone";

const pool = [
  {
    type: "接机",
    mode: "拼车",
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
    type: "接机",
    mode: "独享",
    no: "YM20240316",
    route: "盖特威克机场 S → Westminster 威斯敏斯特",
    time: "2024-03-19 16:15",
    pax: "3 人 · 2 件行李",
    income: "£85.00",
    left: "49:20:33",
  },
  {
    type: "接机",
    mode: "独享",
    no: "YM20240316",
    route: "斯坦斯特德机场 → Stratford 斯特拉特福",
    time: "2024-03-19 17:45",
    pax: "1 人 · 1 件行李",
    income: "£85.00",
    left: "58:20:33",
  },
];

export function DriverOrderPoolV4() {
  return (
    <div className="relative min-h-full bg-[oklch(0.978_0.008_75)]">
      <div className="pb-[84px]">
        <header className="flex items-center px-6 pt-4">
          <div>
            <p className="text-[19px] leading-none font-bold text-ink">订单池</p>
            <p className="mt-1.5 text-[11px] text-muted-foreground">
              当前有 <span className="font-mono font-bold text-brand">4</span> 个可抢订单
            </p>
          </div>
          <div className="ml-auto flex size-9 items-center justify-center rounded-full bg-card shadow-card">
            <Share2 className="size-[17px] text-ink" strokeWidth={1.7} />
          </div>
        </header>

        <div className="mt-5 space-y-4 px-5">
          {pool.map((o) => (
            <article key={o.route} className="overflow-hidden rounded-[26px] bg-card shadow-card">
              <div className="flex items-center gap-2 px-5 pt-4">
                <span className="rounded-full bg-ink px-2.5 py-1 text-[10px] font-bold text-brand-foreground">
                  {o.type}
                </span>
                <span className="rounded-full bg-brand-soft px-2.5 py-1 text-[10px] font-bold text-brand">
                  {o.mode}
                </span>
                <span className="ml-auto font-mono text-[11px] text-muted-foreground">{o.no}</span>
              </div>

              <div className="px-5 pt-3.5">
                <p className="text-[16px] leading-snug font-bold text-ink">{o.route}</p>
                <div className="mt-4 space-y-2.5">
                  <div className="flex items-baseline">
                    <p className="text-[12px] text-muted-foreground">出发时间</p>
                    <p className="ml-auto font-mono text-[13px] font-bold text-ink">{o.time}</p>
                  </div>
                  <div className="flex items-baseline">
                    <p className="text-[12px] text-muted-foreground">乘车人数</p>
                    <p className="ml-auto text-[13px] font-semibold text-ink">{o.pax}</p>
                  </div>
                  {o.extra && (
                    <div className="flex items-baseline">
                      <p className="text-[12px] text-muted-foreground">增值服务</p>
                      <p className="ml-auto text-[13px] font-semibold text-ink">{o.extra}</p>
                    </div>
                  )}
                  <div className="flex items-baseline">
                    <p className="text-[12px] text-muted-foreground">预估收入</p>
                    <p className="ml-auto font-mono text-[18px] leading-none font-bold text-brand">
                      {o.income}
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-4 flex items-center bg-surface-alt px-5 py-3.5">
                <div>
                  <p className="text-[10px] text-muted-foreground">剩余接单时间</p>
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
          <p className="py-3 text-center text-[11px] text-muted-foreground">暂无更多</p>
        </div>
      </div>

      <TabBar
        active={1}
        accent="go"
        items={[
          { icon: <Home className="size-5" strokeWidth={1.7} />, label: "首页" },
          { icon: <ListOrdered className="size-5" strokeWidth={1.7} />, label: "订单池" },
          { icon: <CalendarDays className="size-5" strokeWidth={1.7} />, label: "我的订单" },
          { icon: <MessageSquare className="size-5" strokeWidth={1.7} />, label: "消息" },
          { icon: <User className="size-5" strokeWidth={1.7} />, label: "我的" },
        ]}
      />
    </div>
  );
}
