FROM composer

WORKDIR /app

COPY composer.json .
COPY composer.lock .
RUN composer global require hirak/prestissimo --no-plugins --no-scripts
RUN composer install --prefer-dist --no-scripts --no-dev --no-autoloader && \
    rm -rf /root/.composer
COPY . .
RUN composer dump-autoload --no-scripts --no-dev --optimize

CMD php artisan serve --host 0.0.0.0