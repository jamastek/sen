import { addDecorator } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import Layout from "./components/layout"
import { DocsContainer } from '@storybook/addon-docs/blocks';
import { MDXEmbedProvider } from 'mdx-embed';

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  docs: {
    container: ({ children, context }) => (
      <DocsContainer context={context}>
        <MDXEmbedProvider>{children}</MDXEmbedProvider>
      </DocsContainer>
    ),
  },
}

addDecorator(storyFn => <Layout>{storyFn()}</Layout>);
addDecorator(withInfo({
  inline: true,
  propTablesExclude: [Layout]
}));
