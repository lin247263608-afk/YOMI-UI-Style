import { Home, ListOrdered, CalendarDays, MessageSquare, User } from "lucide-react";
import { TabBar } from "../Phone";

const stats = [
  { v: "5", l: "今日接单", tone: "ink" },
  { v: "£285", l: "今日收入", tone: "brand" },
  { v: "2.5h", l: "在线时长", tone: "go" },
];

const toneCls: Record<string, string> = {
  ink: "text-ink",
  brand: "text-brand",
  go: "text-go",
};

export function DriverHomeV6() {
  return (
    <div className="relative min-h-full bg-surface">
      <div className="pb-[84px]">
        <header className="flex items-center px-5 pt-4">
          <div>
            <p className="text-[22px] leading-none font-black text-ink">
              有米出行 <span className="text-brand">YOMI</span>
            </p>
            <p className="mt-2 text-[11px] font-bold tracking-[0.2em] text-go uppercase">
              go go go · uk rides
            </p>
          </div>
        </header>


        {/* 状态卡 */}
        <section className="mt-4 px-5">
          <div className="flex items-center rounded-[20px] border-[3px] border-ink bg-ink px-5 py-5">
            <div>
              <p className="text-[11px] font-bold tracking-[0.16em] text-brand uppercase">
                当前状态
              </p>
              <p className="mt-1.5 text-[24px] leading-none font-black text-brand-foreground">
                离线
              </p>
            </div>
            <button className="ml-auto rounded-full bg-brand px-6 py-3 text-[14px] font-black text-brand-foreground">
              上线签到
            </button>
          </div>
        </section>

        {/* 今日数据 */}
        <section className="mt-3 grid grid-cols-3 gap-2.5 px-5">
          {stats.map((s) => (
            <div
              key={s.l}
              className="rounded-[18px] border-[3px] border-ink bg-card px-3 py-3.5 text-center"
            >
              <p className={`font-mono text-[20px] leading-none font-black ${toneCls[s.tone]}`}>
                {s.v}
              </p>
              <p className="mt-2 text-[11px] font-bold text-muted-foreground">{s.l}</p>
            </div>
          ))}
        </section>

        <div className="mt-6 flex items-center gap-2.5 px-5">
          <span className="rounded-full bg-brand px-4 py-2 text-[12px] font-black text-brand-foreground">
            今日订单（1）
          </span>
          <span className="rounded-full border-[3px] border-ink px-4 py-1.5 text-[12px] font-bold text-ink">
            待确认订单（3）
          </span>
        </div>

        <section className="mt-3.5 px-5">
          <article className="overflow-hidden rounded-[20px] border-[3px] border-ink bg-card">
            <div className="flex items-center gap-2 bg-ink px-4 py-2.5">
              <span className="rounded-full bg-brand px-2.5 py-0.5 text-[10px] font-black text-brand-foreground">
                接机
              </span>
              <span className="rounded-full border border-brand-foreground/40 px-2.5 py-0.5 text-[10px] font-black text-brand-foreground">
                拼车
              </span>
              <span className="ml-auto font-mono text-[11px] font-bold text-brand-foreground/70">
                YM20240315
              </span>
            </div>
            <div className="px-4 pt-4">
              <p className="text-[17px] leading-snug font-black text-ink">
                希思罗机场 T5 → 伦敦市区 Kings Cross
              </p>
              <div className="mt-4 space-y-2.5">
                <div className="flex items-baseline">
                  <p className="text-[12px] font-bold text-muted-foreground">出发时间</p>
                  <p className="ml-auto font-mono text-[13px] font-black text-ink">
                    2024-03-15 14:00
                  </p>
                </div>
                <div className="flex items-baseline">
                  <p className="text-[12px] font-bold text-muted-foreground">乘车人数</p>
                  <p className="ml-auto text-[13px] font-bold text-ink">2 人 · 1 件行李</p>
                </div>
                <div className="flex items-baseline">
                  <p className="text-[12px] font-bold text-muted-foreground">增值服务</p>
                  <p className="ml-auto text-[13px] font-bold text-ink">儿童座椅*1、举接机牌</p>
                </div>
              </div>
            </div>
            <div className="mt-4 border-t-[3px] border-ink bg-brand-soft px-4 py-3">
              <p className="text-[11px] font-black text-go">待出行</p>
            </div>
          </article>
        </section>

        <div className="h-4" />
      </div>

      <TabBar
        active={0}
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
