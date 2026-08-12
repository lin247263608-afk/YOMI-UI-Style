import { ArrowLeft, RefreshCw, ChevronRight, Minus, Plus, Check } from "lucide-react";

function Stepper({ value }: { value: number }) {
  return (
    <div className="flex items-center border border-ink/15">
      <button className="flex size-7 items-center justify-center text-muted-foreground">
        <Minus className="size-3" />
      </button>
      <span className="w-8 border-x border-ink/15 py-1 text-center font-mono text-[14px] font-bold text-ink">
        {value}
      </span>
      <button className="flex size-7 items-center justify-center bg-ink text-brand-foreground">
        <Plus className="size-3" />
      </button>
    </div>
  );
}

function Block({ title, children }: { title?: string; children: React.ReactNode }) {
  return (
    <section className="border-t border-dashed border-ink/18 bg-card px-5 py-4">
      {title && (
        <p className="font-mono text-[10px] tracking-[0.3em] text-ink-soft uppercase">{title}</p>
      )}
      <div className={title ? "mt-3.5" : ""}>{children}</div>
    </section>
  );
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-center gap-2">
      <p className="text-[13px] text-muted-foreground">{label}</p>
      <p className="ml-auto text-[14px] font-semibold text-ink">{value}</p>
      <ChevronRight className="size-4 text-ink/25" />
    </div>
  );
}

export function PassengerOrderFormV5() {
  return (
    <div className="relative min-h-full bg-[oklch(0.97_0.012_88)]">
      <div className="pb-[116px]">
        <header className="flex items-center gap-3 border-b border-ink/15 bg-card px-5 pt-3.5 pb-3">
          <ArrowLeft className="size-5 text-ink" />
          <h1 className="text-[16px] font-bold text-ink">接机</h1>
          <span className="border border-brand px-1.5 py-0.5 font-mono text-[9px] tracking-[0.2em] text-brand uppercase">
            独享
          </span>
          <div className="ml-auto flex border border-ink/15">
            <span className="px-3 py-1 text-[12px] text-muted-foreground">拼车</span>
            <span className="bg-ink px-3 py-1 text-[12px] font-bold text-brand-foreground">
              独享
            </span>
          </div>
        </header>

        <div className="bg-card">
          <div className="px-5 py-4">
            <div className="flex gap-3">
              <p className="mt-0.5 w-9 font-mono text-[9px] tracking-[0.2em] text-muted-foreground uppercase">
                From
              </p>
              <p className="flex-1 text-[15px] font-semibold text-ink">
                伦敦 希思罗机场 Terminal 2
              </p>
            </div>
            <div className="my-3 flex items-center gap-3">
              <span className="ml-[18px] h-px flex-1 bg-ink/12" />
              <RefreshCw className="size-3.5 text-muted-foreground" />
            </div>
            <div className="flex gap-3">
              <p className="mt-0.5 w-9 font-mono text-[9px] tracking-[0.2em] text-muted-foreground uppercase">
                To
              </p>
              <p className="flex-1 text-[15px] text-muted-foreground">选择目的地（围栏内点位）</p>
            </div>
          </div>

          <Block title="航班信息 / Flight">
            <p className="text-[11px] leading-relaxed text-muted-foreground">
              为了准确的获取你的落地、起飞信息，请你如实填写航班信息
            </p>
            <div className="mt-3 border border-dashed border-ink/25 px-3.5 py-2.5 font-mono text-[13px] tracking-[0.16em] text-muted-foreground">
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
                    className={`flex size-4 items-center justify-center border ${
                      s.on ? "border-ink bg-ink text-brand-foreground" : "border-ink/25"
                    }`}
                  >
                    {s.on && <Check className="size-2.5" strokeWidth={3} />}
                  </span>
                  <p className="text-[14px] text-ink">{s.l}</p>
                  <p className="ml-auto font-mono text-[13px] font-bold text-ink">{s.p}</p>
                </div>
              ))}
            </div>
          </Block>

          <Block>
            <div className="space-y-3">
              <Row label="选择车型" value="5座舒适型轿车" />
              <div className="h-px bg-ink/8" />
              <Row label="乘车人信息" value="张三 ZHANG SAN" />
              <div className="h-px bg-ink/8" />
              <Row label="优惠券" value="满减 £5 优惠券" />
            </div>
          </Block>

          <Block>
            <div className="flex items-center gap-3">
              <p className="flex-1 text-[13px] text-ink">拼团倒计时结束时只拼成2人也愿意成团</p>
              <div className="flex h-5 w-9 items-center justify-end rounded-full bg-go px-0.5">
                <span className="size-4 rounded-full bg-card" />
              </div>
            </div>
          </Block>
        </div>
      </div>

      <div className="absolute inset-x-0 bottom-0 border-t border-ink/15 bg-card px-5 pt-3.5 pb-5">
        <div className="flex items-baseline gap-2">
          <p className="font-mono text-[10px] tracking-[0.26em] text-muted-foreground uppercase">
            总计费用
          </p>
          <p className="font-mono text-[24px] leading-none font-bold text-ink">£71.00</p>
        </div>
        <button className="mt-3.5 w-full bg-ink py-3.5 font-mono text-[14px] font-bold tracking-[0.24em] text-brand-foreground uppercase">
          提交订单 · Confirm
        </button>
      </div>
    </div>
  );
}
