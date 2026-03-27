FROM httpd:2.4-alpine

# Copia os ficheiros
COPY ./ /usr/local/apache2/htdocs/

# 1. Ativa o módulo remoteip
# 2. Adiciona as regras de proxy no ficheiro de configuração
RUN sed -i '/LoadModule remoteip_module/s/^#//g' /usr/local/apache2/conf/httpd.conf && \
    echo "RemoteIPHeader X-Forwarded-For" >> /usr/local/apache2/conf/httpd.conf && \
    echo "RemoteIPInternalProxy 192.168.111.253" >> /usr/local/apache2/conf/httpd.conf