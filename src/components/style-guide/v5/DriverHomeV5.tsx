import { Home, ListOrdered, CalendarDays, MessageSquare, User } from "lucide-react";
import { TabBar } from "../Phone";

const stats = [
  { v: "5", l: "今日接单", en: "Orders" },
  { v: "£285", l: "今日收入", en: "Income", accent: true },
  { v: "2.5h", l: "在线时长", en: "Online" },
];

export function DriverHomeV5() {
  return (
    <div className="relative min-h-full bg-[oklch(0.97_0.012_88)]">
      <div className="pb-[84px]">
        <header className="flex items-end justify-between border-b border-ink/15 bg-card px-5 pt-4 pb-3">
          <div>
            <p className="font-mono text-[10px] tracking-[0.34em] text-ink-soft uppercase">
              Yomi · UK Transfer
            </p>
            <p className="mt-1 text-[17px] leading-none font-bold text-ink">
              有米出行 <span className="text-brand">YOMI</span>
            </p>
          </div>
        </header>



        {/* 上线状态 */}
        <section className="border-b border-ink/15 bg-card px-5 py-4">
          <div className="flex items-center">
            <div>
              <p className="font-mono text-[9px] tracking-[0.26em] text-muted-foreground uppercase">
                当前状态
              </p>
              <p className="mt-1 text-[20px] leading-none font-bold text-ink">离线</p>
            </div>
            <button className="ml-auto border border-ink bg-ink px-5 py-2.5 font-mono text-[12px] font-bold tracking-[0.2em] text-brand-foreground uppercase">
              上线签到
            </button>
          </div>
        </section>

        {/* 今日数据统计 */}
        <section className="border-b border-ink/15 bg-card">
          <div className="grid grid-cols-3">
            {stats.map((s, i) => (
              <div
                key={s.l}
                className={`px-3 py-4 text-center ${i > 0 ? "border-l border-dashed border-ink/18" : ""}`}
              >
                <p
                  className={`font-mono text-[20px] leading-none font-bold ${
                    s.accent ? "text-brand" : "text-ink"
                  }`}
                >
                  {s.v}
                </p>
                <p className="mt-2 text-[11px] font-semibold text-ink-soft">{s.l}</p>
                <p className="font-mono text-[9px] tracking-[0.18em] text-muted-foreground uppercase">
                  {s.en}
                </p>
              </div>
            ))}
          </div>
        </section>

        <div className="flex items-center gap-5 px-5 pt-5">
          <div>
            <p className="font-mono text-[12px] font-bold tracking-[0.14em] text-ink">
              今日订单（1）
            </p>
            <span className="mt-2 block h-px w-full bg-brand" />
          </div>
          <p className="font-mono text-[12px] tracking-[0.14em] text-muted-foreground">
            待确认订单（3）
          </p>
        </div>

        {/* 订单票据 */}
        <section className="mt-4 px-5">
          <article className="border border-ink/15 bg-card">
            <div className="flex items-center bg-ink px-4 py-2.5">
              <p className="font-mono text-[10px] tracking-[0.22em] text-brand-foreground uppercase">
                接机 · 拼车
              </p>
              <p className="ml-auto font-mono text-[10px] tracking-[0.18em] text-brand">
                YM20240315
              </p>
            </div>
            <div className="px-4 pt-4">
              <p className="text-[16px] leading-snug font-bold text-ink">
                希思罗机场 T5
                <br />
                → 伦敦市区 Kings Cross
              </p>
            </div>
            <div className="mt-4 space-y-2 border-t border-dashed border-ink/20 px-4 py-3.5">
              {[
                ["出发时间", "2024-03-15 14:00"],
                ["乘车人数", "2 人 · 1 件行李"],
                ["增值服务", "儿童座椅*1、举接机牌"],
              ].map(([k, v]) => (
                <div key={k} className="flex items-baseline justify-between gap-2">
                  <p className="font-mono text-[9px] tracking-[0.2em] text-muted-foreground uppercase">
                    {k}
                  </p>
                  <p className="text-[13px] font-semibold text-ink text-right">{v}</p>
                </div>
              ))}
            </div>
            <div className="border-t border-ink/12 px-4 py-2.5">
              <p className="font-mono text-[10px] tracking-[0.2em] text-go uppercase">待出行</p>
            </div>
          </article>
        </section>

        <div className="h-5" />
      </div>

      <TabBar
        active={0}
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
