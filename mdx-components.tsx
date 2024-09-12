import type { MDXComponents } from "mdx/types";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    // Styling the basic components
    h1: ({ children }) => <h1 className="">{children}</h1>,

    ...components,
  };
}
