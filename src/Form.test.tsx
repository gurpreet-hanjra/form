import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import Form from './Form';

const getData = jest.fn().mockReturnValueOnce(10);

describe('Form component tests', () => {
  it('should call getData as callback when form is submitted', () => {
    const { getByTestId } = render(<Form
      name="awesome-form"
      handleSubmit={getData}>
      <input type="text" name="username"></input>
      <input data-testid="submit" type="submit" name=""></input>
    </Form>);

    userEvent.click(getByTestId('submit'));
    expect(getData).toHaveBeenCalled();
  })
})
