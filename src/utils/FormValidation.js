import * as Yup from 'yup'

const Login = Yup.object().shape({
  email: Yup.string().required().email().label('Email'),
  password: Yup.string().required().min(4).max(30).label('Password'),
})

export default {Login}
