export default (value) => {
  let isTrue = false
  const emailRegex = /^[a-zA-Z0-9_\.]+@+[a-zA-Z0-9_\.]+(\.[a-zA-Z0-9_\.]+)+$/

  if (value.length > 0) {
    if (emailRegex.test(value)) isTrue = true
  } else isTrue = true

  return isTrue
}
