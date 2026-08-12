import { Share2, Home, ListOrdered, CalendarDays, MessageSquare, User } from "lucide-react";
import { TabBar } from "../Phone";

const pool = [
  {
    tag: "接机 · 拼车",
    no: "YM20240316",
    from: "希思罗机场 T5",
    to: "伦敦市区 Paddington",
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
    from: "盖特威克机场 S",
    to: "Westminster 威斯敏斯特",
    time: "2024-03-19 16:15",
    pax: "3 人 · 2 件行李",
    income: "£85.00",
    left: "49:20:33",
  },
  {
    tag: "接机 · 独享",
    no: "YM20240316",
    from: "斯坦斯特德机场",
    to: "Stratford 斯特拉特福",
    time: "2024-03-19 17:45",
    pax: "1 人 · 1 件行李",
    income: "£85.00",
    left: "58:20:33",
  },
];

export function DriverOrderPoolV5() {
  return (
    <div className="relative min-h-full bg-[oklch(0.97_0.012_88)]">
      <div className="pb-[84px]">
        <header className="border-b border-ink/15 bg-card px-5 pt-4 pb-3">
          <div className="flex items-end">
            <div>
              <p className="font-mono text-[10px] tracking-[0.34em] text-ink-soft uppercase">
                Order Pool
              </p>
              <p className="mt-1 text-[17px] leading-none font-bold text-ink">订单池</p>
            </div>
            <Share2 className="ml-auto size-[18px] text-ink" strokeWidth={1.6} />
          </div>
          <div className="mt-3 flex items-baseline gap-2">
            <p className="text-[12px] text-muted-foreground">
              当前有 <span className="font-mono font-bold text-brand">4</span> 个可抢订单
            </p>
            <span className="mx-1 h-px flex-1 border-b border-dotted border-ink/20" />
            <p className="font-mono text-[9px] tracking-[0.2em] text-muted-foreground uppercase">
              下拉刷新
            </p>
          </div>
        </header>

        <div className="space-y-3 px-5 pt-4">
          {pool.map((o) => (
            <article
              key={o.to}
              className={`border bg-card ${o.urgent ? "border-brand" : "border-ink/15"}`}
            >
              <div className="flex items-center border-b border-dashed border-ink/18 px-4 py-2.5">
                <p className="font-mono text-[10px] tracking-[0.22em] text-ink uppercase">{o.tag}</p>
                <p className="ml-auto font-mono text-[10px] tracking-[0.16em] text-muted-foreground">
                  {o.no}
                </p>
              </div>

              <div className="px-4 pt-4">
                <div className="space-y-3">
                  <div>
                    <p className="font-mono text-[9px] tracking-[0.2em] text-muted-foreground uppercase">
                      From
                    </p>
                    <p className="mt-0.5 text-[14px] leading-snug font-bold text-ink">{o.from}</p>
                  </div>
                  <div className="h-px border-t border-dashed border-ink/18" />
                  <div>
                    <p className="font-mono text-[9px] tracking-[0.2em] text-muted-foreground uppercase">
                      To
                    </p>
                    <p className="mt-0.5 text-[14px] leading-snug font-bold text-ink">{o.to}</p>
                  </div>
                </div>
              </div>

              <div className="mt-4 space-y-2 border-t border-dashed border-ink/20 px-4 py-3.5">
                {[
                  ["出发时间", o.time],
                  ["乘车人数", o.pax],
                  ...(o.extra ? [["增值服务", o.extra]] : []),
                ].map(([k, v]) => (
                  <div key={k} className="flex items-baseline justify-between gap-2">
                    <p className="font-mono text-[9px] tracking-[0.2em] text-muted-foreground uppercase">
                      {k}
                    </p>
                    <p className="text-[13px] font-semibold text-ink text-right">{v}</p>
                  </div>
                ))}
                <div className="flex items-baseline justify-between gap-2 pt-1">
                  <p className="font-mono text-[9px] tracking-[0.2em] text-muted-foreground uppercase">
                    预估收入
                  </p>
                  <p className="font-mono text-[18px] leading-none font-bold text-brand">
                    {o.income}
                  </p>
                </div>
              </div>

              <div className="flex items-center border-t border-ink/12 px-4 py-3">
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
                <button className="ml-auto bg-ink px-7 py-2.5 font-mono text-[12px] font-bold tracking-[0.22em] text-brand-foreground uppercase">
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
          { icon: <Home className="size-5" strokeWidth={1.5} />, label: "首页" },
          { icon: <ListOrdered className="size-5" strokeWidth={1.5} />, label: "订单池" },
          { icon: <CalendarDays className="size-5" strokeWidth={1.5} />, label: "我的订单" },
          { icon: <MessageSquare className="size-5" strokeWidth={1.5} />, label: "消息" },
          { icon: <User className="size-5" strokeWidth={1.5} />, label: "我的" },
        ]}
      />
    </div>
  );
}
