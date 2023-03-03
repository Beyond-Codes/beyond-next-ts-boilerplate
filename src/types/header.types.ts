export type HeaderLinkClassName = {
  desktop: string;
  mobile: string;
};

export type HeaderLink = {
  id: number;
  name: string;
  url: string;
  classNames: HeaderLinkClassName;
  external?: boolean;
};

export type MobileMenuProps = {
  isActive: boolean;
  children: JSX.Element[];
};
