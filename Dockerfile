FROM python:latest
WORKDIR /app
COPY ./requirements.txt /app
RUN pip install --no-cache-dir --upgrade -r requirements.txt
COPY ./src /app/src
COPY ./static /app/static
COPY ./templates /app/templates
WORKDIR /app/src