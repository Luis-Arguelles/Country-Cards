import { screen, render } from '@testing-library/react-native';
import RenderCountriesList from './renderCountriesList';

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

    const countryName = screen.getByTestId("countryName");
    const countryFlag = screen.getByTestId("countryFlag");
    expect(countryName.props.children).toBe('Mexico');
    expect(countryFlag.props.source.uri).toBe('https://upload.wikimedia.org/wikipedia/commons/f/fc/Flag_of_Mexico.svg'); 
  });
});