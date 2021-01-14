import styled from 'styled-components';

export const Container = styled.div`
  display : flex;
  flex-direction : column;  
  
  & label {
    margin : 10px 0;
    line-height : 15px;
    font-size:13px;
    font-weight : 400;
  }
  
  & textarea{
    min-height : 100px;
  }
`;
