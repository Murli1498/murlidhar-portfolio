import { useState } from "react";

const SERIES = [42, 68, 51, 88, 46, 73, 60];
const MARKS = ["bar", "line", "area", "pie"] as const;
type Mark = (typeof MARKS)[number];

const INK = "#f4efe6";
const ACCENT = "#e7a07a";
const GRID = "rgba(244, 239, 230, 0.16)";

export function ChartPreview() {
  const [mark, setMark] = useState<Mark>("bar");

  return (
    <div className="chart">
      <div className="chart-head">
        <p className="eyebrow on-dark">Chart registry</p>
        <div className="modes" role="group" aria-label="Chart mark">
          {MARKS.map((item) => (
            <button
              key={item}
              type="button"
              aria-pressed={mark === item}
              onClick={() => setMark(item)}
            >
              {item}
            </button>
          ))}
        </div>
      </div>
      <svg viewBox="0 0 320 148" role="img" aria-label={`${mark} chart of a sample series`}>
        <line x1="16" y1="124" x2="304" y2="124" stroke={GRID} />
        {mark === "bar" && <Bars />}
        {mark === "line" && <Line filled={false} />}
        {mark === "area" && <Line filled />}
        {mark === "pie" && <Donut />}
      </svg>
    </div>
  );
}

function Bars() {
  const width = 26;
  const gap = 16;
  const origin = 22;
  return (
    <g>
      {SERIES.map((value, index) => {
        const height = (value / 100) * 100;
        const x = origin + index * (width + gap);
        const y = 124 - height;
        const highlighted = index === 3;
        return (
          <rect
            key={index}
            x={x}
            y={y}
            width={width}
            height={height}
            fill={highlighted ? ACCENT : INK}
          />
        );
      })}
    </g>
  );
}

function Line({ filled }: { filled: boolean }) {
  const points = SERIES.map((value, index) => {
    const x = 28 + index * 44;
    const y = 124 - (value / 100) * 100;
    return [x, y] as const;
  });
  const path = points.map(([x, y], index) => `${index === 0 ? "M" : "L"} ${x} ${y}`).join(" ");
  const area = `${path} L ${points[points.length - 1][0]} 124 L ${points[0][0]} 124 Z`;

  return (
    <g>
      {filled && <path d={area} fill="rgba(231, 160, 122, 0.35)" />}
      <path d={path} fill="none" stroke={INK} strokeWidth="2" />
      {points.map(([x, y], index) => (
        <circle key={index} cx={x} cy={y} r={index === 3 ? 4.5 : 3} fill={index === 3 ? ACCENT : INK} />
      ))}
    </g>
  );
}

function Donut() {
  const slices = [28, 22, 18, 32];
  const colors = [INK, ACCENT, "#8fbfb6", "#c9b89a"];
  const total = slices.reduce((sum, value) => sum + value, 0);
  const radius = 40;
  const circumference = 2 * Math.PI * radius;
  let cursor = 0;

  return (
    <g transform="translate(160 74) rotate(-90)">
      {slices.map((value, index) => {
        const length = (value / total) * circumference;
        const dash = `${length} ${circumference - length}`;
        const offset = -cursor;
        cursor += length;
        return (
          <circle
            key={index}
            r={radius}
            fill="none"
            stroke={colors[index]}
            strokeWidth="18"
            strokeDasharray={dash}
            strokeDashoffset={offset}
          />
        );
      })}
    </g>
  );
}
