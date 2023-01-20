type HeadingProps<C extends React.ElementType> = {
  variant?: C;
  children: React.ReactNode;
} & React.ComponentPropsWithoutRef<C>;

export default HeadingProps;
