const app = require('./src/app');
const PORT = process.env.PORT;
// servem como portas disponíveis 3000, 3030, 6000, 6060, 8000, 8080

app.listen(PORT, () => console.log(`Servidor em funcionamento na porta ${PORT}`));