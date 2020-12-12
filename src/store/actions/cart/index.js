export function updateCartState(updatedCart) {
  return {
    type: 'UPDATE_STATE',
    payload: updatedCart,
  }
}
