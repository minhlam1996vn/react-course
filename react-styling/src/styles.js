import styled from 'styled-components'

const spacing = '10px 20px'
export const Container = styled.div`
  display: flex;
  flex-direction: column;
`

export const Header = styled.div`
  padding: ${spacing};
  text-align: center;
  color: white;
`

export const LabelContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

export const Label = styled.div`
  padding: ${spacing};
  text-align: center;
`

export const FormContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

// const spacing = '10px 20px'
// const Container = { display: 'flex', flexDirection: 'column' }
// const Header = { padding: spacing, textAlign: 'center', color: 'white' }
// const LabelContainer = {
//   display: 'flex',
//   justifyContent: 'center',
//   alignItems: 'center',
// }
// const Label = { padding: spacing, textAlign: 'center' }
// const FormContainer = {
//   display: 'flex',
//   justifyContent: 'center',
//   alignItems: 'center',
// }

// export const styles = {
//   Container,
//   Header,
//   LabelContainer,
//   Label,
//   FormContainer,
// }
