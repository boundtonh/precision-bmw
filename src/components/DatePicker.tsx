"use client";
import { useRef, useState, useSyncExternalStore, KeyboardEvent } from "react";

// Day-chip date picker for the scheduling form. Shows the next open (Mon–Fri) days
// as tappable chips, with a month calendar for later dates. Values are "YYYY-MM-DD".

const CHIP_COUNT = 15;
const WEEKDAYS = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];

// Local-time "YYYY-MM-DD" (toISOString would use UTC and roll over in the evening)
export function toISODate(d: Date) {
  const m = String(d.getMonth() + 1).padStart(2, "0");
  const day = String(d.getDate()).padStart(2, "0");
  return `${d.getFullYear()}-${m}-${day}`;
}

function fromISODate(value: string) {
  const [y, m, d] = value.split("-").map(Number);
  return new Date(y, m - 1, d);
}

// "2026-11-03" → "Tue, Nov 3, 2026"
export function formatDate(value: string) {
  return fromISODate(value).toLocaleDateString("en-US", {
    weekday: "short",
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

// Shop is open Monday–Friday
export function isOpenDay(d: Date) {
  const day = d.getDay();
  return day !== 0 && day !== 6;
}

// Earliest bookable date: tomorrow, or the next open day after it
export function firstBookableDate(today: Date) {
  const d = new Date(today.getFullYear(), today.getMonth(), today.getDate() + 1);
  while (!isOpenDay(d)) d.setDate(d.getDate() + 1);
  return d;
}

export function isBookable(value: string, today: Date) {
  const d = fromISODate(value);
  return isOpenDay(d) && d >= firstBookableDate(today);
}

// Today's date, read in the browser only. The page is prerendered at build time,
// so the server snapshot is null and the chips fill in after hydration.
const subscribe = () => () => {};
function useTodayISO() {
  return useSyncExternalStore(subscribe, () => toISODate(new Date()), () => null);
}

interface DatePickerProps {
  value: string;
  onChange: (value: string) => void;
  labelledBy: string;
  invalid?: boolean;
  describedBy?: string;
}

export default function DatePicker({ value, onChange, labelledBy, invalid, describedBy }: DatePickerProps) {
  const todayISO = useTodayISO();
  const [calendarOpen, setCalendarOpen] = useState(false);
  const [viewMonth, setViewMonth] = useState<Date | null>(null);
  const chipRefs = useRef<(HTMLButtonElement | null)[]>([]);

  if (!todayISO) {
    // Same footprint as the real row so nothing shifts when it fills in
    return (
      <div className="date-chips" aria-hidden="true">
        {Array.from({ length: 5 }, (_, i) => (
          <span key={i} className="date-chip date-chip-skeleton" />
        ))}
      </div>
    );
  }

  const today = fromISODate(todayISO);
  const first = firstBookableDate(today);

  const chips: string[] = [];
  for (const d = new Date(first); chips.length < CHIP_COUNT; d.setDate(d.getDate() + 1)) {
    if (isOpenDay(d)) chips.push(toISODate(d));
  }
  // A later date picked from the calendar stays visible as its own chip
  if (value && !chips.includes(value)) chips.push(value);

  const focusIndex = Math.max(0, chips.indexOf(value));

  const onChipKeyDown = (e: KeyboardEvent<HTMLButtonElement>, i: number) => {
    const step = e.key === "ArrowRight" || e.key === "ArrowDown" ? 1
      : e.key === "ArrowLeft" || e.key === "ArrowUp" ? -1 : 0;
    if (!step) return;
    e.preventDefault();
    const next = (i + step + chips.length) % chips.length;
    onChange(chips[next]);
    chipRefs.current[next]?.focus();
    chipRefs.current[next]?.scrollIntoView({ block: "nearest", inline: "nearest" });
  };

  // Calendar month: the one being viewed, else the selected date's, else the first bookable
  const month = viewMonth ?? (value ? fromISODate(value) : first);
  const monthStart = new Date(month.getFullYear(), month.getMonth(), 1);
  const daysInMonth = new Date(month.getFullYear(), month.getMonth() + 1, 0).getDate();
  const canGoBack = monthStart > new Date(first.getFullYear(), first.getMonth(), 1);
  const shiftMonth = (delta: number) =>
    setViewMonth(new Date(monthStart.getFullYear(), monthStart.getMonth() + delta, 1));

  return (
    <div className="date-picker">
      <div
        role="radiogroup"
        aria-labelledby={labelledBy}
        aria-describedby={describedBy}
        aria-required="true"
        aria-invalid={invalid || undefined}
        className="date-chips"
      >
        {chips.map((iso, i) => {
          const d = fromISODate(iso);
          const selected = iso === value;
          return (
            <button
              key={iso}
              ref={(el) => { chipRefs.current[i] = el; }}
              type="button"
              role="radio"
              aria-checked={selected}
              aria-label={d.toLocaleDateString("en-US", { weekday: "long", month: "long", day: "numeric" })}
              tabIndex={i === focusIndex ? 0 : -1}
              className={`date-chip${selected ? " selected" : ""}`}
              onClick={() => onChange(iso)}
              onKeyDown={(e) => onChipKeyDown(e, i)}
            >
              <span className="date-chip-weekday">
                {d.toLocaleDateString("en-US", { weekday: "short" })}
              </span>
              <span className="date-chip-day">{d.getDate()}</span>
              <span className="date-chip-month">
                {d.toLocaleDateString("en-US", { month: "short" })}
              </span>
            </button>
          );
        })}
      </div>

      <div className="date-picker-footer">
        <span className="date-picker-summary" aria-live="polite">
          {value ? formatDate(value) : "Mon–Fri only · we're closed weekends"}
        </span>
        <button
          type="button"
          className="date-picker-toggle"
          aria-expanded={calendarOpen}
          aria-controls="date-calendar"
          onClick={() => setCalendarOpen((o) => !o)}
        >
          {calendarOpen ? "Hide calendar" : "Pick a later date ›"}
        </button>
      </div>

      {calendarOpen && (
        <div id="date-calendar" className="date-calendar">
          <div className="date-calendar-header">
            <button
              type="button"
              className="date-calendar-nav"
              aria-label="Previous month"
              disabled={!canGoBack}
              onClick={() => shiftMonth(-1)}
            >
              ‹
            </button>
            <span className="date-calendar-title" aria-live="polite">
              {monthStart.toLocaleDateString("en-US", { month: "long", year: "numeric" })}
            </span>
            <button
              type="button"
              className="date-calendar-nav"
              aria-label="Next month"
              onClick={() => shiftMonth(1)}
            >
              ›
            </button>
          </div>
          <div className="date-calendar-grid">
            {WEEKDAYS.map((w) => (
              <span key={w} className="date-calendar-weekday" aria-hidden="true">{w}</span>
            ))}
            {Array.from({ length: monthStart.getDay() }, (_, i) => <span key={`pad-${i}`} />)}
            {Array.from({ length: daysInMonth }, (_, i) => {
              const d = new Date(monthStart.getFullYear(), monthStart.getMonth(), i + 1);
              const iso = toISODate(d);
              const available = isOpenDay(d) && d >= first;
              return (
                <button
                  key={iso}
                  type="button"
                  className={`date-calendar-day${iso === value ? " selected" : ""}`}
                  disabled={!available}
                  aria-pressed={iso === value}
                  aria-label={d.toLocaleDateString("en-US", { weekday: "long", month: "long", day: "numeric" })
                    + (available ? "" : ", unavailable")}
                  onClick={() => {
                    onChange(iso);
                    setCalendarOpen(false);
                    setViewMonth(null);
                  }}
                >
                  {i + 1}
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
