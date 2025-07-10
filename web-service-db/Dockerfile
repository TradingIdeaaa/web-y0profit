FROM postgres:15-alpine
COPY init.sql /docker-entrypoint-initdb.d/
ENV POSTGRES_DB=crypto_db
ENV POSTGRES_USER=crypto_user
ENV POSTGRES_PASSWORD=crypto_pass
EXPOSE 5432