import { Container } from './styles';
import { useTransactions } from '../../hooks/useTransactions';

import incomeImg from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg';
import totalImg from '../../assets/total.svg';

export function Summary() {
  const currencyFormater = new Intl.NumberFormat(
    'pt-BR',
    { style: 'currency', currency: 'BRL' }
  );
  const { transactions } = useTransactions();

  const summary = transactions
    .reduce((acc, transaction) => {
      if (transaction.type === 'deposit') {
        return {
          ...acc,
          total: acc.total + transaction.amount,
          deposits: acc.deposits + transaction.amount
        }
      }

      return {
        ...acc,
        total: acc.total - transaction.amount,
        withdraw: acc.withdraw + transaction.amount
      }
    }, { deposits: 0, withdraw: 0, total: 0 });

  return (
    <Container>
      <div>
        <header>
          <p>Entradas</p>
          <img src={incomeImg} alt="Entradas" />
        </header>
        <strong>{currencyFormater.format(summary.deposits)}</strong>
      </div>

      <div>
        <header>
          <p>Saídas</p>
          <img src={outcomeImg} alt="Saídas" />
        </header>
        <strong>-{currencyFormater.format(summary.withdraw)}</strong>
      </div>

      <div className="highlight-background">
        <header>
          <p>Total</p>
          <img src={totalImg} alt="Total" />
        </header>
        <strong>{currencyFormater.format(summary.total)}</strong>
      </div>
    </Container>
  );
}
