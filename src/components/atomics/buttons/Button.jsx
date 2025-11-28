import { BaseButton } from "./styles";

export const Button = ({ children, variant, ...rest }) => {
  return (
    <BaseButton $variant={variant} {...rest}>
      {children}
    </BaseButton>
  );
};
