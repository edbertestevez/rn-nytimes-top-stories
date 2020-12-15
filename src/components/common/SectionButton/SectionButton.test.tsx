import 'jsdom-global/register';
import 'jest-styled-components';

import React from 'react';
import 'react-native';
import Enzyme, {mount} from 'enzyme';
import SectionButton from './index';
import Adapter from 'enzyme-adapter-react-16';
import renderer from 'react-test-renderer';

Enzyme.configure({adapter: new Adapter()});

describe('<SectionButton />', () => {
  const DEFAULT_LABEL = 'Test';
  const DEFAULT_FUNCTION = () => console.log(DEFAULT_LABEL);

  const testComponent = (
    <SectionButton
      label={DEFAULT_LABEL}
      onPress={DEFAULT_FUNCTION}
      selected={true}
    />
  );

  const wrapper = mount(testComponent);
  const tree = renderer.create(testComponent).toJSON();
  it('renders correctly', () => {
    expect(tree).toMatchSnapshot();
  });
  it('renders correct button label', () => {
    expect(wrapper.props().label).toEqual(DEFAULT_LABEL);
  });
});
