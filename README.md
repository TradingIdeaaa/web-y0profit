# Crypto Analysis Project

A full-stack web application for cryptocurrency analysis with real-time price data.

## 🚀 Features

- Real-time cryptocurrency price tracking
- Modern React frontend with responsive design
- Node.js backend API
- PostgreSQL database
- Cloudflare Tunnel for secure access
- Docker containerization

## 🏗️ Architecture

```
├── web-service-front/     # React frontend
├── web-service-bek/       # Node.js backend API
├── web-service-db/        # PostgreSQL database
└── web-service-cloudflare/ # Cloudflare Tunnel configuration
```

## 🛠️ Tech Stack

- **Frontend**: React, Vite
- **Backend**: Node.js, Express
- **Database**: PostgreSQL
- **Reverse Proxy**: Nginx
- **Tunnel**: Cloudflare Tunnel
- **Containerization**: Docker, Docker Compose

## 📋 Prerequisites

- Docker
- Docker Compose
- Cloudflare account with Zero Trust access

## 🚀 Quick Start

### 1. Clone the repository
```bash
git clone <repository-url>
cd Crypto-anayize
```

### 2. Configure Cloudflare Tunnel

1. Create a tunnel in Cloudflare Zero Trust Dashboard
2. Download the tunnel credentials file
3. Place the credentials file in `web-service-cloudflare/`
4. Update `web-service-cloudflare/config.yml` with your domain names

### 3. Start the application
```bash
docker-compose up --build -d
```

### 4. Access the application

- **Frontend**: https://y0profit.xyz
- **API**: https://api.y0profit.xyz

## 📁 Project Structure

```
Crypto-anayize/
├── docker-compose.yml
├── .gitignore
├── README.md
├── web-service-front/
│   ├── src/
│   │   ├── App.jsx
│   │   └── main.jsx
│   ├── nginx.conf
│   └── Dockerfile
├── web-service-bek/
│   ├── index.js
│   └── Dockerfile
├── web-service-db/
│   ├── init.sql
│   └── Dockerfile
└── web-service-cloudflare/
    ├── config.yml
    ├── cert.pem
    ├── 54a09257-3956-4ef3-8441-482db361f6e5.json
    └── Dockerfile
```

## 🔧 Configuration

### Frontend Configuration
- **File**: `web-service-front/nginx.conf`
- **Port**: 80 (internal), 8080 (external)
- **Domains**: y0profit.xyz, www.y0profit.xyz, frontend.y0profit.xyz

### Backend Configuration
- **File**: `web-service-bek/index.js`
- **Port**: 8000 (internal), 8001 (external)
- **API Endpoints**: `/api/crypto/BTCUSD`

### Database Configuration
- **File**: `web-service-db/init.sql`
- **Database**: crypto_db
- **User**: crypto_user

### Cloudflare Tunnel Configuration
- **File**: `web-service-cloudflare/config.yml`
- **Tunnel**: crypto-analysis-tunnel
- **Domains**: y0profit.xyz, api.y0profit.xyz

## 🐳 Docker Commands

### Start all services
```bash
docker-compose up -d
```

### Rebuild and start
```bash
docker-compose up --build -d
```

### View logs
```bash
docker-compose logs -f
```

### Stop all services
```bash
docker-compose down
```

### Restart specific service
```bash
docker-compose restart frontend
```

## 🔍 Troubleshooting

### Common Issues

1. **Error 521**: Cloudflare can't reach your server
   - Check if tunnel is running: `docker-compose logs cloudflared`
   - Verify DNS records in Cloudflare Dashboard
   - Ensure tunnel credentials are correct

2. **Error 404**: Page not found
   - Check nginx configuration
   - Verify frontend container is running
   - Check if index.html exists in build

3. **API not working**: 
   - Check backend container logs: `docker-compose logs backend`
   - Verify API endpoint is accessible locally
   - Check nginx proxy configuration

### Useful Commands

```bash
# Check container status
docker-compose ps

# View specific service logs
docker-compose logs frontend
docker-compose logs backend
docker-compose logs cloudflared

# Access container shell
docker-compose exec frontend sh
docker-compose exec backend sh

# Test API locally
curl http://localhost:8001/api/crypto/BTCUSD
```

## 🔐 Security

- All sensitive files (credentials, certificates) are in `.gitignore`
- Cloudflare Tunnel provides secure access
- Database credentials are environment variables
- HTTPS enforced through Cloudflare

## 📝 Development

### Frontend Development
```bash
cd web-service-front
npm install
npm run dev
```

### Backend Development
```bash
cd web-service-bek
npm install
npm start
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 📞 Support

For support and questions, please open an issue in the repository. 