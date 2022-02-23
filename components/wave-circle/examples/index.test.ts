import React from 'react';
import WaveCircle, { WaveCircleProps } from '..';
import { shallow } from 'enzyme';

describe('测试 <WaveCircle />', () => {
  it('测试 <WaveCircle /> snapshot', () => {
    const props: WaveCircleProps = {
      bgColor: `rgb(${Math.floor(Math.random() * 255)}, ${Math.floor(
        Math.random() * 255
      )}, ${Math.floor(Math.random() * 255)})`,
      timingFunction: 'linear',
    };
    const wrapper = shallow(React.createElement(WaveCircle, props, 'moe'));

    wrapper.find('div').simulate('click');

    expect(wrapper).toMatchSnapshot();
  });
});
