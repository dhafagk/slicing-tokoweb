import React from "react";
import Head from "next/head";
import { Box } from "@chakra-ui/react";

type LayoutProps = {
  children: React.ReactNode;
  title?: string;
};

const Layout: React.FC<LayoutProps> = ({ children, title }: LayoutProps) => {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <Box overflow="hidden">{children}</Box>
    </>
  );
};

export default Layout;
