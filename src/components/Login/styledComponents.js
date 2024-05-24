import styled from 'styled-components'

export const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`
export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  box-shadow: 0 2.8px 2.2px rgba(0, 0, 0, 0.12);
  width: 40vw;
  padding: 25px;
  border-radius: 10px;
`
export const Logo = styled.img`
  display: flex;
  align-self: center;
  height: 5vh;
  margin: 20px;
`
export const InputContainer = styled.div`
  width: 100%;
  margin-top: 20px;
`
export const LoginButton = styled.button`
  font-family: 'Roboto';
  background-color: #4f46e5;
  color: #ffffff;
  margin-top: 20px;
  border: none;
  border-radius: 5px;
  font-size: 15px;
  height: 30px;
`
export const SubmitError = styled.p`
  font-family: 'Roboto';
  font-size: 14px;
  color: #ff0b37;
`
export const Label = styled.label`
  font-family: 'Roboto';
  font-size: 13px;
  color: #475569;
  font-weight: 600;
`
export const Input = styled.input`
  font-family: 'Roboto';
  font-size: 15px;
  color: #475569;
  width: 100%;
  border: 1px solid #94a3b8;
  border-radius: 3px;
  margin-top: 5px;
  padding: 10px;
  outline: none;
`
export const CheckboxContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 13px;
`
export const Checkbox = styled.input`
  height: 15px;
  width: 15px;
  margin-right: 5px;
`
export const ShowPassword = styled.label`
  font-family: 'Roboto';
  font-size: 15px;
  color: #1e293b;
`
