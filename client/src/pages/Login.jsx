import {Paper,Container} from "@mui/material"
import { useState } from "react"
const Login = () => {

  const [isLogin, setIsLogin] = useState(true);
  return (

    <Container component={'main'} maxWidth='sx'>

    <Paper
    elevation={3}
    sx={{
      padding: 4,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    }}
    >
      {isLogin ? <span>login</span> : <span>register</span>}
    </Paper>

    </Container>
  )
}

export default Login
