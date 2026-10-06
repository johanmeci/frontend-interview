export interface SearchBoxProps {
  value: string;
  onChange: (value: string) => void;
}

export default function SearchBox({ value, onChange }: SearchBoxProps) {
  return (
    <input
      className="search-box"
      type="search"
      aria-label="Search products"
      placeholder="Search products..."
      value={value}
      onChange={(event) => onChange(event.target.value)}
    />
  );
}
