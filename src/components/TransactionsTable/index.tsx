import { useTransactions } from '../../hooks/useTransactions';

import { Container } from './styles';

export function TransactionsTable() {
  const currencyFormater = new Intl.NumberFormat(
    'pt-BR',
    { style: 'currency', currency: 'BRL' }
  );
  const dateFormater = new Intl.DateTimeFormat('pt-BR');
  const { transactions } = useTransactions();

  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>

        <tbody>
          {transactions.map(
            ({ id, title, amount, type, category, createdAt }) => (
              <tr key={id}>
                <td>{title}</td>
                <td className={type}>
                  {currencyFormater.format(amount)}
                </td>
                <td>{category}</td>
                <td>
                  {dateFormater.format(new Date(createdAt))}
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </Container>
  );
}