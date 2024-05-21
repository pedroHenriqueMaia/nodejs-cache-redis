export const getAllClients = async () => {
  const time = Math.random() * 10000
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(['Client1', 'Client2'])
    }, time)
  })
}
