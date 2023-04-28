export function getDashboardData(userId){
  return fetch (`http://localhost:3000/api/overview/${userId}`, {
    method: 'GET'
  })
    .then(response => response.json())
}

export function getTransactionsData(portfolioId){
  return fetch (`http://localhost:3000/api/transaction/${portfolioId}` ,{
    method: 'GET'
  })
    .then(response => {
      console.log(response); 
      return response.json();
    })
}

export function writeTransaction(portfolio_id, transactionData) {
  return fetch(`http://localhost:3000/api/transaction/${portfolio_id}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(transactionData)
  })
  .then(response => {
    console.log(response);
    return response.json();
  })
  .catch(error => {
    console.error(error);
  });
}
