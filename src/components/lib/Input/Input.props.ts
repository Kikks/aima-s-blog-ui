export default interface InputProps extends React.HTMLProps<HTMLInputElement> {
  error?: boolean;
  helperText?: string;
  label?: string;
}
