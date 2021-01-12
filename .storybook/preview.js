import { addDecorator } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import Layout from "./components/layout"

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
}

addDecorator(storyFn => <Layout>{storyFn()}</Layout>);
addDecorator(withInfo({
  inline: true,
  propTablesExclude: [Layout]
}));