#!/bin/bash

# Definim variabilele pentru a păstra scriptul curat și ușor de modificat
IMAGE_NAME="painealuidumnezeu-website"
CONTAINER_NAME="painealuidumnezeu-container"
PORT="3001:3001"

echo "1. Căutăm și ștergem containerul vechi (dacă există)..."
# 'docker rm -f' oprește forțat și șterge containerul. 
# '2>/dev/null || true' previne oprirea scriptului cu o eroare dacă este prima dată când îl rulezi și containerul nu există încă.
docker rm -f $CONTAINER_NAME 2>/dev/null || true

echo "2. Construim imaginea de Docker..."
# Flag-ul '-t' este obligatoriu pentru a oferi un nume (tag) imaginii.
docker build -t $IMAGE_NAME .

echo "3. Pornim noul container..."
# Flag-uri folosite:
# -d     : Rulează containerul în fundal (detached mode) ca să nu îți blocheze terminalul.
# -p     : Mapează portul host-ului la portul containerului.
# --name : Atribuie un nume specific containerului pentru a-l găsi ușor la următoarea rulare.
docker run -d -p $PORT --name $CONTAINER_NAME $IMAGE_NAME

echo "Gata! Aplicația rulează pe portul 3001."
