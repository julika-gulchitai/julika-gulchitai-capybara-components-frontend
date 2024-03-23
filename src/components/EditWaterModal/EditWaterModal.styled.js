import styled from 'styled-components';
import { ReactComponent as IconMinus } from '../../assets/icon/minus-small.svg';
import { ReactComponent as IconPlus } from '../../assets/icon/plus-small.svg';
import { ReactComponent as Glass } from '../../assets/icon/glass.svg';

export const StyledAddWaterModal = styled.div`
  width: 100vw;
  max-width: calc(280px - 24px);
  @media only screen and (min-width: 768px) {
    max-width: calc(704px - 48px);
  }

  @media only screen and (min-width: 1440px) {
    max-width: calc(592px - 48px);
  }
`;

export const AddWater = styled.h2`
  font-size: 26px;
  font-weight: 500;
  line-height: 1.23;

  margin-bottom: 24px;
`;

export const TextChoose = styled.div`
  font-size: 18px;
  font-weight: 500;
  line-height: 1.1;
  margin-bottom: 16px;
`;

export const EditText = styled.div`
  font-size: 18px;
  line-height: 1.1;
  margin-bottom: 16px;
  font-weight: 500;
`;

export const GlassStyle = styled(Glass)`
  width: 36px;
  height: 36px;
`;

export const WaterAmountTime = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  width: 254px;
  border-radius: 10px;
  background: #ecf2ff;
  padding: 12px 24px;
  margin-bottom: 24px;
`;

export const TimeValueAmount = styled.div`
  font-size: 12px;
  line-height: 2;
  margin-left: 8px;
`;

export const FormAmount = styled.p`
  font-size: 16px;
  line-height: 1.2;
  margin-bottom: 12px;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 24px;

  gap: 7px;

  button {
    display: flex;
    justify-content: center;
    align-items: center;

    width: 44px;
    height: 44px;
    padding: 10px;

    gap: 10px;

    border-radius: 30px;
    border: 1px solid ${(props) => props.theme.colors.secondaryBlue};
    background: ${(props) => props.theme.colors.mainBg};

    box-shadow: 0px 2px 4px 0px rgba(64, 123, 255, 0.2);

    cursor: pointer;
  }

  span {
    display: flex;
    justify-content: center;
    align-items: center;

    width: 92px;
    height: 36px;

    padding: 6px 10px;
    gap: 10px;

    border-radius: 40px;
    background: ${(props) => props.theme.colors.secondaryLightblue};
    color: ${(props) => props.theme.colors.primaryBlue};

    font-size: 18px;
    font-weight: 700;
    line-height: 1.33;
  }
`;

export const StyledPlusIcon = styled(IconPlus)`
  stroke: ${(props) => props.theme.colors.primaryBlue};
`;

export const StyledMinusIcon = styled(IconMinus)`
  stroke: ${(props) => props.theme.colors.primaryBlue};
  fill: ${(props) => props.theme.colors.primaryBlue};
`;

export const FormStyled = styled.form`
  display: flex;
  flex-direction: column;

  label {
    display: flex;
    flex-direction: column;
    gap: 12px;
  }

  input {
    display: flex;
    align-items: flex-start;
    gap: 10px;
    padding: 12px 10px;
    margin-bottom: 24px;

    outline: none;
    border-radius: 6px;
    border: 1px solid ${(props) => props.theme.colors.secondaryBlue};

    appearance: none;

    color: ${(props) => props.theme.colors.primaryBlue};
    font-size: 16px;
    line-height: 1.25;
    text-align: left;
  }

  label:nth-child(2) {
    font-size: 18px;
    font-weight: 500;
    line-height: 1.1;
  }

  @media screen and (min-width: 768px) {
    input,
    select {
      width: 100%;
    }
  }
`;

export const ButtonSaveWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  gap: 16px;

  p {
    color: --blue;
    font-size: 18px;
    font-weight: 700;
    align-items: center;
    line-height: 1.33;
  }

  button {
    width: 100%;
    display: flex;

    justify-content: center;
    align-items: center;

    gap: 10px;
    padding: 10px 30px;

    outline: none;
    border-radius: 10px;
    border: none;

    color: ${(props) => props.theme.colors.mainBg};
    background: ${(props) => props.theme.colors.primaryBlue};

    box-shadow: ${(props) => props.theme.shadows.buttonShadow};

    font-size: 18px;
    font-weight: 500;
    line-height: 1.33;

    cursor: pointer;
  }

  @media screen and (min-width: 768px) {
    gap: 24px;
    flex-direction: row;

    justify-content: flex-end;

    button {
      width: 160px;
    }
  }
`;

export const GlassContainer = styled.div`
  width: 254px;
  display: flex;
  align-items: center;
  padding: 8px 24px;
  border-radius: 10px;
  gap: 12px;
  background-color: ${(props) => props.theme.colors.secondaryBg};
  margin-bottom: 24px;
`;

export const TextAmount = styled.p`
  color: ${(props) => props.theme.colors.primaryBlue};
  font-size: 18px;
  line-height: 1.3;
  margin-right: 4px;
`;

export const TimeValue = styled.p`
  font-size: 12px;
  line-height: 2;
`;
