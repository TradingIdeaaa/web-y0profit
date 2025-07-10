import { useState, useEffect } from 'react';

function App() {
  const [price, setPrice] = useState(null);

  useEffect(() => {
    fetch('/api/crypto/BTCUSD')
      .then((res) => res.json())
      .then((data) => setPrice(data.price))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <h1></h1>
    </div>
  );
}

export default App;