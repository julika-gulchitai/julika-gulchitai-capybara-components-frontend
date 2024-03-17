import styled from 'styled-components';
import { ButtonStyled } from '../CommonStyledComponents/CommonButton.styled';

export const WaterWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 24px;
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  width: 100%;
`;

export const TodayText = styled.p`
  color: var(--blue);
  font-size: 18px;
  line-height: 1.3;
  margin-bottom: 8px;
`;

export const InputRange = styled.input`
  &[type='range'] {
    width: 256px;
    height: 8px;
    border-radius: 10px;
    appearance: none;
    background: linear-gradient(
      to right,
      #9ebbff 0%,
      #9ebbff ${(props) => props.value}%,
      #d7e3ff ${(props) => props.value}%,
      #d7e3ff 100%
    );
    margin-left: 10px;
    margin-bottom: 4px;
  }
  &[type='range']::-webkit-slider-thumb {
    width: 14px;
    height: 14px;
    background: var(--white);
    border-radius: 50%;
    border: solid 1px var(--blue);
    appearance: none;
    margin-top: -2px;
  }
`;

export const WrapperPercentage = styled.div`
  display: flex;
  justify-content: space-between;

  span {
    color: var(--blue);
    font-size: 12px;
    line-height: 1.3;
  }
`;

export const AddBtn = styled(ButtonStyled)`
  width: 178px;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  svg {
    color: var(--white);
  }
`;
