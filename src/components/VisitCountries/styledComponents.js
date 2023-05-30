import styled from 'styled-components'

export const VisitCountriesContainer = styled.div`
  height: 100vh;
  padding: 10px 20px;
  background-color: #161624;
  color: white;
`
export const Heading = styled.h1`
  margin-top: 0px;
`
export const Countries = styled.ul`
  padding-left: 0px;
  overflow-y: auto;
  height: ${props => (props.flag ? '30%' : '50%')};
  //   display: ${props => (props.flag ? 'flex' : 'block')};
  display: flex;
  flex-direction: ${props => (props.flag ? 'row' : 'column')};
  flex-wrap: ${props => (props.flag ? 'wrap' : 'nowrap')};
  gap: 5px;
`
export const Country = styled.li`
  list-style-type: none;
  display: flex;
  flex-direction: ${props => (props.flag ? 'column' : 'row')};
  align-items: center;
  justify-content: ${props => (props.flag ? 'flex-start' : 'space-between')};
  padding: 10px 20px;
  background-color: #1f1f2f;
`
export const Para = styled.p``
export const CustomButton = styled.button`
  background-color: ${props => (props.visit === 'visit' ? '#3b82f6' : 'null')};
  padding: 10px 20px;
  border-style: none;
  outline: none;
  color: white;
  height: 40px;
  margin-top: 0;
  margin-bottom: 0;
`
export const Image = styled.img`
  width: 300px;
  margin-bottom: 0;
`
export const CountryContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`
export const Name = styled.p`
  margin-top: 30px;
  height: 40px;
  font-size: 20px;
`
export const DeleteButton = styled(CustomButton)`
  background-color: transparent;
  border-style: solid;
  border-color: #f1f5f9;
  border-radius: 5px;
`
