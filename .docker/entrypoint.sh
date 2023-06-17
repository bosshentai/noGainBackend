#!/bin/bash


yarn  
npx prisma generate 
npx prisma migrate dev

yarn prisma:db:seed

yarn start:dev