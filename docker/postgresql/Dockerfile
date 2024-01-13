FROM postgres:16.0

ENV LANG cs_CZ.utf8

RUN locale-gen cs_CZ.utf8
RUN update-locale
RUN localedef -i cs_CZ -c -f UTF-8 -A /usr/share/locale/locale.alias cs_CZ.UTF-8
