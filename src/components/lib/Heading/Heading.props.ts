type HeadingProps<C extends React.ElementType> = {
  variant?: C;
  children: React.ReactNode;
  decorated?: boolean;
} & React.ComponentPropsWithoutRef<C>;

export default HeadingProps;
