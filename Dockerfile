FROM ubuntu:18.04

WORKDIR /app

RUN apt update -y && \
    apt-get install php7.2-common php7.2-cli php7.2-gd php7.2-mysql php7.2-curl php7.2-intl php7.2-mbstring php7.2-bcmath php7.2-imap php7.2-xml php7.2-zip -qq && \
    php -r "copy('https://getcomposer.org/installer', 'composer-setup.php');" && \
    php -r "if (hash_file('sha384', 'composer-setup.php') === '48e3236262b34d30969dca3c37281b3b4bbe3221bda826ac6a9a62d6444cdb0dcd0615698a5cbe587c3f0fe57a54d8f5') { echo 'Installer verified'; } else { echo 'Installer corrupt'; unlink('composer-setup.php'); } echo PHP_EOL;" && \
    php composer-setup.php && \
    php -r "unlink('composer-setup.php');" && \
    mv composer.phar /usr/local/bin/composer

COPY composer.json .
COPY composer.lock .
#RUN composer global require hirak/prestissimo --no-plugins --no-scripts
COPY . .
RUN composer install --prefer-dist --no-scripts --no-dev --no-autoloader && \
    rm -rf /root/.composer
RUN composer dump-autoload --no-scripts --no-dev --optimize

CMD php artisan serve --host 0.0.0.0