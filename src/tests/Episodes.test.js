import React from 'react';
import { render, queryAllByAltText, queryAllByTestId } from '@testing-library/react';
import Episodes from './Episodes';

const season = [...];

test('Episodes render', async() => {
    const ( queryAllByAltText, rerender) = render(<Episodes episodes={[]} /> );
    expect(queryAllByTestId(/episode-card/i)).toHaveLength(0);
})