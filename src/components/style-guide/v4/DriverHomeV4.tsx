import { Home, ListOrdered, CalendarDays, MessageSquare, User } from "lucide-react";
import { TabBar } from "../Phone";

const stats = [
  { v: "5", l: "今日接单" },
  { v: "£285", l: "今日收入", accent: true },
  { v: "2.5h", l: "在线时长" },
];

export function DriverHomeV4() {
  return (
    <div className="relative min-h-full bg-[oklch(0.978_0.008_75)]">
      <div className="pb-[84px]">
        <header className="flex items-center px-6 pt-4">
          <div>
            <p className="text-[20px] leading-none font-bold text-ink">
              有米出行 <span className="text-brand">YOMI</span>
            </p>
            <p className="mt-1.5 text-[11px] tracking-[0.18em] text-muted-foreground uppercase">
              UK Airport Transfer
            </p>
          </div>
        </header>


        {/* 状态卡 */}
        <section className="mt-5 px-5">
          <div className="flex items-center rounded-[26px] bg-ink px-5 py-5 shadow-float">
            <div>
              <p className="text-[11px] text-brand-foreground/60">当前状态</p>
              <p className="mt-1.5 text-[22px] leading-none font-bold text-brand-foreground">离线</p>
            </div>
            <button className="ml-auto rounded-full bg-brand px-6 py-3 text-[14px] font-bold text-brand-foreground">
              上线签到
            </button>
          </div>
        </section>

        {/* 今日数据 */}
        <section className="mt-4 grid grid-cols-3 gap-3 px-5">
          {stats.map((s) => (
            <div key={s.l} className="rounded-[22px] bg-card px-3 py-4 text-center shadow-card">
              <p
                className={`font-mono text-[19px] leading-none font-bold ${
                  s.accent ? "text-brand" : "text-ink"
                }`}
              >
                {s.v}
              </p>
              <p className="mt-2 text-[11px] text-muted-foreground">{s.l}</p>
            </div>
          ))}
        </section>

        <div className="mt-7 flex items-center gap-3 px-5">
          <span className="rounded-full bg-ink px-4 py-2 text-[12px] font-bold text-brand-foreground">
            今日订单（1）
          </span>
          <span className="rounded-full bg-card px-4 py-2 text-[12px] text-muted-foreground shadow-card">
            待确认订单（3）
          </span>
        </div>

        <section className="mt-4 px-5">
          <article className="overflow-hidden rounded-[26px] bg-card shadow-float">
            <div className="flex items-center gap-2 px-5 pt-4">
              <span className="rounded-full bg-ink px-2.5 py-1 text-[10px] font-bold text-brand-foreground">
                接机
              </span>
              <span className="rounded-full bg-brand-soft px-2.5 py-1 text-[10px] font-bold text-brand">
                拼车
              </span>
              <span className="ml-auto font-mono text-[11px] text-muted-foreground">
                YM20240315
              </span>
            </div>
            <div className="px-5 pt-4">
              <p className="text-[16px] leading-snug font-bold text-ink">
                希思罗机场 T5 → 伦敦市区 Kings Cross
              </p>
              <div className="mt-4 space-y-2.5">
                <div className="flex items-baseline">
                  <p className="text-[12px] text-muted-foreground">出发时间</p>
                  <p className="ml-auto font-mono text-[13px] font-bold text-ink">
                    2024-03-15 14:00
                  </p>
                </div>
                <div className="flex items-baseline">
                  <p className="text-[12px] text-muted-foreground">乘车人数</p>
                  <p className="ml-auto text-[13px] font-semibold text-ink">2 人 · 1 件行李</p>
                </div>
                <div className="flex items-baseline">
                  <p className="text-[12px] text-muted-foreground">增值服务</p>
                  <p className="ml-auto text-[13px] font-semibold text-ink">儿童座椅*1、举接机牌</p>
                </div>
              </div>
            </div>
            <div className="mt-4 bg-surface-alt px-5 py-3.5">
              <p className="text-[11px] font-semibold text-go">待出行</p>
            </div>
          </article>
        </section>

        <div className="h-4" />
      </div>

      <TabBar
        active={0}
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
