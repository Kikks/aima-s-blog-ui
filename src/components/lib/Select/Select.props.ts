export default interface SelectProps
  extends React.HTMLProps<HTMLSelectElement> {
  error?: boolean;
  helperText?: string;
  label?: string;
  options?: {
    value: string | number;
    label: string;
  }[];
}
