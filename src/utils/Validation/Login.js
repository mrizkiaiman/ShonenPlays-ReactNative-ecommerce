import * as Yup from 'yup'

const loginValidation = Yup.object().shape({
  email: Yup.string().required().email().label('Email'),
  password: Yup.string().required().min(4).max(30).label('Password'),
})

export default {loginValidation}
