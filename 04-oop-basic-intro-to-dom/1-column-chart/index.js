export default class ColumnChart {
  constructor(props) {
    this.chartHeight = 50;
    this.props = props;
    this.data = props?.data;
    this.label = props?.label;
    this.value = props?.value;
    this.link = props?.link;
    this.formatHeading = props?.formatHeading;
    this.render();
  }

  getColumnProps(data) {
    const maxValue = Math.max(...data);
    const scale = 50 / maxValue;

    return data.map(item => {
      return {
        percent: (item / maxValue * 100).toFixed(0) + '%',
        value: String(Math.floor(item * scale))
      };
    });
  }

  renderTable() {
    if (!this.data) {
      return '';
    }
    return this.getColumnProps(this.data).map(({ percent, value }) => (
      `<div style="--value: ${value}" data-tooltip=${percent}></div>`
    )).join('');
  }

  renderData() {
    return `
      <div data-element="header" class="column-chart__header">
        ${this.formatHeading ? this.formatHeading(this.value) : this.value}
      </div>
      <div data-element="body" class="column-chart__chart">
        ${this.renderTable()}
      </div>
    `;
  }

  getTemplate() {
    const className = !this.props ? 'column-chart column-chart_loading' : 'column-chart';

    return `
      <div class="${className}" style="--chart-height: ${this.chartHeight}">
        <div class="column-chart__title">
          Total ${this.label}
          <a href=${this.link} class="column-chart__link">View all</a>
        </div>
        <div class="column-chart__container">
          ${this.renderData()}
        </div>
      </div>
    `;
  }

  render() {
    const element = document.createElement('div');

    element.innerHTML = this.getTemplate();

    this.element = element.firstElementChild;
  }

  update(newData) {
    this.data = newData;
  }

  remove() {
    this.element.remove();
  }

  destroy() {
    this.remove();
  }
}
