import { Home, ListOrdered, CalendarDays, MessageSquare, User } from "lucide-react";
import { TabBarHaze } from "./TabBarHaze";

export function DriverHomeV7() {
  return (
    <div className="relative min-h-full bg-background">
      <div className="pb-[84px]">
        <header className="flex items-center gap-3 bg-haze px-4 py-3">
          <span className="flex size-7 items-center justify-center rounded-lg bg-brand text-[12px] font-bold text-brand-foreground">
            Y
          </span>
          <h1 className="flex-1 text-center text-[17px] font-bold tracking-wide text-ink">
            有米出行 <span className="text-brand">YOMI</span>
          </h1>
          <span className="rounded-xl border border-ink/12 bg-card/60 px-2.5 py-1 text-[12px] font-semibold text-ink">
            中 / EN
          </span>
        </header>

        <div className="space-y-2.5 px-3.5 pt-4">
          {/* 状态 */}
          <section className="flex items-center rounded-2xl bg-card p-4 shadow-card ring-1 ring-border/60">
            <div>
              <p className="text-[15px] font-bold text-ink">
                当前状态：<span className="text-muted-foreground">离线</span>
              </p>
              <p className="mt-0.5 text-[12px] text-muted-foreground">每日签到上线保持活跃</p>
            </div>
            <button className="ml-auto flex items-center gap-2 rounded-full bg-ink-gradient px-4 py-2.5 text-[13px] font-bold text-brand-foreground shadow-float">
              <span className="size-2 animate-pulse rounded-full bg-brand" />
              上线签到
            </button>
          </section>

          {/* 今日数据统计 */}
          <section className="rounded-2xl bg-card p-4 shadow-card ring-1 ring-border/60">
            <div className="flex items-center gap-2">
              <span className="h-3.5 w-1 rounded-full bg-brand" />
              <p className="text-[15px] font-bold text-ink">今日数据统计</p>
            </div>
            <div className="mt-3 flex items-center">
              {[
                { v: "5", l: "今日接单", accent: false },
                { v: "£285", l: "今日收入", accent: true },
                { v: "2.5h", l: "在线时长", accent: false },
              ].map((s, i) => (
                <div key={s.l} className="flex flex-1 items-center">
                  {i > 0 && <div className="h-8 w-px bg-border" />}
                  <div className="flex-1 text-center">
                    <p
                      className={`font-mono text-[22px] font-bold ${s.accent ? "text-brand" : "text-ink"}`}
                    >
                      {s.v}
                    </p>
                    <p className="mt-1 text-[11px] text-muted-foreground">{s.l}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>


          {/* Tab */}
          <div className="flex items-center gap-4 px-1 pt-1">
            <p className="text-[14px] font-bold text-ink">
              今日订单（1）
              <span className="mt-1 block h-0.5 rounded-full bg-brand" />
            </p>
            <p className="text-[14px] text-muted-foreground">待确认订单（3）</p>
          </div>

          {/* 订单卡 */}
          <section className="overflow-hidden rounded-2xl bg-card shadow-card ring-1 ring-border/60">
            <div className="flex items-center border-b border-dashed border-border px-4 py-2.5">
              <p className="font-mono text-[12px] text-muted-foreground">订单号: YM20240315</p>
              <span className="ml-auto rounded-md bg-brand-soft px-2.5 py-1 text-[11px] font-bold text-brand">
                待出行
              </span>
            </div>
            <div className="border-l-[3px] border-brand/70 px-4 py-3.5">
              <p className="text-[14px] font-bold text-ink-soft">接机 · 拼车</p>
              <p className="mt-1.5 text-[16px] leading-snug font-bold text-ink">
                希思罗机场 T5 → 伦敦市区 Kings Cross
              </p>
              <p className="mt-2 font-mono text-[12px] text-muted-foreground">
                出发时间: 2024-03-15 14:00
              </p>
              <p className="mt-1 text-[12px] text-muted-foreground">乘车人数: 2 人 · 1 件行李</p>
              <p className="mt-2.5 rounded-xl bg-secondary/70 px-3 py-2 text-[12px] font-semibold text-ink">
                增值服务: 儿童座椅*1、举接机牌
              </p>
            </div>
          </section>

        </div>
      </div>

      <TabBarHaze
        active={0}
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
