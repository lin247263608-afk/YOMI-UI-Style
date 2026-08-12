import { Home, ListOrdered, CalendarDays, MessageSquare, User } from "lucide-react";
import { TabBar } from "../Phone";

const stats = [
  { v: "5", l: "今日接单", en: "Orders" },
  { v: "£285", l: "今日收入", en: "Income", accent: true },
  { v: "2.5h", l: "在线时长", en: "Online" },
];

export function DriverHomeV3() {
  return (
    <div className="relative min-h-full bg-surface-alt">
      <div className="pb-[84px]">
        <div className="bg-ink-gradient px-5 pt-3 pb-16">
          <div className="flex items-center justify-between">
            <p className="font-mono text-[11px] tracking-[0.32em] text-brand-foreground uppercase">
              YOMI <span className="text-brand">有米出行</span>
            </p>
            <span className="font-mono text-[10px] tracking-[0.2em] text-brand-foreground/50 uppercase">
              Driver
            </span>
          </div>

          <div className="mt-6 flex items-end justify-between">
            <div>
              <p className="font-mono text-[10px] tracking-[0.28em] text-brand-foreground/55 uppercase">
                当前状态
              </p>
              <p className="mt-1.5 text-[24px] leading-none font-bold text-brand-foreground">离线</p>
            </div>
            <button className="rounded-full bg-brand px-5 py-2.5 text-[13px] font-bold text-brand-foreground">
              上线签到
            </button>
          </div>
        </div>

        {/* 今日数据统计 */}
        <section className="relative z-10 -mt-10 px-4">
          <div className="rounded-[20px] bg-card p-5 shadow-card">
            <p className="font-mono text-[10px] tracking-[0.28em] text-ink-soft uppercase">
              今日数据统计 / Today
            </p>
            <div className="mt-4 grid grid-cols-3 divide-x divide-ink/8">
              {stats.map((s) => (
                <div key={s.l} className="px-1 text-center">
                  <p
                    className={`font-mono text-[22px] leading-none font-bold ${
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
          </div>
        </section>

        {/* Tab */}
        <div className="mt-7 flex items-center gap-6 px-5">
          <div>
            <p className="text-[14px] font-bold text-ink">今日订单（1）</p>
            <span className="mt-2 block h-0.5 w-full bg-brand" />
          </div>
          <p className="text-[14px] text-muted-foreground">待确认订单（3）</p>
        </div>

        {/* 订单卡 */}
        <section className="mt-4 px-4">
          <article className="rounded-[20px] border-t-2 border-brand bg-card p-5 shadow-card">
            <div className="flex items-center">
              <span className="font-mono text-[11px] tracking-[0.14em] text-muted-foreground">
                YM20240315
              </span>
              <span className="ml-auto font-mono text-[10px] tracking-[0.18em] text-brand uppercase">
                待出行
              </span>
            </div>
            <p className="mt-3 text-[12px] font-bold tracking-wide text-ink-soft">接机 · 拼车</p>
            <p className="mt-2 text-[17px] leading-snug font-bold text-ink">
              希思罗机场 T5
              <br />
              → 伦敦市区 Kings Cross
            </p>
            <div className="mt-4 space-y-2 border-t border-dashed border-border pt-3.5">
              <div className="flex items-baseline gap-3">
                <span className="font-mono text-[10px] tracking-[0.2em] text-muted-foreground uppercase">
                  出发时间
                </span>
                <span className="ml-auto font-mono text-[13px] font-semibold text-ink">
                  2024-03-15 14:00
                </span>
              </div>
              <div className="flex items-baseline gap-3">
                <span className="font-mono text-[10px] tracking-[0.2em] text-muted-foreground uppercase">
                  乘车人数
                </span>
                <span className="ml-auto text-[13px] font-semibold text-ink">2 人 · 1 件行李</span>
              </div>
              <div className="flex items-baseline gap-3">
                <span className="font-mono text-[10px] tracking-[0.2em] text-muted-foreground uppercase">
                  增值服务
                </span>
                <span className="ml-auto text-[13px] font-semibold text-ink">
                  儿童座椅*1、举接机牌
                </span>
              </div>
            </div>
          </article>
        </section>

        <div className="h-5" />
      </div>

      <TabBar
        active={0}
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
