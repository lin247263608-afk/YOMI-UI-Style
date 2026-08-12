import { ArrowLeft, PlaneTakeoff, MapPin, RefreshCw, ChevronRight, Minus, Plus, Check } from "lucide-react";

function Stepper({ value }: { value: number }) {
  return (
    <div className="flex items-center gap-3">
      <button className="flex size-6 items-center justify-center rounded-full border border-border text-muted-foreground">
        <Minus className="size-3" />
      </button>
      <span className="w-4 text-center font-mono text-[15px] font-bold text-ink">{value}</span>
      <button className="flex size-6 items-center justify-center rounded-full border border-ink bg-ink text-brand-foreground">
        <Plus className="size-3" />
      </button>
    </div>
  );
}

function Block({ title, children }: { title?: string; children: React.ReactNode }) {
  return (
    <section className="border-t border-border bg-card px-5 py-4">
      {title && (
        <p className="font-mono text-[10px] tracking-[0.28em] text-ink-soft uppercase">{title}</p>
      )}
      <div className={title ? "mt-3.5" : ""}>{children}</div>
    </section>
  );
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-center gap-2 py-1">
      <p className="text-[13px] text-muted-foreground">{label}</p>
      <p className="ml-auto text-[14px] font-semibold text-ink">{value}</p>
      <ChevronRight className="size-4 text-border" />
    </div>
  );
}

export function PassengerOrderFormV3() {
  return (
    <div className="relative min-h-full bg-surface-alt">
      <div className="pb-[116px]">
        <header className="bg-ink-gradient px-5 pt-3 pb-5">
          <div className="flex items-center gap-3">
            <ArrowLeft className="size-5 text-brand-foreground" />
            <h1 className="text-[16px] font-bold text-brand-foreground">接机</h1>
            <span className="rounded-sm bg-brand px-2 py-0.5 font-mono text-[10px] tracking-[0.16em] text-brand-foreground uppercase">
              独享
            </span>
            <span className="ml-auto font-mono text-[10px] tracking-[0.28em] text-brand-foreground/60 uppercase">
              Step 1 / 2
            </span>
          </div>
          <div className="mt-3.5 flex overflow-hidden rounded-full border border-brand-foreground/25 self-start w-fit">
            <span className="px-3.5 py-1 text-[12px] text-brand-foreground/70">拼车</span>
            <span className="bg-brand-foreground px-3.5 py-1 text-[12px] font-bold text-ink">
              独享
            </span>
          </div>
        </header>


        <div className="relative z-10 -mt-3 rounded-t-[22px] bg-card">
          <Block>
            <div className="flex items-center gap-3">
              <PlaneTakeoff className="size-4 text-brand" />
              <p className="flex-1 text-[15px] font-semibold text-ink">
                伦敦 希思罗机场 Terminal 2
              </p>
            </div>
            <div className="my-3 flex items-center gap-3">
              <span className="ml-[7px] h-6 w-px bg-border" />
              <div className="h-px flex-1 bg-border" />
              <RefreshCw className="size-3.5 text-muted-foreground" />
            </div>
            <div className="flex items-center gap-3">
              <MapPin className="size-4 text-muted-foreground" />
              <p className="flex-1 text-[15px] text-muted-foreground">选择目的地（围栏内点位）</p>
            </div>
          </Block>

          <Block title="航班信息 / Flight">
            <p className="text-[11px] leading-relaxed text-muted-foreground">
              为了准确的获取你的落地、起飞信息，请你如实填写航班信息
            </p>
            <div className="mt-3 border-b border-ink/15 pb-2 text-[14px] text-muted-foreground">
              请输入航班号（如 CA855）
            </div>
          </Block>

          <Block>
            <Row label="用车时间" value="2026-05-12 14:30" />
          </Block>

          <Block title="出行人数 / Passengers">
            <div className="flex items-center">
              <p className="text-[14px] text-ink">成人人数</p>
              <div className="ml-auto">
                <Stepper value={1} />
              </div>
            </div>
            <div className="mt-3.5 flex items-center">
              <div>
                <p className="text-[14px] text-ink">儿童人数</p>
                <p className="text-[11px] text-muted-foreground">12岁以下 / 135cm以下</p>
              </div>
              <div className="ml-auto">
                <Stepper value={0} />
              </div>
            </div>
          </Block>

          <Block title="行李数 / Luggage">
            <div className="flex items-center">
              <p className="text-[14px] text-ink">标准行李（24寸及以下）</p>
              <div className="ml-auto">
                <Stepper value={1} />
              </div>
            </div>
            <div className="mt-3.5 flex items-center">
              <p className="text-[14px] text-ink">大件行李（大于24寸）</p>
              <div className="ml-auto">
                <Stepper value={1} />
              </div>
            </div>
          </Block>

          <Block title="增值服务 / Extras">
            <div className="space-y-3">
              {[
                { l: "举牌接机", p: "£10", on: true },
                { l: "穿着正装", p: "£30", on: false },
                { l: "额外安全座椅", p: "£15/位", on: false },
              ].map((s) => (
                <div key={s.l} className="flex items-center gap-3">
                  <span
                    className={`flex size-4 items-center justify-center rounded-sm border ${
                      s.on ? "border-brand bg-brand text-brand-foreground" : "border-border"
                    }`}
                  >
                    {s.on && <Check className="size-3" strokeWidth={3} />}
                  </span>
                  <p className="text-[14px] text-ink">{s.l}</p>
                  <p className="ml-auto font-mono text-[13px] font-semibold text-ink">{s.p}</p>
                </div>
              ))}
            </div>
          </Block>

          <Block>
            <div className="space-y-2.5">
              <Row label="选择车型" value="5座舒适型轿车" />
              <div className="h-px bg-ink/8" />
              <Row label="乘车人信息" value="张三 ZHANG SAN" />
              <div className="h-px bg-ink/8" />
              <Row label="优惠券" value="满减 £5 优惠券" />
            </div>
          </Block>

          <Block>
            <div className="flex items-center gap-3">
              <p className="flex-1 text-[13px] text-ink">
                拼团倒计时结束时只拼成2人也愿意成团
              </p>
              <div className="flex h-5 w-9 items-center justify-end rounded-full bg-go px-0.5">
                <span className="size-4 rounded-full bg-card" />
              </div>
            </div>
          </Block>
        </div>
      </div>

      <div className="absolute inset-x-0 bottom-0 bg-ink-gradient px-5 pt-4 pb-5">
        <div className="flex items-baseline gap-2">
          <p className="font-mono text-[10px] tracking-[0.24em] text-brand-foreground/60 uppercase">
            总计费用
          </p>
          <p className="font-mono text-[26px] leading-none font-bold text-brand-foreground">
            £71.00
          </p>
          <span className="ml-auto flex items-center text-[11px] text-brand-foreground/70">
            明细 <ChevronRight className="size-3.5" />
          </span>
        </div>
        <button className="mt-3.5 w-full rounded-full bg-brand py-3.5 text-[15px] font-bold tracking-wide text-brand-foreground">
          提交订单
        </button>
      </div>
    </div>
  );
}
