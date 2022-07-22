import styled from 'styled-components';
import Survey from '../components/SurveyComponents/Survey';
import { WidthWrapper } from '../components/WidthWrapper';
import FounderSurvey from '../assets/SurveyAssets/FounderSurvey.png';
import { useRef, useCallback, useEffect } from 'react';

const SurveyPage = () => {
  return (
    <WidthWrapper>
      <Wrapper>
        <Image src={FounderSurvey} />
        <Survey />
      </Wrapper>
    </WidthWrapper>
  );
};

export default SurveyPage;

const Image = styled.img`
  position: absolute;
  left: ${(props) => props.left || '120px'};
  top: 51px;
`;

const Wrapper = styled.div`
  display: flex;
  width: 1440px;
  flex-direction: column;
  padding: 0px 260px 0px 260px;
  position: relative;
  overflow-y: hidden;
`;
