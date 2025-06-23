// import { styles } from './styles'
import {
  Container,
  FormContainer,
  Header,
  Label,
  LabelContainer,
} from './styles'

export default function AddTodo() {
  return (
    // <div style={styles.Container}>
    //   <h2 style={styles.Header}>TODO</h2>

    //   <div style={styles.LabelContainer}>
    //     <label style={styles.Label}>What needs to be Done?</label>
    //   </div>
    //   <div style={styles.FormContainer}>
    //     <form>
    //       <input type="text" />
    //       <button>Add</button>
    //     </form>
    //   </div>
    // </div>

    <Container>
      <Header>TODO</Header>

      <LabelContainer>
        <Label>What needs to be Done?</Label>
      </LabelContainer>
      <FormContainer>
        <form>
          <input type="text" />
          <button>Add</button>
        </form>
      </FormContainer>
    </Container>
  )
  // return (
  //   <div style={{ display: 'flex', flexDirection: 'column' }}>
  //     <h2 style={{ padding: '10px 20px', textAlign: 'center', color: 'white' }}>
  //       TODO
  //     </h2>

  //     <div
  //       style={{
  //         display: 'flex',
  //         justifyContent: 'center',
  //         alignItems: 'center',
  //       }}
  //     >
  //       <label style={{ padding: '10px 20px', textAlign: 'center' }}>
  //         What needs to be Done?
  //       </label>
  //     </div>
  //     <div
  //       style={{
  //         display: 'flex',
  //         justifyContent: 'center',
  //         alignItems: 'center',
  //       }}
  //     >
  //       <form>
  //         <input type="text" />
  //         <button>Add</button>
  //       </form>
  //     </div>
  //   </div>
  // )
}
