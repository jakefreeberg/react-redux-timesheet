import React from 'react';
import { shallow } from 'enzyme';

import renderer from 'react-test-renderer';
import ProjectRow from './ProjectRow';

describe('<ProjectRow />', () => {
  let wrapper;
  const project = {
    name: 'NAME',
    description: 'DESCRIPTION'
  };

  beforeEach(() => {
    wrapper = shallow(<ProjectRow project={project} />);
  });

  it('<ProjectRow />', () => {
    const rowComponent = renderer.create(<ProjectRow project={project} />).toJSON();
    expect(rowComponent).toMatchSnapshot();
  });
});
