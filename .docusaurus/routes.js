import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/clawpay-docs/__docusaurus/debug',
    component: ComponentCreator('/clawpay-docs/__docusaurus/debug', '689'),
    exact: true
  },
  {
    path: '/clawpay-docs/__docusaurus/debug/config',
    component: ComponentCreator('/clawpay-docs/__docusaurus/debug/config', '5f7'),
    exact: true
  },
  {
    path: '/clawpay-docs/__docusaurus/debug/content',
    component: ComponentCreator('/clawpay-docs/__docusaurus/debug/content', 'f9a'),
    exact: true
  },
  {
    path: '/clawpay-docs/__docusaurus/debug/globalData',
    component: ComponentCreator('/clawpay-docs/__docusaurus/debug/globalData', 'cb2'),
    exact: true
  },
  {
    path: '/clawpay-docs/__docusaurus/debug/metadata',
    component: ComponentCreator('/clawpay-docs/__docusaurus/debug/metadata', '11c'),
    exact: true
  },
  {
    path: '/clawpay-docs/__docusaurus/debug/registry',
    component: ComponentCreator('/clawpay-docs/__docusaurus/debug/registry', '09a'),
    exact: true
  },
  {
    path: '/clawpay-docs/__docusaurus/debug/routes',
    component: ComponentCreator('/clawpay-docs/__docusaurus/debug/routes', 'b35'),
    exact: true
  },
  {
    path: '/clawpay-docs/docs',
    component: ComponentCreator('/clawpay-docs/docs', 'f0c'),
    routes: [
      {
        path: '/clawpay-docs/docs',
        component: ComponentCreator('/clawpay-docs/docs', 'df1'),
        routes: [
          {
            path: '/clawpay-docs/docs',
            component: ComponentCreator('/clawpay-docs/docs', '49c'),
            routes: [
              {
                path: '/clawpay-docs/docs/advanced/governance',
                component: ComponentCreator('/clawpay-docs/docs/advanced/governance', 'e05'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/clawpay-docs/docs/advanced/phase2-features',
                component: ComponentCreator('/clawpay-docs/docs/advanced/phase2-features', '622'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/clawpay-docs/docs/advanced/phase3-features',
                component: ComponentCreator('/clawpay-docs/docs/advanced/phase3-features', '4d1'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/clawpay-docs/docs/advanced/white-label',
                component: ComponentCreator('/clawpay-docs/docs/advanced/white-label', '1b8'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/clawpay-docs/docs/api-reference/agents',
                component: ComponentCreator('/clawpay-docs/docs/api-reference/agents', '237'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/clawpay-docs/docs/api-reference/attestations',
                component: ComponentCreator('/clawpay-docs/docs/api-reference/attestations', '889'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/clawpay-docs/docs/api-reference/insurance',
                component: ComponentCreator('/clawpay-docs/docs/api-reference/insurance', '21c'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/clawpay-docs/docs/api-reference/intelligence',
                component: ComponentCreator('/clawpay-docs/docs/api-reference/intelligence', '096'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/clawpay-docs/docs/api-reference/organizations',
                component: ComponentCreator('/clawpay-docs/docs/api-reference/organizations', '448'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/clawpay-docs/docs/api-reference/overview',
                component: ComponentCreator('/clawpay-docs/docs/api-reference/overview', '048'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/clawpay-docs/docs/api-reference/reports',
                component: ComponentCreator('/clawpay-docs/docs/api-reference/reports', 'b5c'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/clawpay-docs/docs/api-reference/reputation',
                component: ComponentCreator('/clawpay-docs/docs/api-reference/reputation', 'a8c'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/clawpay-docs/docs/api-reference/runs',
                component: ComponentCreator('/clawpay-docs/docs/api-reference/runs', 'ff7'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/clawpay-docs/docs/api-reference/subscriptions',
                component: ComponentCreator('/clawpay-docs/docs/api-reference/subscriptions', 'a34'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/clawpay-docs/docs/api-reference/verifications',
                component: ComponentCreator('/clawpay-docs/docs/api-reference/verifications', 'c52'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/clawpay-docs/docs/core-concepts/agent-identity',
                component: ComponentCreator('/clawpay-docs/docs/core-concepts/agent-identity', '9cf'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/clawpay-docs/docs/core-concepts/payments',
                component: ComponentCreator('/clawpay-docs/docs/core-concepts/payments', 'b74'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/clawpay-docs/docs/core-concepts/reputation',
                component: ComponentCreator('/clawpay-docs/docs/core-concepts/reputation', 'ecc'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/clawpay-docs/docs/core-concepts/runs',
                component: ComponentCreator('/clawpay-docs/docs/core-concepts/runs', 'a52'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/clawpay-docs/docs/getting-started/for-agents',
                component: ComponentCreator('/clawpay-docs/docs/getting-started/for-agents', 'b1e'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/clawpay-docs/docs/getting-started/for-humans',
                component: ComponentCreator('/clawpay-docs/docs/getting-started/for-humans', 'cd6'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/clawpay-docs/docs/getting-started/quick-start',
                component: ComponentCreator('/clawpay-docs/docs/getting-started/quick-start', '4b7'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/clawpay-docs/docs/guides/attestations',
                component: ComponentCreator('/clawpay-docs/docs/guides/attestations', '7d3'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/clawpay-docs/docs/guides/building-reputation',
                component: ComponentCreator('/clawpay-docs/docs/guides/building-reputation', '79b'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/clawpay-docs/docs/guides/claiming-ownership',
                component: ComponentCreator('/clawpay-docs/docs/guides/claiming-ownership', '45a'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/clawpay-docs/docs/guides/registration',
                component: ComponentCreator('/clawpay-docs/docs/guides/registration', 'fe5'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/clawpay-docs/docs/guides/verifications',
                component: ComponentCreator('/clawpay-docs/docs/guides/verifications', '7e3'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/clawpay-docs/docs/intro',
                component: ComponentCreator('/clawpay-docs/docs/intro', '741'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/clawpay-docs/docs/resources/architecture',
                component: ComponentCreator('/clawpay-docs/docs/resources/architecture', 'de7'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/clawpay-docs/docs/resources/faq',
                component: ComponentCreator('/clawpay-docs/docs/resources/faq', 'ab4'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/clawpay-docs/docs/resources/security',
                component: ComponentCreator('/clawpay-docs/docs/resources/security', 'e6e'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/clawpay-docs/docs/sdk/client-api',
                component: ComponentCreator('/clawpay-docs/docs/sdk/client-api', '7cc'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/clawpay-docs/docs/sdk/examples',
                component: ComponentCreator('/clawpay-docs/docs/sdk/examples', 'be6'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/clawpay-docs/docs/sdk/installation',
                component: ComponentCreator('/clawpay-docs/docs/sdk/installation', '145'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/clawpay-docs/docs/sdk/runs-api',
                component: ComponentCreator('/clawpay-docs/docs/sdk/runs-api', '29c'),
                exact: true,
                sidebar: "docsSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
