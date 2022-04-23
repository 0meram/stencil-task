import { newSpecPage } from '@stencil/core/testing';
import { AppList } from '../app-list';

describe('app-list', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [AppList],
      html: `<app-list></app-list>`,
    });
    expect(page.root).toEqualHtml(`
      <app-list>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </app-list>
    `);
  });
});
