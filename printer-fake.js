// printer-fake.js
import net from 'net';

const PORT = 9100;

// Create a TCP server that pretends to be a printer
const server = net.createServer((socket) => {
  console.log('🖨️ Fake ESC/POS printer connected');

  socket.on('data', (data) => {
    // Print raw ESC/POS commands as hex
    console.log('Received data:', data.toString('hex'));

    // Optional: convert readable text for simple commands
    console.log('Readable (if ASCII):', data.toString('ascii'));
  });

  socket.on('end', () => {
    console.log('🖨️ Client disconnected');
  });

  socket.on('error', (err) => {
    console.error('❌ Socket error:', err);
  });
});

server.listen(PORT, () => {
  console.log(`🖨️ Fake ESC/POS printer listening on port ${PORT}`);
});