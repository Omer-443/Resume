import React from 'react';

export default function Footer() {
  return (
    <footer style={{
      background: '#0a0a0a',
      padding: '30px 0',
      textAlign: 'center',
      color: '#666',
      fontSize: '0.9rem'
    }}>
      © {new Date().getFullYear()} Omer Faisal · All rights reserved
    </footer>
  );
}
