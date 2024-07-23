import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
// import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
// import SearchBar from './SearchBar';
// import { weatherApi } from '../store/weatherSlice';

// Mock the RTK Query hooks
jest.mock('../../store/weatherSlice', () => ({
  ...jest.requireActual('../../store/weatherSlice'),
  useGetWeatherByCityQuery: jest.fn(),
}));

const { useGetWeatherByCityQuery } = require('../../store/weatherSlice');

// const middlewares = [thunk];
// const mockStore = configureStore(middlewares);

// describe('SearchBar Component', () => {
//   beforeEach(() => {
//     useGetWeatherByCityQuery.mockClear();
//   });

//   it('renders the input and search button', () => {
//     const store = mockStore({});

//     render(
//       <Provider store={store}>
//         <SearchBar />
//       </Provider>
//     );

//     expect(screen.getByPlaceholderText(/search city/i)).toBeInTheDocument();
//     expect(screen.getByRole('button', { name: /search/i })).toBeInTheDocument();
//   });

//   it('sets city name on button click and fetches data', async () => {
//     useGetWeatherByCityQuery.mockReturnValue({
//       data: {
//         name: 'Tokyo',
//         main: { temp: 293.25 },
//         weather: [{ description: 'clear sky', icon: '01n' }],
//       },
//       isLoading: false,
//     });

//     const store = mockStore({});

//     render(
//       <Provider store={store}>
//         <SearchBar />
//       </Provider>
//     );

//     const input = screen.getByPlaceholderText(/search city/i);
//     const button = screen.getByRole('button', { name: /search/i });

//     fireEvent.change(input, { target: { value: 'Tokyo' } });
//     fireEvent.click(button);

//     // Wait for city data to be fetched and displayed
//     expect(await screen.findByText('Tokyo')).toBeInTheDocument();
//   });

//   it('sets city name on enter key press and fetches data', async () => {
//     useGetWeatherByCityQuery.mockReturnValue({
//       data: {
//         name: 'Tokyo',
//         main: { temp: 293.25 },
//         weather: [{ description: 'clear sky', icon: '01n' }],
//       },
//       isLoading: false,
//     });

//     const store = mockStore({});

//     render(
//       <Provider store={store}>
//         <SearchBar />
//       </Provider>
//     );

//     const input = screen.getByPlaceholderText(/search city/i);

//     fireEvent.change(input, { target: { value: 'Tokyo' } });
//     fireEvent.keyDown(input, { key: 'Enter', code: 'Enter' });

//     // Wait for city data to be fetched and displayed
//     expect(await screen.findByText('Tokyo')).toBeInTheDocument();
//   });

//   it('does not fetch city data when input is empty', () => {
//     useGetWeatherByCityQuery.mockReturnValue({
//       data: null,
//       isLoading: false,
//     });

//     const store = mockStore({});

//     render(
//       <Provider store={store}>
//         <SearchBar />
//       </Provider>
//     );

//     const button = screen.getByRole('button', { name: /search/i });

//     fireEvent.click(button);

//     // Ensure no city data is fetched
//     expect(screen.queryByText('Tokyo')).not.toBeInTheDocument();
//   });
// });
