import React from 'React';
import { render, wait, getAllByAltText} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';

import expectExport from 'expect';

test('User clicked Season DropDown', async() => {
    const { getByText, getAllByText } = render(<App/>)
    await wait(() => {
        getByText(/select a season/i)
    })

    userEvent.click(getByText(/select a season/i));
    expect(getAllByText(/select/i)).toHaveLength(1);

});