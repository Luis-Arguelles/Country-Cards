import React from 'react';
import { render, screen } from '@testing-library/react-native';

import RenderCountriesList from '../renderCountriesList';

describe('<RenderCountriesList/>', () => {
  it("Displays the country's common name and flag", () => {

    render(<RenderCountriesList country={country = {
      name: {
        common: 'Mexico',
      },
      flags: {
        png: 'https://upload.wikimedia.org/wikipedia/commons/f/fc/Flag_of_Mexico.svg',
      },
    }}/>);

    const countryName = screen.getByTestId("country-name");
    const countryFlag = screen.getByTestId("country-image");
    expect(countryName).toBeTruthy();
    expect(countryFlag).toBeTruthy();
  });
});