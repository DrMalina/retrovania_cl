import styled from 'styled-components';

const ErrorImageLocalContainer = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: center;
  position: relative;
  width: 100%;
`;

const ErrorImageLocalMessage = styled.span`
  align-items: center;
  background-color: #000;
  color: #fff;
  display: flex;
  flex-direction: column;
  font-size: 72px;
  font-weight: 900;
  justify-content: center;
  left: 50%;
  padding-left: 100px;
  padding-right: 100px;
  position: absolute;
  text-transform: uppercase;
  top: 50%;
  transform: translateX(-50%) translateY(-75%);
`;

export { ErrorImageLocalContainer, ErrorImageLocalMessage };
