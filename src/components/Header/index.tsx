import logoImg from '../../assets/logo.svg';

import { Container, Content } from './styles';

interface HeaderProps {
    onOpenNewTransacionModal: () => void;
}

export function Header({ onOpenNewTransacionModal }: HeaderProps) {
    return (
        <Container>
            <Content>
                <img src={logoImg} alt="dt money" />
                <button type="button" onClick={onOpenNewTransacionModal}>
                    Nova transação
                </button>


            </Content>
        </Container>
    );
}