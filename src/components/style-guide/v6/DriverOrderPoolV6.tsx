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

export function DriverOrderPoolV6() {
  return (
    <div className="relative min-h-full bg-surface">
      <div className="pb-[84px]">
        <header className="flex items-center px-5 pt-4">
          <div>
            <p className="text-[22px] leading-none font-black text-ink">订单池</p>
            <p className="mt-2 text-[11px] font-bold text-muted-foreground">
              当前有 <span className="font-mono font-black text-brand">4</span> 个可抢订单
            </p>
          </div>
          <div className="ml-auto flex size-10 items-center justify-center rounded-2xl bg-ink">
            <Share2 className="size-[18px] text-brand-foreground" strokeWidth={2.2} />
          </div>
        </header>

        <div className="mt-4 space-y-3.5 px-5">
          {pool.map((o) => (
            <article
              key={o.route}
              className="overflow-hidden rounded-[20px] border-[3px] border-ink bg-card"
            >
              <div className="flex items-center gap-2 bg-ink px-4 py-2.5">
                <span className="rounded-full bg-brand px-2.5 py-0.5 text-[10px] font-black text-brand-foreground">
                  {o.type}
                </span>
                <span className="rounded-full border border-brand-foreground/40 px-2.5 py-0.5 text-[10px] font-black text-brand-foreground">
                  {o.mode}
                </span>
                <span className="ml-auto font-mono text-[11px] font-bold text-brand-foreground/70">
                  {o.no}
                </span>
              </div>

              <div className="px-4 pt-3.5">
                <p className="text-[17px] leading-snug font-black text-ink">{o.route}</p>
                <div className="mt-3.5 space-y-2.5">
                  <div className="flex items-baseline">
                    <p className="text-[12px] font-bold text-muted-foreground">出发时间</p>
                    <p className="ml-auto font-mono text-[13px] font-black text-ink">{o.time}</p>
                  </div>
                  <div className="flex items-baseline">
                    <p className="text-[12px] font-bold text-muted-foreground">乘车人数</p>
                    <p className="ml-auto text-[13px] font-bold text-ink">{o.pax}</p>
                  </div>
                  {o.extra && (
                    <div className="flex items-baseline">
                      <p className="text-[12px] font-bold text-muted-foreground">增值服务</p>
                      <p className="ml-auto text-[13px] font-bold text-ink">{o.extra}</p>
                    </div>
                  )}
                  <div className="flex items-baseline">
                    <p className="text-[12px] font-bold text-muted-foreground">预估收入</p>
                    <p className="ml-auto font-mono text-[20px] leading-none font-black text-go">
                      {o.income}
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-4 flex items-center border-t-[3px] border-ink bg-brand-soft px-4 py-3">
                <div>
                  <p className="text-[10px] font-bold text-muted-foreground">剩余接单时间</p>
                  <p
                    className={`font-mono text-[15px] font-black ${
                      o.urgent ? "text-brand" : "text-ink"
                    }`}
                  >
                    {o.left}
                  </p>
                </div>
                <button className="ml-auto rounded-full bg-brand px-8 py-2.5 text-[14px] font-black text-brand-foreground">
                  抢单
                </button>
              </div>
            </article>
          ))}
          <p className="py-3 text-center text-[11px] font-bold text-muted-foreground">暂无更多</p>
        </div>
      </div>

      <TabBar
        active={1}
        accent="go"
        items={[
          { icon: <Home className="size-5" strokeWidth={2.2} />, label: "首页" },
          { icon: <ListOrdered className="size-5" strokeWidth={2.2} />, label: "订单池" },
          { icon: <CalendarDays className="size-5" strokeWidth={2.2} />, label: "我的订单" },
          { icon: <MessageSquare className="size-5" strokeWidth={2.2} />, label: "消息" },
          { icon: <User className="size-5" strokeWidth={2.2} />, label: "我的" },
        ]}
      />
    </div>
  );
}
