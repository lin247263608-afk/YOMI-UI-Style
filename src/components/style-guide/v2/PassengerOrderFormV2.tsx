import { ArrowLeft, PlaneTakeoff, MapPin, RefreshCw, ChevronRight, Minus, Plus } from "lucide-react";

function Stepper({ value }: { value: number }) {
  return (
    <div className="flex items-center gap-2.5">
      <button className="flex size-7 items-center justify-center rounded-full bg-secondary text-muted-foreground">
        <Minus className="size-3.5" />
      </button>
      <span className="w-4 text-center text-[15px] font-bold text-ink">{value}</span>
      <button className="flex size-7 items-center justify-center rounded-full bg-ink text-brand-foreground">
        <Plus className="size-3.5" />
      </button>
    </div>
  );
}

function Card({ children }: { children: React.ReactNode }) {
  return (
    <section className="rounded-2xl bg-card p-3.5 shadow-card ring-1 ring-border/60">
      {children}
    </section>
  );
}

function Title({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-2">
      <span className="h-3.5 w-1 rounded-full bg-brand" />
      <p className="text-[14px] font-bold text-ink">{children}</p>
    </div>
  );
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-center gap-2">
      <p className="text-[14px] text-ink-soft">{label}</p>
      <p className="ml-auto text-[14px] font-semibold text-ink">{value}</p>
      <ChevronRight className="size-4 text-muted-foreground" />
    </div>
  );
}


export function PassengerOrderFormV2() {
  return (
    <div className="relative min-h-full bg-background">
      <div className="pb-[112px]">
        <header className="flex items-center gap-3 bg-ink-gradient px-4 py-3">
          <ArrowLeft className="size-5 text-brand-foreground" />
          <h1 className="flex-1 text-center text-[17px] font-bold text-brand-foreground">接机</h1>
          <span className="size-5" />
        </header>

        <div className="space-y-2.5 px-3.5 pt-3">
          <div className="flex items-center">
            <span className="rounded-lg bg-brand px-2.5 py-1.5 text-[12px] font-bold text-brand-foreground">
              接机 · 独享
            </span>
            <div className="ml-auto flex rounded-lg bg-secondary p-0.5">
              <span className="rounded-md px-3 py-1 text-[12px] font-semibold text-ink-soft">拼车</span>
              <span className="rounded-md bg-card px-3 py-1 text-[12px] font-bold text-ink shadow-card">
                独享
              </span>
            </div>
          </div>

          <Card>
            <div className="flex items-center gap-2.5">
              <span className="flex size-7 items-center justify-center rounded-lg bg-brand-soft text-brand">
                <PlaneTakeoff className="size-4" />
              </span>
              <p className="flex-1 text-[14px] font-semibold text-ink">
                伦敦 希思罗机场 Terminal 2
              </p>
            </div>
            <div className="my-2.5 flex items-center">
              <div className="h-px flex-1 bg-border" />
              <span className="flex size-7 items-center justify-center rounded-full bg-ink text-brand-foreground">
                <RefreshCw className="size-3.5" />
              </span>
            </div>
            <div className="flex items-center gap-2.5">
              <span className="flex size-7 items-center justify-center rounded-lg bg-secondary text-muted-foreground">
                <MapPin className="size-4" />
              </span>
              <p className="flex-1 text-[14px] text-muted-foreground">选择目的地（围栏内点位）</p>
            </div>
          </Card>

          <Card>
            <Title>航班信息</Title>
            <p className="mt-1.5 text-[11px] leading-relaxed text-muted-foreground">
              为了准确的获取你的落地、起飞信息，请你如实填写航班信息
            </p>
            <div className="mt-2.5 rounded-xl border border-dashed border-border bg-secondary/60 px-3 py-2.5 text-[13px] text-muted-foreground">
              请输入航班号（如 CA855）
            </div>
          </Card>


          <Card>
            <Row label="用车时间" value="2026-05-12 14:30" />
          </Card>

          <Card>
            <Title>出行人数</Title>
            <div className="mt-3 flex items-center">
              <p className="text-[14px] text-ink">成人人数</p>
              <div className="ml-auto">
                <Stepper value={1} />
              </div>
            </div>
            <div className="mt-3 flex items-center">
              <div>
                <p className="text-[14px] text-ink">儿童人数</p>
                <p className="text-[11px] text-muted-foreground">12岁以下 / 135cm以下</p>
              </div>
              <div className="ml-auto">
                <Stepper value={0} />
              </div>
            </div>
          </Card>

          <Card>
            <Title>行李数</Title>
            <div className="mt-3 flex items-center">
              <p className="text-[14px] text-ink">标准行李（24寸及以下）</p>
              <div className="ml-auto">
                <Stepper value={1} />
              </div>
            </div>
            <div className="mt-3 flex items-center">
              <p className="text-[14px] text-ink">大件行李（大于24寸）</p>
              <div className="ml-auto">
                <Stepper value={1} />
              </div>
            </div>
          </Card>

          <Card>
            <Title>增值服务</Title>
            <div className="mt-2.5 space-y-2.5">
              {[
                { l: "举牌接机", p: "£10" },
                { l: "穿着正装", p: "£30" },
                { l: "额外安全座椅", p: "£15/位" },
              ].map((s) => (
                <div key={s.l} className="flex items-center gap-2.5">
                  <span className="size-4 rounded border-2 border-border" />
                  <p className="text-[14px] text-ink">{s.l}</p>
                  <p className="ml-auto font-mono text-[13px] font-semibold text-ink">{s.p}</p>
                </div>
              ))}
            </div>
          </Card>

          <Card>
            <div className="space-y-3.5">
              <Row label="选择车型" value="5座舒适型轿车" />
              <div className="h-px bg-border" />
              <Row label="乘车人信息" value="张三 ZHANG SAN" />
              <div className="h-px bg-border" />
              <Row label="优惠券" value="满减 £5 优惠券" />
            </div>
          </Card>

          <Card>
            <div className="flex items-center gap-3">
              <p className="flex-1 text-[13px] text-ink">
                拼团倒计时结束时只拼成2人也愿意成团
              </p>
              <div className="flex h-5 w-9 items-center rounded-full bg-border px-0.5">
                <span className="size-4 rounded-full bg-card shadow-card" />
              </div>
            </div>
          </Card>
        </div>

        <div className="h-4" />
      </div>

      <div className="absolute inset-x-0 bottom-0 border-t border-border bg-card px-4 pt-3 pb-4 shadow-float">
        <div className="flex items-baseline gap-2">
          <p className="text-[13px] text-muted-foreground">总计费用</p>
          <p className="font-mono text-[24px] leading-none font-bold text-brand">£71.00</p>
          <span className="ml-auto flex items-center text-[12px] text-muted-foreground">
            明细 <ChevronRight className="size-3.5" />
          </span>
        </div>
        <button className="mt-3 w-full rounded-2xl bg-ink-gradient py-3.5 text-[15px] font-bold text-brand-foreground shadow-float">
          提交订单
        </button>
      </div>

    </div>
  );
}
