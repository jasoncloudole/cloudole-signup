import { EmptyState, Layout, Page } from '@shopify/polaris';
import { CookiesProvider } from 'react-cookie';

const syncData = () => (
  <CookiesProvider>
    <Page>
      <Layout>
        <EmptyState
          heading="Sync"
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

}

export default syncData;
