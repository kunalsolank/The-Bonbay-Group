import { TableSection } from "../subPagesComponents/TableSection";

const ICON =
  "https://www.dollrexcapital.com/wp-content/themes/blankslate-child/assets/images/classic2.svg";

const columns = [
  { key: "maker", label: "ONE MAKER", icon: ICON },
  { key: "trader", label: "ONE TRADER", icon: ICON },
  { key: "professional", label: "ONE PROFESSIONAL", icon: ICON },
  { key: "market", label: "ONE MARKET", icon: ICON },
  { key: "royal", label: "ONE ROYAL", icon: ICON },
];

// Helper: build a row from 5 values in column order
const row = (label, v) => ({
  label,
  values: Object.fromEntries(columns.map((c, i) => [c.key, v[i]])),
});

const rows = [
  row("Minimum Opening Deposit", ["$100", "$500", "$1000", "$5000", "$10,000"]),
  row("Spreads (in pips)", ["2", "1.6", "1.0", "0", "ECN"]),
  row("Max Leverage", ["1000:1*", "500:1*", "300:1*", "300:1*", "200:1*"]),
  row("Trading Platform", Array(5).fill("MT5")),
  row("Fifth Decimal", Array(5).fill(true)),
  row("Execution Type", Array(5).fill("STP/MARKET")),
  row("Minimum Trade Size", Array(5).fill("0.01")),
  row("Trade Size Increment", Array(5).fill("0.01")),
  row("Max Total Trades", Array(5).fill("20")),
  row("Max Simultaneous Open Orders", ["200", "300", "300", "300", "UNLIMITED"]),
  row("Margin Call / Stop Out (%)", Array(5).fill("100 / 30")),
  row("Telephone Trading", [false, false, true, true, true]),
  row("Commission", ["0", "0", "0", "$8", "$6"]),
];

const notes = [
  "Balance above $1,000: Leverage reduced to 1000:1",
  "Balance above $5,000: Leverage reduced to 500:1",
  "Balance above $25,000: Leverage reduced to 300:1",
  "Balance above $50,000: Leverage reduced to 200:1",
  "Balance above $100,000: Leverage reduced to 100:1",
];

export default function AccountComparisonTable() {
  return (
    <TableSection
      title="Choose the Account That Suits You"
      description="From beginners to seasoned pros - there’s an account for every stage."
      columns={columns}
      rows={rows}
      notesTitle="Leverage Policy Notes:"
      notes={notes}
    />
  );
}