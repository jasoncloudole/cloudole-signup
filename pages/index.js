import { EmptyState, Layout, Page } from '@shopify/polaris';
import { CookiesProvider } from 'react-cookie';
import { withCookies, Cookies } from 'react-cookie';
import Router from 'next/router';
const Index = () => (
  <CookiesProvider>
  <Page>
    <Layout>
      <EmptyState
        heading="Discount your products temporarily"
        action={{
          content: 'Select products',
          onAction: () => test(),
        }}
      >
        <p>Select products to change their price temporarily.</p>
      </EmptyState>
    </Layout>
  </Page>
  </CookiesProvider>
);

const test = () => {
  const cookies = new Cookies();
  console.log(cookies.getAll());
  console.log('test');
  Router.push('/syncData')
}

export default Index;
