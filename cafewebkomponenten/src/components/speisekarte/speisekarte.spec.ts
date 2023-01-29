import { newSpecPage } from '@stencil/core/testing';
import { MyComponent } from './speisekarte';

describe('speisekarte', () => {
  it('renders', async () => {
    const { root } = await newSpecPage({
      components: [MyComponent],
      html: '<speisekarte></speisekarte>',
    });
    expect(root).toEqualHtml(`
      <speisekarte>
        <mock:shadow-root>
          <div>
            Hello, World! I'm
          </div>
        </mock:shadow-root>
      </speisekarte>
    `);
  });

  it('renders with values', async () => {
    const { root } = await newSpecPage({
      components: [MyComponent],
      html: `<speisekarte first="Stencil" last="'Don't call me a framework' JS"></speisekarte>`,
    });
    expect(root).toEqualHtml(`
      <speisekarte first="Stencil" last="'Don't call me a framework' JS">
        <mock:shadow-root>
          <div>
            Hello, World! I'm Stencil 'Don't call me a framework' JS
          </div>
        </mock:shadow-root>
      </speisekarte>
    `);
  });
});
