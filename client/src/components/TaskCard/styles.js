import styled from "styled-components";

export const Container = styled.li`
  background-color: #fff;
  border-radius: .25rem;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  gap: .35rem;
  padding: .5rem;
  transition: .3s;

  &:hover {
    opacity: .7;
  }

  div {
    display: flex;
    gap: .5rem;
  }
`;

export const LabelCard = styled.li`
  border: 1px solid #ddd;
  border-radius: .25rem;
  display: flex;
  align-items: center;
  padding: .25rem;
  gap: .25rem !important;
`;

export const LabelBadge = styled.span`
  background-color: ${props => props.color && props.color};
  height: 10px;
  width: 10px;
`;

export const UserBadge = styled.small`
  background-color: #777;
  border-radius: .25rem;
  color: #fff;
  padding: .25rem;
  height: fit-content;
`;

export const AttachedList = styled.div`
  padding-bottom: .75rem;

  h4 {
    padding-bottom: .35rem;
  }

  div {
    display: flex;
    align-items: center;
    gap: 1rem;
  }

  div p{
    color: #777;
    flex: 1;
    padding-bottom: 0;
  }

  ul {
    display: flex;
    flex-direction: row !important;
    align-items: center;
    overflow: hidden;
  }

  button {
    background-color: #28c98b;
    border-radius: .25rem;
    color: #fff;
    height: 29px;
    min-width: 28px;
    padding: .5rem;
  }

  button:hover {
    opacity: .7;
  }
`;

export const AttachedButtons = styled.div`
  padding-bottom: .75rem;

  h4 {
    padding-bottom: .5rem;
  }
`;
