import React from 'react';
import WaveCircle from '../index';
import type { WaveCircleProps } from '../index';
import { shallow } from 'enzyme';

describe('测试 WaveCircle', () => {
  it('测试 WaveCircle snapshot', () => {
    const props: WaveCircleProps = {
      bgColor: '#000',
      timingFunction: 'linear',
    };
    const wrapper = shallow(React.createElement(WaveCircle, props, 'moe'));

    wrapper.find('div').simulate('click');

    expect(wrapper).toMatchSnapshot();
  });
});
