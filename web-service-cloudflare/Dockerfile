FROM cloudflare/cloudflared:latest
COPY config.yml /etc/cloudflared/config.yml
COPY cert.pem /etc/cloudflared/cert.pem
COPY 54a09257-3956-4ef3-8441-482db361f6e5.json /etc/cloudflared/54a09257-3956-4ef3-8441-482db361f6e5.json
CMD ["tunnel", "run", "crypto-analysis-tunnel"]