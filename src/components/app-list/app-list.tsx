import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'app-list',
  styleUrl: 'app-list.css',
  shadow: true,
})
export class AppList {
  @Prop() first: String;

  render() {
    const list = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    
    return (
      <div>
        My list
        {list.map(item => {
          return <h1>{item}</h1>;
        })}
      </div>
    );
  }
}
