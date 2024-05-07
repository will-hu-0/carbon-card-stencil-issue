import { Component, Host, State, h } from '@stencil/core';
import "https://1.www.s81c.com/common/carbon-for-ibm-dotcom/version/v1.43.0/card-group.min.js";
import "https://1.www.s81c.com/common/carbon-for-ibm-dotcom/version/v1.43.0/button-group.min.js";

interface Card {
  heading: string;
  description?: string;
};

@Component({
  tag: 'my-component',
  styleUrl: 'my-component.css',
  shadow: true,
})
export class MyComponent {

  private dataFromAPI: Card[] = [];
  @State() dataForUI: Card[] = [];

  componentWillLoad() {
    this.dataFromAPI = [
      {heading: "My heading1", description: "Long long long description1"},
      {heading: "My heading2", description: "Long long long description2"},
      {heading: "My heading3", description: "Long long long description3"},
      {heading: "My heading4", description: "Long long long description4"},
      {heading: "My heading5", description: "Long long long description5"},
      {heading: "My heading6", description: "Long long long description6"}
    ];

    // Get first 3 items for the page.
    this.dataForUI = [...this.dataFromAPI].slice(0, 3);
  }

  handlePrevious() {
    // Get the first 3 items for the page.
    this.dataForUI = [...this.dataFromAPI].slice(0, 3);
  }

  handleNext() {
    // Get the last 3 items for the page.
    this.dataForUI = [...this.dataFromAPI].slice(4, 6);
  }

  render() {
    return (
    <Host>
      <div class="container">
        <h4>The issue that the card description is not being updated when clicking to the NEXT page</h4>
        <dds-button-group>
          <dds-button-group-item onClick={() => this.handlePrevious()}>
            Previous
          </dds-button-group-item>
          <dds-button-group-item onClick={() => this.handleNext()}>
            Next
          </dds-button-group-item>
        </dds-button-group>
        <dds-card-group grid-mode="narrow" cards-per-row="3">
          {this.dataForUI.map(card => (
            <dds-card-group-item cta-type="local" href="https://example.com">
              <dds-card-heading>{card.heading}</dds-card-heading>
              <p>{card.description}</p> {/* This does NOT work */}
              {/* <div>{card.description}</div> This works */}
              <dds-card-cta-footer slot="footer"></dds-card-cta-footer>
            </dds-card-group-item>
          ))}
        </dds-card-group>
      </div>
     </Host>
    )
  }
}
