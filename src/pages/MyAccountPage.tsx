import styled from '@emotion/styled';

import { Button } from '@/components/common/Button';
import { Container } from '@/components/common/layouts/Container/index';

export const MyAccountPage: React.FC = () => {
  return (
    <MySection>
      <h1>안녕하세요!</h1>
      <MyContainer>
        <Button theme="darkGray" size="small">
          <strong>로그아웃</strong>
        </Button>
      </MyContainer>
    </MySection>
  );
};

const MySection = styled.section`
  width: 100vw;
  height: 400px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 20px;

  & > h1 {
    font-size: 36px;
    font-weight: bold;
  }
`;

const MyContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 200px;
  padding: 60px 52px;
`;
