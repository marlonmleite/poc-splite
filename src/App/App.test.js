import React from 'react';
import { render } from '@testing-library/react';
import AppPdv from './ipdv';
import AppParceiro from './parceiro';

test('should render App PDV', () => {
  const { getByText } = render(<AppPdv />);
  const linkElement = getByText('IPDV');

  expect(linkElement).toBeInTheDocument();
});

test('should render App Parceiro', () => {
  const { getByText } = render(<AppParceiro />);
  const linkElement = getByText('Parceiro');

  expect(linkElement).toBeInTheDocument();
});
