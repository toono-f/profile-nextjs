import type { NextPage } from "next";
import type { AppProps } from "next/app";
import type { ReactElement } from "react";

export type NextPageWithLayout<P = Record<never, never>, IP = P> = NextPage<P, IP> & {
  getLayout: (page: ReactElement) => ReactElement;
};

export type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};
