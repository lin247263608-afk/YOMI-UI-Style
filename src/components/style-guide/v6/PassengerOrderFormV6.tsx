import { ArrowLeft, PlaneTakeoff, MapPin, RefreshCw, ChevronRight, Minus, Plus, Check } from "lucide-react";

function Stepper({ value }: { value: number }) {
  return (
    <div className="flex items-center gap-1.5">
      <button className="flex size-7 items-center justify-center rounded-xl border-2 border-ink text-ink">
        <Minus className="size-3.5" strokeWidth={3} />
      </button>
      <span className="w-6 text-center font-mono text-[15px] font-black text-ink">{value}</span>
      <button className="flex size-7 items-center justify-center rounded-xl bg-brand text-brand-foreground">
        <Plus className="size-3.5" strokeWidth={3} />
      </button>
    </div>
  );
}

function Card({ title, children }: { title?: string; children: React.ReactNode }) {
  return (
    <section className="rounded-[20px] border-[3px] border-ink bg-card p-4">
      {title && (
        <p className="text-[12px] font-black tracking-[0.1em] text-brand uppercase">{title}</p>
      )}
      <div className={title ? "mt-3" : ""}>{children}</div>
    </section>
  );
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-center gap-2">
      <p className="text-[13px] font-bold text-muted-foreground">{label}</p>
      <p className="ml-auto text-[14px] font-bold text-ink">{value}</p>
      <ChevronRight className="size-4 text-ink/40" strokeWidth={2.5} />
    </div>
  );
}

export function PassengerOrderFormV6() {
  return (
    <div className="relative min-h-full bg-surface">
      <div className="pb-[124px]">
        <header className="flex items-center gap-2.5 px-5 pt-4">
          <span className="flex size-9 items-center justify-center rounded-xl bg-ink">
            <ArrowLeft className="size-[17px] text-brand-foreground" strokeWidth={2.5} />
          </span>
          <h1 className="text-[19px] font-black text-ink">接机</h1>
          <div className="ml-auto flex rounded-full border-[3px] border-ink p-0.5">
            <span className="rounded-full px-3 py-0.5 text-[12px] font-bold text-ink">拼车</span>
            <span className="rounded-full bg-brand px-3 py-0.5 text-[12px] font-black text-brand-foreground">
              独享
            </span>
          </div>
        </header>

        <div className="mt-4 space-y-3 px-5">
          <Card>
            <div className="flex items-center gap-3">
              <span className="flex size-8 items-center justify-center rounded-xl bg-brand">
                <PlaneTakeoff className="size-4 text-brand-foreground" strokeWidth={2.4} />
              </span>
              <p className="flex-1 text-[15px] font-bold text-ink">
                伦敦 希思罗机场 Terminal 2
              </p>
            </div>
            <div className="my-3 flex items-center gap-3 pl-4">
              <span className="h-6 w-0.5 bg-ink/20" />
              <div className="h-0.5 flex-1 bg-ink/15" />
              <RefreshCw className="size-3.5 text-brand" strokeWidth={2.5} />
            </div>
            <div className="flex items-center gap-3">
              <span className="flex size-8 items-center justify-center rounded-xl bg-go">
                <MapPin className="size-4 text-brand-foreground" strokeWidth={2.4} />
              </span>
              <p className="flex-1 text-[15px] font-bold text-muted-foreground">
                选择目的地（围栏内点位）
              </p>
            </div>
          </Card>

          <Card title="航班信息">
            <p className="text-[11px] leading-relaxed text-muted-foreground">
              为了准确的获取你的落地、起飞信息，请你如实填写航班信息
            </p>
            <div className="mt-3 rounded-2xl border-2 border-dashed border-ink/25 px-4 py-3 text-[14px] font-bold text-muted-foreground">
              请输入航班号（如 CA855）
            </div>
          </Card>

          <Card>
            <Row label="用车时间" value="2026-05-12 14:30" />
          </Card>

          <Card title="出行人数">
            <div className="flex items-center">
              <p className="text-[14px] font-bold text-ink">成人人数</p>
              <div className="ml-auto">
                <Stepper value={1} />
              </div>
            </div>
            <div className="mt-3.5 flex items-center">
              <div>
                <p className="text-[14px] font-bold text-ink">儿童人数</p>
                <p className="text-[11px] text-muted-foreground">12岁以下 / 135cm以下</p>
              </div>
              <div className="ml-auto">
                <Stepper value={0} />
              </div>
            </div>
          </Card>

          <Card title="行李数">
            <div className="flex items-center">
              <p className="text-[14px] font-bold text-ink">标准行李（24寸及以下）</p>
              <div className="ml-auto">
                <Stepper value={1} />
              </div>
            </div>
            <div className="mt-3.5 flex items-center">
              <p className="text-[14px] font-bold text-ink">大件行李（大于24寸）</p>
              <div className="ml-auto">
                <Stepper value={1} />
              </div>
            </div>
          </Card>

          <Card title="增值服务">
            <div className="space-y-2.5">
              {[
                { l: "举牌接机", p: "£10", on: true },
                { l: "穿着正装", p: "£30", on: false },
                { l: "额外安全座椅", p: "£15/位", on: false },
              ].map((s) => (
                <div
                  key={s.l}
                  className={`flex items-center gap-3 rounded-2xl border-2 px-3.5 py-2.5 ${
                    s.on ? "border-brand bg-brand-soft" : "border-ink/15 bg-surface-alt"
                  }`}
                >
                  <span
                    className={`flex size-4.5 items-center justify-center rounded-md border-2 ${
                      s.on ? "border-brand bg-brand text-brand-foreground" : "border-ink/30 bg-card"
                    }`}
                  >
                    {s.on && <Check className="size-2.5" strokeWidth={4} />}
                  </span>
                  <p className="text-[14px] font-bold text-ink">{s.l}</p>
                  <p className="ml-auto font-mono text-[13px] font-black text-ink">{s.p}</p>
                </div>
              ))}
            </div>
          </Card>

          <Card>
            <div className="space-y-3">
              <Row label="选择车型" value="5座舒适型轿车" />
              <div className="h-0.5 bg-ink/10" />
              <Row label="乘车人信息" value="张三 ZHANG SAN" />
              <div className="h-0.5 bg-ink/10" />
              <Row label="优惠券" value="满减 £5 优惠券" />
            </div>
          </Card>

          <Card>
            <div className="flex items-center gap-3">
              <p className="flex-1 text-[13px] font-bold text-ink">
                拼团倒计时结束时只拼成2人也愿意成团
              </p>
              <div className="flex h-6 w-10 items-center justify-end rounded-full bg-go px-0.5">
                <span className="size-5 rounded-full bg-card" />
              </div>
            </div>
          </Card>
        </div>
      </div>

      <div className="absolute inset-x-0 bottom-0 border-t-[3px] border-ink bg-card px-5 pt-3.5 pb-5">
        <div className="flex items-center">
          <div>
            <p className="text-[11px] font-bold text-muted-foreground">总计费用</p>
            <p className="font-mono text-[26px] leading-none font-black text-ink">£71.00</p>
          </div>
          <button className="ml-auto rounded-full bg-brand px-9 py-3.5 text-[15px] font-black text-brand-foreground">
            提交订单
          </button>
        </div>
      </div>
    </div>
  );
}
